# 🧠 Pinterest Analyse-Playbook

**Zweck:** Stabiler, agent-agnostischer Auftrag. Jeder Agent (Claude Code *oder* Codex) führt
dieselben Schritte auf dem neuesten Snapshot aus, damit Auswertungen über Monate vergleichbar
bleiben. Das ist Schicht 2 des selbstlernenden Systems (Daten → **Analyse** → Feedback).

> Lies dieses File komplett, bevor du analysierst. Erfinde keine Zahlen — alle Metriken stehen
> deterministisch in `snapshot.json` / `facts.md`. Deine Aufgabe ist Mustererkennung + Hypothesen
> + konkrete Strategie-Änderungen, **nicht** Arithmetik.

---

## Inputs (in dieser Reihenfolge lesen)

1. `analytics/<neueste-periode>/facts.md` — vorgerechnete Ranking-Tabellen
2. `analytics/<neueste-periode>/snapshot.json` — vollständige Rohdaten (falls du tiefer musst)
3. `analytics/<vorherige-periode>/analysis.md` — letzte Analyse (für Deltas)
4. `analytics/pin-strategy-learnings.md` — die aktuell gültigen Regeln
5. Kontext: `06-SOPs/Pinterest-Posting-SOP.md` (5-Pin-Formel), Memory-Feedbacks zu Pin-Layout/Cadence

## Schritte

### 1. Periode einordnen
- Zeitraum, Gesamt-Impressions/Saves/Outbound, Anzahl gemappter vs. ungemappter Pins.
- Delta zur Vorperiode (Wachstum? Welche Dimension trägt es?).

### 2. Pins gegeneinander vergleichen (Kern-Auftrag)
Für jede Dimension Gewinner und Verlierer benennen:
- **Pin-Typ** (Problem / Listicle / Product-Price / Emotional / Save-this)
- **Layout** (Full-Bleed vs Editorial Split)
- **Artikel / Thema**
- **Board**
- **Headline-Muster** (Frage? Preis-Hook `$X`? Zahl `N Ideas`? Negation `Never`?)

Nutze pro Pin die **richtige** Kennzahl je Ziel:
- Reichweite → IMPRESSION
- Klick-Effizienz → Outbound-CTR (nur Pins mit ≥10 Impr vergleichen)
- Pinterest-Algorithmus-Signal → SAVE / SaveRate (laut 5-Pin-Formel das primäre Ziel)

### 3. Stichproben-Disziplin (Pflicht — sonst Overfitting)
- Bei aktuellem Traffic ist **1 Monat nur richtungsweisend**, nicht beweisend.
- Markiere jede Aussage mit Konfidenz: **`belastbar`** (≥3 Pins *und* ≥300 Impr in der Gruppe),
  **`Signal`** (sichtbarer Trend, kleine Basis), **`Rauschen`** (<50 Impr — nicht interpretieren).
- Ein einzelner Ausreißer-Pin (z. B. 20 % CTR bei 20 Impr) ist eine **Hypothese**, kein Beweis.

### 4. Hypothesen formulieren
- 3–6 konkrete „Wenn wir X tun, erwarten wir Y"-Sätze.
- Jede mit: Evidenz (welche Tabelle), Konfidenz, und einem prüfbaren Gegen-Test für nächsten Monat.

### 5. Konkrete Strategie-Änderungen ableiten
Übersetze Hypothesen in Anweisungen für die **nächste** Pin-Brief-Erstellung, z. B.:
- „Pin-Typ-Mix verschieben: +1 Listicle, −1 Save-this pro Artikel."
- „Preis-Hooks (`$X`) als Product-Pin-Standard testen."
- „Layout Full-Bleed für Problem-Hooks bevorzugen."
Sei spezifisch genug, dass die Brief-Erstellung sie ohne Rückfrage umsetzen kann.

## Outputs (schreiben)

### A. `analytics/<neueste-periode>/analysis.md`
Aufbau: Executive Summary (5 Bullets) → Vergleich pro Dimension → Hypothesen-Tabelle →
Empfohlene Änderungen → Was nächsten Monat zu prüfen ist.

### B. `analytics/pin-strategy-learnings.md` aktualisieren (die Lern-Schleife)
- **Neue/bestätigte Regel** → eintragen oder Konfidenz erhöhen, Evidenz + Datum ergänzen.
- **Widerlegte Regel** → in „Retired" verschieben mit Grund.
- Changelog-Zeile unten anhängen (Datum · Periode · was sich änderte).

> Diese zwei Dateien committen. Git-Historie = das Gedächtnis des Systems. So baut sich die
> Strategie Monat für Monat aus echten Live-Daten weiter auf.

## Guardrails
- Niemals an Mini-Zahlen overfitten. Lieber „noch zu früh" schreiben als eine Scheinregel zementieren.
- `confidence: inferred`-Pins (Legacy-Overrides) sind weicher als hart gemappte — entsprechend gewichten.
- Bestehende Memory-Regeln (Pin-Cadence, Layout-Variation, kein Kling Standard) respektieren, nicht überschreiben.
- Lieber 3 belastbare Learnings als 10 spekulative.
