/**
 * Pillar guides (/guides/<slug>): curated, sectioned entry points that link every child
 * article of a topic. Sections list slugs in reading order; slugs that do not exist (yet)
 * are skipped at build time, and any post of the pillar's categories that is not placed
 * in a section is listed under "More in this topic" so nothing is orphaned.
 */
export interface PillarSection {
  heading: string;
  blurb: string;
  slugs: string[];
}

export interface PillarSource {
  title: string;
  url: string;
  publisher: string;
}

export interface Pillar {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string[];
  /** Optional urgent note shown above the sections (health topics). */
  vetNote?: string;
  sections: PillarSection[];
  /** Posts in these categories that are not in a section are appended automatically. */
  categories: string[];
  /** Extra slugs (other categories) that belong in the catch-all list. */
  alsoInclude?: string[];
  /** Restrict the catch-all to slugs matching this pattern (for shared categories). */
  catchAllPattern?: string;
  faq: { question: string; answer: string }[];
  sources: PillarSource[];
  image: string;
}

const CORNELL_HS: PillarSource = {
  title: 'Feline Behavior Problems: House Soiling',
  url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-house-soiling',
  publisher: 'Cornell Feline Health Center',
};
const AAFP_HS: PillarSource = {
  title: 'AAFP and ISFM Guidelines for Diagnosing and Solving House-Soiling Behavior in Cats',
  url: 'https://catvets.com/resource/aafp-isfm-house-soiling-guidelines/',
  publisher: 'American Association of Feline Practitioners (AAFP) / ISFM',
};
const ASPCA_LITTER: PillarSource = {
  title: 'Litter Box Problems',
  url: 'https://www.aspca.org/pet-care/cat-care/common-cat-behavior-issues/litter-box-problems',
  publisher: 'ASPCA',
};
const AAHA_PLAY: PillarSource = {
  title: 'How Often Should You Play with Your Cat?',
  url: 'https://www.aaha.org/resources/how-often-should-you-play-with-your-cat/',
  publisher: 'American Animal Hospital Association (AAHA)',
};
const ASPCA_PLANTS: PillarSource = {
  title: 'Toxic and Non-Toxic Plant List: Cats',
  url: 'https://www.aspca.org/pet-care/animal-poison-control/cats-plant-list',
  publisher: 'ASPCA Animal Poison Control Center',
};
const ASPCA_FOODS: PillarSource = {
  title: 'People Foods to Avoid Feeding Your Pets',
  url: 'https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets',
  publisher: 'ASPCA Animal Poison Control Center',
};
const MERCK_EO: PillarSource = {
  title: 'Toxicoses From Essential Oils in Animals',
  url: 'https://www.merckvetmanual.com/toxicology/toxicoses-from-household-hazards/toxicoses-from-essential-oils-in-animals',
  publisher: 'Merck Veterinary Manual',
};
const VCA_KITTEN_LITTER: PillarSource = {
  title: 'How To Litter Train Your Kitten',
  url: 'https://vcahospitals.com/pediatric/kitten/behavior-training/how-to-litter-train-a-kitten',
  publisher: 'VCA Animal Hospitals',
};
const CORNELL_FEEDING: PillarSource = {
  title: 'Feeding Your Cat',
  url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
  publisher: 'Cornell Feline Health Center',
};
const VCA_VOCAL: PillarSource = {
  title: 'Cat Behavior Problems: Vocalization',
  url: 'https://vcahospitals.com/know-your-pet/cat-behavior-problems---vocalization',
  publisher: 'VCA Animal Hospitals',
};

export const POISON_CONTROL_NOTE =
  'If you think your cat ate or touched something toxic, call your veterinarian or the ASPCA Animal Poison Control Center at (888) 426-4435 now (a consultation fee may apply). Pet Poison Helpline is another 24/7 line at (855) 764-7661 (an incident fee applies).';

export const pillars: Pillar[] = [
  {
    slug: 'litter-box',
    title: 'The Litter Box Guide: Problems, Setup, Litter and Cleaning',
    seoTitle: 'Litter Box Problems & Setup: The Complete Guide',
    description:
      'Every Paw & Sage litter box guide in one place: peeing or pooping outside the box, how many boxes, where to put them, cleaning schedules, switching litter and the best boxes and litters.',
    eyebrow: 'Pillar guide',
    intro: [
      'House soiling is the most common behavior problem cat owners report, according to the Cornell Feline Health Center. The good news: most cases come down to a handful of causes you can check one by one: a medical problem, something the cat dislikes about the box, the litter or the location, or stress.',
      'This guide is the map. Start with the problem you are seeing, then work through setup and cleaning. Product guides are at the end, once you know what you actually need.',
    ],
    vetNote:
      'A cat that strains in the litter box and passes little or no urine needs a veterinarian immediately: VCA Animal Hospitals calls a urethral obstruction an absolute emergency. Any sudden change in litter box habits deserves a vet check first, because cats with medical conditions may not always act sick (Cornell Feline Health Center).',
    sections: [
      {
        heading: '1. Something is wrong: start here',
        blurb: 'Accidents, straining, odd habits. Rule out medical causes first, then look at the box.',
        slugs: [
          'cat-peeing-outside-litter-box',
          'cat-pooping-outside-litter-box',
          'cat-peeing-on-bed',
          'cat-sitting-in-litter-box',
          'cat-not-covering-poop',
          'why-cats-kick-litter-everywhere',
          'best-litter-box-for-cats-that-pee-high',
        ],
      },
      {
        heading: '2. Set the box up the way cats prefer',
        blurb: 'Number, location, size and training: the setup rules veterinary guidelines agree on.',
        slugs: ['how-many-litter-boxes-per-cat', 'where-to-put-litter-box', 'how-to-litter-train-a-kitten', 'best-litter-box-furniture', 'tuft-and-paw-cove-vs-cubby'],
      },
      {
        heading: '3. Keep it clean (and stop the smell)',
        blurb: 'Daily scooping, full litter changes and deep cleaning without chemicals cats hate.',
        slugs: ['how-often-to-change-cat-litter', 'how-to-clean-a-litter-box', 'how-to-get-rid-of-litter-box-smell', 'how-to-clean-litter-robot-4'],
      },
      {
        heading: '4. Choose and switch litter',
        blurb: 'Clay, tofu, corn or crystals, and how to change without a protest.',
        slugs: [
          'how-to-transition-cat-to-new-litter',
          'best-cat-litter',
          'tofu-vs-clay-cat-litter',
          'really-great-cat-litter-review',
          'really-great-cat-litter-vs-pidan',
          'worlds-best-cat-litter-review',
          'pretty-litter-vs-tidy-cats',
          'best-litter-for-litter-robot',
        ],
      },
      {
        heading: '5. Thinking about an automatic litter box?',
        blurb: 'What self-cleaning boxes do well, where they fail, and which one fits your home.',
        slugs: [
          'best-automatic-litter-box-multiple-cats',
          'best-automatic-litter-box-under-200',
          'litter-robot-4-vs-5-vs-evo',
          'litter-robot-3-vs-4',
          'litter-robot-alternatives',
          'litter-robot-vs-neakasa-m1',
          'litter-robot-4-vs-petlibro-luma',
          'petkit-pura-max-2-vs-litter-robot-4',
        ],
      },
    ],
    categories: [],
    faq: [
      {
        question: 'How many litter boxes do I need?',
        answer: 'The common rule from Cornell, the ASPCA and the AAFP/ISFM house-soiling guidelines is one box per cat plus one extra, placed in different locations (so two boxes for one cat, three for two cats).',
      },
      {
        question: 'Why did my cat suddenly stop using the litter box?',
        answer: 'Cornell lists three broad causes: a medical problem, an aversion to the box, litter or location, or a preference for another surface or spot. Start with a vet visit, because urinary, kidney, thyroid, digestive and mobility problems can all show up as accidents.',
      },
      {
        question: 'How often should I scoop and change cat litter?',
        answer: 'Scoop at least once a day. The ASPCA suggests washing boxes and replacing the litter completely once a week; the owner guide based on the AAFP/ISFM guidelines says to wash the box every 1 to 4 weeks with soap and hot water only.',
      },
    ],
    sources: [CORNELL_HS, AAFP_HS, ASPCA_LITTER, VCA_KITTEN_LITTER],
    image: '/blog/best-cat-litter-hero.png',
  },
  {
    slug: 'cat-behavior',
    title: 'Cat Behavior Guide: What Your Cat Is Telling You',
    seoTitle: 'Cat Behavior Guide: Why Cats Do What They Do',
    description:
      'All Paw & Sage cat behavior guides in one place: staring, kneading, headbutting, night meowing, 3 AM wake-ups, biting, scratching, and when a behavior change means a vet visit.',
    eyebrow: 'Pillar guide',
    intro: [
      'Most "weird" cat behavior has a sensible reason once you know how cats communicate: scent, routine, hunting instinct and a strong need to feel safe. These guides explain the common ones and the fixes that actually work.',
      'One rule runs through all of them: a sudden change in behavior, especially in an older cat, is a reason to call your veterinarian before you change anything at home. VCA Animal Hospitals recommends a veterinary exam to rule out pain, endocrine disease and high blood pressure in middle-aged and older cats that start vocalizing.',
    ],
    sections: [
      {
        heading: 'Communication and affection',
        blurb: 'How cats say hello, claim you and ask for things.',
        slugs: ['why-cat-stares-at-me', 'why-does-my-cat-headbutt-me', 'why-does-my-cat-knead', 'why-does-my-cat-stare-at-the-wall'],
      },
      {
        heading: 'Night-time behavior',
        blurb: 'Early wake-ups, night meowing and the evening zoomies.',
        slugs: ['why-cat-wakes-you-3am', 'cat-meowing-at-night', 'how-to-tire-out-a-cat'],
      },
      {
        heading: 'Problem behavior and how to redirect it',
        blurb: 'Biting, knocking things over, scratching furniture and destructive boredom.',
        slugs: ['why-cat-bites-when-petted', 'why-cat-knocks-things-off-tables', 'how-to-stop-cat-scratching-furniture', 'cat-destroying-everything', 'best-cat-scratchers'],
      },
      {
        heading: 'Mood, boredom and loneliness',
        blurb: 'Telling a bored cat from a lonely or unwell one.',
        slugs: ['cat-bored-lonely-or-sick', 'signs-cat-is-bored', 'indoor-cat-depression', 'do-single-cats-get-lonely'],
      },
      {
        heading: 'Litter box behavior',
        blurb: 'Accidents and odd litter habits have their own guide.',
        slugs: ['cat-peeing-outside-litter-box', 'cat-not-covering-poop', 'why-cats-kick-litter-everywhere'],
      },
    ],
    categories: ['behavior'],
    faq: [
      {
        question: 'When is a cat behavior change a medical problem?',
        answer: 'Any sudden change deserves a vet check. Cornell notes that cats with medical conditions may not always act sick, and VCA recommends an exam to rule out pain, endocrine dysfunction and hypertension in middle-aged or elderly cats that start vocalizing.',
      },
      {
        question: 'Should I punish my cat for bad behavior?',
        answer: 'No. Cornell and the AAFP/ISFM-based owner guidance both warn that punishment does not work and can make problems such as house soiling worse. Redirect the behavior and fix the trigger instead.',
      },
    ],
    sources: [VCA_VOCAL, CORNELL_HS, AAHA_PLAY],
    image: '/blog/why-cat-stares-at-me.png',
  },
  {
    slug: 'indoor-cat-enrichment',
    title: 'Indoor Cat Enrichment Guide: Play, Climbing and Busy Days',
    seoTitle: 'Indoor Cat Enrichment Guide: Play, Climb & Explore',
    description:
      'Every Paw & Sage enrichment guide in one place: how much play an indoor cat needs, play routines, puzzle feeders, vertical space, window perches and enrichment for busy owners.',
    eyebrow: 'Pillar guide',
    intro: [
      'Indoor cats still have a hunter\'s brain. The American Animal Hospital Association (AAHA) suggests an average of two or three 10 to 15 minute interactive play sessions a day, adjusted for age, energy and health, and explains that unmet hunting instincts can turn into frustration and problem behavior.',
      'Start with play, then add the environment: places to climb, scratch, watch and forage. The guides below are grouped in that order.',
    ],
    sections: [
      {
        heading: '1. Play: how much and how',
        blurb: 'The hunt sequence, session length and toys that hold attention.',
        slugs: ['how-much-playtime-does-a-cat-need', 'how-to-tire-out-a-cat', 'cat-wont-play-with-toys', 'do-cats-get-bored-of-their-toys', 'best-interactive-cat-toys', 'silvervine-vs-catnip'],
      },
      {
        heading: '2. Food as enrichment',
        blurb: 'Make meals a little harder and a lot more interesting.',
        slugs: ['best-puzzle-feeders-cats', 'cat-puzzle-feeder-wet-food', 'best-treat-dispenser-toys-indoor-cats'],
      },
      {
        heading: '3. Vertical space, views and scratching',
        blurb: 'Climbing, perching and window watching for small and large homes.',
        slugs: ['best-modern-cat-trees', 'cat-wall-shelves-vs-cat-trees', 'best-cat-wall-ideas-bored-indoor-cats', 'small-apartment-cat-enrichment-vertical-space', 'cat-window-perch', 'best-cat-scratchers'],
      },
      {
        heading: '4. Busy owners and cats home alone',
        blurb: 'Keeping a cat engaged while you work.',
        slugs: ['how-to-keep-cat-busy-while-at-work', 'how-to-keep-indoor-cat-busy-while-working-from-home', 'low-effort-cat-enrichment-products-busy-owners', 'mental-stimulation-for-cats'],
      },
      {
        heading: '5. Ideas and checklists',
        blurb: 'Quick wins and DIY projects.',
        slugs: ['indoor-cat-enrichment-ideas', 'diy-cat-enrichment', 'winter-enrichment-indoor-cats'],
      },
    ],
    categories: ['enrichment'],
    faq: [
      {
        question: 'How much play does an indoor cat need?',
        answer: 'AAHA suggests an average of two or three 10 to 15 minute interactive play sessions per day, with kittens often needing several short sessions and seniors a gentler pace. Short, frequent sessions work better than one long one.',
      },
      {
        question: 'What is the best time of day to play with a cat?',
        answer: 'AAHA notes that cats are most active at dawn and dusk, so morning and evening sessions work well, and a session before bed can make night-time wake-ups less likely.',
      },
    ],
    sources: [AAHA_PLAY],
    image: '/blog/enrichment-hero.png',
  },
  {
    slug: 'new-cat',
    title: 'New Cat Guide: The First Weeks, Supplies and Setup',
    seoTitle: 'New Cat Guide: First Weeks, Supplies & Setup',
    description:
      'Bringing home a kitten or cat? Every Paw & Sage new-cat guide in one place: the checklist, litter training, litter box setup, feeding basics, carriers, safety at home and the first big purchases.',
    eyebrow: 'Pillar guide',
    intro: [
      'The first weeks set the habits. VCA Animal Hospitals recommends keeping a new kitten in one room, ideally the room where its litter box will stay, and only letting it roam unsupervised once it uses the box consistently. The guides below follow that order: prepare, settle in, then upgrade.',
      'For food, the Cornell Feline Health Center suggests keeping treats to no more than 10 to 15 percent of daily calories and avoiding raw meat; human foods are covered in our cat safety hub.',
    ],
    sections: [
      {
        heading: '1. Before the cat comes home',
        blurb: 'What to buy, in the order you need it.',
        slugs: ['new-kitten-checklist', 'gifts-for-new-cat-owners', 'best-cat-carrier-for-car-travel'],
      },
      {
        heading: '2. Litter box basics',
        blurb: 'Training, setup and the right litter from day one.',
        slugs: ['how-to-litter-train-a-kitten', 'how-many-litter-boxes-per-cat', 'where-to-put-litter-box', 'best-cat-litter'],
      },
      {
        heading: '3. Safe home',
        blurb: 'Plants, foods and household products to check.',
        slugs: ['are-spider-plants-toxic-to-cats', 'is-pothos-toxic-to-cats', 'can-cats-drink-milk', 'holiday-plants-toxic-to-cats', 'cat-window-balcony-safety'],
      },
      {
        heading: '4. Everyday care',
        blurb: 'Nails, scratching, water and time alone.',
        slugs: ['how-to-trim-cat-nails-at-home', 'how-to-stop-cat-scratching-furniture', 'get-cat-to-drink-more-water', 'can-i-leave-my-cat-alone-for-a-weekend'],
      },
    ],
    categories: ['new-cat'],
    faq: [
      {
        question: 'How do I litter train a new kitten?',
        answer: 'VCA recommends a low-sided box with about 3 inches of litter in a quiet spot away from food and beds, keeping the kitten in one room until it uses the box consistently, and never punishing accidents; clean them with an enzymatic cleaner.',
      },
      {
        question: 'Can I give my new cat milk?',
        answer: 'It is not recommended. Cornell notes that many cats are lactose-intolerant and can develop gastrointestinal problems from dairy, and the ASPCA lists milk and dairy among foods that can cause diarrhea or digestive upset.',
      },
    ],
    sources: [VCA_KITTEN_LITTER, CORNELL_FEEDING, CORNELL_HS],
    image: '/blog/kitten-checklist-hero.png',
  },
  {
    slug: 'is-it-safe-for-cats',
    title: 'Is It Safe for Cats? Plants, Foods and Essential Oils',
    seoTitle: 'Is It Safe for Cats? Plants, Foods & Essential Oils',
    description:
      'Toxic or safe for cats? A traffic-light list of houseplants, people foods and essential oils, with verdicts from the ASPCA Animal Poison Control Center and veterinary sources.',
    eyebrow: 'Safety hub',
    intro: [
      'Each entry below links to a short, sourced page: the verdict, what makes it risky, the signs to watch for and what to do. Plant verdicts follow the ASPCA Animal Poison Control Center\'s toxic and non-toxic plant database; foods and essential oils follow ASPCA, Pet Poison Helpline, VCA, Merck Veterinary Manual and Cornell guidance.',
      '"Non-toxic" on the ASPCA list does not mean "a good snack": even the ASPCA entry for the non-toxic money tree lists nausea, vomiting and loose stool as possible signs after a cat chews it.',
    ],
    vetNote: POISON_CONTROL_NOTE,
    sections: [],
    categories: ['health-safety'],
    alsoInclude: ['holiday-plants-toxic-to-cats', 'is-tinsel-bad-for-cats', 'can-cats-eat-turkey-thanksgiving', 'summer-dangers-for-cats', 'heatstroke-in-cats'],
    faq: [
      {
        question: 'What is the ASPCA poison control number?',
        answer: 'The ASPCA Animal Poison Control Center is (888) 426-4435, available 24 hours a day; a consultation fee may apply. Pet Poison Helpline is (855) 764-7661 (an incident fee applies).',
      },
      {
        question: 'Are essential oils safe around cats?',
        answer: 'Use great caution. The Merck Veterinary Manual says cats are more sensitive to essential oils than dogs because they are deficient in the liver enzyme glucuronyl transferase, and advises never applying concentrated oils to pets and keeping pets out of rooms while a diffuser runs.',
      },
      {
        question: 'Which common houseplants are non-toxic to cats?',
        answer: 'The ASPCA lists spider plant, money tree (Pachira aquatica), moth orchids (Phalaenopsis), calathea, roses, basil and rosemary as non-toxic to cats. Pothos, snake plant, peace lily, monstera, aloe, jade, tulips and dracaena (including lucky bamboo) are listed as toxic.',
      },
    ],
    sources: [ASPCA_PLANTS, ASPCA_FOODS, MERCK_EO],
    image: '/blog/holiday-plants-toxic-to-cats-hero.png',
  },
];

export const pillarBySlug = Object.fromEntries(pillars.map((pillar) => [pillar.slug, pillar]));
