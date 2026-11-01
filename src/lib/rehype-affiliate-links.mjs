// Affiliate link hygiene + click tracking for Markdown/MDX content.
//
// For every affiliate link (Amazon and the affiliate networks below) this plugin:
//   - sets rel="sponsored nofollow noopener" (keeping any extra tokens) and target="_blank"
//   - adds Umami Cloud event attributes:
//       data-umami-event="affiliate-click"
//       data-umami-event-merchant  (amazon / impact / awin / skimlinks / ...)
//       data-umami-event-article   (article slug)
//       data-umami-event-position  (inline-N or productcard-N)
//       data-umami-event-product   (link text / product name, when available)
// MDX <ProductCard> components get `position` and `article` props injected so
// their CTA buttons are tracked the same way. Hrefs and link text never change.

const MERCHANTS = [
  [/(^|\.)amazon\.[a-z.]+$|(^|\.)amzn\.to$/i, 'amazon'],
  [/(^|\.)(sjv\.io|pxf\.io|7eer\.net|ojrq\.net|evyy\.net|impact\.com|impactradius\.com)$/i, 'impact'],
  [/(^|\.)(awin1\.com|awin\.com)$/i, 'awin'],
  [/(^|\.)(skimresources\.com|redirectingat\.com|skimlinks\.com|sovrn\.com)$/i, 'skimlinks'],
  [/(^|\.)(shareasale\.com)$/i, 'shareasale'],
  [/(^|\.)(chewy\.com)$/i, 'chewy'],
];
const AFFILIATE_ONLY_WITH_TAG = new Set(['chewy']);
const REQUIRED_REL = ['sponsored', 'nofollow', 'noopener'];

export function merchantFor(href) {
  let url;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(url.protocol)) return null;
  for (const [pattern, name] of MERCHANTS) {
    if (pattern.test(url.hostname)) {
      if (AFFILIATE_ONLY_WITH_TAG.has(name) && !url.search) return null;
      return name;
    }
  }
  return null;
}

function mergeRel(existing) {
  const rel = [...REQUIRED_REL];
  for (const token of existing) {
    if (token && !rel.includes(token)) rel.push(token);
  }
  return rel;
}

const decodeEntities = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&#x26;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const cleanText = (value) => decodeEntities(String(value)).replace(/\s+/g, ' ').trim().slice(0, 120);

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

function slugFromFile(file) {
  const path = file?.path ?? file?.history?.[file.history.length - 1] ?? '';
  const match = String(path).match(/([^/\\]+)\.(md|mdx|markdown)$/i);
  return match ? match[1] : 'unknown';
}

function trackingAttrs(state, { merchant, isCard, product }) {
  const position = isCard ? `productcard-${++state.cards}` : `inline-${++state.inline}`;
  const attrs = {
    'data-umami-event': 'affiliate-click',
    'data-umami-event-merchant': merchant,
    'data-umami-event-article': state.article,
    'data-umami-event-position': position,
  };
  if (product) attrs['data-umami-event-product'] = cleanText(product);
  return attrs;
}

const toPropName = (attr) => attr.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// Raw HTML inside Markdown is only parsed into elements after user plugins
// run, so those anchors are patched as strings.
function patchRawHtml(value, state) {
  return value.replace(/<a\b[^>]*>/gi, (tag, offset) => {
    const hrefMatch = tag.match(/\shref\s*=\s*"([^"]*)"/i);
    if (!hrefMatch) return tag;
    const merchant = merchantFor(decodeEntities(hrefMatch[1]));
    if (!merchant) return tag;

    let out = tag;
    const relMatch = out.match(/\srel\s*=\s*"([^"]*)"/i);
    const rel = mergeRel(relMatch ? relMatch[1].split(/\s+/) : []).join(' ');
    out = relMatch ? out.replace(relMatch[0], ` rel="${rel}"`) : out.replace(/^<a\b/i, `<a rel="${rel}"`);
    if (!/\starget\s*=/i.test(out)) out = out.replace(/^<a\b/i, '<a target="_blank"');

    if (!/data-umami-event\s*=/i.test(out)) {
      const isCard = /product-card-cta|affiliate-card/.test(out);
      let product = null;
      const aria = out.match(/aria-label\s*=\s*"View (.+?) on Amazon"/i);
      if (aria) product = aria[1];
      if (!product) {
        const before = value.slice(0, offset);
        const names = [...before.matchAll(/class="product-card-name"[^>]*>([^<]+)</g)];
        if (names.length) product = names[names.length - 1][1];
      }
      if (!product && !isCard) {
        const after = value.slice(offset + tag.length);
        const text = after.match(/^([^<]{1,120})<\/a>/);
        if (text) product = text[1];
      }
      const attrs = trackingAttrs(state, { merchant, isCard, product });
      const attrString = Object.entries(attrs)
        .map(([key, val]) => ` ${key}="${escapeAttr(val)}"`)
        .join('');
      out = out.replace(/\s*\/?>$/, (end) => `${attrString}${end}`);
    }
    return out;
  });
}

function visit(node, state) {
  if (node.type === 'raw' && typeof node.value === 'string' && /<a\b/i.test(node.value)) {
    node.value = patchRawHtml(node.value, state);
  }

  if (node.type === 'element' && node.tagName === 'a') {
    const href = node.properties?.href;
    const merchant = typeof href === 'string' ? merchantFor(href) : null;
    if (merchant) {
      const existing = Array.isArray(node.properties.rel)
        ? node.properties.rel
        : typeof node.properties.rel === 'string'
          ? node.properties.rel.split(/\s+/)
          : [];
      node.properties.rel = mergeRel(existing);
      node.properties.target = '_blank';
      const classes = [].concat(node.properties.className ?? []);
      const isCard = classes.includes('product-card-cta') || classes.includes('affiliate-card');
      const attrs = trackingAttrs(state, { merchant, isCard, product: textOf(node) || null });
      for (const [key, val] of Object.entries(attrs)) node.properties[toPropName(key)] = val;
    }
  }

  // MDX: <ProductCard ... /> components render their own CTA; pass tracking props.
  if (
    (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
    node.name === 'ProductCard'
  ) {
    node.attributes = node.attributes ?? [];
    const has = (name) => node.attributes.some((attr) => attr.name === name);
    if (!has('position')) {
      node.attributes.push({ type: 'mdxJsxAttribute', name: 'position', value: `productcard-${++state.cards}` });
    }
    if (!has('article')) {
      node.attributes.push({ type: 'mdxJsxAttribute', name: 'article', value: state.article });
    }
  }

  if (Array.isArray(node.children)) node.children.forEach((child) => visit(child, state));
}

export default function rehypeAffiliateLinks() {
  return (tree, file) => {
    visit(tree, { article: slugFromFile(file), inline: 0, cards: 0 });
  };
}
