# BERGAMO — Open-Air · Container e.V.

Website für das **BERGAMO** Open-Air — ein zweitägiges Festival auf der
Lichtung am O-Berg zwischen **Schwanfeld** und **Obereisenheim**,
veranstaltet vom **Container e.V.**

- **Termin 2026:** Fr 31.07. & Sa 01.08.2026
- **Instagram:** [@bergamo_schwanfeld](https://www.instagram.com/bergamo_schwanfeld/)
- **Live:** bergamo-schwanfeld.de

---

## Was ist was?

| Pfad | Inhalt |
|---|---|
| `index.html` | Startseite — leitet auf die Website weiter. |
| `ui_kits/website/` | **Die eigentliche Website.** Hier wird alles bearbeitet. |
| `colors_and_type.css` | Farben & Schriften (Design-Tokens). |
| `fonts/` | Hausschrift Steelfish. |
| `assets/` | Logo, Wortmarke & Container-Textur. |

### Innerhalb von `ui_kits/website/`

| Pfad | Inhalt |
|---|---|
| `index.html` | Lädt die Seite zusammen. |
| `styles.css` | Das gesamte Aussehen. |
| `App.jsx` | Reihenfolge der Abschnitte. |
| `components/` | Die einzelnen Abschnitte (Hero, About, Lineup, Versorgung, Impressionen, Anfahrt, Footer …). |
| `assets/media/` | Die Fotos der Seite. |

---

## Inhalte ändern

Texte und Bilder stecken in den Dateien unter `ui_kits/website/components/`.
Zum Beispiel:

- **Termine / Lineup:** `components/Lineup.jsx`
- **Über uns:** `components/About.jsx`
- **Fotos:** `components/Impressionen.jsx` (Bilder liegen in `ui_kits/website/assets/media/`)
- **Kontakt / Footer:** `components/Footer.jsx`

Neue Fotos einfach in `ui_kits/website/assets/media/` legen und im
jeweiligen Bauteil den Dateinamen eintragen. Tipp: große Handy-Fotos
vorher auf ca. 1800 px Breite verkleinern, dann lädt die Seite schneller.

---

## Hosting

Es ist eine reine statische Seite — sie läuft auf GitHub Pages,
Netlify oder jedem Webspace ohne Server-Technik. Eigene Domain
(bergamo-schwanfeld.de) funktioniert überall; HTTPS gibt es gratis dazu.
