# 📌 Pin-ID ↔ Artikel Mapping

**Zweck:** Lookup-Tabelle, die Pinterest-Pin-IDs ihren Artikeln, Pin-Typen und Creatives zuordnet.
Alle Monats-Analysen in `analytics/<periode>/` verweisen hierauf.
**Methode (Stand Mai 2026):** Pins manuell über Pinterest hochgeladen → kein externes Mapping-Tool. Pin-Creatives via WebFetch der öffentlichen Pin-URL ausgelesen (Headline/Beschreibung/Bild kommen aus Open-Graph-Metadaten), Artikel-Zuordnung per Abgleich mit `Backlog-Pin-Briefs-Apr-May-2026.md` + `Article-Index.md`.

**Konfidenz-Legende:**
- ✅ **bestätigt** = exakter Titel- + Bild-Match mit Pin-Brief
- 🟡 **erschlossen** = Thema/Headline passt eindeutig, aber Ziel-URL nicht hart verifiziert (Pinterest blendet Outbound-Link für Nicht-Eingeloggte aus → für 100% eingeloggt „Read it" klicken)

---

## Priorität 1 — Star-Konverter (höchste CTR, davon mehr bauen)

| Pin-URL | Impr. | Outbound | CTR | Artikel | Pin-Typ | Creative-Notiz |
|---|---|---|---|---|---|---|
| https://www.pinterest.com/pin/1138707087055682816/ | 57 | 4 | 7,0% | 🟡 #2 „7 Best Interactive Toys" | Problem/Listicle | Problem-Hook „Is Your Indoor Cat Bored? These 7 Toys Fix That" + gelangweilte Tabby auf Couch (AI-modified). Tags: mental stimulation toys. |
| https://www.pinterest.com/pin/1138707087055559384/ | 46 | 3 | 6,5% | 🟡 #1 „Knocks Things Off" | Product (Preis-Hook) | „The $8 Toy That Stopped My Cat From Destroying Everything" + Tabby greift Korbball. Preis-Hook + Transformations-Versprechen. |

## Priorität 2 — Reichweiten-Riese (viel Impr., schwache CTR — warum?)

| Pin-URL | Impr. | Outbound | CTR | Artikel | Pin-Typ | Creative-Notiz |
|---|---|---|---|---|---|---|
| https://www.pinterest.com/pin/1138707087056320463/ | 135 | 2 | 1,5% | ✅ L2 Enrichment | Listicle | „20 Indoor Cat Enrichment Ideas That Take 5 Minutes" + Fensterplatz-Szene mit Nummern-Vorschau (Boxen/Leckerli/Vorhänge). = Brief „Legacy 2, Pin 2". |

## Priorität 3 — restliche Konverter (für vollständiges Conversion-Mapping)

| Pin-URL | Impr. | Outbound | → Artikel | Konf. | Headline / Creative |
|---|---|---|---|---|---|
| …55805160 | 57 | 1 | #3 Stares | ✅ | „Why Is My Cat Staring at Me? 7 Real Reasons" — Tabby Augenkontakt |
| …55865700 | 27 | 1 | #3 Stares | ✅ | „That Stare Is Not Random…" — Katzengesicht, intensive Augen |
| …56252913 | 51 | 1 | L2 Enrichment | ✅ | „Is Your Indoor Cat Bored? 20 Easy Enrichment Ideas" — Karton (= L2 Pin 1) |
| …56380321 | 54 | 1 | L2 Enrichment | ✅ | „Indoor Life Does Not Have to Be Boring…" Board Cat Behavior (= L2 Pin 3) |
| …55404307 | 27 | 1 | #1 Knocks Off | ✅ | „5 Easy Ways to Stop Your Cat From Pushing Things Off Tables" |
| …55744951 | 21 | 1 | #2 Toys | ✅ | „Best Cat Toys for Indoor Cats" — Katze jagt Federball |
| …56120359 | 33 | 1 | L1 3 AM | ✅ | „You Do Not Need to Lock Your Cat Out…" (= L1 Pin 3) |
| …55932963 | 63 | 2 | #6 Feeders (od. #3) | 🟡 | „The Simple Fix for Intense Food Staring" — Treat-Dispenser-Ball |
| …55776907 | 16 | 1 | #5 Bite | 🟡 | Tags „why do cats bite your hands" — Board Cat Behavior |
| …55780241 | 45 | 2 | #4 Scratch (od. #2) | 🟡 | Generischer „Cat Owner Hacks"-Pin, Tags Furniture/Scratches |
| …55784266 | 33 | 1 | L2 (od. #7) | 🟡 | Generischer „Indoor Cat Life"-Pin, Tags „get cats to calm down" |

**Summe Prio 1-3:** 14 Pins = 22 Outbound Clicks = 100% der Conversions im Zeitraum 29.04.–29.05.2026.

---

## Aggregat pro Artikel (alle 14 Konverter-Pins gemappt, Stand 2026-05-29)

| Artikel | Veröffentlicht | Konverter-Pins | Σ Outbound | Anteil |
|---|---|---|---|---|
| #2 „7 Interactive Toys" | 2026-04-23 | 2 | **5** | 23% |
| #1 „Knocks Things Off" | 2026-04-19 | 2 | **4** | 18% |
| L2 „20 Enrichment Ideas" | 2026-04-12 | 3 | **4** | 18% |
| #3 „Why Cat Stares" | 2026-04-23 | 2 | 2 | 9% |
| #4 „Scratching" 🟡 | 2026-04-29 | 1 | 2 | 9% |
| #6 „Puzzle Feeders" 🟡 | 2026-05-04 | 1 | 2 | 9% |
| L1 „3 AM Waking" | 2026-04-10 | 1 | 1 | 5% |
| #5 „Bite When Petted" 🟡 | 2026-05-04 | 1 | 1 | 5% |
| L2/#7 (unscharf) 🟡 | — | 1 | 1 | 5% |
| **Summe** | | **14** | **22** | 100% |

*🟡 = Artikel erschlossen (Ziel-URL nicht hart verifiziert). Summe der harten ✅-Zuordnungen = 16 Outbound, erschlossen = 6.*

---

## 🔑 Strategischer Befund: Conversions kommen aus April-Content

Alle drei Top-Konverter stammen aus **Legacy-/Frühcontent** (L2, #1, #2 — alle Mitte/Ende April live), nicht aus den am 4. Mai veröffentlichten #5/#6/#7. Ursache: **Pinterest-Ramp-Lag** — Pins brauchen ~4–8 Wochen bis zur Verteilungsreife. Mai-Conversions tragen also April-Artikel.

Die **Top 3 Artikel** (#2 Toys, #1 Knocks-Off, L2 Enrichment) = **13 von 22 Outbound (59%)**, alle Mitte/Ende April live. Die neuen #5/#6/#7 (4. Mai) tauchen nur schwach auf (#6 evtl. 2, #5 evtl. 1, #7 gar nicht) — erwartbar bei <4 Wochen Pin-Alter.

**Konsequenzen:**
1. Conversion-Erfolg eines Artikels ist erst ~6–8 Wochen nach Pin-Launch beurteilbar — #5/#6/#7 fair erst Ende Juni/Juli bewerten.
2. Beim nächsten Export (Juni) müssen #5/#6/#7-Pins deutlicher in den Konvertern auftauchen — das ist der Test, ob die neuen Artikel ziehen. Wenn nicht → Creative-Problem, nicht nur Lag.
3. **Inhaltlicher Sieger-Cluster: Toys + Enrichment + destruktives Verhalten** (#2, #1, L2 = 59%). Hier liegt die bewiesene Zahlungsbereitschaft → Content-Cluster ausbauen, neue Pins/Artikel in dieser Achse priorisieren.
4. Staring-Cluster (#3) bringt Reichweite, aber nur mittlere Conversion — eher Top-of-Funnel/Awareness.
