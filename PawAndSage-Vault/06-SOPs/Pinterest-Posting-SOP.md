# SOP: Pinterest Posting

## For Each New Article: 5 Pins (the Paw & Sage Pin Formula)

Every article gets **5 distinct pins** (not one design reused). Each pin is a fresh creative with its own hook, targeting a specific goal. The five angles are fixed; the wording adapts to the article.

| # | Angle | Primary goal | Hook pattern | Proven basis (May 2026 data) |
|---|-------|--------------|--------------|------------------------------|
| 1 | **Problem / Question** | Outbound | "Is your cat...?" / "Why won't my cat...?" | Top converter: "Is Your Indoor Cat Bored?" — 7% CTR |
| 2 | **Listicle (numbered)** | **Saves** | "X ways / reasons / signs..." with 3 preview tips shown in the image | Highest-reach pin was a numbered listicle (135 impressions) |
| 3 | **Product / Price** | Outbound | "The $X toy that..." / "If catnip does nothing, try this" | "The $8 Toy That..." — 6.5% CTR |
| 4 | **Emotional / Relatable** | Reach + click | A relatable scene the owner recognizes ("You bought the toys, your cat picked the box") | — |
| 5 | **"Save this" utility** | **Saves** | A checklist, schedule, or comparison the reader wants to keep | Attacks the May Saves bottleneck (0.6%) |

**Why this mix:** May analysis showed conversions came from problem hooks and product/price hooks (Outbound), while reach came from numbered listicles. Saves were the bottleneck (0.6%), so **two of the five pins (listicle + "save this") are deliberately built to be saved** — saves drive Pinterest distribution, which compounds reach for all pins. Treat Saves as the leading KPI in growth months, not Outbound. See `03-Pinterest/analytics/<period>/analysis.md`.

## Design Rules
1. **Fresh, never recycled.** All 5 are distinct creatives (new image + hook). Never re-pin the same pin across boards — Pinterest devalues it.
2. **Editorial cover style**, 1000×1500 px, rendered via **one complete image-generation prompt** (not a photo + local fonts). System: cream field #FBF8F3, Playfair Display headline #2C2C2C, Nunito Sans subtext #666666, terracotta label #C4725A, sage footer bar #4D7C5A with "pawandsage.com". (See `CLAUDE.md` and `07-Resources/Board-Cover-Prompts.md`.)
3. **Save-optimized creatives** (pins 2 & 5): show numbered preview tips or a mini checklist *in the image*, and use "save this" language in the description.
4. **Copy is dash-free** (no hyphens or em dashes) so it stays clean for Pinterest and Canva.

## Copy Per Pin
- **Title:** include the primary keyword, natural phrasing.
- **Description:** 2-3 sentences with keywords; for pins 2 & 5 include an explicit "Save this..." line.
- **Alt text:** plain description of the image + headline.
- **Link:** the article's live pawandsage.com URL (confirm it returns 200 first — never pin to a 404).

## Scheduling
1. **2 pins per day**, ~10:00 and 15:30 Berlin (steady daily cadence beats bursts).
2. Spread one article's 5 pins **across 5 different boards** and **at least ~2 days apart** (never two pins of the same article back to back).
3. Interleave articles so consecutive pins point to different destinations.
4. Boards: Cat Behavior Explained · Cat Owner Hacks · Indoor Cat Life · Best Cat Products · New Cat Parent Guide.

## After Upload (close the data loop)
1. **Log each pin's ID** (from its Pinterest URL) into `03-Pinterest/analytics/pin-id-map.md` with its article and angle. This is what makes article-level ROI measurable in the next monthly analysis — skipping it recreates the May data gap.
2. Note the live pins in the relevant brief file.

## Reference
- **Worked example:** `03-Pinterest/Backlog-Pin-Briefs-Juni-2026.md` (20 briefs, 4 articles × 5 pins).
- **Rationale / data:** `03-Pinterest/analytics/2026-04-29_to_2026-05-29/analysis.md`.

## Daily Routine (~10 min)
1. Confirm the day's scheduled pins went out.
2. Check notifications, respond to comments.
3. Once a week: review Saves trend (the leading indicator).
