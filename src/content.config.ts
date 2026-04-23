import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['behavior', 'enrichment', 'new-cat']),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    pinImage: z.string().optional(),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      publisher: z.string().optional(),
    })).optional(),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
