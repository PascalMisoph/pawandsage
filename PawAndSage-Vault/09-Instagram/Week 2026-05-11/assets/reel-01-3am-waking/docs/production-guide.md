# Reel 01 - 3AM Waking Production Guide

**Post:** Mon May 11 - Faceless Reel - 3AM Waking  
**Target length:** 28-30s  
**Structure:** 6 clips x ~5s, trimmed tightly in final edit  
**Source article:** `legacy-why-cat-wakes-you-3am.md`  
**DM keyword:** `3AM`

## Voice Settings

Use a faceless voice, not Dr. Sage.

**Recommended voice:** Bella or Adam from ElevenLabs default/designed voices  
**Model:** Eleven Multilingual v2, unless ElevenLabs v3 gives a clearly better read in testing  
**Stability:** `45`  
**Similarity / Clarity:** `75`  
**Style exaggeration:** `20`  
**Speaker boost:** `On`  
**Speed:** `1.1`

Why these settings:

- ElevenLabs documents `1.0` as normal speed and says values above `1.0` speed up speech, with `1.2` as the upper end where quality can suffer. For this Reel, `1.1` keeps the script inside 30 seconds while still sounding natural.
- ElevenLabs describes lower stability as more expressive and higher stability as more monotone. `45` keeps urgency and variation in the hook.
- ElevenLabs notes similarity/clarity controls how closely the output follows the chosen voice. `75` is the common stable baseline and keeps the voice recognizable.
- Keep style exaggeration modest. `20` adds energy without making the read sound theatrical.

Generate 2-3 takes. Pick the one where the first line sounds like a warning, not narration.

## Voice Script

**Target:** 30 seconds max. Six scenes, about 5 seconds each.

```
If your cat wakes you at 3 AM,<break time="0.2s"/> stop feeding her first.<break time="0.35s"/>

That might be why it keeps happening.<break time="0.35s"/>

One - hunger.<break time="0.2s"/> If food appears at 3 AM,<break time="0.2s"/> she learns 3 AM works.<break time="0.4s"/>

Two - boredom.<break time="0.2s"/> She slept all afternoon.<break time="0.2s"/> Now you are the toy.<break time="0.4s"/>

Three - stress.<break time="0.2s"/> New room,<break time="0.2s"/> new pet,<break time="0.2s"/> new schedule.<break time="0.4s"/>

Fix the boredom first:<break time="0.2s"/> 15 minutes of wand play before bed.<break time="0.35s"/>

Then food.<break time="0.2s"/> Then lights out.<break time="0.2s"/> Full guide - comment 3AM.
```

## Still Assets

All stills are saved in:

`09-Instagram/Week 2026-05-11/assets/reel-01-3am-waking/stills/`

1. `01-bedroom-cat-3am-cold-open.png`
2. `02-empty-food-bowl-hunger.png`
3. `03-bored-cat-watching-owner.png`
4. `04-anxious-cat-household-change.png`
5. `05-evening-wand-play-solution.png`
6. `06-calm-cat-after-routine.png`

## Kling 3.0 Setup

Use each still as image-to-video input.

**Model:** Kling 3.0 image-to-video  
**Aspect ratio:** `9:16`  
**Duration:** `5s` per clip  
**Audio:** off  
**Motion strength:** low / subtle / natural, if available  
**Camera movement:** minimal  
**Output:** 1080x1920 or highest vertical output available

**Global negative prompt:**

```
text, captions, watermark, logo, humans, hands, extra cats, extra limbs, distorted paws, distorted eyes, morphing face, changing fur pattern, unnatural mouth movement, cartoon, CGI, low quality, blur, flicker, fast camera movement
```

## Kling Prompts By Clip

### 01 - Cold Open

**Input:** `01-bedroom-cat-3am-cold-open.png`
**Voice beat:** "If your cat wakes you at 3 AM, stop feeding her first. That might be why it keeps happening."

```
The cat stands still on the bed and slowly blinks once while staring toward the pillow. Very subtle breathing, tiny ear twitch, low nighttime bedroom light. Minimal slow camera push-in. Keep the cat anatomy and fur pattern consistent.
```

**Edit note:** First-frame overlay: `Stop feeding her at 3 AM`

### 02 - Hunger

**Input:** `02-empty-food-bowl-hunger.png`
**Voice beat:** "One - hunger. If food appears at 3 AM, she learns 3 AM works."

```
The cat sits beside the empty bowl, looking toward the viewer. Add a tiny head tilt and one slow blink. Bowl stays still. Subtle dawn light, no major camera movement. Keep motion realistic and restrained.
```

### 03 - Boredom

**Input:** `03-bored-cat-watching-owner.png`
**Voice beat:** "Two - boredom. She slept all afternoon. Now you are the toy."

```
The cat remains seated on the bed, alert and bored, with a slow blink and slight ear movement. Add subtle breathing only. The bedding barely shifts. Keep the dark bedroom stable and realistic.
```

### 04 - Stress

**Input:** `04-anxious-cat-household-change.png`
**Voice beat:** "Three - stress. New room, new pet, new schedule."

```
The crouched cat stays low near the doorway, eyes alert. Add a small cautious head movement and tiny ear twitch. Background lamp remains steady. No walking, no jumping, no dramatic movement.
```

### 05 - Solution: Wand Play

**Input:** `05-evening-wand-play-solution.png`
**Voice beat:** "Fix the boredom first: 15 minutes of wand play before bed."

```
The feather toy sways gently once above the cat. The cat tracks it with focused eyes and lifts the raised paw slightly, but does not leap. Warm evening light, natural pet photography motion, minimal camera movement.
```

### 06 - Resolution

**Input:** `06-calm-cat-after-routine.png`
**Voice beat:** "Then food. Then lights out. Full guide - comment 3AM."

```
The sleeping cat breathes softly and settles deeper into the blanket. Very slight whisker movement, eyes remain closed. Feather wand stays near the paws. Warm calm light, no camera movement.
```

## Caption Overlay Timing

Keep large captions in the upper third where the stills have negative space.

1. `Stop feeding her at 3 AM` - 0:00-0:03
2. `You may be training the wake-up` - 0:03-0:05
3. `1. Hunger` - 0:05-0:10
4. `2. Boredom` - 0:10-0:15
5. `3. Stress` - 0:15-0:20
6. `15 min play before bed` - 0:20-0:25
7. `Play -> food -> lights out` - 0:25-0:28
8. `Comment 3AM` - 0:28-0:30

## Final Instagram Caption

```
Feeding her at 3 AM can train the wake-up.

It feels kind in the moment. But if food appears every time she wakes you, her brain learns: this works.

Try this order tonight:
play first, then food, then lights out.

Comment 3AM - I'll send the full guide.

#catbehavior #catsleep #indoorcat #catparents #catenrichment
```

## Sources Checked

- ElevenLabs voice settings docs: https://elevenlabs.io/docs/api-reference/voices/get-default-settings
- ElevenLabs TTS best practices: https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices
- ElevenLabs speed control help: https://help.elevenlabs.io/hc/en-us/articles/13416271012497-Can-I-change-the-pace-of-the-voice
- Instagram Creators guidance on keeping Reels engaging and direct: https://creators.instagram.com/
- Later guidance on captions, hooks, and focused hashtag use: https://later.com/blog/instagram-caption-tips/
