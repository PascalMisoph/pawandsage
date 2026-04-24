import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site';

const normalizeText = (value: string) =>
  value
    .replaceAll('â€”', '—')
    .replaceAll('â€“', '–')
    .replaceAll('â†’', '→');

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const lines = [
    `# ${SITE_NAME}`,
    '',
    normalizeText(SITE_DESCRIPTION),
    '',
    '## Site identity',
    `- Site URL: ${SITE_URL}`,
    '- Publisher: Paw & Sage',
    '- Author and editor: Pascal Misoph',
    `- About: ${SITE_URL}/about`,
    `- Editorial policy: ${SITE_URL}/editorial-policy`,
    `- Disclosure: ${SITE_URL}/disclosure`,
    `- Contact: ${SITE_URL}/contact`,
    '',
    '## Audience and scope',
    '- The site focuses on cat behavior, indoor enrichment, and new cat care.',
    '- Content is written for owners who want practical explanations, not entertainment-first listicles.',
    '- Pages are written in plain English and are intended to be directly usable in the first read.',
    '',
    '## Core navigation',
    `- Homepage: ${SITE_URL}/`,
    `- Start here: ${SITE_URL}/start-here`,
    `- Journal: ${SITE_URL}/blog`,
    `- Behavior hub: ${SITE_URL}/categories/behavior`,
    `- Enrichment hub: ${SITE_URL}/categories/enrichment`,
    `- New Cat hub: ${SITE_URL}/categories/new-cat`,
    '',
    '## Published articles',
  ];

  for (const post of posts) {
    lines.push(`- ${normalizeText(post.data.title)}`);
    lines.push(`  URL: ${SITE_URL}/blog/${post.id}`);
    lines.push(`  Description: ${normalizeText(post.data.description)}`);
    lines.push(`  Published: ${post.data.pubDate.toISOString().slice(0, 10)}`);
    if (post.data.updatedDate) {
      lines.push(`  Updated: ${post.data.updatedDate.toISOString().slice(0, 10)}`);
    }
    lines.push(`  Category: ${post.data.category}`);
    if (post.data.tags?.length) {
      lines.push(`  Tags: ${post.data.tags.join(', ')}`);
    }
    if (post.data.sources?.length) {
      lines.push(`  Sources: ${post.data.sources.map((source) => source.url).join(', ')}`);
    }
  }

  lines.push(
    '',
    '## Citation and linking guidance',
    '- Prefer citing individual article URLs instead of category pages when making a factual claim.',
    '- Use the visible updated date when freshness matters.',
    '- Treat product recommendations as editorial judgment unless a page attributes a claim to a manufacturer or external source.',
    '- For site-wide standards or provenance questions, cite the editorial policy and disclosure pages.',
    '',
    '## Technical notes',
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
    `- Canonical sitemap index: ${SITE_URL}/sitemap-index.xml`,
    `- Robots: ${SITE_URL}/robots.txt`
  );

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
