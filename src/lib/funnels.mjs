// Conversion funnels: informational articles feed money pages (best-of, vs, reviews).
// Used by rehype-funnel-box.mjs (in-article "Recommended solution" + "Related comparisons"
// blocks) and BlogPostLayout (sticky CTA). Plain JS so the rehype plugin can import it.
// Picks reuse ASINs / Awin links already verified on the target money page. No prices.

const A = (asin) => `https://www.amazon.com/dp/${asin}?tag=pawandsage21-20`;
const TP = (handle) =>
  `https://www.awin1.com/cread.php?awinmid=59149&awinaffid=3141803&ued=${encodeURIComponent(
    `https://www.tuftandpaw.com/products/${handle}`,
  )}`;

/** Money pages: target slug -> label, CTA text and 2-3 top picks from that page. */
export const MONEY_PAGES = {
  'best-litter-box-for-cats-that-pee-high': {
    title: 'Best litter box for cats that pee high',
    problem: 'Cat peeing over the edge or standing up?',
    cta: 'See the high-sided box picks',
    picks: [
      { name: 'Tuft & Paw Cubby Litter Box', href: TP('cubby-litter-box'), note: 'Removable 8 in walls, open top' },
      { name: 'Yangbaga XXL High Sided Stainless Steel Litter Box', href: A('B0F12X13PW'), note: 'Stainless, very high sides' },
      { name: "Nature's Miracle High-Sided Corner Litter Box", href: A('B004N1NAMW'), note: 'Budget high-sided plastic' },
    ],
  },
  'best-cat-litter': {
    title: 'Best cat litter for odor control',
    problem: 'Litter box smell or tracking?',
    cta: 'Compare the best cat litters',
    picks: [
      { name: "Dr. Elsey's Ultra Unscented", href: A('B0009X0QSY'), note: 'Unscented clumping clay' },
      { name: 'Really Great Cat Litter OdorStop', href: TP('really-great-cat-litter-odorstop'), note: 'Odor-first, multi-cat (code TOFULITTER20)' },
      { name: 'Fresh Step Simply Unscented Multi Cat', href: A('B07ZK3V87N'), note: 'Budget multi-cat clay' },
    ],
  },
  'best-cat-scratchers': {
    title: 'Best cat scratchers',
    problem: 'Claws on the couch?',
    cta: 'See the best cat scratchers',
    picks: [
      { name: 'SmartCat Pioneer Ultimate Scratching Post', href: A('B000634MH8'), note: '32 in sisal, wide base' },
      { name: 'PetFusion Cat Scratching Flip Pad', href: A('B008LMTYTW'), note: 'Reversible cardboard lounge' },
      { name: 'Sisal Cat Scratch Sofa Protector', href: A('B08XYSWPP4'), note: 'Covers the couch arm' },
    ],
  },
  'best-litter-box-furniture': {
    title: 'Best litter box furniture',
    problem: 'Want to hide the litter box?',
    cta: 'See hidden litter box picks',
    picks: [
      { name: 'HOOBRO Litter Box Enclosure with Divider', href: A('B09FHC8RYF'), note: 'Roomy side-table cabinet' },
      { name: 'Homhedy Enclosure with Barn Door', href: A('B0BPPLHTB4'), note: 'Left or right entry' },
      { name: 'Tuft & Paw Cove Litter Box', href: TP('cove-litter-box-full'), note: 'Designer box, no cabinet needed' },
    ],
  },
  'best-cat-water-fountains-cats-not-drinking-enough': {
    title: 'Best cat water fountains',
    problem: 'Cat not drinking enough?',
    cta: 'Compare the best cat fountains',
    picks: [
      { name: 'Catit LED Flower Fountain', href: A('B0146QXOB0'), note: '3 L, adjustable flow' },
      { name: 'PetSafe Drinkwell Stainless 360', href: A('B002SB91QS'), note: 'Stainless, multi-pet' },
      { name: 'Pokpet 10L Stainless Cordless Fountain', href: A('B0GZK62Q31'), note: 'Cordless, large capacity' },
    ],
  },
  'best-interactive-cat-toys': {
    title: 'Best interactive cat toys',
    problem: 'Bored or restless cat?',
    cta: 'See the best interactive toys',
    picks: [
      { name: 'Go Cat Da Bird Wand Toy', href: A('B001BOVEU4'), note: 'Classic feather wand' },
      { name: 'PetFusion Ambush Electronic Toy', href: A('B07F391BX2'), note: 'Solo play while you work' },
      { name: 'Cat Dancer Original', href: A('B0006N9I68'), note: 'Budget favorite' },
    ],
  },
  'best-puzzle-feeders-cats': {
    title: 'Best puzzle feeders for cats',
    problem: 'Cat needs more brain work?',
    cta: 'See the best puzzle feeders',
    picks: [
      { name: 'PetSafe SlimCat', href: A('B0018CE8LG'), note: 'Rolling treat ball' },
      { name: 'TRIXIE Cat Activity Flip Board', href: A('B08C53X29M'), note: 'Multi-level puzzle' },
      { name: 'Catit Senses 2.0 Digger', href: A('B015P13QMM'), note: 'Paw-fishing tubes' },
    ],
  },
  'best-treat-dispenser-toys-indoor-cats': {
    title: 'Best treat dispenser toys',
    problem: 'Cat alone all day?',
    cta: 'See the treat dispenser picks',
    picks: [
      { name: 'PetSafe SlimCat', href: A('B0018CE8LG'), note: 'Adjustable treat ball' },
      { name: 'NHCASURUE Hanging Door-Frame Treat Dispenser', href: A('B0GVSZWH2B'), note: 'Hangs on a door frame' },
    ],
  },
  'best-cooling-products-for-cats': {
    title: 'Best cooling products for cats',
    problem: 'Keeping a cat cool?',
    cta: 'See the cooling product picks',
    picks: [
      { name: 'Chillz Cat Cooling Mat', href: A('B09S3Y2TXN'), note: 'Pressure-activated mat' },
      { name: 'Feandrea Elevated Cat Hammock Bed', href: A('B0CZ9GP89V'), note: 'Airflow under the cat' },
      { name: 'Catit Flower Fountain', href: A('B0146QXOB0'), note: 'Encourages drinking' },
    ],
  },
  'best-heated-cat-beds-senior-cats': {
    title: 'Best heated cat beds',
    problem: 'Cat feeling the cold?',
    cta: 'See the heated bed picks',
    picks: [
      { name: 'K&H Thermo-Kitty Heated Cat Bed', href: A('B07HMVNXXS'), note: 'Low-watt heated bed' },
      { name: 'K&H Self-Warming Cat Bed Pad', href: A('B07PF1KYYK'), note: 'No electricity' },
      { name: 'K&H Heated Kitty Sill Window Perch', href: A('B07PF1L6LP'), note: 'Warm window seat' },
    ],
  },
  'heated-cat-window-perch': {
    title: 'Best heated window perches',
    problem: 'Window-watching in winter?',
    cta: 'See the window perch picks',
    picks: [
      { name: 'K&H Heated Kitty Sill Window Perch', href: A('B07PF1L6LP'), note: 'Heated sill perch' },
      { name: 'Tuft & Paw Cloud Nine Window Hammock', href: TP('cloud-nine-window-hammock'), note: 'Rated to 30 lb (code PURR20)' },
    ],
  },
  'cat-window-perch': {
    title: 'Best cat window perches',
    problem: 'Give your indoor cat a view',
    cta: 'See the window perch picks',
    picks: [
      { name: 'Tuft & Paw Cloud Nine Window Hammock', href: TP('cloud-nine-window-hammock'), note: 'Steel arch, rated to 30 lb' },
      { name: 'K&H Heated Kitty Sill Window Perch', href: A('B07PF1L6LP'), note: 'Heated, sits on the sill' },
      { name: 'Cat Window Perch (suction cup)', href: A('B07MH7WTSN'), note: 'Budget suction perch' },
    ],
  },
  'best-modern-cat-trees': {
    title: 'Best modern cat trees',
    problem: 'Need more vertical space?',
    cta: 'See the modern cat tree picks',
    picks: [
      { name: 'Catit Vesper Cat Tree, High Base, Walnut', href: A('B00SOTG05S'), note: 'Mid-century style' },
      { name: 'KULAMOON 41 in Real Wood Cat Tree', href: A('B0FN7DFV33'), note: 'Listed for cats up to 23 lb' },
      { name: 'Hey-brother Wooden Cat Tree', href: A('B0FX3K3K62'), note: '66.9 in, five sisal posts' },
    ],
  },
  'petlibro-vs-petsafe-automatic-feeder': {
    title: 'Petlibro vs PetSafe automatic feeder',
    problem: 'Cat begging for food at 5 AM?',
    cta: 'Compare automatic feeders',
    picks: [
      { name: 'PETLIBRO Granary 5L WiFi Feeder', href: A('B0DRBCCK7V'), note: 'App scheduling' },
      { name: 'PetSafe Healthy Pet Simply Feed', href: A('B00VIXRB6O'), note: 'Programmable meals' },
    ],
  },
  'furbo-vs-petcube': {
    title: 'Furbo vs Petcube',
    problem: 'Want to check on your cat while away?',
    cta: 'Compare pet cameras',
    picks: [
      { name: 'Furbo 360° Cat Camera (no ongoing cost)', href: A('B0C4XXBY44'), note: 'Rotating view' },
      { name: 'Petcube Cam', href: A('B088C4NHRS'), note: 'Compact, budget' },
    ],
  },
  'feliway-vs-comfort-zone': {
    title: 'Feliway vs Comfort Zone',
    problem: 'Stressed or anxious cat?',
    cta: 'Compare calming diffusers',
    picks: [
      { name: 'Feliway Classic Starter Kit', href: A('B08962PMQS'), note: 'Single-cat calming' },
      { name: 'Feliway Optimum Diffuser Kit', href: A('B097W651NJ'), note: 'Newest Feliway formula' },
      { name: 'Comfort Zone Multicat Diffuser Kit', href: A('B014HCXECW'), note: 'Multi-cat tension' },
    ],
  },
  'cat-proof-christmas-tree': {
    title: 'How to cat-proof a Christmas tree',
    problem: 'Cat vs Christmas tree?',
    cta: 'See the 11 tree fixes',
    picks: [
      { name: 'Nuanchu 6-Panel Clear Acrylic Tree Fence', href: A('B0F9WMPP6W'), note: 'Clear barrier' },
      { name: 'Cat Proof Tree Skirt Kit with Prickle Mat', href: A('B0FJBL8FC3'), note: 'Deters climbing at the base' },
      { name: '36-Piece Shatterproof Ornament Set', href: A('B0CCXS3L18'), note: 'No glass shards' },
    ],
  },
  'churu-vs-delectables': {
    title: 'Churu vs Delectables',
    problem: 'Looking for a safe treat?',
    cta: 'Compare lickable treats',
    picks: [
      { name: 'INABA Churu Variety Pack', href: A('B07W5R3CR6'), note: 'Lickable puree' },
      { name: 'Delectables Squeeze Up 20 CT', href: A('B08XNWX31S'), note: 'Hydrating treat' },
    ],
  },
  'silvervine-vs-catnip': {
    title: 'Silvervine vs catnip',
    problem: 'Cat ignores catnip?',
    cta: 'Compare silvervine and catnip',
    picks: [
      { name: 'SmartyKat Silly Silver Stix', href: A('B0BSNYWB1X'), note: 'Silvervine chew sticks' },
      { name: 'From The Field Catnip and Silver Vine Blend', href: A('B01G3IBQIC'), note: 'Mixed blend' },
    ],
  },
  'cat-nail-clippers-vs-grinder': {
    title: 'Cat nail clippers vs grinder',
    problem: 'Nail trims a fight?',
    cta: 'Compare clippers and grinders',
    picks: [{ name: '2-in-1 Cat Nail Clippers and Grinder', href: A('B0FS1WBYTN'), note: 'Clip and smooth' }],
  },
  'litter-robot-4-vs-5-vs-evo': {
    title: 'Litter-Robot 4 vs 5 vs EVO',
    problem: 'Thinking about a self-cleaning box?',
    cta: 'Compare Litter-Robot models',
    picks: [
      { name: 'Whisker Litter-Robot 4', href: A('B0B7835C46'), note: 'Up to 4 cats, 3-25 lb' },
      { name: 'Litter-Robot EVO', href: A('B0G6GDJVYB'), note: 'Compact, up to 2 cats' },
    ],
  },
  'best-gifts-for-cat-lovers': {
    title: 'Best cat gifts',
    problem: 'Shopping for a cat lover?',
    cta: 'See the best cat gifts',
    picks: [
      { name: 'Go Cat Da Bird Wand Toy', href: A('B001BOVEU4'), note: 'The toy cats actually use' },
      { name: 'K&H Thermo-Kitty Heated Cat Bed', href: A('B07HMVNXXS'), note: 'Winter warmth' },
      { name: 'Tuft & Paw Cloud Nine Window Hammock', href: TP('cloud-nine-window-hammock'), note: 'Design gift (code PURR20)' },
    ],
  },
};

/** Informational article -> money page it feeds. */
export const FUNNEL_MAP = {
  '5-minute-cat-enrichment-hot-summer-days': 'best-interactive-cat-toys',
  'best-cat-wall-ideas-bored-indoor-cats': 'best-modern-cat-trees',
  'can-cats-eat-turkey-thanksgiving': 'churu-vs-delectables',
  'can-cats-get-sunburn': 'best-cooling-products-for-cats',
  'can-i-leave-my-cat-alone-for-a-weekend': 'petlibro-vs-petsafe-automatic-feeder',
  'cat-bored-lonely-or-sick': 'best-interactive-cat-toys',
  'cat-destroying-everything': 'best-cat-scratchers',
  'cat-puzzle-feeder-wet-food': 'best-puzzle-feeders-cats',
  'cat-sensory-garden-summer': 'silvervine-vs-catnip',
  'cat-shedding-summer': 'best-cooling-products-for-cats',
  'cat-sitter-checklist-summer': 'furbo-vs-petcube',
  'cat-water-bowl-vs-fountain-summer': 'best-cat-water-fountains-cats-not-drinking-enough',
  'cat-water-play-cooling-games': 'best-cat-water-fountains-cats-not-drinking-enough',
  'cat-window-balcony-safety': 'cat-window-perch',
  'cat-wont-play-with-toys': 'best-interactive-cat-toys',
  'diy-cat-enrichment': 'best-puzzle-feeders-cats',
  'do-cats-get-bored-of-their-toys': 'best-interactive-cat-toys',
  'do-single-cats-get-lonely': 'furbo-vs-petcube',
  'frozen-cat-treats-ice-games': 'churu-vs-delectables',
  'get-cat-to-drink-more-water': 'best-cat-water-fountains-cats-not-drinking-enough',
  'heatstroke-in-cats': 'best-cooling-products-for-cats',
  'holiday-plants-toxic-to-cats': 'cat-proof-christmas-tree',
  'how-much-water-should-cat-drink-hot-weather': 'best-cat-water-fountains-cats-not-drinking-enough',
  'how-to-keep-cat-busy-while-at-work': 'best-treat-dispenser-toys-indoor-cats',
  'how-to-keep-indoor-cat-busy-while-working-from-home': 'best-interactive-cat-toys',
  'how-to-stop-cat-scratching-furniture': 'best-cat-scratchers',
  'how-to-tire-out-a-cat': 'best-interactive-cat-toys',
  'how-to-trim-cat-nails-at-home': 'cat-nail-clippers-vs-grinder',
  'indoor-cat-depression': 'cat-window-perch',
  'indoor-cat-enrichment-ideas': 'best-modern-cat-trees',
  'indoor-cat-summer-station': 'best-cooling-products-for-cats',
  'is-tinsel-bad-for-cats': 'cat-proof-christmas-tree',
  'keep-cat-cool-hot-weather': 'best-cooling-products-for-cats',
  'keep-cats-cool-without-ac': 'best-cooling-products-for-cats',
  'keep-cats-warm-without-heat': 'best-heated-cat-beds-senior-cats',
  'leaving-cat-alone-on-vacation': 'petlibro-vs-petsafe-automatic-feeder',
  'let-cat-outside-safely': 'cat-window-perch',
  'mental-stimulation-for-cats': 'best-puzzle-feeders-cats',
  'new-kitten-checklist': 'best-cat-litter',
  'signs-cat-is-bored': 'best-interactive-cat-toys',
  'small-apartment-cat-enrichment-vertical-space': 'best-modern-cat-trees',
  'summer-cat-enrichment-indoor': 'best-interactive-cat-toys',
  'summer-dangers-for-cats': 'best-cooling-products-for-cats',
  'summer-grooming-checklist-indoor-cats': 'cat-nail-clippers-vs-grinder',
  'where-to-put-cat-water-fountain': 'best-cat-water-fountains-cats-not-drinking-enough',
  'why-cat-bites-when-petted': 'best-interactive-cat-toys',
  'why-cat-knocks-things-off-tables': 'best-puzzle-feeders-cats',
  'why-cat-stares-at-me': 'best-interactive-cat-toys',
  'why-cat-wakes-you-3am': 'petlibro-vs-petsafe-automatic-feeder',
  'why-indoor-cats-get-bored-summer': 'best-interactive-cat-toys',
  'winter-enrichment-indoor-cats': 'heated-cat-window-perch',
  'cat-wipes-when-they-help': 'best-cat-litter',
  'get-rid-of-fleas-on-cats': 'feliway-vs-comfort-zone',
  'low-effort-cat-enrichment-products-busy-owners': 'best-treat-dispenser-toys-indoor-cats',
  'how-to-clean-litter-robot-4': 'litter-robot-4-vs-5-vs-evo',
  'cat-peeing-outside-litter-box': 'best-cat-litter',
  'cat-pooping-outside-litter-box': 'best-cat-litter',
  'why-cats-kick-litter-everywhere': 'best-litter-box-for-cats-that-pee-high',
  'how-often-to-change-cat-litter': 'best-cat-litter',
  'how-to-clean-a-litter-box': 'best-cat-litter',
  'cat-not-covering-poop': 'best-cat-litter',
  'how-to-transition-cat-to-new-litter': 'best-cat-litter',
  'how-many-litter-boxes-per-cat': 'best-litter-box-furniture',
  'where-to-put-litter-box': 'best-litter-box-furniture',
  'how-to-get-rid-of-litter-box-smell': 'best-cat-litter',
  'cat-peeing-on-bed': 'feliway-vs-comfort-zone',
  'cat-sitting-in-litter-box': 'best-cat-litter',
  'how-to-litter-train-a-kitten': 'best-cat-litter',
  'why-does-my-cat-stare-at-the-wall': 'best-interactive-cat-toys',
  'how-much-playtime-does-a-cat-need': 'best-interactive-cat-toys',
  'why-does-my-cat-knead': 'cat-nail-clippers-vs-grinder',
  'why-does-my-cat-headbutt-me': 'feliway-vs-comfort-zone',
  'cat-meowing-at-night': 'petlibro-vs-petsafe-automatic-feeder',
};

/** Topic groups for the "Related comparisons" block (money pages and their neighbors). */
export const RELATED_GROUPS = {
  litter: [
    ['best-cat-litter', 'Best cat litter for odor control'],
    ['best-litter-box-for-cats-that-pee-high', 'Best litter box for cats that pee high'],
    ['best-litter-box-furniture', 'Best litter box furniture'],
    ['tofu-vs-clay-cat-litter', 'Tofu vs clay cat litter'],
    ['really-great-cat-litter-review', 'Really Great Cat Litter review'],
    ['worlds-best-cat-litter-review', "World's Best Cat Litter review"],
    ['pretty-litter-vs-tidy-cats', 'PrettyLitter vs Tidy Cats'],
    ['tuft-and-paw-cove-vs-cubby', 'Tuft & Paw Cove vs Cubby'],
  ],
  robot: [
    ['litter-robot-4-vs-5-vs-evo', 'Litter-Robot 4 vs 5 vs EVO'],
    ['litter-robot-3-vs-4', 'Litter-Robot 3 vs 4'],
    ['litter-robot-alternatives', 'Litter-Robot alternatives'],
    ['best-automatic-litter-box-multiple-cats', 'Best automatic litter box for multiple cats'],
    ['best-litter-for-litter-robot', 'Best litter for automatic litter boxes'],
    ['how-to-clean-litter-robot-4', 'How to clean a Litter-Robot 4'],
  ],
  play: [
    ['best-interactive-cat-toys', 'Best interactive cat toys'],
    ['best-puzzle-feeders-cats', 'Best puzzle feeders'],
    ['best-treat-dispenser-toys-indoor-cats', 'Best treat dispenser toys'],
    ['silvervine-vs-catnip', 'Silvervine vs catnip'],
    ['best-cat-scratchers', 'Best cat scratchers'],
  ],
  space: [
    ['best-modern-cat-trees', 'Best modern cat trees'],
    ['cat-window-perch', 'Best cat window perches'],
    ['heated-cat-window-perch', 'Best heated window perches'],
    ['cat-wall-shelves-vs-cat-trees', 'Cat wall shelves vs cat trees'],
    ['best-cat-scratchers', 'Best cat scratchers'],
  ],
  water: [
    ['best-cat-water-fountains-cats-not-drinking-enough', 'Best cat water fountains'],
    ['catit-vs-petsafe-fountain', 'Catit vs PetSafe fountain'],
    ['best-cooling-products-for-cats', 'Best cooling products for cats'],
  ],
  warm: [
    ['best-heated-cat-beds-senior-cats', 'Best heated cat beds'],
    ['self-warming-vs-heated-cat-bed', 'Self-warming vs heated cat bed'],
    ['heated-cat-window-perch', 'Best heated window perches'],
  ],
  away: [
    ['petlibro-vs-petsafe-automatic-feeder', 'Petlibro vs PetSafe automatic feeder'],
    ['furbo-vs-petcube', 'Furbo vs Petcube'],
    ['best-cat-carrier-for-car-travel', 'Best cat carrier for car travel'],
  ],
  holiday: [
    ['black-friday-cat-deals', 'Black Friday cat deals'],
    ['best-gifts-for-cat-lovers', 'Best cat gifts'],
    ['cat-proof-christmas-tree', 'How to cat-proof a Christmas tree'],
    ['tuft-and-paw-coupon-code', 'Tuft & Paw coupon codes'],
  ],
  safety: [
    ['are-calatheas-toxic-to-cats', "Are Calatheas Toxic to Cats?"],
    ['are-orchids-toxic-to-cats', "Are Orchids Toxic to Cats?"],
    ['are-peace-lilies-toxic-to-cats', "Are Peace Lilies Toxic to Cats?"],
    ['are-roses-toxic-to-cats', "Are Roses Toxic to Cats?"],
    ['are-spider-plants-toxic-to-cats', "Are Spider Plants Toxic to Cats?"],
    ['are-tulips-toxic-to-cats', "Are Tulips Toxic to Cats?"],
    ['is-aloe-vera-toxic-to-cats', "Is Aloe Vera Toxic to Cats?"],
    ['is-basil-safe-for-cats', "Is Basil Safe for Cats?"],
    ['is-jade-plant-toxic-to-cats', "Is a Jade Plant Toxic to Cats?"],
    ['is-lucky-bamboo-toxic-to-cats', "Is Lucky Bamboo Toxic to Cats?"],
    ['is-money-tree-toxic-to-cats', "Is a Money Tree Toxic to Cats?"],
    ['is-monstera-toxic-to-cats', "Is Monstera Toxic to Cats?"],
    ['is-pothos-toxic-to-cats', "Is Pothos Toxic to Cats?"],
    ['is-rosemary-safe-for-cats', "Is Rosemary Safe for Cats?"],
    ['is-snake-plant-toxic-to-cats', "Is Snake Plant Toxic to Cats?"],
    ['is-eucalyptus-safe-for-cats', "Is Eucalyptus Safe for Cats?"],
    ['is-lavender-safe-for-cats', "Is Lavender Safe for Cats?"],
    ['is-peppermint-oil-safe-for-cats', "Is Peppermint Oil Safe for Cats?"],
    ['is-tea-tree-oil-safe-for-cats', "Is Tea Tree Oil Safe for Cats?"],
    ['can-cats-drink-milk', "Can Cats Drink Milk?"],
    ['can-cats-eat-cheese', "Can Cats Eat Cheese?"],
    ['can-cats-eat-onions-and-garlic', "Can Cats Eat Onions or Garlic?"],
    ['can-cats-eat-peanut-butter', "Can Cats Eat Peanut Butter?"],
    ['can-cats-eat-scrambled-eggs', "Can Cats Eat Scrambled Eggs?"],
    ['can-cats-eat-tuna', "Can Cats Eat Tuna?"],
    ['can-cats-eat-watermelon', "Can Cats Eat Watermelon?"],
    ['is-chocolate-toxic-to-cats', "Is Chocolate Toxic to Cats?"],
  ],
  care: [
    ['feliway-vs-comfort-zone', 'Feliway vs Comfort Zone'],
    ['churu-vs-delectables', 'Churu vs Delectables'],
    ['cat-nail-clippers-vs-grinder', 'Cat nail clippers vs grinder'],
    ['tuft-and-paw-review', 'Tuft & Paw review'],
  ],
};

const MONEY_GROUP = {
  'best-cat-litter': 'litter', 'best-litter-box-for-cats-that-pee-high': 'litter', 'best-litter-box-furniture': 'litter',
  'litter-robot-4-vs-5-vs-evo': 'robot',
  'best-interactive-cat-toys': 'play', 'best-puzzle-feeders-cats': 'play', 'best-treat-dispenser-toys-indoor-cats': 'play',
  'silvervine-vs-catnip': 'play', 'best-cat-scratchers': 'space', 'best-modern-cat-trees': 'space', 'cat-window-perch': 'space',
  'heated-cat-window-perch': 'warm', 'best-heated-cat-beds-senior-cats': 'warm',
  'best-cat-water-fountains-cats-not-drinking-enough': 'water', 'best-cooling-products-for-cats': 'water',
  'petlibro-vs-petsafe-automatic-feeder': 'away', 'furbo-vs-petcube': 'away',
  'cat-proof-christmas-tree': 'holiday', 'best-gifts-for-cat-lovers': 'holiday',
  'feliway-vs-comfort-zone': 'care', 'churu-vs-delectables': 'care', 'cat-nail-clippers-vs-grinder': 'care',
};

/** Money / commercial pages that get only the "Related comparisons" block (no top box). */
const PAGE_GROUP = {
  'best-cat-litter': 'litter', 'best-litter-box-for-cats-that-pee-high': 'litter', 'best-litter-box-furniture': 'litter',
  'tofu-vs-clay-cat-litter': 'litter', 'really-great-cat-litter-review': 'litter', 'really-great-cat-litter-vs-pidan': 'litter',
  'worlds-best-cat-litter-review': 'litter', 'pretty-litter-vs-tidy-cats': 'litter', 'tuft-and-paw-cove-vs-cubby': 'litter',
  'litter-robot-4-vs-5-vs-evo': 'robot', 'litter-robot-3-vs-4': 'robot', 'litter-robot-alternatives': 'robot',
  'best-automatic-litter-box-multiple-cats': 'robot', 'best-automatic-litter-box-under-200': 'robot',
  'best-litter-for-litter-robot': 'robot', 'litter-robot-4-vs-petlibro-luma': 'robot', 'litter-robot-vs-neakasa-m1': 'robot',
  'petkit-pura-max-2-vs-litter-robot-4': 'robot', 'litter-robot-black-friday-deal': 'robot',
  'best-interactive-cat-toys': 'play', 'best-puzzle-feeders-cats': 'play', 'best-treat-dispenser-toys-indoor-cats': 'play',
  'silvervine-vs-catnip': 'play', 'best-cat-scratchers': 'space', 'best-modern-cat-trees': 'space',
  'cat-window-perch': 'space', 'cat-wall-shelves-vs-cat-trees': 'space', 'cat-tree-black-friday-deals': 'space',
  'best-cat-water-fountains-cats-not-drinking-enough': 'water', 'catit-vs-petsafe-fountain': 'water', 'best-cooling-products-for-cats': 'water',
  'best-heated-cat-beds-senior-cats': 'warm', 'self-warming-vs-heated-cat-bed': 'warm', 'heated-cat-window-perch': 'warm',
  'petlibro-vs-petsafe-automatic-feeder': 'away', 'furbo-vs-petcube': 'away', 'best-cat-carrier-for-car-travel': 'away',
  'black-friday-cat-deals': 'holiday', 'best-gifts-for-cat-lovers': 'holiday', 'cat-proof-christmas-tree': 'holiday',
  'tuft-and-paw-coupon-code': 'holiday', 'gifts-for-new-cat-owners': 'holiday', 'cat-stocking-stuffers': 'holiday',
  'cat-advent-calendar': 'holiday', 'cat-tunnel-christmas-tree-skirt': 'holiday',
  'feliway-vs-comfort-zone': 'care', 'churu-vs-delectables': 'care', 'cat-nail-clippers-vs-grinder': 'care', 'tuft-and-paw-review': 'care',
};

const RELATED_TITLES = { safety: 'More cat safety checks' };
/** Groups whose related list rotates from the current page (large groups). */
const ROTATING = new Set(['safety']);
for (const [s] of RELATED_GROUPS.safety) PAGE_GROUP[s] = 'safety';

/** Funnel config for an article slug, or null. */
export function funnelFor(slug) {
  const target = FUNNEL_MAP[slug];
  if (target && MONEY_PAGES[target]) {
    const group = MONEY_GROUP[target];
    return { kind: 'feeder', target, money: MONEY_PAGES[target], related: relatedFor(group, slug, target) };
  }
  const group = PAGE_GROUP[slug];
  if (group) {
    const own = MONEY_PAGES[slug];
    return { kind: 'money', target: slug, money: own ?? null, related: relatedFor(group, slug), relatedTitle: RELATED_TITLES[group] };
  }
  return null;
}

function relatedFor(group, slug, target) {
  if (ROTATING.has(group)) {
    const all = RELATED_GROUPS[group];
    const i = all.findIndex(([s]) => s === slug);
    const rot = [...all.slice(i + 1), ...all.slice(0, Math.max(i, 0))].filter(([s]) => s !== slug);
    return rot.slice(0, 5);
  }
  const list = (RELATED_GROUPS[group] ?? []).filter(([s]) => s !== slug);
  // Put the funnel target first so it always gets a contextual link.
  if (target) list.sort((a, b) => (a[0] === target ? -1 : b[0] === target ? 1 : 0));
  return list.slice(0, 5);
}

/** Sticky CTA top pick for money pages without a MONEY_PAGES entry. */
export const STICKY_TOP = {
  'tuft-and-paw-review': { name: 'Really Great Cat Litter (Tuft & Paw)', href: TP('really-great-cat-litter'), store: 'Tuft & Paw' },
  'really-great-cat-litter-review': { name: 'Really Great Cat Litter (Tuft & Paw)', href: TP('really-great-cat-litter'), store: 'Tuft & Paw' },
  'really-great-cat-litter-vs-pidan': { name: 'Really Great Cat Litter (Tuft & Paw)', href: TP('really-great-cat-litter'), store: 'Tuft & Paw' },
  'tofu-vs-clay-cat-litter': { name: 'Really Great Cat Litter (Tuft & Paw)', href: TP('really-great-cat-litter'), store: 'Tuft & Paw' },
  'tuft-and-paw-cove-vs-cubby': { name: 'Tuft & Paw Cubby Litter Box', href: TP('cubby-litter-box'), store: 'Tuft & Paw' },
  'tuft-and-paw-coupon-code': { name: 'Tuft & Paw (codes PURR20, TOFULITTER20)', href: 'https://www.awin1.com/cread.php?awinmid=59149&awinaffid=3141803&ued=' + encodeURIComponent('https://www.tuftandpaw.com/'), store: 'Tuft & Paw' },
  'worlds-best-cat-litter-review': { name: "World's Best Multiple Cat Unscented", href: A('B07DGYXWX1'), store: 'Amazon' },
  'litter-robot-3-vs-4': { name: 'Whisker Litter-Robot 4', href: A('B0B7835C46'), store: 'Amazon' },
  'best-automatic-litter-box-multiple-cats': { name: 'Whisker Litter-Robot 4', href: A('B0B7835C46'), store: 'Amazon' },
  'litter-robot-alternatives': { name: 'Neakasa M1 Plus Open-Top', href: A('B0CSKBWBF6'), store: 'Amazon' },
  'best-litter-for-litter-robot': { name: 'Tidy Cats Designed for Litter-Robot', href: A('B0DVZD2LJR'), store: 'Amazon' },
  'best-cat-carrier-for-car-travel': { name: 'Tuft & Paw Porto Cat Carrier', href: TP('porto-cat-carrier'), store: 'Tuft & Paw' },
  'catit-vs-petsafe-fountain': { name: 'Catit LED Flower Fountain', href: A('B0146QXOB0'), store: 'Amazon' },
  'self-warming-vs-heated-cat-bed': { name: 'K&H Thermo-Kitty Heated Cat Bed', href: A('B07HMVNXXS'), store: 'Amazon' },
};

/** Sticky CTA data for an article: internal money page (feeders) or top affiliate pick (money pages). */
export function stickyFor(slug) {
  const f = funnelFor(slug);
  if (!f) return null;
  if (f.kind === 'feeder') {
    return { kind: 'internal', label: f.money.problem, text: f.money.cta, href: `/blog/${f.target}`, target: f.target };
  }
  const pick = f.money?.picks?.[0] ? { ...f.money.picks[0], store: /amazon\./.test(f.money.picks[0].href) ? 'Amazon' : 'Tuft & Paw' } : STICKY_TOP[slug];
  if (!pick) return null;
  return { kind: 'affiliate', label: 'Our top pick', name: pick.name, text: `Check price on ${pick.store}`, href: pick.href, merchant: /amazon\./.test(pick.href) ? 'amazon' : 'awin' };
}
