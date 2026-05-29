# Reel 02 - Couch Scratching Production Guide

**Post:** Tue May 12 - Dr. Sage Reel - Stop Cat Scratching Furniture  
**Target length:** 28-32s  
**Source article:** `04-how-to-stop-cat-scratching-furniture.md`  
**DM keyword:** `COUCH`  
**Posting time:** 19:00 CEST

## Canonical References

**Dr. Sage production reference:** `07-Resources/Dr-Sage-Avatar-Prompts.md`  
**Structured JSON reference:** `07-Resources/dr-sage-avatar-reference.json`  
**Visual reference frames:** `04-Video/dr-sage-pilot-frames/frame-01.png` through `frame-08.png`  
**Recommended clean frame:** `04-Video/dr-sage-pilot-frames/frame-04-CLEAN-final.png`

Use Dr. Sage, not the faceless voice. The faceless Bella/Adam settings are only for non-avatar Reels.

## Voice Settings

**Voice:** Matilda  
**Model:** Eleven Multilingual v2  
**Stability:** `50`  
**Similarity:** `75`  
**Style exaggeration:** `15`  
**Speaker boost:** `On`  
**Speed:** `1.08-1.1`

Generate 3 takes and pick the one where the opening line sounds gently corrective, not scolding.

## Voice Script

```
Your cat is not choosing the couch.<break time="0.3s"/> You are.<break time="0.5s"/>

If she scratches the sofa,<break time="0.2s"/> it is probably the best scratching post in the room.<break time="0.4s"/>

High traffic.<break time="0.2s"/> Stable.<break time="0.2s"/> Right where her scent matters.<break time="0.4s"/>

Meanwhile the post you bought is probably hidden in a corner.<break time="0.4s"/>

Move a tall sisal post directly next to the couch.<break time="0.3s"/> Touching it if possible.<break time="0.4s"/>

Do not yell.<break time="0.2s"/> Do not spray.<break time="0.2s"/> Make the correct surface easier.<break time="0.4s"/>

Step-by-step - comment COUCH.
```

## Kling Avatar V2 Setup

**Tool:** Replicate `kwaivgi/kling-avatar-v2`  
**Mode:** `std` for first test, `pro` only if the test is strong and you want a publishable clean version  
**Image:** Dr. Sage clean/canonical portrait frame  
**Audio:** ElevenLabs Matilda WAV or MP3  
**Target output:** vertical 9:16

## Motion Prompt

```
Warm, grounded delivery - like she is correcting a common mistake without judging the viewer. Calm, steady eye contact with natural soft blinks. Small knowing smile on "You are." Slight brow lift on "best scratching post in the room." Gentle nods on "High traffic. Stable." More practical, reassuring expression on "Move a tall sisal post directly next to the couch." Soft, confident closing smile on "comment COUCH." Shoulders relaxed, no large gestures, no exaggerated mouth movement between phrases. Energy level low-medium: clear, helpful, quietly authoritative.
```

## First-Frame Overlay

`Your couch is the better scratching post`

## Caption

```
Your couch is winning because it has better placement.

Move a tall sisal post directly beside it. Make the right choice obvious.

Comment COUCH - step-by-step relocation guide.

#catscratch #catfurniture #catbehavior #catparents #indoorcat
```

## DM Auto-Reply

```
Hey! Step-by-step scratcher relocation:

https://pawandsage.com/how-to-stop-cat-scratching-furniture/

Section 4 has the placement diagram.
Send a pic of where your post is now - happy to give a quick read.
```

## Post-Production Checklist

- [ ] Generate ElevenLabs audio, 3 takes, choose best.
- [ ] Trim leading silence to under 0.3s.
- [ ] Generate Kling Avatar V2 clip.
- [ ] If using `std`, cover watermark with charcoal `#2C2C2C` bar using the existing Dr. Sage recipe.
- [ ] Add CapCut captions in cream `#FBF8F3` on charcoal bar.
- [ ] Export 1080x1920.
- [ ] Save final MP4 under `04-Video/published/` when complete.
