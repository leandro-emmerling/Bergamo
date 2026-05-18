---
name: bergamo-design
description: Use this skill to generate well-branded interfaces and assets for BERGAMO — Open-Air vom Container, the two-night open-air music festival in Schwanfeld, Bavaria. Either for production or throwaway prototypes/mocks/social/posters. Contains essential design guidelines, colors, type, fonts, brand marks, and a website UI kit.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `ui_kits/`, `preview/`).

If creating visual artifacts (posters, mocks, slides, throwaway prototypes, social cards, etc), copy assets out and create static HTML files for the user to view. Import `colors_and_type.css` and use the tokens — do not re-invent colors or type. Use the SVG marks in `assets/` rather than redrawing them.

If working on production code, copy assets and read the rules here to become an expert in designing with the BERGAMO brand.

Key non-negotiables (full rationale in README):
- **Voice is German, informal plural ("ihr"), warm and direct.** No corporate "Sie", no English filler, no emoji.
- **Headlines are ALL CAPS** in Steelfish (`fonts/steelfish_rg.otf`, single weight — build hierarchy with size, not weight). Body in Space Grotesk. Dates/times/coords in JetBrains Mono.
- **Palette is small and committed:** Container Orange (`#E55A18`) is THE accent against warm Paper (`#F4ECDD`), Ink (`#0B0E12`), and deep Night (`#101826`). No purple, no pastels, no gradients (except the single horizon wash documented).
- **Mostly flat radii.** Hard offset "stamp" shadows (`6px 6px 0`) on primary cards/CTAs. Soft shadows only for menus/modals.
- **Icons:** Lucide stroke-1.75 at 16/20/24/32. `currentColor` only. No filled icons. No emoji.
- **The container is a character**, not a venue abstraction. Refer to it by name ("der Container", "vom Container").

If the user invokes this skill without any other guidance, ask them what they want to build or design (poster, social card, flyer, a sub-page, T-shirt, etc), ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
