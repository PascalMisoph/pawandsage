#!/usr/bin/env node
// Ping IndexNow (Bing, Yandex, Seznam, Naver, ...) with changed URLs after a deploy.
//
// Usage:
//   node scripts/indexnow.mjs                       # submit every URL in the live sitemap
//   node scripts/indexnow.mjs /blog/foo /blog/bar   # submit only these paths/URLs
//   node scripts/indexnow.mjs --dry-run ...         # print the payload, send nothing
//
// The key file lives at public/<KEY>.txt and is served at https://www.pawandsage.com/<KEY>.txt
const HOST = 'www.pawandsage.com';
const ORIGIN = `https://${HOST}`;
const KEY = '5da59439610510658a62d332b3bf6a67';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const inputs = args.filter((arg) => arg !== '--dry-run');

async function sitemapUrls() {
  const index = await (await fetch(`${ORIGIN}/sitemap-index.xml`)).text();
  const sitemaps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const sitemap of sitemaps) {
    const xml = await (await fetch(sitemap)).text();
    urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  return urls;
}

const toUrl = (value) => (value.startsWith('http') ? value : `${ORIGIN}${value.startsWith('/') ? '' : '/'}${value}`);

const urlList = [...new Set((inputs.length ? inputs.map(toUrl) : await sitemapUrls()))].filter((url) =>
  url.startsWith(ORIGIN),
);

if (urlList.length === 0) {
  console.error('No URLs to submit.');
  process.exit(1);
}

const payload = { host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList };

if (dryRun) {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});
const body = await response.text();
console.log(`IndexNow: HTTP ${response.status} ${response.statusText} for ${urlList.length} URL(s)`);
if (body) console.log(body.slice(0, 500));
// 200 = OK, 202 = accepted (key validation pending). Anything else is a failure.
process.exit(response.status === 200 || response.status === 202 ? 0 : 1);
