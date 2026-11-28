import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeAffiliateLinks from './src/lib/rehype-affiliate-links.mjs';
import rehypeFunnelBox from './src/lib/rehype-funnel-box.mjs';
import rehypeTableScroll from './src/lib/rehype-table-scroll.mjs';

export default defineConfig({
  site: 'https://www.pawandsage.com',
  trailingSlash: 'never',
  build: {
    // Inline the (small, ~20 KB) CSS so it no longer blocks first render.
    inlineStylesheets: 'always',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/draft/') && !page.includes('/catplay'),
    }),
  ],
  markdown: {
    // Bump `version` whenever the plugin changes: it alters the config digest so
    // Astro's content cache (also restored on Vercel) re-renders every article.
    rehypePlugins: [
      [rehypeFunnelBox, { version: 4 }],
      [rehypeAffiliateLinks, { version: 4 }],
      [rehypeTableScroll, { version: 1 }],
    ],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
