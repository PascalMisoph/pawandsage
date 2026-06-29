# 🖼️ Hero Image Prompts — Summer Seasonal Cluster (Articles #43–#58)

**Erstellt:** 2026-06-29
**Zweck:** 16 Hero-Bilder generieren → in `public/blog/` ablegen → Build → live deployen.
**Übergabe:** Dieses File ist der vollständige Handoff für **Codex**. Es enthält alle 16 Prompts, die exakten Dateinamen und ein End-to-End-Runbook inkl. Akzeptanz-Checks. Codex kann es eigenständig abarbeiten.

> ⚠️ **Harte Build-Abhängigkeit:** `scripts/generate-responsive-images.mjs` ruft `sharp()` auf jeden `heroImage`-Pfad aus dem Frontmatter. Fehlt auch nur **ein** PNG, **crasht `npm run build`**. Alle 16 müssen vorhanden und exakt benannt sein.

---

## Technische Specs (für alle 16 identisch)

- **Größe:** **1672 × 941 px, 16:9 Querformat** (gleich wie Wave-1/Wave-2-Heroes).
- **Typ:** **reine Fotografie. KEIN Text, KEIN Cover-Layout, KEINE Typografie, kein Sage-Footer, keine Logos, kein Wasserzeichen.** Heroes sind warme redaktionelle Lifestyle-Fotos — *nicht* die Pinterest-Cover.
- **Stil-Anker (in jedem Prompt mitgedacht):** warm, natürliches Tageslicht, weiche Schärfentiefe, redaktionell/Lifestyle, echte Wohnumgebung, keine Stock-Sterilität. Markenfarbwelt in der Szene: warme Creme-, Sage-Grün- und Terracotta-Töne.
- **Format/Endung:** PNG.
- **Ablage:** exakt unter dem unten genannten `public/blog/<name>.png` — Namen müssen **1:1** zum `heroImage`-Frontmatter passen.

---

## Block A — Hitze / Gesundheit / Sicherheit (#43–#52)

### #43 → `public/blog/keep-cat-cool-hot-weather-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A relaxed tabby cat stretched out flat on a cool light-grey tiled floor in a bright, airy summer room, fully at ease. Soft natural daylight through sheer curtains, shallow depth of field, a hint of green plant in the background. Warm cream and sage tones. No text, no logos, no watermark.
**heroAlt:** A relaxed tabby cat stretched out on a cool tiled floor in a bright, airy room during summer.

### #44 → `public/blog/heatstroke-in-cats-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A person's gentle hands resting on a calm cat that lies on a cool floor beside a water bowl, the cat's mouth slightly open, mood caring and reassuring (not distressing or clinical). Soft indoor daylight, shallow depth of field, warm muted tones, real home. No text, no logos, no watermark.
**heroAlt:** A concerned owner gently checking on a panting cat resting on a cool floor near a water bowl.

### #45 → `public/blog/cat-shedding-summer-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A long-haired cat being gently brushed on a sunny windowsill, fine wisps of loose fur lifting away in the backlight, the cat relaxed and content. Warm natural daylight, shallow depth of field, cream and sage tones, cozy home. No text, no logos, no watermark.
**heroAlt:** A long-haired cat being gently brushed on a sunny windowsill, loose fur lifting away from the coat.

### #46 → `public/blog/get-rid-of-fleas-on-cats-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A person combing a calm, healthy cat with a fine-toothed comb over a clean light towel on a table, gentle and routine, the cat at ease. Bright natural daylight, shallow depth of field, warm clean tones. No text, no logos, no watermark.
**heroAlt:** A person combing a calm cat with a fine flea comb over a light towel in good daylight.

### #47 → `public/blog/get-cat-to-drink-more-water-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat lapping from a flowing pet water fountain on a light kitchen floor, water gently circulating, the cat focused and content. Bright natural summer daylight, shallow depth of field, warm cream and sage tones. No text, no logos, no watermark.
**heroAlt:** A cat drinking from a flowing pet water fountain on a kitchen floor in summer light.

### #48 → `public/blog/cat-window-balcony-safety-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A content cat sitting safely behind a taut, secure mesh window screen, looking out at green foliage on a summer day, calm and curious. Bright natural daylight, shallow depth of field, warm and sage tones, real home interior. No text, no logos, no watermark.
**heroAlt:** A cat sitting safely behind a secure mesh window screen looking outside on a summer day.

### #49 → `public/blog/can-cats-get-sunburn-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A white cat resting in cool shade beside a windowsill, a bright patch of summer sunlight falling on the floor just beyond it, peaceful mood. Soft natural daylight, shallow depth of field, warm cream tones with a gentle play of light and shade. No text, no logos, no watermark.
**heroAlt:** A white cat resting in the shade of a windowsill, out of a bright patch of summer sun.

### #50 → `public/blog/let-cat-outside-safely-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat in a well-fitted vest harness and leash exploring a green garden, sniffing the grass, curious and calm, in soft golden summer evening light. Shallow depth of field, warm tones, lush but tidy garden. No text, no logos, no watermark.
**heroAlt:** A cat in a well-fitted harness exploring a garden on a leash during a calm summer evening.

### #51 → `public/blog/leaving-cat-alone-on-vacation-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A calm cat sitting at home beside an automatic pet feeder and a water fountain on a clean floor in a cool, softly shaded room, content and settled. Gentle indoor daylight, shallow depth of field, warm cream and sage tones. No text, no logos, no watermark.
**heroAlt:** A calm cat at home beside an automatic feeder and water fountain in a cool, shaded room.

### #52 → `public/blog/summer-dangers-for-cats-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A curious cat sniffing a bright bouquet of summer flowers on a table while a person's hand gently guides it away, warm and watchful mood. Soft natural daylight, shallow depth of field, warm cream and terracotta tones. No text, no logos, no watermark.
**heroAlt:** A curious cat sniffing a bouquet of flowers on a summer table, with a watchful owner nearby.

---

## Block B — Sommer-Enrichment (#53–#55)

### #53 → `public/blog/summer-cat-enrichment-indoor-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat calmly nosing treats out of a soft snuffle mat on a cool floor in a shaded summer room, focused and relaxed. Soft natural daylight filtering through blinds, shallow depth of field, warm cream and sage tones. No text, no logos, no watermark.
**heroAlt:** A cat calmly working treats out of a snuffle mat on a cool floor in a shaded summer room.

### #54 → `public/blog/frozen-cat-treats-ice-games-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat licking a frozen treat from a shallow tray on a cool light kitchen floor, a few ice crystals glistening, content on a hot summer day. Bright natural daylight, shallow depth of field, warm cream tones with cool highlights. No text, no logos, no watermark.
**heroAlt:** A cat licking a frozen treat from a tray on a cool kitchen floor on a hot summer day.

### #55 → `public/blog/cat-sensory-garden-summer-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A sunny windowsill lined with small pots of fresh cat grass, catnip and cat-safe herbs, a cat leaning in to sniff and nibble the greens, happy and absorbed. Bright natural daylight, shallow depth of field, warm cream and vivid green tones. No text, no logos, no watermark.
**heroAlt:** A windowsill planted with cat grass, catnip, and cat-safe herbs with a cat sniffing the greens.

---

## Block C — Abkühlung (#56–#58)

### #56 → `public/blog/best-cooling-products-for-cats-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat lounging contentedly on a gel cooling mat beside a pet water fountain in a bright, airy summer room, relaxed and cool. Soft natural daylight, shallow depth of field, warm cream and sage tones, clean modern home. No text, no logos, no watermark.
**heroAlt:** A cat lounging on a gel cooling mat beside a water fountain in a bright summer room.

### #57 → `public/blog/keep-cats-cool-without-ac-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat resting on cool floor tiles in a shaded room with blinds drawn against bright summer sun outside, soft striped light falling across the floor, calm and comfortable. Shallow depth of field, warm muted tones. No text, no logos, no watermark.
**heroAlt:** A cat resting on cool floor tiles in a shaded room with blinds drawn against the summer sun.

### #58 → `public/blog/cat-water-play-cooling-games-hero.png`
**Prompt:** A warm editorial lifestyle photograph, 1672 x 941 px, 16:9. A cat batting at a small floating toy in a shallow tray of water on a sunny light kitchen floor, a few playful splashes caught mid-motion, curious and engaged. Bright natural daylight, shallow depth of field, warm cream tones with cool water highlights. No text, no logos, no watermark.
**heroAlt:** A cat batting at a floating toy in a shallow tray of water on a sunny kitchen floor.

---

## 🤖 Handoff-Runbook für Codex

**Kontext:** Die 16 Artikel sind bereits geschrieben und committet auf Branch **`feat/pinterest-analytics-system`** (Commits `ce293bb`, `7b42fe3`, `957d83c`). Cluster `seasonal` ist verdrahtet und via `astro sync` validiert. Es fehlen **nur die 16 Hero-PNGs**, dann ist der Cluster baubar und deploybar.

### Schritt 1 — 16 Bilder generieren
Jeden Prompt oben durch das Bild-Tool rendern. Specs strikt einhalten: **1672 × 941 px, 16:9, PNG, kein Text/Logo/Watermark.**

### Schritt 2 — exakt benennen & ablegen
Jede Datei unter dem angegebenen Pfad `public/blog/<name>.png` speichern. Die 16 Zielpfade (müssen alle existieren):
```
public/blog/keep-cat-cool-hot-weather-hero.png
public/blog/heatstroke-in-cats-hero.png
public/blog/cat-shedding-summer-hero.png
public/blog/get-rid-of-fleas-on-cats-hero.png
public/blog/get-cat-to-drink-more-water-hero.png
public/blog/cat-window-balcony-safety-hero.png
public/blog/can-cats-get-sunburn-hero.png
public/blog/let-cat-outside-safely-hero.png
public/blog/leaving-cat-alone-on-vacation-hero.png
public/blog/summer-dangers-for-cats-hero.png
public/blog/summer-cat-enrichment-indoor-hero.png
public/blog/frozen-cat-treats-ice-games-hero.png
public/blog/cat-sensory-garden-summer-hero.png
public/blog/best-cooling-products-for-cats-hero.png
public/blog/keep-cats-cool-without-ac-hero.png
public/blog/cat-water-play-cooling-games-hero.png
```
Schneller Vollständigkeits-Check (muss `16` ausgeben):
```bash
for f in keep-cat-cool-hot-weather heatstroke-in-cats cat-shedding-summer get-rid-of-fleas-on-cats get-cat-to-drink-more-water cat-window-balcony-safety can-cats-get-sunburn let-cat-outside-safely leaving-cat-alone-on-vacation summer-dangers-for-cats summer-cat-enrichment-indoor frozen-cat-treats-ice-games cat-sensory-garden-summer best-cooling-products-for-cats keep-cats-cool-without-ac cat-water-play-cooling-games; do test -f "public/blog/${f}-hero.png" && echo "ok $f" || echo "MISSING $f"; done | grep -c '^ok'
```

### Schritt 3 — Build (erzeugt responsive Varianten)
```bash
npm run build
```
`prebuild` ruft `images:generate` → `sharp()` erzeugt AVIF/WebP/JPEG-Varianten je Hero. Bricht der Build mit „Input file is missing" ab, fehlt genau dieses PNG → zurück zu Schritt 2.

### Schritt 4 — committen & live pushen
```bash
git add public/blog/*-hero.png
git commit -m "Add 16 summer cluster hero images (#43-#58)"
```
Dann live bringen (Vercel deployt automatisch beim Push auf `main`):
- **Empfohlen — gestaffelt:** laut Plan gibt es keinen Future-Date-Filter im Blog-Index, d.h. beim Merge gehen alle 16 auf einmal live. Für saubereres SEO-Signal in 2–3 Wellen mergen (z.B. 6 / 5 / 5 über einige Tage), statt alle gleichzeitig.
- **Oder — alles auf einmal:** `feat/pinterest-analytics-system` (bzw. einen reinen Content-Branch) nach `main` mergen und pushen.

### Schritt 5 — Smoke-Test (Akzeptanz)
Nach Deploy je URL prüfen: **HTTP 200**, Hero lädt, Affiliate-Links + Affiliate-Disclosure sichtbar. Die 16 Live-URLs:
```
/blog/keep-cat-cool-hot-weather/        /blog/heatstroke-in-cats/
/blog/cat-shedding-summer/              /blog/get-rid-of-fleas-on-cats/
/blog/get-cat-to-drink-more-water/      /blog/cat-window-balcony-safety/
/blog/can-cats-get-sunburn/             /blog/let-cat-outside-safely/
/blog/leaving-cat-alone-on-vacation/    /blog/summer-dangers-for-cats/
/blog/summer-cat-enrichment-indoor/     /blog/frozen-cat-treats-ice-games/
/blog/cat-sensory-garden-summer/        /blog/best-cooling-products-for-cats/
/blog/keep-cats-cool-without-ac/        /blog/cat-water-play-cooling-games/
```
Cluster-Hub gegenprüfen: `/categories/seasonal` listet alle live-geschalteten Artikel.

### Schritt 6 — danach
- 16 URLs in Google Search Console einreichen (gestaffelt passend zum Deploy).
- Pins: 5 je Artikel nach 5-Pin-Formel (80 Pins) — separater Schritt, Learnings R1/R4 beachten.
- Affiliate-Preise vor finalem Publish spot-checken (`07-Resources/Affiliate-Links.md`, Summer/Health & Safety).

*Quelle der Artikel/Slugs: `01-Strategy/Summer-2026-Content-Plan.md` · Status-Tracker: `02-Articles/Article-Index.md`.*
