// Adds rel="sponsored nofollow noopener" and target="_blank" to every Amazon
// affiliate link rendered from Markdown/MDX content. Hrefs and link text are
// never changed.
const AFFILIATE_HOST = /^https?:\/\/(?:www\.)?(?:amazon\.com|amzn\.to)(?:[/?#]|$)/i;
const REQUIRED_REL = ['sponsored', 'nofollow', 'noopener'];

function mergeRel(existing) {
  const rel = [...REQUIRED_REL];
  for (const token of existing) {
    if (token && !rel.includes(token)) rel.push(token);
  }
  return rel;
}

// Raw HTML inside Markdown (e.g. hand-written <a class="affiliate-card">) is only
// parsed into elements after user plugins run, so patch those tags as strings.
function patchRawAnchor(tag) {
  const hrefMatch = tag.match(/\shref\s*=\s*"([^"]*)"/i);
  if (!hrefMatch || !AFFILIATE_HOST.test(hrefMatch[1])) return tag;
  let out = tag;
  const relMatch = out.match(/\srel\s*=\s*"([^"]*)"/i);
  const rel = mergeRel(relMatch ? relMatch[1].split(/\s+/) : []).join(' ');
  out = relMatch
    ? out.replace(relMatch[0], ` rel="${rel}"`)
    : out.replace(/^<a\b/i, `<a rel="${rel}"`);
  if (!/\starget\s*=/i.test(out)) out = out.replace(/^<a\b/i, '<a target="_blank"');
  return out;
}

function visit(node) {
  if (node.type === 'raw' && typeof node.value === 'string' && /<a\b/i.test(node.value)) {
    node.value = node.value.replace(/<a\b[^>]*>/gi, patchRawAnchor);
  }
  if (node.type === 'element' && node.tagName === 'a') {
    const href = node.properties?.href;
    if (typeof href === 'string' && AFFILIATE_HOST.test(href)) {
      const existing = Array.isArray(node.properties.rel)
        ? node.properties.rel
        : typeof node.properties.rel === 'string'
          ? node.properties.rel.split(/\s+/)
          : [];
      node.properties.rel = mergeRel(existing);
      node.properties.target = '_blank';
    }
  }
  if (Array.isArray(node.children)) node.children.forEach(visit);
}

export default function rehypeAffiliateLinks() {
  return (tree) => visit(tree);
}
