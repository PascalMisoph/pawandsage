# 📊 Pinterest Analytics — Selbstlernendes System

Auswertung der Pinterest-Pin-Performance aus Live-Daten (Pinterest v5 API) → Learnings → zurück in
die Pin-Erstellung. Monatlicher Rhythmus.

## Die 3 Schichten

```
Schicht 1  DATEN (Script, deterministisch)   scripts/pinterest-analytics.mjs
           → analytics/<periode>/{snapshot.json, pins.csv, facts.md}
Schicht 2  ANALYSE (Agent: Claude ODER Codex)  ANALYSIS-PLAYBOOK.md
           → analytics/<periode>/analysis.md
Schicht 3  FEEDBACK (Lern-Gedächtnis)          pin-strategy-learnings.md
           → wird von der Pin-Brief-Erstellung als Constraints gelesen
```

Git-Historie = das Gedächtnis. Jeder Monat committet Snapshot + Analyse + aktualisierte Learnings.

## Monatlicher Ablauf

```bash
# 1) Daten ziehen (Standard: letzte 30 Tage bis gestern)
npm run pinterest:analytics
#    oder mit explizitem Fenster:
npm run pinterest:analytics -- --start 2026-06-28 --end 2026-07-27

# 2) Analyse durch einen Agenten (Claude Code oder Codex):
#    "Führe ANALYSIS-PLAYBOOK.md auf der neuesten Periode aus."
#    → schreibt analysis.md + aktualisiert pin-strategy-learnings.md

# 3) Committen — das ist das Gedächtnis
git add PawAndSage-Vault/03-Pinterest/analytics
git commit -m "Pinterest analytics <periode>: snapshot + analysis + learnings"
```

## Dateien

| Datei | Schicht | Von Hand editieren? |
|---|---|---|
| `<periode>/snapshot.json` | 1 | ❌ generiert |
| `<periode>/pins.csv` | 1 | ❌ generiert |
| `<periode>/facts.md` | 1 | ❌ generiert (wird überschrieben) |
| `<periode>/analysis.md` | 2 | ✍️ vom Agenten geschrieben |
| `pin-strategy-learnings.md` | 3 | ✍️ vom Agenten gepflegt |
| `pin-id-overrides.json` | 1 | ✍️ manuell für Legacy-Pins |
| `pin-id-map.md` | — | Altbestand (manuelles Mapping, vor-API) |
| `ANALYSIS-PLAYBOOK.md` | 2 | stabiler Auftrag, selten ändern |

## Wie das Mapping funktioniert
- Jeder Pin wird über **Titel → queue.json** (Artikel, Pin-Nummer) und **Brief-Header** (Pin-Typ,
  Layout) deterministisch zugeordnet. Ab Juni-Wave-2 mappt sich jeder neue Pin automatisch.
- **Legacy-Pins** (vor der queue.json) → `pin-id-overrides.json`, keyed by Pinterest-pinId.
- Nicht zugeordnete Pins erscheinen in facts.md unter „⚠️ Nicht zugeordnet" — bei Bedarf dort als
  Override ergänzen.

## Voraussetzungen
- `.env.pinterest.local` mit gültigem `PINTEREST_ACCESS_TOKEN` (Scope `pins:read` genügt).
- Token abgelaufen? Das Script refresht automatisch via Refresh-Token, sonst `npm run pinterest:oauth`.
- Analytics gibt es nur für **selbst erstellte** Pins (Repins liefern 403 → werden übersprungen).
