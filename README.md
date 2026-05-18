# Bergamo — Open-Air · Container e.V.

Design system for **BERGAMO**, a two-night open-air music festival held on a field between Schwanfeld and Untereisenheim, Lower Franconia / Bavaria. The stage is built around a steel shipping container — hence the tagline **"Open-Air · Container e.V."**.

## At a glance

- **Brand:** BERGAMO
- **Tagline:** Open-Air · Container e.V.
- **Location:** Schwanfeld, Bayern (49.909626, 10.144008)
- **Edition covered here:** 2026
  - **Fri, 31 July 2026** — Classic Rock '80er & '90er, 21:00 Uhr
  - **Sat, 1 August 2026** — All Mixed Up, 21:00 Uhr
- **Instagram:** [@bergamo_schwanfeld](https://www.instagram.com/bergamo_schwanfeld/)
- **Primary language:** German (with the occasional bit of English for music titles)

## Source material

This system was built from a single brief — no prior codebase, no Figma file, no existing wordmark. Everything visual here (logo, palette, type, layout) was authored fresh for this engagement and should be treated as a **v0 proposal**, not a locked brand. See **CAVEATS** at the end and the chat for next steps.

If you have prior festival posters, T-shirts, flyers, photos of the container/stage, or social posts you want carried forward, drop them into `assets/` and let me know — I'll fold them in.

## Index

| Path | What it is |
|---|---|
| `README.md` | This file. Brand context + content + visual + iconography rules. |
| `SKILL.md` | Agent-skill manifest. Same rules, machine-readable header. |
| `colors_and_type.css` | All design tokens — color, type, spacing, radius, shadow. Import this. |
| `fonts/` | Webfont files (all from Google Fonts; see Type section). |
| `assets/` | Logo lockups, marks, textures, icons. |
| `preview/` | Small HTML cards rendered into the Design System tab. |
| `ui_kits/website/` | The festival landing page — fully built React/JSX UI kit. |

---

## CONTENT FUNDAMENTALS

**Voice:** Direct, warm, a little proud. Village-festival energy — this is run by people who live here, not by a marketing agency. Not corporate, not slick, not ironic.

**Language:** German first. Don't translate into English unless we're talking to non-German speakers. Keep German conventions: 24-hour time ("21:00 Uhr", not "9pm"), dates as "Fr. 31.07.2026" or spelled out "Freitag, 31. Juli 2026", and the Eszett (ß) where it belongs.

**Address the reader:** Use **"ihr"** (informal plural) — this is a crowd, not a customer. "Kommt vorbei", "Wir sehen uns am Container", "Bringt gute Laune mit". Never **"Sie"**. **"Du"** is fine for one-on-one social-DM copy but the public site speaks to the group.

**Casing:** Headlines are **ALL CAPS** — it's a poster. Body copy is sentence case, German nouns capitalized as normal. Dates and times in their normal German form.

**Tone examples — do:**
- "BERGAMO. Open-Air · Container e.V.."
- "Zwei Nächte. Eine Bühne. Ein Container."
- "Anfahrt: zwischen Schwanfeld und Untereisenheim. Folgt der Beschilderung ab Ortsausgang."
- "Eintritt frei. Spende für die Band."
- "Wir freuen uns auf euch."

**Tone — don't:**
- ❌ "Erleben Sie ein unvergessliches Musikerlebnis." (corporate, "Sie")
- ❌ "Get ready for the wildest two nights of your life 🤘🔥" (Engl., emoji slop)
- ❌ "BERGAMO 2026™" (no ™, no ®, this isn't a brand activation)
- ❌ "Discover the magic" (translated, vague)

**Emoji:** No. Single exception: the festival's own little wordmark glyphs (see Iconography). Replace any emoji impulse with a typographic detail (a stencil number, a bullet, an arrow).

**Numbers and lineup formatting:** Day name → date → genre → start. Stacked when there's room:

```
FREITAG
31.07.2026
Classic Rock — '80er & '90er
ab 21:00 Uhr
```

Inline when there isn't: `Fr 31.07. · Classic Rock · 21:00`.

**Microcopy:**
- Call-to-action verbs are short and physical: "Anfahrt", "Folgen", "Teilen", "Merken".
- Negative/practical info is matter-of-fact, not apologetic: "Keine Kartenzahlung. Bargeld und EC."
- The container is a recurring character — refer to it by name ("der Container", "Container e.V.", "am Container") rather than abstracting it into "venue" or "stage".

---

## VISUAL FOUNDATIONS

The visual language is built on three ideas: **a steel container in a field**, **a hand-stuck concert poster**, and **a Bavarian summer night**. Everything below serves one of those three.

### Color

A small, deliberately limited palette. We commit hard to one hot accent (Container Orange) against warm cream paper and deep night blue. No purple. No pastel. No gradients other than the page-bottom horizon wash described below.

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0B0E12` | Body text, primary fg on light. Almost-black with a hint of blue. |
| `--paper` | `#F4ECDD` | Default page background. Warm bone, like Riso paper. |
| `--paper-2` | `#EADFCA` | Slightly darker paper, for cards/sections on `--paper`. |
| `--night` | `#101826` | Deep navy. Used full-bleed for "night" sections and posters. |
| `--container` | `#8B1E2D` | THE accent. Container/safety orange. Always with intent. |
| `--container-deep` | `#641520` | Pressed/hover/shadow of `--container`. |
| `--hopfen` | `#3F5A2A` | Bavarian hop green, used sparingly for "Mixed Up" night. |
| `--steel` | `#6E6A63` | Warm-grey neutral for secondary text and borders. |
| `--steel-2` | `#A8A294` | Lighter steel — disabled, faint rules. |
| `--haze` | `rgba(11,14,18,.08)` | Universal subtle wash / overlay tint. |

Semantic foreground tokens (`--fg-1`, `--fg-2`, `--fg-3`) and surface tokens (`--bg-1`, `--bg-2`, `--bg-3`) layer on top — see `colors_and_type.css`.

### Type

Three families:

- **Display: Steelfish** (single weight, condensed) — supplied by the client (`fonts/steelfish_rg.otf`), the festival-poster workhorse. Always uppercase, tightly tracked. Because it's one weight, hierarchy is built with **size + spacing**, not weight.
- **Body: Space Grotesk** (400/500/700, Google Fonts) — slightly mechanical neo-grotesque. Good for German with its long compound nouns.
- **Mono / accent: JetBrains Mono** (500/700, Google Fonts) — for dates, coordinates, set times, ticket numbers. Anything that feels stamped or stencilled.

Scale lives in `colors_and_type.css` as `--text-*` tokens, with semantic aliases (`h1`, `h2`, `lead`, `body`, `caption`, `mono-stamp`). Display sizes use `font-stretch` or letter-spacing rather than condensed cuts to keep the load light.

### Spacing & rhythm

8px base grid. Tokens `--s-1` (4) through `--s-12` (96). Sections breathe — posters need air. Inside cards, density is medium; between sections it's deliberately generous.

### Backgrounds

- **Paper as default.** `--paper` is the home background, not white. White feels like a tech product; bone feels like a flyer.
- **Night sections** flip to `--night`, with display type going `--paper` or `--container` over the top.
- **Container texture.** A subtle corrugated-stripe SVG pattern (`assets/corrugated.svg`) is used as a divider/banner, never as a wallpaper.
- **No photographic backgrounds by default.** If real photos arrive, we'll lean toward warm-evening, slight grain, golden-hour. No cool/blue or B&W until we have a reason.
- **No gradients** except a single permitted one: the page-bottom horizon wash from `--paper` to `--paper-2`, suggesting a hill.

### Borders, radii, shadows

- **Radius:** mostly **0**. Cards, buttons, sections — flat-cut. The exceptions are pill-shaped controls (radius full) and image crops at `--r-md` (8px) for photos only.
- **Borders:** 1px `--ink` for high-contrast outlines, 1px `--steel-2` for muted dividers. Borders are used a lot — they're a poster signal.
- **Shadows:** offset hard shadows (no blur), like risograph misprint or stickered poster. Token `--shadow-stamp: 6px 6px 0 var(--ink)`. Used on the primary CTA and headline cards. Standard soft elevation exists (`--shadow-soft`) but is reserved for menus/modals.

### Hover & press

- **Hover (buttons/links):** color flips — `--container` → `--container-deep`; link underline thickens from 1px to 2px. No background blur, no scale.
- **Press:** the hard offset shadow collapses (`6px 6px 0` → `0 0 0`) and the element nudges +6/+6 px to meet its old shadow position. Tactile, like pressing a stamp.
- **Focus:** 2px outline in `--container`, 2px offset. Always visible — accessibility first.

### Animation

Minimal and physical.

- **Easing:** `cubic-bezier(.2,.7,.2,1)` ("ease-stamp") for everything UI. No springs, no bouncing.
- **Durations:** 120ms for press, 180ms for hover, 320ms for section transitions. Never longer than 400ms.
- **Marquee:** the wordmark and lineup type may scroll horizontally on the landing page — old-school marquee, constant speed, no pause on hover.
- **No parallax. No scroll-jacking. No fade-in-on-scroll.** Content is present immediately.

### Transparency & blur

- Blur is used **once**: behind the sticky top bar when scrolled (`backdrop-filter: saturate(140%) blur(10px)` over `--paper` at 70%).
- Otherwise, transparency is reserved for the `--haze` overlay token and image protection scrims (`--scrim`).

### Layout rules

- Max content width: **1240px**. Posters/banners go full-bleed.
- 12-column grid on desktop, 4-column on mobile. Gutter = `--s-4` (16) on mobile, `--s-6` (24) on desktop.
- Sticky elements: the top bar. Only. Nothing else floats.

### Imagery direction

Until real photos arrive, all imagery is typographic or hand-built (the wordmark, the container silhouette, the stencil numbers). When photos arrive, edit toward **warm, late golden hour, slight grain, candid**. Avoid: blue-hour cool tones, drone shots, ultra-sharp/over-retouched press photos.

---

## ICONOGRAPHY

Bergamo is **not an icon-heavy brand.** A festival poster doesn't need a UI icon library — it needs a wordmark, a couple of marks, and stenciled numbers. Where pure-UI icons are needed (e.g., in the upcoming website's nav: menu toggle, external-link arrow, Instagram glyph), we use a small curated set from **Lucide** (CDN: `https://unpkg.com/lucide-static@latest`).

**Why Lucide:** stroke-only, 1.5–2px stroke, geometric, friendly-but-not-cute. It matches the typographic + poster vibe without injecting a different visual personality.

- **Stroke weight:** 1.75px. We override Lucide's default 2px to feel a hair finer next to Steelfish.
- **Size:** 16/20/24/32 px. No other sizes.
- **Color:** always `currentColor`. Icons never carry brand color independently — they inherit from the text or button they sit in.
- **No filled icons.** No duotone. No colored icons. No PNG icons.

**Brand marks** (in `assets/`):

- `logo-bergamo.svg` — the BERGAMO wordmark, condensed display.
- `logo-stacked.svg` — wordmark stacked over "Open-Air · Container e.V.".
- `mark-container.svg` — the container silhouette with antenna/cable rig — used as a stand-alone monogram (favicon, social avatar).
- `corrugated.svg` — repeating corrugated-metal stripe pattern, used as a section divider.
- `stamp-bergamo.svg` — circular "rubber-stamp" version of the wordmark, for tickets / merch mockups.

**Emoji:** **No.** Not in headlines, not in body, not in social. The closest thing we have are the stenciled numerals "31" and "01" that mark the two festival nights — those are typographic, set in Steelfish with the `--container` color.

**Unicode dingbats:** Reserved for one use only — the bullet/separator `·` between inline date/time items (`Fr 31.07. · 21:00 · Open Air`). Never `•`, never `—` in body, never `★`.

---

## UI Kits

- **`ui_kits/website/`** — Bergamo 2026 single-page site, the deliverable from the original brief. JSX components, click-through interactive prototype.

(No app, no docs site, no second product — there's only the festival site.)

---

## CAVEATS

- **No prior brand material was supplied.** The wordmark, palette, and type choices are a fresh v0 proposal. If there are existing posters, flyers, T-shirts, or photos from previous Bergamo editions, please drop them in and I'll align the system to them.
- **Display font is now Steelfish** (`fonts/steelfish_rg.otf`, uploaded by client). The earlier Big Shoulders Display fallback is kept in the font stack for any environment where Steelfish hasn't loaded yet (and for standalone SVG assets opened outside a browser). If you have additional Steelfish weights (e.g. Steelfish Bold / Black) please upload them — right now everything renders at the regular weight.
- **Body & mono fonts are Google Fonts substitutes** for "neo-grotesque" + "stencilled mono". If you have brand-specified body / mono faces, swap them in `fonts/` and `colors_and_type.css`.
- **No photography yet.** All imagery is typographic/illustrative. Real photos of the container, the field, the crowd, the lineup would change the system meaningfully.
- **Coordinates 49.909626, 10.144008 placed by the brief** — I haven't ground-truthed them; the map link assumes they're correct.
