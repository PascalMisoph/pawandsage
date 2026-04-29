# Dr. Sage — AI Avatar Production Reference

The complete prompt library and settings used to create **Dr. Sage**, the Paw & Sage on-camera avatar. Everything in this file is copy-paste ready — pull what you need, paste into the tool, generate.

> Established in pilot session, April 2026. Pilot video: `04-Video/dr-sage-pilot-v1.mp4`. Visual reference set: `04-Video/dr-sage-pilot-frames/frame-01.png` through `frame-08.png`.

---

## Pipeline overview

```
1. IMAGE       Midjourney / Flux / Sora        →  Dr. Sage portrait still
2. AUDIO       ElevenLabs (Multilingual v2)    →  Voiced script (.wav)
3. VIDEO       Kling Avatar V2 on Replicate    →  Lip-synced video
4. CLEANUP     ffmpeg drawbox                  →  Watermark cover bar
5. CAPTIONS    CapCut Auto Captions            →  Burned-in subtitles
6. EXPORT      CapCut                          →  1080×1920 MP4 ready to ship
```

**Cost per finished short**: ~€2 (Kling std) + €0 everything else = **~€2 / clip**.
**Time per finished short** once dialed in: **~35 minutes**.

---

## 1. Image generation prompt — Dr. Sage character

Use to generate the canonical still in Midjourney v7 / Flux Pro / Sora image. Generate one hero frame, lock it as character reference for any future variations.

```
Photorealistic portrait of Dr. Sage, a 32-year-old female veterinarian and
cat-behavior expert. Warm, intelligent, approachable face — the kind of person
you'd actually want advice from. Soft natural features, light freckles across
the nose, calm half-smile with closed lips, direct but gentle eye contact with
camera. Hazel-green eyes. Shoulder-length wavy auburn-brown hair, loosely tucked
behind one ear, no strands across the mouth. Light, even skin retouching — pores
visible, not airbrushed.

Wardrobe: a soft sage-green linen blouse (#4D7C5A) under an unbuttoned cream
cardigan (#FBF8F3). A small brushed-gold pendant in the shape of a stylized
paw or leaf at the collarbone. No white coat, no stethoscope — expertise read
through presence, not props.

Setting: a sunlit, plant-filled home consultation nook. Out-of-focus background
shows a cream linen armchair, a stack of well-worn books, a sage-green ceramic
mug, and a relaxed tabby cat curled on a wooden shelf. Mid-morning window light
from camera-left, soft and diffused, no hard shadows. Cream and sage tones
dominate; warm gold accent from a brass desk lamp.

Composition: centered medium close-up, head and upper shoulders, eyes on the
upper-third line, 4:5 vertical aspect ratio. Front-facing, head perfectly level,
neutral closed mouth suitable for lip-sync animation. Shallow depth of field
(f/2.8 feel), 85mm lens, neutral white balance, gentle film grain.

Mood: warm, trustworthy, calmly competent. Like a friend who happens to be a
cat expert. Not clinical, not corporate, not glossy-influencer. Editorial
documentary feel — closer to a Kinfolk magazine portrait than a stock photo.

Negative: white lab coat, scrubs, stethoscope, clipboard, hospital, exam table,
heavy makeup, glamour lighting, dramatic shadows, fisheye, wide angle, text,
logo, watermark, AI plastic skin, uncanny eyes, extra fingers, distorted ears,
hair across mouth, open mouth, teeth showing.
```

**Why this prompt works**: every visual cue translated faithfully into the generated character (verified across all 8 reference frames). The brand world (sage/cream/gold + plants + warm books) is locked into the image, so all future videos starting from this still inherit the brand automatically.

---

## 2. ElevenLabs — voice generation

### Settings (lock these for every Dr. Sage clip)

| Setting | Value | Why |
|---|---|---|
| **Model** | Eleven Multilingual v2 | Most stable across runs — critical for brand consistency |
| **Voice** | **Matilda** (ElevenLabs voice library) | Locked April 2026 — warm, grounded, mid-register. The official Dr. Sage voice. |
| **Stability** | 50 | Balanced — keeps her recognizable across clips without flattening delivery |
| **Similarity** | 75 | High enough to prevent drift, low enough to allow natural variation |
| **Style exaggeration** | 15 | Low — keeps her grounded, not theatrical |
| **Speaker boost** | ON | |
| **Speed** | 0.95 | Slightly slower than default — the brand voice needs breathing room |

### Script formatting rules

- **Use `<break time="X.Xs" />` tags for pauses, NOT ellipses.** ElevenLabs ignores ellipses for actual silence; `<break>` produces real, predictable pause length.
- Pauses between phrases: `0.3–0.5s`
- Pauses at commas mid-thought: `0.4s`
- Dramatic beats / between paragraphs: `0.7–1.0s`
- IPA pronunciation fix syntax (use only if a word is mispronounced): `<phoneme alphabet="ipa" ph="ˈskʌtəl">scuttle</phoneme>`

### Sample script — pilot video (`Why Your Cat Knocks Things Off Tables`)

```
You're at your desk. <break time="0.4s" /> You hear it — <break time="0.5s" /> the slow scrape of a glass being nudged toward the edge. <break time="0.8s" /> Eye contact. <break time="0.6s" /> Then... <break time="0.7s" /> gone. <break time="1.0s" />

Your cat isn't being a jerk. <break time="0.5s" /> That paw-tap is a hunter's reflex — <break time="0.3s" /> testing if "prey" will move, scuttle, or fight back. <break time="0.6s" /> And the spectacular crash? <break time="0.4s" /> You reacted. <break time="0.4s" /> Now it's a game. <break time="0.9s" />

The fix isn't scolding. <break time="0.5s" /> It's giving that reflex somewhere to go — <break time="0.3s" /> five minutes of wand-toy hunting before dinner. <break time="0.7s" /> Try it tonight. <break time="0.4s" /> Your shelves will thank you.
```

### Generation tips

- **Run 3–4 takes**, pick the best. Multilingual v2 has run-to-run variance — take 3 is often noticeably better than take 1.
- **Drift fix** (if voice changes mid-clip): raise Stability to 60–65.
- **Too dramatic**: drop Style to 5–10.
- **Export format**: WAV 44.1 kHz preferred (lossless for downstream lip-sync), MP3 192 kbps acceptable.
- **File naming**: `dr-sage_<topic-slug>_v<N>.wav` — e.g. `dr-sage_pilot_knocks-things-off_v1.wav`.

---

## 3. Kling Avatar V2 — video generation

### Platform

- **Replicate**: `kwaivgi/kling-avatar-v2`
- URL: replicate.com/kwaivgi/kling-avatar-v2
- Pricing: `std` mode `$0.056/sec output` (~€2 for 35s clip), `pro` mode `$0.11/sec` (~€4 for 35s)

### Inputs

| Field | Value |
|---|---|
| `image` | Dr. Sage hero still (PNG, ≥720×900, ≤10MB, front-facing, neutral closed mouth) |
| `audio` | ElevenLabs WAV/MP3 (≤5MB, leading silence trimmed if >0.3s) |
| `prompt` | Motion prompt below |
| `mode` | `std` for tests/internal, `pro` for hero/published clips |

### Motion prompt (paste once, no duplicates)

```
Warm, grounded delivery — like she's telling a friend something she finds quietly amusing. Calm, steady eye contact with the camera throughout, with natural soft blinks. Subtle head movement only: a small tilt to one side during the opening scene-setting lines, a barely-there knowing smile and single small nod on "Your cat isn't being a jerk," brows lift slightly on "hunter's reflex," and a soft, conspiratorial half-smile on "Now it's a game." Settle into a sincere, encouraging expression for the closing fix — gentle nod on "Try it tonight," eyes warm on the final beat. Shoulders relaxed, no large gestures, no exaggerated mouth movement between phrases. Energy level low-medium: confident, unhurried, never performative.
```

### Adapting the motion prompt for new scripts

The structure that works:
1. **Opening sentence** — set the energy (warm/grounded/playful/etc.) + delivery style ("like she's telling a friend...")
2. **Eye / blink baseline** — "calm, steady eye contact with natural soft blinks"
3. **Beat-specific direction** — name 3–5 key script lines and what micro-expression should land on each (e.g. "small nod on X", "knowing smile on Y", "brows lift on Z")
4. **Closing direction** — what energy to settle into for the CTA / final beat
5. **Constraints** — what NOT to do (no large gestures, no exaggerated mouth movement, etc.)
6. **Energy level statement** — "low-medium" or whatever fits the topic; closes the prompt

### Generation tips

- **First run on `std`** (~€2). Only re-run on `pro` once you've validated the take and want a publishable hero version.
- **Identity drift**: regenerate with new seed. Don't try to fix with prompt tweaks.
- **Mouth artifacts**: lower CFG/guidance to 4.0 if exposed.
- **Lips slightly out of sync**: re-trim leading silence from audio (Audacity).
- **Too stiff**: add "bright alert eyes, micro-engagement throughout" to the prompt.
- **Too twitchy**: shorten the prompt to just the energy/baseline lines.

---

## 4. Post-production — watermark cover bar

Kling `std` outputs include a watermark in the lower-third. To cover with a brand-coloured caption strip (which CapCut captions land on top of):

```bash
ffmpeg -y -i input.mp4 \
  -vf "drawbox=x=0:y=920:w=720:h=160:color=0x2C2C2C:t=fill" \
  -c:v libx264 -crf 18 -preset medium \
  -c:a copy \
  output-captionbar.mp4
```

- Box position `y=920, h=160` is calibrated for Kling's 720×1280 portrait output. If output dimensions change, recalibrate.
- Charcoal `#2C2C2C` matches brand palette and reads as intentional caption strip, not as a fix.
- Full opacity (no `@0.X` after color) — the watermark is bright and bleeds through any transparency.

If you upgrade to Kling `pro`, no watermark — skip this step entirely.

---

## 5. Captions — CapCut

1. Import the captionbar MP4 into CapCut Desktop
2. Text → Auto Captions → English → Generate (~20s, word-perfect timing)
3. Style:
   - **Font**: Poppins / Inter / DM Sans, size 42–50
   - **Color**: cream `#FBF8F3`
   - **No outline / no shadow** (the dark bar provides contrast)
   - **Position**: drag captions to centre of dark bar
   - **Apply to All**
4. Export: 1080×1920 MP4, highest quality

---

## 6. Brand voice constraints (apply to every script)

From `07-Resources/Brand-Voice.md`:

- ✅ Lead with relatable moment, not explanation
- ✅ "you" and "your cat" — never "one" or "the cat owner"
- ✅ Short sentences, breathing room, every sentence earns its place
- ✅ End every script with concrete next step or product suggestion
- ❌ Never preachy ("as a responsible cat parent you SHOULD...")
- ❌ Never "as a vet, I often see..." — always open with the relatable scene, not the credential
- ❌ Never clickbait, never guilt-trippy, never generic AI-sounding

---

## Reproducing a new Dr. Sage video — quick checklist

- [ ] Write 30s script in brand voice (see template structure above)
- [ ] Format script with `<break>` tags for pauses
- [ ] Generate audio in ElevenLabs (3 takes, pick best) → save as `dr-sage_<slug>_vN.wav`
- [ ] Trim leading silence in Audacity if >0.3s
- [ ] Upload Dr. Sage hero still + audio + motion prompt to Replicate Kling Avatar V2 `std`
- [ ] Review output: identity / lip-sync / motion read
- [ ] Apply ffmpeg drawbox watermark cover
- [ ] CapCut: auto-captions, brand styling, export 1080×1920
- [ ] Save final to `04-Video/published/<slug>.mp4`
- [ ] Update Article-Index / video tracker
