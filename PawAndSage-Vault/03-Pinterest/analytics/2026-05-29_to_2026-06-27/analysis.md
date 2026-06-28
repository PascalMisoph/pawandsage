# 📊 Analyse — Periode 2026-05-29 → 2026-06-27

**Erzeugt:** 2026-06-28 (Agent-Analyse nach `ANALYSIS-PLAYBOOK.md`)
**Datenbasis:** `snapshot.json` · 97 eigene Pins, 52 einem Brief/Override zugeordnet
**Konto-Summe:** 3.756 Impressions · 30 Outbound (CTR 0,8 %) · 12 Saves (Rate 0,3 %)

> Erster API-basierter Snapshot. Vorperiode (`2026-04-29_to_2026-05-29`) war manueller CSV-Export
> → harte Deltas nur eingeschränkt vergleichbar. Diese Analyse ist die Baseline für künftige Monate.

## Executive Summary
- **Listicle ist der Reichweiten-Motor:** 1.450 Impr über 12 Pins — klar vor jedem anderen Typ. 🟡
- **Ein Thema trägt das Konto:** „Bored / Indoor-Enrichment" macht den Löwenanteil der Reichweite; Top-Pin „15 Free Enrichment Ideas" allein 977 Impr (26 % des Kontos). 🟡
- **Problem-Hooks = verlässliche Klicks:** konsistente ~0,9 % CTR über 12 Pins, kein Ausreißer-Glück. 🟡
- **Product/Price holt Klicks, aber 0 Saves:** Preis-Hooks funktionieren für Outbound, nicht als Save-Magnet. 🟡
- **Saves sind kontoweit rar (12).** Save-this-Format performt bisher schwach — beobachten. 🔵

## Vergleich pro Dimension

### Pin-Typ (belastbarste Dimension)
| Typ | Impr | Pins | CTR | Saves | Lesart |
|---|--:|--:|--:|--:|---|
| Listicle | 1450 | 12 | 1,0 % | 3 | **Gewinner Reichweite** 🟡 belastbar-nah |
| Problem hook | 689 | 12 | 0,9 % | 2 | **Gewinner Konsistenz** 🟡 |
| Product/price | 427 | 8 | 0,7 % | 0 | Klicks ja, Saves nein 🟡 |
| Emotional | 358 | 11 | 0,3 % | 1 | schwächste CTR 🟡 |
| Save-this (alle) | 70 | 9 | ~0 % | 0 | underperformt 🔵 |

### Layout
Full-Bleed 128 Impr / 14 Pins (9,1/Pin) vs Editorial Split 94 / 19 (4,9/Pin). Richtung „Full-Bleed
mehr Reichweite", aber **alle Wave-2-Pins zu jung** → 🔵 Rauschen, nächsten Monat erneut messen.

### Headline-Muster (aus Top-Pins)
- **Zahl + „Free/No Shopping"** → stärkster Hook (977 Impr). 🔵
- **Frage („Why won't my cat…?")** → solide Klickrate. 🟡
- **`$X Toy`** → gute CTR (bis 1,6 %), aber keine Saves. 🟡

### Outbound-CTR-Spitze (≥10 Impr, Hypothesen wegen kleiner Basis)
„Is Your Indoor Cat Bored? 7 Toys" 20 % · „DIY Foraging Games" 2,3 % · „7 Reasons Cat Ignores Toys" 2,3 % · „Bored Cat to Play Again" 2,2 %. → **DIY + Problem-Listicle-Hybride** klicken überdurchschnittlich. 🔵

## Hypothesen für nächsten Monat
| # | Hypothese | Evidenz | Konfidenz | Gegen-Test Juli |
|---|-----------|---------|-----------|-----------------|
| H1 | Mehr Listicle-Pins → mehr Reichweite | Pin-Typ-Tabelle | 🟡 | Listicle-Anteil leicht erhöhen, Impr/Pin vergleichen |
| H2 | „Free/No-Shopping"-Angle skaliert | 1 Pin, 977 Impr | 🔵 | 2–3 Pins mit dem Angle bauen, Reichweite messen |
| H3 | Full-Bleed > Editorial Split bei Reichweite | Layout-Tabelle | 🔵 | Bei gereiften Wave-2-Pins erneut prüfen |
| H4 | Problem+Listicle-Hybrid maximiert CTR | Star-Converter 20 % | 🔵 | 2 Hybrid-Pins gezielt bauen |

## Empfohlene Änderungen an der nächsten Pin-Brief-Erstellung
1. **Pin-Mix:** pro Artikel mind. 1 starker Listicle mit Zahl-Headline (R1). Emotional-Pin-Anteil senken, bis CTR sich bessert.
2. **Themen-Gewichtung:** Enrichment/„bored cat"-Cluster weiter ausbauen (R2) — trägt das Konto.
3. **Neuer Test:** 2–3 Pins mit „Free / No Shopping Needed"-Angle (H2/R3).
4. **Product-Pins:** auf Outbound optimieren (Preis-Hook), **nicht** als Save-Ziel zählen (R5).
5. **Layout:** Full-Bleed für Problem-Hooks bevorzugen, aber als Test markiert (H3).

## Nächsten Monat prüfen
- Reifen die Wave-2-Pins? (Layout- + Pin-Typ-Tabellen mit dann größerer Basis neu bewerten)
- Reproduziert sich der „Free"-Angle-Effekt?
- Steigt die kontoweite SaveRate, oder bleibt Save-this strukturell schwach?
