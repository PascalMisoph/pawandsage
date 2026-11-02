import { SITE_URL } from '../lib/site';

// A sitemap index must list urlset sitemaps, not another index. @astrojs/sitemap writes
// all URLs to sitemap-0.xml (up to 45,000 entries), so point straight at it.
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
