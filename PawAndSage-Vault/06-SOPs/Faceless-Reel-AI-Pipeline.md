# SOP — AI-First Faceless Reel Pipeline

> The "faceless Reel" is the second pillar of Paw & Sage IG content alongside Dr. Sage avatar Reels. Faceless = no avatar, no human face, no real cat footage. Everything generated.
>
> Per Reel: ~25 minutes, ~€2 in AI compute.

## When to use faceless vs Dr. Sage

| Use Faceless Reel for | Use Dr. Sage Reel for |
|------------------------|------------------------|
| Product comparisons ("don't buy X, buy Y") | Behavior decoding ("why your cat does X") |
| Listicles + ranking | Authority claims, myth-busting |
| Affiliate-heavy / commercial intent | Trust + credibility plays |
| Relatable moments (3 AM waking, etc.) | Anything where "the vet says…" wins |

Splitting them this way protects Dr. Sage's authority — she stays the expert, not a mascot.

## Stack

| Tool | Purpose | Cost |
|------|---------|------|
| Claude Code | Script + hook + caption + DM reply | included |
| ElevenLabs | Voiceover (NOT Dr. Sage's voice — see below) | ~€0.10/Reel |
**PRIMARY APPROACH (as of 2026-05-06): Image-to-Video pipeline**, NOT pure Text-to-Video. T2V models tested (Seedance Lite, Seedance Pro Fast) failed on cat motion across price tiers — industry-wide limitation, not a model-specific issue.

| Stage | Tool | Cost |
|-------|------|------|
| **Stills (Phase 1)** | **Imagen 4** on Replicate — `google/imagen-4` | ~$0.04/image × 6 = ~$0.24 |
| Stills alt | Midjourney v7 (Discord, if subscribed) | included |
| **Animate (Phase 2)** | **Kling 2.6 Pro** on Replicate — `kwaivgi/kling-v2.6` (image-to-video) | ~$0.40/clip × 6 = ~$2.40 |
| Animate alt | Hailuo 02 I2V — `minimax/hailuo-02` (image input mode) | similar pricing |
| **Total per Reel** | | **~$2.64** |

**Premium escalation if I2V also fails**: Veo 3.1 Fast (`google/veo-3.1-fast`) ~$4–8/Reel, then Veo 3.1 ~$10–12/Reel. Reserve for hero posts.

**DO NOT use**:
- Seedance 1 Lite — Pascal tested 2026-05-06, motion + graphics quality rejected
- Seedance 1 Pro Fast — Pascal tested 2026-05-06, motion still insufficient (T2V approach abandoned in favor of I2V)
- Kling Standard — burns "kling" watermark
- Runway free tier — watermark
- Any tool with visible burn-in branding

### Validation rule for new model trials
Generate ONE clip first using the hardest motion prompt in your batch (typically a leap, pounce, or sustained action). If that clip's motion holds up, generate the rest. If it fails, escalate one tier up. Saves credits and frustration vs generating all 6 then re-rolling.
| Submagic | Animated viral captions | €15/mo |
| CapCut Mobile/Desktop | Final cut, audio, export | Free |
| ManyChat | DM keyword auto-replies | €15/mo |
| Metricool | Scheduling | Free (50 posts/mo) |

## The "second voice" rule

Dr. Sage's ElevenLabs voice is a brand asset. Do **not** use it on faceless Reels — the visual-authority signature breaks if her voice is everywhere.

**Faceless voice (pick once, reuse forever)**:
- Recommended: **Bella** (young, energetic female) or **Adam** (warm, casual male) from ElevenLabs default library
- Settings: stability **45** / similarity **70** / style **25** / speed **1.1**
- Pace is fast — IG short-form punishes slow delivery. Earlier pilots at 1.0 felt sluggish.
- **Always include explicit `<break time="X.Xs"/>` tags in scripts** — typically 0.2s mid-sentence, 0.3–0.4s between beats, 0.5s for hook → setup transition. Do NOT rely on natural ElevenLabs cadence.

Once you pick, document the voice ID at the top of every faceless script file so it's reproducible.

## Per-Reel pipeline (~25 min)

### Length rule

Default Reel length for Paw & Sage is **28-32 seconds**.

Do not plan or produce 45-50s Reels unless the weekly plan explicitly documents a reason for the exception. Six 5-second image-to-video clips is the standard structure for faceless Reels; Dr. Sage Reels should also be scripted to land around 30 seconds unless there is a deliberate exception.

### Reel cover generation rule

Always create IG Reel cover images through one complete image-generation prompt that renders the full finished cover in the established Paw & Sage Pinterest cover style.

Do **not** generate only a photo background and then rebuild the typography locally with Windows/system fonts.

The required visual system is:
- cream editorial background `#FBF8F3`
- Playfair Display-style serif headline in charcoal `#2C2C2C`
- Nunito Sans-style category, subtext, and URL
- terracotta category text `#C4725A`
- sage divider/accent and footer `#4D7C5A`
- warm editorial cat/living-room image panel
- final composition should look like an existing Paw & Sage Pinterest cover adapted to Reel format

This rule applies to both faceless Reels and Dr. Sage Reels unless Pascal explicitly asks for a different cover treatment.

### 1. Script (already in week's plan file) — 2 min review
- 30 seconds = ~75–85 words spoken
- Hook in first 1.5s. No intros, no logos, no "hey guys."
- End with: "Comment [KEYWORD] for the full guide."

### 2. Voiceover (ElevenLabs) — 5 min
- Paste script (no pause tags needed for faceless — pace handles itself)
- Generate, listen, regenerate if any word slurs
- Export 192 kbps MP3

### 3. B-roll generation — Image-to-Video pipeline (~10–15 min)

**Phase 1: Generate 6 stills with Imagen 4 (~3 min)**
- `google/imagen-4` on Replicate
- `aspect_ratio: 9:16`
- Run all 6 prompts in parallel
- Re-roll any image that doesn't look perfect — $0.04 each, cheap to iterate
- Save approved stills to `04-Video/renders/[reel-name]/still-1.png ... still-6.png`

**Phase 2: Animate with Kling 2.6 Pro I2V (~5–10 min)**
- `kwaivgi/kling-v2.6` on Replicate
- For each: upload corresponding still as input image
- `duration: 5`
- `aspect_ratio: 9:16`
- Audio: off
- Motion prompt: keep MINIMAL — describe only the micro-motion you want (1 short sentence). Long motion prompts trigger over-animation and re-introduce the AI-glitch problem.

**Critical: AVOID animating leaps, runs, fast wrestling, or multi-axis movement.** Use the AI-friendly motion list (slow blinks, head turns, tail flicks, single-paw taps, breathing). The motion-safe shot design is non-negotiable — even premium I2V models break on hostile motion types.

**Prompt template**:
```
Cinematic close-up of a [tabby/black/orange/grey] cat [action],
soft natural light, shallow depth of field, real fur texture,
4K, vertical 9:16, no text, no humans, photorealistic.
```

**Actions that render cleanly on Kling**:
- Cat playing with wand toy
- Cat watching prey (bird at window, toy mouse)
- Cat mid-leap or pouncing
- Cat scratching post
- Cat eating from bowl
- Cat sleeping curled up
- Cat staring intensely at object (not at "owner")

**Actions to avoid (AI-slop giveaways)**:
- ❌ Cat looking directly at camera for >3s (eyes drift uncanny)
- ❌ Multiple cats in one shot (Kling fuses them)
- ❌ Cat interacting with humans (hands and paws blend)
- ❌ Cat making detailed facial expressions (lips/tongue glitch)
- ❌ Clips longer than 5s (cat starts morphing)

**Cost**: ~€0.30 per 5s clip × 5 clips = €1.50

### 4. Captions (Submagic) — 5 min
- Upload voiceover MP3 + b-roll clips
- Pick template: **"Hormozi 2"** or **"Iman"** (high-contrast, bouncy, niche-standard)
- Customize: brand colors charcoal #2C2C2C + cream #F5EFE6, font Inter Bold
- Export 1080×1920 MP4

### 5. Final assembly (CapCut) — 3 min
- Drop Submagic export onto timeline
- Trim to 30s exactly (IG Reels still favor sub-30s)
- Optional: add 0.3s end card with logo + "Paw & Sage" wordmark
- Export 1080×1920, 30fps

### 6. Schedule
- Upload to **Metricool** with caption + first comment (extra hashtags)
- Pick trending audio at the IG-native upload step **NOT in Metricool** — IG only boosts native trending audio
- Activate the corresponding **ManyChat keyword** if not already set

## Critical: DM auto-replies (set up once, reuse forever)

DM funnels are the entire point of these posts. Set up in **ManyChat**, not Metricool, and not IG-native (limited).

For each new keyword:
1. ManyChat → Automation → New Keyword Trigger
2. Trigger: exact word, case-insensitive
3. Reply: greeting + URL + soft upsell to next-best content (see week plans for templates)
4. Tag the user with `keyword_[X]` for future audience segmentation
5. Optional: capture email after 3 messages (high-intent lead magnet)

## Quality bar

A faceless Reel ships when:
- ✅ Hook is delivered in first 1.5s, no intro filler
- ✅ Caption ends with explicit `Comment [KEYWORD]` CTA
- ✅ DM auto-reply is live and tested (DM yourself the keyword from a different account)
- ✅ No Kling clip looks fake on first watch (re-generate if it does — €0.30 is cheap)
- ✅ Captions are readable on a phone in sunlight (high contrast, big font)
- ✅ Total length 28–32s

If any box is unchecked, don't post — fix or replace.

## Cost ceiling

A faceless Reel that costs more than €4 in AI compute means you're regenerating too aggressively. Either the script is wrong (rewrite, don't re-roll clips), or the prompt is wrong (rewrite the prompt template). Don't burn credits trying to fix a structural problem with more generations.
