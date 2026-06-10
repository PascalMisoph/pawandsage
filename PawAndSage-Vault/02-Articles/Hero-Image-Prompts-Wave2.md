# 🖼️ Hero Image Prompts — June Wave 2 (Articles #35–#42)

**Erstellt:** 2026-06-10
**Zweck:** 8 Hero-Bilder generieren (Pascal rendert), dann in `public/blog/` ablegen. **Build ist hart abhängig davon** — `scripts/generate-responsive-images.mjs` ruft `sharp()` auf jeden `heroImage`-Pfad; fehlt die Datei, **crasht `npm run build`**.

**Format:** **1672 × 941 px, 16:9 Querformat** (gleich wie Wave-1-Heroes). **Reine Fotografie, KEIN Text, KEIN Cover-Layout** — Heroes sind warme redaktionelle Fotos, nicht die Pinterest-Cover. Sage-Footer/Headline gibt es hier NICHT (das ist nur für Pins).
**Stil-Anker (für alle):** warm, natürliches Tageslicht, weiche Schärfentiefe, redaktionell/Lifestyle, echte Wohnumgebung, keine Stock-Sterilität, kein Text, keine Logos, kein Wasserzeichen. Farbwelt passend zur Marke: warme Creme-, Sage-Grün- und Terracotta-Töne in der Szene.

**Datei-Ablage:** jeweils exakt unter `public/blog/<dateiname>.png` — Namen müssen 1:1 zum `heroImage`-Frontmatter passen, sonst findet der Build sie nicht.

---

### #35 → `public/blog/mental-stimulation-for-cats-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A focused tabby cat working its paw into a wooden or cardboard puzzle feeder on a light wood floor, concentrating intently. Soft natural daylight from a window, shallow depth of field, cozy modern home. Warm cream and sage tones. No text, no logos, no watermark.
**heroAlt (bereits im Artikel):** A focused tabby cat working its paw into a puzzle feeder on a wooden floor in soft daylight.

### #36 → `public/blog/how-to-tire-out-a-cat-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A young energetic cat mid-leap chasing a feather wand toy across a living room, full body in motion, warm evening light. Slight motion energy, shallow depth of field, real cozy home setting. Warm tones. No text, no logos, no watermark.
**heroAlt:** A young cat mid-leap chasing a feather wand toy across a living room in warm evening light.

### #37 → `public/blog/cat-destroying-everything-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A curious cat batting at a slightly knocked-over potted plant on a windowsill, a little soil spilled, caught in the act but charming not chaotic. Sunlit room, shallow depth of field, real home. Warm tones. No text, no logos, no watermark.
**heroAlt:** A curious cat batting at a knocked-over potted plant on a windowsill in a sunlit room.

### #38 → `public/blog/do-cats-get-bored-of-their-toys-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat lounging beside a basket of assorted cat toys, looking away unimpressed and a little bored. Soft daylight, shallow depth of field, cozy home floor. Warm cream tones. No text, no logos, no watermark.
**heroAlt:** A basket of assorted cat toys beside a cat that is looking away, unimpressed, in soft daylight.

### #39 → `public/blog/cat-window-perch-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A content cat lounging on a suction-cup window perch at the glass, watching a small bird feeder stuck to the outside of the window. Bright natural daylight, greenery outside, shallow depth of field. Warm and sage tones. No text, no logos, no watermark.
**heroAlt:** A content cat lounging on a suction-cup window perch, watching birds at a feeder stuck to the glass.

### #40 → `public/blog/do-single-cats-get-lonely-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A single cat sitting alone by a window in a calm, tidy apartment, looking out into soft afternoon light, peaceful rather than sad. Shallow depth of field, warm muted tones, real home. No text, no logos, no watermark.
**heroAlt:** A single cat sitting alone by a window in a calm apartment, looking out into soft afternoon light.

### #41 → `public/blog/indoor-cat-depression-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A subdued cat lying low and still on a windowsill in muted, soft afternoon light, gazing quietly outside, gentle and tender mood (not distressing). Shallow depth of field, soft warm-grey tones, real home. No text, no logos, no watermark.
**heroAlt:** A subdued cat lying low and still on a windowsill in muted afternoon light, looking out quietly.

### #42 → `public/blog/cat-puzzle-feeder-wet-food-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat licking wet food from a textured silicone lick mat suctioned to a light kitchen floor, focused and content. Bright natural daylight, shallow depth of field, clean cozy kitchen. Warm cream tones. No text, no logos, no watermark.
**heroAlt:** A cat licking wet food from a textured lick mat suctioned to the floor in a bright kitchen.

---

## Nach dem Rendern
1. Alle 8 PNGs in `public/blog/` ablegen (exakte Dateinamen oben).
2. Mir Bescheid geben → ich starte `npm run build` (erzeugt automatisch die responsive AVIF/WebP/JPEG-Varianten), push zu `main`, Vercel-Deploy, Smoke-Test (jede URL = 200, Hero lädt, Affiliate-Links + Disclosure vorhanden).
3. Falls ein Bild fehlt, bricht der Build ab — dann fehlt genau diese Datei.
