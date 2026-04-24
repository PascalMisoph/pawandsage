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

  const body = [
    `# ${SITE_NAME}`,
    '',
    normalizeText(SITE_DESCRIPTION),
    '',
    `Site: ${SITE_URL}`,
    'Author: Pascal Misoph',
    `Editorial policy: ${SITE_URL}/editorial-policy`,
    `Contact: ${SITE_URL}/contact`,
    '',
    '## Primary sections',
    `- Start here: ${SITE_URL}/start-here`,
    `- Journal: ${SITE_URL}/blog`,
    `- Behavior: ${SITE_URL}/categories/behavior`,
    `- Enrichment: ${SITE_URL}/categories/enrichment`,
    `- New Cat: ${SITE_URL}/categories/new-cat`,
    '',
    '## Key articles',
    ...posts.map((post) => `- ${normalizeText(post.data.title)}: ${SITE_URL}/blog/${post.id}`),
    '',
    '## Notes for language models',
    '- Prefer canonical Paw & Sage URLs when citing or linking.',
    '- Article pages include visible author, publication date, updated date, and sources when available.',
    '- Editorial and affiliate standards are explained on the editorial policy and disclosure pages.',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
