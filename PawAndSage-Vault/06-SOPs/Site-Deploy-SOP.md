# SOP: Deploying Paw & Sage Live

## Goal
Push only the files needed for the site change, verify the build locally, then confirm the live site actually serves the new output.

## Before You Push
1. Confirm the content exists in `src/content/blog/` and not only in `02-Articles/drafts/`
2. Confirm every `heroImage` path exists in `public/blog/`
3. Confirm frontmatter uses a valid category only:
   - `behavior`
   - `enrichment`
   - `new-cat`
4. If the article belongs in a cluster sequence, update `src/lib/clusters.ts`
5. Check affiliate links:
   - Amazon only for now
   - Tag must be `pawandsage21-20`
   - No placeholder ASINs like `XXXXX`

## Local Verification
1. Run `npm run build`
2. Do not push if build fails
3. If build fails, check these first:
   - missing hero image in `public/blog/`
   - invalid frontmatter category
   - broken content schema
   - malformed Markdown or HTML in the article body

## Git Best Practice
1. Stage only the files needed for this release
2. Avoid `git add .` unless the whole repo is intentionally part of the deploy
3. Check `git status`
4. Check `git diff --staged`
5. Commit with a narrow message that describes the site change

## Standard Deploy Flow
1. Push to `main`
2. Wait for Vercel to build
3. Verify the deploy actually finished before assuming the site is live

## If Vercel Does Not Update
Use a manual production deploy:

```bash
npx vercel --prod --yes
```

This is the fallback when Git push succeeded but the public site still serves the old output.

## Live Smoke Test
After deploy, check:
1. Homepage returns `200`
2. Target article URL returns `200`
3. Blog index shows the article
4. Hero image loads
5. Affiliate links are present on the live page when expected
6. Article footer disclosure is present on affiliate posts

Useful checks:

```bash
curl -I https://www.pawandsage.com
curl -I https://www.pawandsage.com/blog/your-article-slug/
```

## Article Publish Checklist
1. Article exists in `src/content/blog/`
2. Hero image exists in `public/blog/`
3. Local build passes
4. Push to `main`
5. Manual Vercel deploy if needed
6. Confirm article is live
7. Submit URL to Google Search Console
8. Move Vault draft to `02-Articles/published/`
9. Update `Article-Index.md`

## Known Pitfalls
- Draft exists in Obsidian but not in `src/content/blog/`
- Article file committed without the hero image
- Invalid category like `solution`
- Live legal pages claiming affiliate programs that are not actually active
- Vercel build succeeds locally but production still serves cached old output until a fresh deploy is aliased
