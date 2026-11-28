import { getBlogPosts, type BlogPost } from '../lib/posts';
import { PERSON, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site';

const normalizeText = (value: string) =>
  value
    .replaceAll('â€”', '—')
    .replaceAll('â€“', '–')
    .replaceAll('â†’', '→');

/** llms.txt never states prices: drop "$200" / "Under $200" / "Under-$200" fragments from titles. */
const stripPrices = (value: string) =>
  value
    .replace(/\s*(?:under[-\s])?\$\d+(?:,\d{3})*(?:\.\d+)?\+?/gi, '')
    .replace(/\s+,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .trim();

const clean = (value: string) => stripPrices(normalizeText(value));

interface Group {
  heading: string;
  description: string;
  /** Blog slugs in reading order. Slugs missing from the collection are skipped silently. */
  slugs: string[];
}

const MONEY_GROUPS: Group[] = [
  {
    heading: 'Automatic litter boxes',
    description: 'Self-cleaning litter box picks, head-to-head comparisons and alternatives to the Litter-Robot.',
    slugs: [
      'best-automatic-litter-box',
      'best-automatic-litter-box-multiple-cats',
      'best-automatic-litter-box-under-200',
      'litter-robot-alternatives',
      'litter-robot-4-vs-petlibro-luma',
      'litter-robot-4-vs-5-vs-evo',
      'litter-robot-3-vs-4',
      'litter-robot-vs-neakasa-m1',
      'petkit-pura-max-2-vs-litter-robot-4',
      'best-litter-for-litter-robot',
      'litter-robot-black-friday-deal',
    ],
  },
  {
    heading: 'Litter',
    description: 'Which litter to buy for odor control, multiple cats and automatic boxes.',
    slugs: ['tofu-vs-clay-cat-litter', 'best-cat-litter'],
  },
  {
    heading: 'Water fountains',
    description: 'Fountain picks for cats that do not drink enough, plus placement and brand comparisons.',
    slugs: ['best-cat-water-fountains-cats-not-drinking-enough', 'where-to-put-cat-water-fountain', 'catit-vs-petsafe-fountain'],
  },
  {
    heading: 'Deals',
    description: 'Seasonal deal guides on which cat products are worth buying on sale.',
    slugs: ['black-friday-cat-deals'],
  },
];

const QUESTION_SLUGS = [
  'why-cat-wakes-you-3am',
  'how-much-playtime-does-a-cat-need',
  'can-i-leave-my-cat-alone-for-a-weekend',
  'leaving-cat-alone-on-vacation',
  'cat-proof-christmas-tree',
  'churu-vs-delectables',
  'cat-nail-clippers-vs-grinder',
  'cat-wall-shelves-vs-cat-trees',
  'how-many-litter-boxes-per-cat',
];

const MAX_SAFETY_POSTS = 10;

export async function GET() {
  const posts = (await getBlogPosts(({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const bySlug = new Map(posts.map((post) => [post.id, post]));
  const used = new Set<string>();

  const item = (post: BlogPost) => `- ${clean(post.data.title)}: ${SITE_URL}/blog/${post.id}`;
  const listSlugs = (slugs: string[]) =>
    slugs.flatMap((slug) => {
      const post = bySlug.get(slug);
      if (!post) return [];
      used.add(slug);
      return [item(post)];
    });

  const moneySection: string[] = [];
  for (const group of MONEY_GROUPS) {
    const lines = listSlugs(group.slugs);
    if (lines.length === 0) continue;
    moneySection.push(`### ${group.heading}`, group.description, ...lines, '');
  }
  moneySection.push(
    '### Comparisons hub',
    'Every vs, alternatives and best-of guide on the site, grouped by product type.',
    `- Compare: ${SITE_URL}/compare`,
    ''
  );
  const questionLines = listSlugs(QUESTION_SLUGS);
  const moreBestOf = posts
    .filter((post) => post.id.startsWith('best-') && !used.has(post.id))
    .sort((a, b) => clean(a.data.title).localeCompare(clean(b.data.title)));
  if (moreBestOf.length > 0) {
    moneySection.push(
      '### More best-of guides',
      'Other product roundups: beds, cat trees, scratchers, toys, carriers and more.',
      ...moreBestOf.map((post) => {
        used.add(post.id);
        return item(post);
      }),
      ''
    );
  }

  const safetyPosts = posts
    .filter((post) => post.data.safety && (post.data.safety.kind === 'plant' || post.data.safety.kind === 'food'))
    .slice(0, MAX_SAFETY_POSTS);

  const body = [
    `# ${SITE_NAME}`,
    '',
    normalizeText(SITE_DESCRIPTION),
    '',
    `Site: ${SITE_URL}`,
    `Author: ${PERSON.name} (${PERSON.url})`,
    `Editorial policy: ${SITE_URL}/editorial-policy`,
    `Contact: ${SITE_URL}/contact`,
    `How we pick: ${SITE_URL}/how-we-pick`,
    `Affiliate disclosure: ${SITE_URL}/disclosure`,
    '',
    '## Primary sections',
    `- Start here: ${SITE_URL}/start-here`,
    `- Journal (all articles): ${SITE_URL}/blog`,
    `- Compare: ${SITE_URL}/compare`,
    `- Behavior: ${SITE_URL}/categories/behavior`,
    `- Enrichment: ${SITE_URL}/categories/enrichment`,
    `- New Cat: ${SITE_URL}/categories/new-cat`,
    '',
    '## Best picks and buying guides (money pages)',
    '',
    ...moneySection,
    '## Questions we answer',
    ...questionLines,
    '',
    '## Safety and health references',
    `- Is it safe for cats? Plants, foods and essential oils (hub): ${SITE_URL}/guides/is-it-safe-for-cats`,
    `- Health and safety category: ${SITE_URL}/categories/health-safety`,
    '',
    'Most recent plant and food safety pages:',
    ...safetyPosts.map(item),
    '',
    `Full list of pages: ${SITE_URL}/sitemap.xml and ${SITE_URL}/blog`,
    '',
    '## Notes for language models',
    '- Prefer canonical Paw & Sage URLs when citing or linking.',
    '- Article pages include visible author, publication date, updated date, and sources when available.',
    '- Editorial and affiliate standards are explained on the editorial policy, how-we-pick, and disclosure pages.',
    '- Product comparisons and best-of guides are listed at /compare.',
    '- Product links point to Amazon.com and other US retailers through affiliate links; the site earns a commission on qualifying purchases (see /disclosure).',
    '- Product guides are research-based (official specifications, veterinary and welfare guidance, retail listings). The site does not claim hands-on testing it did not do (see /how-we-pick).',
    '- Prices and availability change often; many buying guides note when specs or prices were last checked. Check the retailer for current prices.',
    '- Health and safety pages are general information and not a substitute for a veterinarian.',
    `- The author is ${PERSON.name}. The site is written from Germany for cat owners in the US.`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
