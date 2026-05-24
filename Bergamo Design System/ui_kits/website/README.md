# Bergamo Website — UI Kit

The Bergamo 2026 single-page open-air festival site. Built as the deliverable from the original brief, and also the place to see the design system in action.

## What's here

- `index.html` — the page, loads React + Babel and the JSX components below.
- `App.jsx` — top-level composition. Order of sections.
- `components/TopBar.jsx` — sticky nav, backdrop-blur on scroll, Instagram pill.
- `components/Hero.jsx` — full-bleed poster: BERGAMO wordmark + "Open-Air · Container e.V." + dates.
- `components/Lineup.jsx` — the two-night lineup, side-by-side ticket cards.
- `components/InfoStrip.jsx` — practical info row (Eintritt, Bezahlung, Verpflegung) on corrugated divider.
- `components/Anfahrt.jsx` — directions, coordinates, Google-Maps link, address.
- `components/Footer.jsx` — wordmark + Instagram + tiny print.
- `components/icons.jsx` — the small curated Lucide subset, inlined.

## Interactive bits (clickable, faked)

- Top-bar links scroll to sections.
- Instagram pill opens the real Instagram in a new tab.
- "Anfahrt öffnen" button opens Google Maps with the brief's coordinates pre-filled.
- The two lineup cards are hoverable — they raise/press with the stamp-shadow motion from the system.

Everything is static — there's no backend. This is a high-fidelity prototype, not production code.

## How to run

Just open `index.html`. React, ReactDOM, and Babel load from unpkg.
