# Instagram Welcome Post — Image Generation Prompt

**Use:** First post on @pawandsage Instagram. Editorial Pinterest-pin style with `Welcome to Paw & Sage` and `pawandsage.com` rendered directly into the image.
**Aspect ratio:** 4:5 (1080×1350) — matches Pinterest pin layout, native IG feed format.
**Reference layout:** `03-Pinterest/pin-designs/legacy-1/#1.png` (eyebrow tag → serif headline → sans subtitle → cat lower-right → domain footer).

**Best models for this prompt** (typography reliability, best → worst):
1. **Sora image** or **GPT-Image** — first-try perfect spelling
2. **Ideogram v3** — first-try perfect spelling
3. **Flux 1.1 Pro Ultra** — usually correct, regenerate if typos
4. **Midjourney v7** — generate 4 variations, pick the one with correct spelling

---

## The prompt

```
Photorealistic editorial magazine cover, 4:5 vertical, 1080×1350.

SCENE: A calm, plush-coated ginger orange tabby cat sits upright on a
soft cream linen bedspread, tail curled loosely around the front paws.
The cat looks gently toward the camera with relaxed almond-shaped amber-
green eyes — soft, trusting, not staring. Warm orange fur with subtle
cream belly and faint tabby markings on the forehead. Whiskers natural,
ears relaxed forward.

SETTING: A sunlit bedroom corner in a calm cream-and-sage home. Out-of-
focus background shows a cream linen headboard, a small brushed-gold
reading lamp glowing softly on a wooden bedside table, a stack of two
well-worn hardcover books, and a single trailing pothos plant at the
frame edge. Mid-morning window light from camera-left, soft and diffused,
no hard shadows.

PALETTE LOCKED: cream #FBF8F3 dominant, sage-green #4D7C5A accents in a
folded throw and a ceramic mug, warm brushed-gold from the lamp, ginger
orange from the cat as the focal warmth. No other saturated colors.

COMPOSITION: The cat is positioned in the LOWER-RIGHT third of the
frame, its head roughly on the lower third-line. The UPPER-LEFT two-
thirds is calm negative space — soft cream wall and out-of-focus
headboard only — reserved for the rendered headline. Shallow depth of
field (f/2.8 feel), 85mm lens, neutral white balance, gentle film grain.

RENDERED TEXT (perfectly spelled, sharp kerning, editorial magazine
quality, no broken letters, no doubled letters, no AI typography
artifacts):

  • EYEBROW LABEL, top-left, 80px from top edge and 80px from left edge,
    small uppercase sans-serif (Inter or DM Sans), wide letter-spacing,
    charcoal #2C2C2C:
        "PAW & SAGE"

  • HEADLINE, beneath the eyebrow with a 24px gap, large editorial serif
    (Cormorant Garamond or Playfair Display, regular weight), three
    lines, left-aligned, line-height 1.05, charcoal #2C2C2C:
        "Welcome to
         Paw & Sage"

  • SUBTITLE, beneath the headline with a 32px gap, small sans-serif
    italic (Inter or DM Sans italic), charcoal #2C2C2C:
        "Calm answers for curious cat people."

  • FOOTER, bottom-center, 60px from the bottom edge, very small
    uppercase sans-serif (Inter or DM Sans), wide letter-spacing,
    charcoal #2C2C2C:
        "pawandsage.com"

All text must be perfectly spelled, crisp, and aligned. No additional
text anywhere in the image. No watermark. No logo. No signature.

MOOD: Warm, calm, trustworthy, lived-in. Editorial documentary feel —
Kinfolk or Cereal magazine cover, not pet-brand stock. Quiet expertise.

NEGATIVE: misspelled text, broken letters, doubled letters, extra words,
foreign characters, watermark, signature, human hands, human face, white
lab coat, stethoscope, clinical setting, studio backdrop, neon,
oversaturated colors, dramatic shadows, fisheye, wide angle, AI plastic
fur, uncanny eyes, double pupils, extra limbs, distorted paws, glamour
lighting, HDR look, oversharpening, busy background, clutter.
```

**Midjourney v7 suffix:** `--ar 4:5 --style raw --s 50`
**Ideogram v3:** set rendering mode to **Magic Prompt OFF**, **Style: Realistic**, **Aspect 4:5**.
**Sora image / GPT-Image:** paste prompt as-is, set aspect to 4:5 (or 1024×1280 / closest available).
**Flux 1.1 Pro Ultra:** set aspect to 4:5, raw mode ON, prompt-upsampling OFF.

---

## Suggested IG caption (separate from image text)

```
Welcome to Paw & Sage. 🌿

A quiet corner of the internet for people who actually want to
understand their cat — not just feed them and hope.

Here you'll find:
• Cat behavior explained, without the lecture
• Practical fixes that work in real homes
• Honest reviews of the toys and gear we'd buy ourselves

No clickbait. No guilt-trips. Just calm, useful answers.

Pull up a chair. The tea's still warm.

— Dr. Sage
```

---

## Generation checklist

- [ ] Run prompt in chosen model (Sora image / Ideogram v3 / GPT-Image preferred for typography)
- [ ] Generate 4 variations
- [ ] Reject any frame with: misspelled text, broken kerning, cat covering the headline area, distorted cat anatomy, more than 4 text blocks
- [ ] Pick the variation with: calmest cat eyes, cleanest upper-left negative space, sharpest typography
- [ ] Upscale to 1080×1350 minimum
- [ ] Save final to `09-Instagram/welcome-post/v1.png`
- [ ] Cross-check ginger-cat consistency: if this becomes the IG brand-cat, plan a Dr. Sage video frame featuring a ginger cat (not the brown tabby from the hero still) so IG and video output stay visually unified
