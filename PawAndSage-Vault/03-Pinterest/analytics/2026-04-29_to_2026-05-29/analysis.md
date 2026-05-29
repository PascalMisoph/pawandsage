# 📊 Pinterest Analytics — Monat 1

**Zeitraum:** 29. April – 29. Mai 2026 (30-Tage-Fenster, organisch)
**Erstellt:** 2026-05-29
**Datenquelle:** Pinterest Analytics Export (organic, all devices/sources), siehe CSVs in diesem Ordner
**Hinweis:** Letzte 3 Tage (27.–29. Mai) im Export leer = normaler Pinterest-Reporting-Lag.

---

## Rohdaten in diesem Ordner

| Datei | Inhalt |
|---|---|
| `2026-05_toppins_impressions.csv` | Tages-Impressions + Top-Boards-Funnel + Top-Pins nach **Impressions** (43 Pins) |
| `2026-05_toppins_outbound.csv` | Top-Pins nach **Outbound Clicks** (14 Pins) — Conversion pro Pin |
| `2026-05_daily_outbound.csv` | Tages-Zeitreihe Outbound Clicks |
| `2026-05_daily_saves.csv` | Tages-Zeitreihe Saves |
| `2026-05_daily_engagement-rate.csv` | Tages-Zeitreihe Engagement Rate |

Datenintegrität: Alle Metriken summieren sich konsistent auf **1.148 Impressions / 53 Pin Clicks / 22 Outbound / 7 Saves**.

---

## Gesamtbilanz

| Metrik | Summe | Rate | Bedeutung |
|---|---|---|---|
| Impressions | **1.148** | — | Wie oft Pins gesehen wurden |
| Pin Clicks | **53** | 4,6% | Klick öffnet den Pin (Interesse) |
| **Outbound Clicks** | **22** | 1,9% | Klick auf pawandsage.com → echte Conversion |
| Saves | **7** | 0,6% | Pin gespeichert → treibt Reichweite |

**Schlüsselkennzahl:** 22 Outbound ÷ 53 Pin Clicks = **41% Durchklickrate**. Wer einen Pin öffnet, klickt sich zu 41% bis auf die Seite durch — starker Wert. Das Pin→Artikel-Versprechen passt. Der Engpass ist **Reichweite oben im Funnel**, nicht die Conversion.

---

## Befund 1 — Reichweite wächst (wichtigste Nachricht) 🟢

Wöchentliche Impressions:

| Woche | Zeitraum | Impressions |
|---|---|---|
| 1 | 29. Apr – 5. Mai | 218 |
| 2 | 6. – 12. Mai | 264 |
| 3 | 13. – 19. Mai | 289 |
| 4 | 20. – 26. Mai | **377** |

**+73% von Woche 1 zu Woche 4.** Erwartetes Muster: Pinterest ist eine Suchmaschine, Pins werden über Wochen indexiert und gewinnen an Verteilung. Steigender Trend in Monat 1 = bestmögliches Signal.

---

## Befund 2 — Boards: `indoor-cat-life` ist Conversion-Star

| Board | Impr. | Pin Clicks | Outbound | Outbound-Rate | Saves |
|---|---|---|---|---|---|
| 🥇 indoor-cat-life | 306 | 16 | **8** | **2,6%** | 3 |
| cat-owner-hacks | 346 | 18 | 5 | 1,4% | 3 |
| best-cat-products | 243 | 6 | 5 | 2,1% | **0** |
| cat-behavior-explained | 211 | 11 | 3 | 1,4% | 1 |
| playful-cats | 21 | 2 | 1 | — | 0 |
| new-cat-parent | 21 | 0 | 0 | — | 0 |

- **`indoor-cat-life`** = bester Konverter bei hoher Reichweite → mehr investieren.
- **`best-cat-products`** = viel Reichweite (243), aber 0 Saves und nur 2,5% Pin-Click-Rate. Intent ist da (5 Outbound), aber Creative ist nicht speicherwürdig.
- **`new-cat-parent` & `playful-cats`** = quasi tot (21 Impr.). Reaktivieren oder einstampfen.

---

## Befund 3 — Saves sind der Engpass 🔴

Nur **7 Saves (0,6%)** im ganzen Monat. Saves sind der wichtigste Pinterest-Verteilungshebel (gespeicherte Pins werden weiterverteilt, leben monatelang). Niedrige Saves bremsen die algorithmische Ausspielung.

**→ Hebel Nr. 1 für Monat 2.**

---

## Befund 4 — Reichweiten-Sieger ≠ Conversion-Sieger

| Pin-ID (gekürzt) | Impressions | Outbound | CTR |
|---|---|---|---|
| …6320463 | **135** (meiste Reichweite) | 2 | 1,5% |
| …5682816 | 57 | **4** | **7,0%** ⭐ |
| …5559384 | 46 | **3** | **6,5%** ⭐ |

Der reichweitenstärkste Pin konvertiert unterdurchschnittlich (1,5%), zwei mittelgroße Pins erreichen 6,5–7%. **29 von 43 Pins haben 0 Outbound** — 5 Pins tragen 59% aller Conversions (Power-Law).

**→ Herausfinden, was die Star-Pins (…5682816 & …5559384) anders machen, und davon mehr bauen.**

---

## Befund 5 — Artikel-Mapping: Conversions kommen aus April-Content 🔑

Alle 14 Konverter-Pins wurden den Artikeln zugeordnet (Pin-Creatives via WebFetch ausgelesen, gegen Pin-Briefs abgeglichen — Details in `../pin-id-map.md`). Outbound pro Artikel:

| Artikel | Live seit | Σ Outbound | Anteil |
|---|---|---|---|
| #2 „7 Interactive Toys" | 23. Apr | **5** | 23% |
| #1 „Knocks Things Off" | 19. Apr | **4** | 18% |
| L2 „20 Enrichment Ideas" | 12. Apr | **4** | 18% |
| #3 „Why Cat Stares" | 23. Apr | 2 | 9% |
| #4 / #6 / L1 / #5 (je 1–2, tlw. erschlossen) | — | 7 | 32% |

**Die Top-3-Artikel (59% aller Conversions) sind ALLE Mitte/Ende April live gegangen.** Die neuen #5/#6/#7 (4. Mai) tauchen kaum auf. Ursache: **Pinterest-Ramp-Lag** — Pins brauchen ~4–8 Wochen bis zur Verteilungsreife. Mai-Conversions tragen also April-Artikel.

### Das korrigiert die Board-Interpretation (Befund 2)
`indoor-cat-life` konvertiert nicht *als Board* am besten, sondern weil dort die **reifen April-Pins** liegen (L2 Enrichment). Richtige Konsequenz: **nicht** „mehr auf indoor-cat-life pinnen", sondern **den bewiesenen Themen-Cluster ausbauen** (Toys + Enrichment + destruktives Verhalten) und neuen Pins Zeit geben.

### Restliche Daten-Lücke
4 von 14 Zuordnungen sind *erschlossen* (🟡), nicht hart bestätigt — Pinterest blendet die Ziel-URL für Nicht-Eingeloggte aus. Für 100%: eingeloggt „Read it" auf den 🟡-Pins klicken. Sauberer Langzeit-Fix: UTM-Parameter (`?utm_source=pinterest&utm_campaign=article-X`) → Messung in Web-Analytics statt Reverse-Engineering.

---

## To-Dos für Monat 2

- [ ] **Sieger-Cluster ausbauen** — Toys + Enrichment + destruktives Verhalten (#2, #1, L2 = 59% der Conversions). Hier neue Pins/Artikel priorisieren.
- [ ] **Saves erhöhen** — speicherwürdigere Creatives (Listicles, „save for later"-Hooks), v.a. auf `best-cat-products` (0 Saves).
- [ ] **Tote Boards entscheiden** — `new-cat-parent` & `playful-cats` reaktivieren oder einstampfen.
- [ ] **#5/#6/#7 fair bewerten** — erst Ende Juni/Juli, nach Ablauf des Ramp-Lags. Juni-Export = Test, ob die neuen Artikel zünden.
- [ ] **🟡-Zuordnungen verifizieren** — 4 erschlossene Pins eingeloggt per „Read it" hart bestätigen (optional), oder UTM-Parameter einführen.
- [x] **Star-Pins analysiert** — alle 14 Konverter gemappt → `../pin-id-map.md`.
- [ ] **Nächster Export** — Ende Juni als `2026-05-29_to_2026-06-29/` ablegen, gleiche Metriken, dann Monat-über-Monat vergleichen.
