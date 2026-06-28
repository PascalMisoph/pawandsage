import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();

const DEFAULT_CONFIG = {
  timezone: 'Europe/Berlin',
  queuePath: 'PawAndSage-Vault/03-Pinterest/automation/pinterest-queue.json',
  briefGlobDir: 'PawAndSage-Vault/03-Pinterest',
  analyticsDir: 'PawAndSage-Vault/03-Pinterest/analytics',
  pinIdMapPath: 'PawAndSage-Vault/03-Pinterest/analytics/pin-id-map.md',
  // Optional manual map for legacy pins that predate the queue. Keyed by pinId
  // or normalized title → { article, articleNumber, pinType, layout, pinNumber }.
  overridesPath: 'PawAndSage-Vault/03-Pinterest/analytics/pin-id-overrides.json',
  boardMapPath: 'PawAndSage-Vault/03-Pinterest/automation/board-map.local.json',
  blogPrefix: 'https://www.pawandsage.com/blog/',
};

const PINTEREST_API_BASE = 'https://api.pinterest.com/v5';

// Pinterest analytics metric names we request and carry through the pipeline.
const METRIC_TYPES = ['IMPRESSION', 'PIN_CLICK', 'OUTBOUND_CLICK', 'SAVE', 'SAVE_RATE'];

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});

async function main() {
  loadEnvFile('.env.pinterest.local');
  const [command, ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);
  const config = loadConfig(args.config);

  switch (command) {
    case 'fetch':
      return fetchCommand(config, args);
    default:
      printHelp();
      if (command) process.exitCode = 1;
  }
}

async function fetchCommand(config, args) {
  const { start, end, period } = resolvePeriod(args);
  console.log(`Pinterest analytics fetch · period ${period} (${start} → ${end})`);

  const token = await ensureAccessToken();

  // 1) Pull every pin, then keep only ones we created (repins return 403 on analytics).
  const allPins = await listAllPins(token);
  const pins = allPins.filter((p) => p.is_owner !== false);
  console.log(`Pins returned: ${allPins.length} · own (analytics-eligible): ${pins.length}`);

  // 2) Build deterministic lookup: pin title/link → article + pin-type + layout.
  const lookup = buildLookup(config);
  console.log(`Brief/queue lookup entries: titles=${lookup.byTitle.size} links=${lookup.byLink.size} overrides=${lookup.overrides.size}`);

  // Resolve board ids → human names so the board aggregation is readable.
  const boardNameById = await loadBoardNames(token, config);

  // 3) Fetch per-pin analytics for the window and join with the lookup.
  const throttleMs = Number(args.throttle ?? config.analyticsThrottleMs ?? 350);
  const rows = [];
  let mapped = 0;
  let done = 0;
  for (const pin of pins) {
    const metrics = await fetchPinAnalytics(token, pin.id, start, end);
    const match = matchPin(pin, lookup);
    if (match.mapped) mapped += 1;
    done += 1;
    if (done % 25 === 0) console.log(`  …${done}/${pins.length} pins fetched`);
    if (throttleMs > 0 && done < pins.length) await sleep(throttleMs);

    const impressions = metrics.IMPRESSION || 0;
    const outbound = metrics.OUTBOUND_CLICK || 0;
    const pinClicks = metrics.PIN_CLICK || 0;
    const saves = metrics.SAVE || 0;

    rows.push({
      pinId: pin.id,
      pinUrl: `https://www.pinterest.com/pin/${pin.id}/`,
      createdAt: pin.created_at,
      title: pin.title || '',
      link: pin.link || '',
      board: match.boardName || boardNameById[pin.board_id] || pin.board_id || '',
      internalId: match.internalId || '',
      article: match.article || '',
      articleNumber: match.articleNumber || '',
      pinNumber: match.pinNumber || '',
      pinType: match.pinType || '',
      layout: match.layout || '',
      mapped: match.mapped,
      impressions,
      pinClicks,
      outboundClicks: outbound,
      saves,
      // Derived rates — computed here so the agent never has to do arithmetic.
      outboundCtr: ratio(outbound, impressions),
      pinClickRate: ratio(pinClicks, impressions),
      saveRate: ratio(saves, impressions),
    });
  }

  rows.sort((a, b) => b.impressions - a.impressions);
  console.log(`Pins mapped to a brief: ${mapped}/${rows.length}`);

  // 4) Write the snapshot bundle (machine + human + agent-facing).
  const outDir = resolveProject(path.join(config.analyticsDir, period));
  fs.mkdirSync(outDir, { recursive: true });

  const snapshot = {
    generatedAt: new Date().toISOString(),
    period,
    startDate: start,
    endDate: end,
    metricTypes: METRIC_TYPES,
    totals: aggregate(rows),
    pins: rows,
  };
  writeJson(path.join(outDir, 'snapshot.json'), snapshot);
  writeCsv(path.join(outDir, 'pins.csv'), rows);
  fs.writeFileSync(path.join(outDir, 'facts.md'), buildFacts(snapshot));

  console.log(`\nSnapshot written to ${path.relative(repoRoot, outDir)}`);
  console.log('  snapshot.json  (full structured data)');
  console.log('  pins.csv       (one row per pin)');
  console.log('  facts.md       (ranking tables for the analysis agent)');
  console.log(`\nTotals: ${snapshot.totals.impressions} impr · ${snapshot.totals.outboundClicks} outbound · ${snapshot.totals.saves} saves`);
  console.log(`Next: run the analysis agent with ${path.join(config.analyticsDir, 'ANALYSIS-PLAYBOOK.md')}`);
}

// ── Pinterest API ────────────────────────────────────────────────────────────

async function listAllPins(token) {
  const pins = [];
  let bookmark = '';
  do {
    const url = new URL(`${PINTEREST_API_BASE}/pins`);
    url.searchParams.set('page_size', '100');
    if (bookmark) url.searchParams.set('bookmark', bookmark);
    const { status, body } = await apiGet(url.toString(), token);
    if (status !== 200) throw new Error(`GET /pins failed ${status}: ${JSON.stringify(body)}`);
    pins.push(...(body.items || []));
    bookmark = body.bookmark || '';
  } while (bookmark);
  return pins;
}

async function fetchPinAnalytics(token, pinId, start, end) {
  const url = new URL(`${PINTEREST_API_BASE}/pins/${pinId}/analytics`);
  url.searchParams.set('start_date', start);
  url.searchParams.set('end_date', end);
  url.searchParams.set('metric_types', METRIC_TYPES.join(','));
  url.searchParams.set('app_types', 'ALL');

  // Retry on 429 with backoff that honours Retry-After when Pinterest sends it.
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const { status, body, headers } = await apiGet(url.toString(), token);
    if (status === 200) return body?.all?.summary_metrics || {};
    if (status === 404 || status === 400 || status === 403) return {}; // new / repinned / not analytics-eligible
    if (status === 429) {
      const retryAfter = Number(headers.get('retry-after'));
      const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : Math.min(2000 * 2 ** attempt, 30000);
      console.log(`  rate limited on ${pinId}; waiting ${Math.round(waitMs / 1000)}s (attempt ${attempt + 1}/6)…`);
      await sleep(waitMs);
      continue;
    }
    throw new Error(`analytics ${pinId} failed ${status}: ${JSON.stringify(body)}`);
  }
  throw new Error(`analytics ${pinId} still rate limited after retries`);
}

async function apiGet(url, token) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const text = await res.text();
  let body;
  try { body = text ? JSON.parse(text) : {}; } catch { body = { raw: text }; }
  return { status: res.status, body, headers: res.headers };
}

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

async function ensureAccessToken() {
  let token = process.env.PINTEREST_ACCESS_TOKEN;
  if (!token || token === 'replace_me') {
    throw new Error('PINTEREST_ACCESS_TOKEN missing. Run: npm run pinterest:oauth');
  }
  // Cheap liveness probe; refresh once on 401.
  const probe = await apiGet(`${PINTEREST_API_BASE}/pins?page_size=1`, token);
  if (probe.status === 401) {
    console.log('Access token rejected (401) — refreshing via refresh token…');
    token = await refreshAccessToken();
  }
  return token;
}

async function refreshAccessToken() {
  const clientId = requiredEnv('PINTEREST_CLIENT_ID');
  const clientSecret = requiredEnv('PINTEREST_CLIENT_SECRET');
  const refreshToken = requiredEnv('PINTEREST_REFRESH_TOKEN');
  const basic = Buffer.from(`${clientId}:${clientSecret}`, 'utf8').toString('base64');
  const form = new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refreshToken });
  const res = await fetch(`${PINTEREST_API_BASE}/oauth/token`, {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form,
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`Token refresh failed ${res.status}: ${JSON.stringify(body)}`);
  process.env.PINTEREST_ACCESS_TOKEN = body.access_token;
  persistEnvValue('PINTEREST_ACCESS_TOKEN', body.access_token);
  console.log('Access token refreshed and written to .env.pinterest.local');
  return body.access_token;
}

// ── Lookup: pin → article / pin-type / layout ────────────────────────────────

function buildLookup(config) {
  const byTitle = new Map();
  const byLink = new Map();

  // Queue gives article + pin number; briefs give the human-readable pin-type + layout.
  const queue = readQueue(config);
  for (const item of queue) {
    const entry = {
      internalId: item.id,
      article: item.articleTitle || '',
      articleNumber: item.articleNumber || '',
      pinNumber: item.pinNumber || '',
      boardName: item.boardName || '',
    };
    if (item.title) byTitle.set(normTitle(item.title), entry);
    if (item.link) {
      if (!byLink.has(normLink(item.link))) byLink.set(normLink(item.link), { article: entry.article, articleNumber: entry.articleNumber });
    }
  }

  // Parse pin-type + layout from every brief header: "### E1 — Problem hook · Board · … · [Layout]".
  const typeLayout = parseBriefHeaders(config);
  for (const [title, info] of typeLayout) {
    const existing = byTitle.get(title) || {};
    byTitle.set(title, { ...existing, pinType: info.pinType, layout: info.layout });
  }

  // Manual overrides for legacy pins (keyed by pinId or normalized title).
  const overrides = new Map();
  const overridesPath = resolveProject(config.overridesPath);
  if (fs.existsSync(overridesPath)) {
    const raw = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));
    for (const [key, value] of Object.entries(raw)) {
      if (key.startsWith('_')) continue; // skip comment/meta keys
      overrides.set(/^\d{6,}$/u.test(key) ? key : normTitle(key), value);
    }
  }

  return { byTitle, byLink, overrides };
}

async function loadBoardNames(token, config) {
  const map = {};
  // Prefer the locally cached board-map (name → id) to avoid an API call.
  const boardMapPath = resolveProject(config.boardMapPath);
  if (fs.existsSync(boardMapPath)) {
    const local = JSON.parse(fs.readFileSync(boardMapPath, 'utf8'));
    for (const [name, id] of Object.entries(local)) if (id && id !== 'REPLACE_WITH_PINTEREST_BOARD_ID') map[id] = name;
  }
  // Fill any gaps from the live boards list.
  try {
    let bookmark = '';
    do {
      const url = new URL(`${PINTEREST_API_BASE}/boards`);
      url.searchParams.set('page_size', '100');
      if (bookmark) url.searchParams.set('bookmark', bookmark);
      const { status, body } = await apiGet(url.toString(), token);
      if (status !== 200) break;
      for (const b of body.items || []) if (b.id && b.name) map[b.id] = b.name;
      bookmark = body.bookmark || '';
    } while (bookmark);
  } catch { /* board names are cosmetic; ignore failures */ }
  return map;
}

function parseBriefHeaders(config) {
  const map = new Map();
  const dir = resolveProject(config.briefGlobDir);
  if (!fs.existsSync(dir)) return map;
  const briefs = fs.readdirSync(dir).filter((f) => /^Backlog-Pin-Briefs-.*\.md$/u.test(f));
  for (const file of briefs) {
    const md = fs.readFileSync(path.join(dir, file), 'utf8');
    // Pin block: header line + following "**Title:** ..." line.
    const blocks = md.split(/\n(?=### [E-L][1-5] — )/u);
    for (const block of blocks) {
      const header = block.match(/^### [E-L][1-5] — ([^\n]+)/u);
      if (!header) continue;
      const headerRest = header[1];
      const pinType = headerRest.split('·')[0].trim();
      const layoutMatch = headerRest.match(/\[([^\]]+)\]\s*$/u);
      const layout = layoutMatch ? layoutMatch[1].trim() : '';
      const titleMatch = block.match(/^\*\*Title:\*\*\s*(.+)$/mu);
      if (!titleMatch) continue;
      map.set(normTitle(titleMatch[1]), { pinType, layout });
    }
  }
  return map;
}

function matchPin(pin, lookup) {
  const override = lookup.overrides.get(pin.id) || (pin.title ? lookup.overrides.get(normTitle(pin.title)) : undefined);
  const t = pin.title ? lookup.byTitle.get(normTitle(pin.title)) : undefined;
  if (t || override) {
    const base = t || {};
    return {
      mapped: true,
      internalId: base.internalId || '',
      article: base.article || '',
      articleNumber: base.articleNumber || '',
      pinNumber: base.pinNumber || '',
      pinType: base.pinType || '',
      layout: base.layout || '',
      boardName: base.boardName || '',
      ...(override || {}), // manual map wins over inferred fields
    };
  }
  const l = pin.link ? lookup.byLink.get(normLink(pin.link)) : undefined;
  if (l) {
    return { mapped: false, article: l.article, articleNumber: l.articleNumber };
  }
  return { mapped: false };
}

// ── Aggregation + reporting ───────────────────────────────────────────────────

function aggregate(rows) {
  const sum = (key) => rows.reduce((acc, r) => acc + (r[key] || 0), 0);
  const impressions = sum('impressions');
  const outbound = sum('outboundClicks');
  const saves = sum('saves');
  const pinClicks = sum('pinClicks');
  return {
    pins: rows.length,
    impressions,
    pinClicks,
    outboundClicks: outbound,
    saves,
    outboundCtr: ratio(outbound, impressions),
    saveRate: ratio(saves, impressions),
  };
}

function groupBy(rows, key) {
  const groups = new Map();
  for (const r of rows) {
    const k = r[key] || '(unmapped)';
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(r);
  }
  const out = [];
  for (const [k, group] of groups) {
    out.push({ key: k, n: group.length, ...aggregate(group) });
  }
  return out.sort((a, b) => b.impressions - a.impressions);
}

function buildFacts(snapshot) {
  const { period, startDate, endDate, totals, pins } = snapshot;
  const mapped = pins.filter((p) => p.mapped);
  const pct = (n) => `${(n * 100).toFixed(1)}%`;

  const lines = [];
  lines.push(`# 📊 Pinterest Facts — ${period}`);
  lines.push('');
  lines.push(`**Zeitraum:** ${startDate} → ${endDate}  ·  **Erzeugt:** ${snapshot.generatedAt}`);
  lines.push(`**Pins gesamt:** ${totals.pins} (davon ${mapped.length} einem Brief zugeordnet)`);
  lines.push('');
  lines.push(`**Konto-Summe:** ${totals.impressions} Impressions · ${totals.outboundClicks} Outbound (CTR ${pct(totals.outboundCtr)}) · ${totals.saves} Saves (Rate ${pct(totals.saveRate)})`);
  lines.push('');
  lines.push('> Diese Datei ist deterministisch aus snapshot.json erzeugt. Nicht von Hand editieren — sie wird bei jedem Fetch überschrieben.');
  lines.push('');

  lines.push('## Top 15 Pins nach Impressions');
  lines.push(pinTable(pins.slice(0, 15)));
  lines.push('');

  const byOutbound = [...pins].filter((p) => p.impressions >= 10).sort((a, b) => b.outboundCtr - a.outboundCtr);
  lines.push('## Top 15 Pins nach Outbound-CTR (min. 10 Impressions)');
  lines.push(pinTable(byOutbound.slice(0, 15)));
  lines.push('');

  const bySaves = [...pins].sort((a, b) => b.saves - a.saves);
  lines.push('## Top 15 Pins nach Saves');
  lines.push(pinTable(bySaves.slice(0, 15)));
  lines.push('');

  lines.push('## Aggregiert nach Pin-Typ');
  lines.push(groupTable(groupBy(mapped, 'pinType')));
  lines.push('');
  lines.push('## Aggregiert nach Layout');
  lines.push(groupTable(groupBy(mapped, 'layout')));
  lines.push('');
  lines.push('## Aggregiert nach Artikel');
  lines.push(groupTable(groupBy(mapped, 'article')));
  lines.push('');
  lines.push('## Aggregiert nach Board');
  lines.push(groupTable(groupBy(pins, 'board')));
  lines.push('');

  const unmapped = pins.filter((p) => !p.mapped && p.impressions > 0);
  if (unmapped.length) {
    lines.push(`## ⚠️ Nicht zugeordnete Pins mit Daten (${unmapped.length})`);
    lines.push('Diese Pins matchen keinen Brief-Titel — meist Legacy-/Altpins. Bei Bedarf in pin-id-map.md ergänzen.');
    lines.push(pinTable(unmapped.slice(0, 20)));
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function pinTable(rows) {
  const head = '| Pin | Typ | Layout | Artikel | Impr | Saves | SaveRate | Outbound | CTR |\n|---|---|---|---|--:|--:|--:|--:|--:|';
  const body = rows.map((r) => `| ${trunc(r.title, 38)} | ${r.pinType || '—'} | ${r.layout || '—'} | ${r.article ? '#' + (r.articleNumber || '?') : '—'} | ${r.impressions} | ${r.saves} | ${pctCell(r.saveRate)} | ${r.outboundClicks} | ${pctCell(r.outboundCtr)} |`).join('\n');
  return `${head}\n${body || '| _keine_ |'}`;
}

function groupTable(groups) {
  const head = '| Gruppe | Pins | Impr | Saves | SaveRate | Outbound | CTR |\n|---|--:|--:|--:|--:|--:|--:|';
  const body = groups.map((g) => `| ${g.key} | ${g.n} | ${g.impressions} | ${g.saves} | ${pctCell(g.saveRate)} | ${g.outboundClicks} | ${pctCell(g.outboundCtr)} |`).join('\n');
  return `${head}\n${body}`;
}

// ── small helpers ─────────────────────────────────────────────────────────────

function ratio(num, den) { return den > 0 ? num / den : 0; }
function pctCell(x) { return `${(x * 100).toFixed(1)}%`; }
function trunc(s, n) { s = String(s || '').replace(/\|/g, '\\|'); return s.length > n ? `${s.slice(0, n - 1)}…` : s; }
function normTitle(s) { return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim(); }
function normLink(s) { return String(s || '').toLowerCase().replace(/[#?].*$/, '').replace(/\/$/, ''); }

function resolvePeriod(args) {
  const today = new Date();
  const end = args.end || isoDate(addDays(today, -1));
  const start = args.start || isoDate(addDays(new Date(`${end}T00:00:00Z`), -29));
  const period = args.period || `${start}_to_${end}`;
  return { start, end, period };
}

function addDays(date, days) { const d = new Date(date); d.setUTCDate(d.getUTCDate() + days); return d; }
function isoDate(date) { return date.toISOString().slice(0, 10); }

function writeJson(file, data) { fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`); }

function writeCsv(file, rows) {
  const cols = ['pinId', 'title', 'link', 'board', 'internalId', 'article', 'articleNumber', 'pinNumber', 'pinType', 'layout', 'mapped', 'impressions', 'pinClicks', 'outboundClicks', 'saves', 'outboundCtr', 'pinClickRate', 'saveRate'];
  const esc = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
  const lines = [cols.join(',')];
  for (const r of rows) lines.push(cols.map((c) => esc(r[c])).join(','));
  fs.writeFileSync(file, `${lines.join('\n')}\n`);
}

function readQueue(config) {
  const queuePath = resolveProject(config.queuePath);
  if (!fs.existsSync(queuePath)) {
    console.warn(`WARN queue missing at ${config.queuePath}; pins will stay unmapped.`);
    return [];
  }
  return JSON.parse(fs.readFileSync(queuePath, 'utf8'));
}

function loadConfig(configPath) {
  const resolved = resolveProject(configPath || 'PawAndSage-Vault/03-Pinterest/automation/pinterest-automation.config.json');
  if (!fs.existsSync(resolved)) return DEFAULT_CONFIG;
  return { ...DEFAULT_CONFIG, ...JSON.parse(fs.readFileSync(resolved, 'utf8')) };
}

function loadEnvFile(envPath) {
  const resolved = resolveProject(envPath);
  if (!fs.existsSync(resolved)) return;
  for (const line of fs.readFileSync(resolved, 'utf8').split(/\r?\n/u)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

function persistEnvValue(key, value) {
  const envPath = resolveProject('.env.pinterest.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/u);
  let found = false;
  const next = lines.map((line) => {
    if (line.startsWith(`${key}=`)) { found = true; return `${key}=${value}`; }
    return line;
  });
  if (!found) next.push(`${key}=${value}`);
  fs.writeFileSync(envPath, next.join('\n'));
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value || value === 'replace_me') throw new Error(`${name} is not set in .env.pinterest.local`);
  return value;
}

function parseArgs(args) {
  const parsed = {};
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2);
    const next = args[i + 1];
    if (!next || next.startsWith('--')) parsed[key] = true;
    else { parsed[key] = next; i += 1; }
  }
  return parsed;
}

function resolveProject(relativeOrAbsolute) {
  return path.isAbsolute(relativeOrAbsolute) ? relativeOrAbsolute : path.join(repoRoot, relativeOrAbsolute);
}

function printHelp() {
  console.log(`Pinterest analytics

Commands:
  fetch   Pull per-pin analytics from the Pinterest v5 API, join with the pin
          briefs, and write a snapshot bundle into analytics/<period>/

Options:
  --start YYYY-MM-DD   Window start (default: end - 29 days)
  --end   YYYY-MM-DD   Window end   (default: yesterday)
  --period LABEL       Output folder name (default: <start>_to_<end>)
  --config PATH        Override automation config path

Example:
  node scripts/pinterest-analytics.mjs fetch --start 2026-05-29 --end 2026-06-27
`);
}
