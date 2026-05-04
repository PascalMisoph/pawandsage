export type ClusterSlug = 'behavior' | 'enrichment' | 'new-cat';

export interface ClusterLink {
  href: string;
  label: string;
}

export interface ClusterFaq {
  question: string;
  answer: string;
}

export interface ClusterConfig {
  slug: ClusterSlug;
  title: string;
  description: string;
  intro: string;
  featured: string;
  featuredTitle: string;
  featuredLabel: string;
  nextReads: ClusterLink[];
  faq: ClusterFaq[];
  orderedPosts: string[];
}

export const clusterConfigs: ClusterConfig[] = [
  {
    slug: 'behavior',
    title: 'Behavior',
    description: 'What your cat is actually telling you, and how to listen.',
    intro:
      'Behavior articles help you decode the signals behind attention-seeking, staring, night waking, overstimulation, and other common patterns that can feel random until you see the logic underneath them.',
    featured: '/blog/why-cat-stares-at-me',
    featuredTitle: 'Why does my cat stare at me?',
    featuredLabel: 'Start with this guide',
    nextReads: [
      { href: '/blog/why-cat-wakes-you-3am', label: 'Why your cat wakes you up at 3 AM' },
      { href: '/blog/why-cat-knocks-things-off-tables', label: 'Why cats knock things off tables' },
      { href: '/blog/why-cat-bites-when-petted', label: 'Why cats bite during petting' },
    ],
    faq: [
      {
        question: 'What should I read first if my cat is doing something strange?',
        answer: 'Start with the article that best matches the specific behavior, then read laterally within the behavior cluster for the deeper pattern behind it.',
      },
      {
        question: 'Are these articles a substitute for a vet?',
        answer: 'No. They are meant to help you understand common behavior and notice when a pattern may need veterinary attention.',
      },
    ],
    orderedPosts: [
      'why-cat-stares-at-me',
      'why-cat-wakes-you-3am',
      'why-cat-knocks-things-off-tables',
      'how-to-stop-cat-scratching-furniture',
      'why-cat-bites-when-petted',
    ],
  },
  {
    slug: 'enrichment',
    title: 'Enrichment',
    description: 'Small changes that turn a flat indoor life into a rich one.',
    intro:
      'The enrichment section focuses on boredom prevention, play structure, hunting outlets, and environmental upgrades that make indoor life more satisfying for cats and easier for owners.',
    featured: '/blog/indoor-cat-enrichment-ideas',
    featuredTitle: '20 indoor cat enrichment ideas',
    featuredLabel: 'Start with this guide',
    nextReads: [
      { href: '/blog/best-interactive-cat-toys', label: 'Best interactive toys for indoor cats' },
      { href: '/blog/best-puzzle-feeders-cats', label: 'Best puzzle feeders for fast eaters' },
      { href: '/blog/signs-cat-is-bored', label: 'Signs your cat is bored' },
      { href: '/blog/why-cat-knocks-things-off-tables', label: 'Why cats knock things off tables' },
    ],
    faq: [
      {
        question: 'What is the fastest enrichment upgrade?',
        answer: 'A short structured play session before the evening meal is usually the highest impact change for indoor cats.',
      },
      {
        question: 'Do I need expensive gear to enrich an indoor cat?',
        answer: 'No. Many effective upgrades are routine changes, food puzzles, cardboard rotation, and better use of vertical space.',
      },
    ],
    orderedPosts: [
      'indoor-cat-enrichment-ideas',
      'best-interactive-cat-toys',
      'best-puzzle-feeders-cats',
      'signs-cat-is-bored',
    ],
  },
  {
    slug: 'new-cat',
    title: 'New Cat',
    description: 'Everything you wish someone had told you in the first week.',
    intro:
      'The new cat section is built for the first days and weeks after bringing a cat home, with an emphasis on calm setup, fewer unnecessary purchases, and routines that reduce stress fast.',
    featured: '/blog/new-kitten-checklist',
    featuredTitle: 'The complete new kitten checklist',
    featuredLabel: 'Start with this checklist',
    nextReads: [
      { href: '/blog/indoor-cat-enrichment-ideas', label: 'Indoor cat enrichment ideas' },
      { href: '/blog/why-cat-stares-at-me', label: 'Why your cat stares at you' },
    ],
    faq: [
      {
        question: 'What should I buy before bringing a kitten home?',
        answer: 'Focus on litter setup, the same food the kitten is already eating, water, a safe room, and a carrier before you buy extras.',
      },
      {
        question: 'What can wait until after the first week?',
        answer: 'Most optional accessories can wait until you have seen how your specific cat uses the space and what kinds of play or rest they prefer.',
      },
    ],
    orderedPosts: [
      'new-kitten-checklist',
    ],
  },
];

export const clusterConfigBySlug = Object.fromEntries(
  clusterConfigs.map((cluster) => [cluster.slug, cluster]),
) as Record<ClusterSlug, ClusterConfig>;
