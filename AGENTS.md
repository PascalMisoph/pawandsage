# AGENTS.md: content guidelines for Paw & Sage

Rules for anyone (human or agent) writing or editing articles in `src/content/blog`.

## Affiliate links

- **Every named product links directly to its affiliate URL (name, image, table cell), plus the CTA button.**
  - Use the exact URL of that product's CTA (same ASIN, tag `pawandsage21-20`). Never invent or guess an ASIN; if a named product has no affiliate URL in the repo, leave it unlinked and flag it.
  - `ProductCard` (MDX) links the product title, and the image when an `image` prop is set, to the same URL as its "Check price on Amazon" button. Raw `.md` product cards link the name with `<a class="product-card-title-link" ...>` inside `.product-card-name`.
  - In Markdown, link the product name in numbered pick headings (`## 1. [Product](url) — Best for…`), in comparison/quick-pick table cells, in bold picks, and at its first mention in body text.
  - Keep the CTA button as well. Don't remove the FTC disclosure.
- Use normal Markdown links. `src/lib/rehype-affiliate-links.mjs` adds `rel="sponsored nofollow noopener"`, `target="_blank"` and the Umami `affiliate-click` event attributes. Positions tell us which placement gets the click: `inline-N` (body text), `heading-N` (headings), `table-N` (table cells), `title-N` / `image-N` (product-card title/image), `productcard-N` (CTA button or full affiliate card).
- The build fails if a `ProductCard` link lacks `tag=pawandsage21-20`.
