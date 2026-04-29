# Saturday Post — "Meet the Paw & Sage cats" (Week 1 variant)

**Use:** Day 6 of launch week, May 2 2026. Single 4:5 image, list-card layout featuring your own cats as the first "residents" of the brand world. Week 2+ uses the same template but with reader-submitted cats from comments.

**Aspect ratio:** 4:5 (1080×1350).
**Reference visual family:** Welcome Post (`Welcome to Paw & Sage.png`) — same eyebrow, same Cormorant Garamond serif, same sage-green footer strip.

---

## Recommended workflow: build in Canva, not Midjourney

Pure typography stacks (5 list entries, dividers, exact alignment) are what Canva does better than image-gen models. Image-gen will misalign list rows or doubt-render the cat names. **Build this one in Canva** using the spec below.

The image-gen prompt further down is a fallback for if you prefer to generate-and-edit, or for Week 2+ when you want a softer photographic background under the list.

---

## Canva spec — primary path

**Canvas:** 1080×1350, cream background `#FBF8F3`.

| Element | Text | Font | Size | Color | Position |
|---|---|---|---|---|---|
| Top eyebrow | `PAW & SAGE` | Inter / DM Sans, uppercase, 200 letter-spacing | 22 px | Sage `#4D7C5A` | Top-center, 80 px from top |
| Decorative leaf | small sage leaf icon (Canva element search "leaf line") | — | 24 px | Sage `#4D7C5A` | Below eyebrow, centered, 16 px gap |
| Headline | `Meet the cats` `behind Paw & Sage.` | Cormorant Garamond, regular | 78 px, line-height 1.05 | Charcoal `#2C2C2C` | Centered, 32 px below leaf |
| Sub-headline | `The first residents of this little corner.` | Inter italic | 22 px | Charcoal `#2C2C2C` | Centered, 24 px below headline |
| Hairline divider | thin horizontal line | — | 1 px height, 480 px wide | Sage `#4D7C5A` at 40% opacity | Centered, 48 px below sub-headline |
| **List entries** (5 rows) | see below | — | — | — | Stacked, left-aligned, max width 760 px, centered horizontally, 20 px gap between rows |
| Footer strip | sage-green block | — | full width × 90 px | Sage `#4D7C5A` | Bottom-anchored |
| Footer text | `pawandsage.com` | Inter, uppercase, 200 letter-spacing | 22 px | Cream `#FBF8F3` | Centered in footer strip |

### List entry format (per row)

Each row is a horizontal block, left-aligned, ~760 px wide:

```
[NAME]  ·  [one-line cozy-spot description]
```

- **Name** — Cormorant Garamond, 36 px, charcoal `#2C2C2C`, left
- **Middle dot separator** — sage `#4D7C5A`, 36 px, 16 px padding either side
- **Description** — Inter regular, 22 px, charcoal `#2C2C2C`, italic OFF
- **Between rows:** thin sage hairline divider 1px, 40% opacity, full row width

### Placeholder rows — fill with your real cats

```
[Cat 1 name]  ·  [where they sleep / weird habit, 1 line max]
[Cat 2 name]  ·  [where they sleep / weird habit, 1 line max]
[Cat 3 name]  ·  [where they sleep / weird habit, 1 line max]
[Cat 4 name]  ·  [where they sleep / weird habit, 1 line max]
[Cat 5 name]  ·  [where they sleep / weird habit, 1 line max]
```

If you have fewer than 5, use 3 or 4 — keep odd numbers if possible (visual rhythm). If you only have 1 or 2 cats, use the format below instead:

```
[Name 1]  ·  [trait]
[Name 2]  ·  [trait]
                        — and the chaos starts here.
```

…with the third line in italic Inter, sage-colored, signing off the list.

---

## Image-gen prompt (alternative path — Sora / Ideogram v3 / GPT-Image)

Use only if you want a softer photographic backdrop under the list (e.g. blurred cream linen texture, faint sage shadows). Midjourney will misspell or misalign — skip MJ for this one.

```
Editorial magazine cover, 4:5 vertical, 1080×1350. Soft cream textured
linen background (#FBF8F3), faintly visible woven texture, no objects,
no photographs, no people, no cats — pure clean editorial layout
canvas with subtle warm gradient from camera-left.

RENDERED TEXT (perfectly spelled, sharp kerning, magazine-quality
typography, no artifacts, no doubled letters):

  • TOP EYEBROW, centered, 80px from top, small uppercase sans-serif
    (Inter), wide letter-spacing, sage-green #4D7C5A:
        "PAW & SAGE"

  • Decorative element below eyebrow: a single small minimalist sage-
    green leaf icon, hand-drawn line style, 24px

  • HEADLINE, centered, 32px below the leaf, large editorial serif
    (Cormorant Garamond), regular weight, two lines, line-height 1.05,
    charcoal #2C2C2C:
        "Meet the cats
         behind Paw & Sage."

  • SUB-HEADLINE, centered, 24px below headline, small italic sans-
    serif (Inter italic), charcoal #2C2C2C:
        "The first residents of this little corner."

  • Hairline horizontal divider, sage #4D7C5A at 40% opacity, 480px
    wide, centered, 48px below sub-headline

  • LIST OF FIVE NAMED CATS, centered as a left-aligned block max
    760px wide, 20px gap between rows, separated by thin sage hairlines:

        [REPLACE: Cat 1 name]  ·  [REPLACE: cozy spot one-liner]
        [REPLACE: Cat 2 name]  ·  [REPLACE: cozy spot one-liner]
        [REPLACE: Cat 3 name]  ·  [REPLACE: cozy spot one-liner]
        [REPLACE: Cat 4 name]  ·  [REPLACE: cozy spot one-liner]
        [REPLACE: Cat 5 name]  ·  [REPLACE: cozy spot one-liner]

    Names in Cormorant Garamond 36px charcoal, middle-dot separators
    in sage, descriptions in Inter regular 22px charcoal.

  • FOOTER: full-width 90px sage-green bar #4D7C5A anchored at the
    bottom, containing the text "pawandsage.com" centered in cream
    #FBF8F3, Inter uppercase 22px wide letter-spacing.

All text perfectly spelled. No additional decoration. No watermark.
No photographs, no cats in the image — only the cream canvas with the
typography layout.

Mood: editorial Kinfolk magazine cover, calm, warm, premium, lived-in
print-publication feel.

Negative: misspelled text, broken letters, doubled letters, photograph
of a cat, photograph of a person, watermark, signature, logos other
than the text "PAW & SAGE", neon, oversaturation, dramatic shadows,
busy background, cluttered layout, AI typography artifacts.
```

⚠️ **Before using this prompt:** replace every `[REPLACE: ...]` placeholder with your real cat names + cozy spots. Image-gen models render exactly what they see — leaving the placeholders in will print `[REPLACE: Cat 1 name]` literally on the image.

---

## Examples — sample list rows for inspiration

If your cats fit any of these archetypes, here are stylistic templates that match the brand voice (warm, observational, slightly amused, never cute-coded):

```
Loki      ·  permanent resident of the bathroom sink
Luna      ·  arrives the moment a laptop opens
Miso      ·  professional sunbeam tracker, paid in commission
Pip       ·  inside any box, regardless of size or contents
Sage      ·  yes, she's the namesake — and she knew first
```

Brand-voice rule: **observe, don't anthropomorphize**. ✅ "permanent resident of the bathroom sink" / ❌ "loves to be a silly little goofball in the bathroom 🥺"

---

## Caption (Sa, May 2)

```
Before we feature your cats, meet ours. 🧡

These five (or however many of yours fit) are the original residents of Paw & Sage — the reason any of this exists. Half the behavior we cover on this account, we figured out by watching one of them do it at 3 AM and Googling for two hours.

Starting next Saturday, this slot belongs to YOU. Drop your cat's name and their weirdest cozy spot in the comments — we'll feature five readers every weekend. 🌿

Who's the bathroom-sink cat in your house?

— Dr. Sage
```

---

## Generation / production checklist

- [ ] Decide: how many of your cats, what their names are, what's the one-line trait per cat
- [ ] Build in Canva using the spec above (faster, more reliable than image-gen)
- [ ] OR: paste the image-gen prompt into Sora / Ideogram v3 with placeholders replaced, generate 4 variations, reject any with typos
- [ ] Verify text alignment and spelling at 100% zoom
- [ ] Export PNG 1080×1350
- [ ] Save to `09-Instagram/Week 1/6-Featured Cats/v1.png`
- [ ] Reuse the Canva file as a **template for Week 2+** — only the headline ("Meet the cats behind Paw & Sage." → "Featured cats of the week.") and the 5 list rows change. Everything else stays locked.
