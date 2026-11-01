import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeAffiliateLinks from './src/lib/rehype-affiliate-links.mjs';

export default defineConfig({
  site: 'https://www.pawandsage.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/draft/') && !page.includes('/catplay'),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeAffiliateLinks],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
