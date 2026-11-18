import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // Optional shorter <title> for search results (H1 keeps `title`). Max 60 chars;
    // the " | Paw & Sage" suffix is only added when the total still fits in 60.
    seoTitle: z.string().max(66).optional(), // raw length; the resolved title (after {year}/{month}) is checked against 60 in lib/posts.ts
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['behavior', 'enrichment', 'new-cat', 'seasonal', 'health-safety']),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    pinImage: z.string().optional(),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      publisher: z.string().optional(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    readTime: z.string().optional(),
    // Freeze {year}/{month} title tokens after this date (e.g. coupon codes that expire).
    seasonalUntil: z.coerce.date().optional(),
    // "Is X safe for cats?" pages: traffic-light verdict shown at the top and in the hub.
    // verdict follows the cited source (ASPCA plant database for plants).
    safety: z.object({
      subject: z.string(),
      kind: z.enum(['plant', 'food', 'essential-oil']),
      verdict: z.enum(['safe', 'caution', 'toxic']),
      summary: z.string(),
      sourceName: z.string(),
      sourceUrl: z.string().url(),
      scientificName: z.string().optional(),
    }).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
