export type ClusterSlug = 'behavior' | 'enrichment' | 'new-cat' | 'seasonal' | 'health-safety';

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
  /** Meta description for the hub page (120-155 chars). `description` stays the visible tagline. */
  metaDescription: string;
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
    metaDescription: 'Why cats stare, bite when petted, knock things over or wake you at 3 AM, plus scratching and nail care: clear cat behavior guides with practical fixes.',
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
      'how-to-trim-cat-nails-at-home',
      'cat-nail-clippers-vs-grinder',
      'why-cat-bites-when-petted',
      'cat-bored-lonely-or-sick',
      'cat-destroying-everything',
      'indoor-cat-depression',
    ],
  },
  {
    slug: 'enrichment',
    title: 'Enrichment',
    description: 'Small changes that turn a flat indoor life into a rich one.',
    metaDescription: 'Indoor cat enrichment guides: puzzle feeders, interactive toys, window perches, cat walls and daily routines that keep a bored indoor cat busy.',
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
      'best-cat-scratchers',
      'best-modern-cat-trees',
      'signs-cat-is-bored',
      'how-to-keep-cat-busy-while-at-work',
      'cat-wont-play-with-toys',
      'diy-cat-enrichment',
      'mental-stimulation-for-cats',
      'how-to-tire-out-a-cat',
      'cat-tunnel-christmas-tree-skirt',
      'do-cats-get-bored-of-their-toys',
      'cat-window-perch',
      'cat-wall-shelves-vs-cat-trees',
      'small-apartment-cat-enrichment-vertical-space',
      'best-cat-wall-ideas-bored-indoor-cats',
      'best-treat-dispenser-toys-indoor-cats',
      'churu-vs-delectables',
      'silvervine-vs-catnip',
      'winter-enrichment-indoor-cats',
      'furbo-vs-petcube',
      'petlibro-vs-petsafe-automatic-feeder',
      'how-to-keep-indoor-cat-busy-while-working-from-home',
      'low-effort-cat-enrichment-products-busy-owners',
      'do-single-cats-get-lonely',
      'cat-puzzle-feeder-wet-food',
    ],
  },
  {
    slug: 'new-cat',
    title: 'New Cat',
    description: 'Everything you wish someone had told you in the first week.',
    metaDescription: 'New cat and kitten guides: what you need in the first week, how to set up your home, and which litter box to buy, from basics to Litter-Robot models.',
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
      'litter-robot-4-vs-5-vs-evo',
      'litter-robot-4-vs-petlibro-luma',
      'litter-robot-vs-neakasa-m1',
      'petkit-pura-max-2-vs-litter-robot-4',
      'litter-robot-alternatives',
      'best-automatic-litter-box-under-200',
      'best-automatic-litter-box-multiple-cats',
      'best-litter-for-litter-robot',
      'tofu-vs-clay-cat-litter',
      'really-great-cat-litter-review',
      'really-great-cat-litter-vs-pidan',
      'pretty-litter-vs-tidy-cats',
      'tuft-and-paw-cove-vs-cubby',
      'best-cat-litter',
      'worlds-best-cat-litter-review',
      'best-litter-box-furniture',
      'tuft-and-paw-review',
      'litter-robot-3-vs-4',
      'how-to-clean-litter-robot-4',
    ],
  },
  {
    slug: 'seasonal',
    title: 'Seasonal Care',
    description: 'Keeping your cat safe, cool, and healthy through the seasons.',
    metaDescription: 'Seasonal cat care: keep cats cool and hydrated in summer, warm in winter, safe from heatstroke and fleas, plus holiday gift and deal guides.',
    intro:
      'The seasonal section covers heat, hydration, parasites, warm-weather safety, and holiday buying guides: the practical care and shopping decisions that change with the calendar.',
    featured: '/blog/keep-cat-cool-hot-weather',
    featuredTitle: 'How to keep your cat cool in hot weather',
    featuredLabel: 'Start with this guide',
    nextReads: [
      { href: '/blog/black-friday-cat-deals', label: "Black Friday cat deals 2026: what's actually worth buying" },
      { href: '/blog/best-gifts-for-cat-lovers', label: 'Best gifts for cat lovers 2026' },
      { href: '/blog/heatstroke-in-cats', label: 'Heatstroke in cats: warning signs' },
      { href: '/blog/get-cat-to-drink-more-water', label: 'How to get your cat to drink more water' },
      { href: '/blog/leaving-cat-alone-on-vacation', label: 'Leaving your cat alone on vacation' },
    ],
    faq: [
      {
        question: 'What temperature is too hot for a cat?',
        answer: 'Most cats are comfortable up to the mid-80s Fahrenheit, but sustained heat above 90 with high humidity raises the risk of heatstroke, especially for kittens, seniors, flat-faced breeds, and overweight cats.',
      },
      {
        question: 'Do indoor cats need summer-specific care?',
        answer: 'Yes. Even indoors, cats face heat in un-airconditioned rooms, lower water intake, heavier shedding, and open-window fall risks, all of which are simple to manage once you know what to watch for.',
      },
    ],
    orderedPosts: [
      'black-friday-cat-deals',
      'litter-robot-black-friday-deal',
      'best-gifts-for-cat-lovers',
      'gifts-for-new-cat-owners',
      'cat-stocking-stuffers',
      'cat-advent-calendar',
      'cat-proof-christmas-tree',
      'cat-tunnel-christmas-tree-skirt',
      'keep-cats-warm-without-heat',
      'keep-cat-cool-hot-weather',
      'heatstroke-in-cats',
      'cat-shedding-summer',
      'get-rid-of-fleas-on-cats',
      'get-cat-to-drink-more-water',
      'best-cat-water-fountains-cats-not-drinking-enough',
      'where-to-put-cat-water-fountain',
      'cat-water-bowl-vs-fountain-summer',
      'catit-vs-petsafe-fountain',
      'how-much-water-should-cat-drink-hot-weather',
      'cat-window-balcony-safety',
      'can-cats-get-sunburn',
      'let-cat-outside-safely',
      'leaving-cat-alone-on-vacation',
      'can-i-leave-my-cat-alone-for-a-weekend',
      'summer-dangers-for-cats',
      'summer-cat-enrichment-indoor',
      '5-minute-cat-enrichment-hot-summer-days',
      'summer-grooming-checklist-indoor-cats',
      'cat-wipes-when-they-help',
      'cat-sitter-checklist-summer',
      'indoor-cat-summer-station',
      'why-indoor-cats-get-bored-summer',
      'frozen-cat-treats-ice-games',
      'cat-sensory-garden-summer',
      'best-cooling-products-for-cats',
      'keep-cats-cool-without-ac',
      'cat-water-play-cooling-games',
      'cat-tree-black-friday-deals',
      'feliway-vs-comfort-zone',
      'holiday-plants-toxic-to-cats',
      'is-tinsel-bad-for-cats',
      'can-cats-eat-turkey-thanksgiving',
      'best-heated-cat-beds-senior-cats',
      'self-warming-vs-heated-cat-bed',
      'heated-cat-window-perch',
    ],
  },
  {
    slug: 'health-safety',
    title: 'Health & Safety',
    description: 'Is it safe for cats? Plants, foods and essential oils, checked against official sources.',
    metaDescription: 'Is it safe for cats? Toxic and non-toxic houseplants, people foods and essential oils, with verdicts from ASPCA Animal Poison Control and vet sources.',
    intro:
      'Health and safety articles answer one question each: is this plant, food or essential oil safe for cats? Every verdict comes from the ASPCA Animal Poison Control Center plant database or another cited veterinary source, with the signs to watch for and what to do next.',
    featured: '/guides/is-it-safe-for-cats',
    featuredTitle: 'Is it safe for cats? The full list',
    featuredLabel: 'Start with the hub',
    nextReads: [
      { href: '/blog/holiday-plants-toxic-to-cats', label: 'Holiday plants and cats: a toxicity chart' },
      { href: '/blog/is-lavender-safe-for-cats', label: 'Is lavender safe for cats?' },
      { href: '/blog/can-cats-eat-scrambled-eggs', label: 'Can cats eat scrambled eggs?' },
    ],
    faq: [
      {
        question: 'Who do I call if my cat ate something toxic?',
        answer: 'Call your veterinarian or the ASPCA Animal Poison Control Center at (888) 426-4435 right away. Pet Poison Helpline is another 24/7 option at (855) 764-7661. Both may charge a consultation fee.',
      },
      {
        question: 'Where do the safe and toxic verdicts come from?',
        answer: 'Plant verdicts come from the ASPCA toxic and non-toxic plant database. Food and essential-oil verdicts come from ASPCA Animal Poison Control, Pet Poison Helpline, VCA Animal Hospitals, the Merck Veterinary Manual and the Cornell Feline Health Center, linked on each page.',
      },
    ],
    orderedPosts: [
      'are-calatheas-toxic-to-cats',
      'are-orchids-toxic-to-cats',
      'are-peace-lilies-toxic-to-cats',
      'are-roses-toxic-to-cats',
      'are-spider-plants-toxic-to-cats',
      'are-tulips-toxic-to-cats',
      'is-aloe-vera-toxic-to-cats',
      'is-basil-safe-for-cats',
      'is-jade-plant-toxic-to-cats',
      'is-lucky-bamboo-toxic-to-cats',
      'is-money-tree-toxic-to-cats',
      'is-monstera-toxic-to-cats',
      'is-pothos-toxic-to-cats',
      'is-rosemary-safe-for-cats',
      'is-snake-plant-toxic-to-cats',
      'is-eucalyptus-safe-for-cats',
      'is-lavender-safe-for-cats',
      'is-peppermint-oil-safe-for-cats',
      'is-tea-tree-oil-safe-for-cats',
      'can-cats-drink-milk',
      'can-cats-eat-cheese',
      'can-cats-eat-onions-and-garlic',
      'can-cats-eat-peanut-butter',
      'can-cats-eat-scrambled-eggs',
      'can-cats-eat-tuna',
      'can-cats-eat-watermelon',
      'is-chocolate-toxic-to-cats',
    ],
  },
];

export const clusterConfigBySlug = Object.fromEntries(
  clusterConfigs.map((cluster) => [cluster.slug, cluster]),
) as Record<ClusterSlug, ClusterConfig>;
