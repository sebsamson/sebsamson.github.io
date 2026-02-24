# External Web Designer Handout

## Purpose
Reproduce the **current website information architecture and page structure** (navigation, section hierarchy, media placements, and route map) with a redesigned visual layer. Content integration will be done later.

## Scope
- Rebuild structure for all public routes in this repo (except `_cv.html` and `_cv_embedded.html`).
- Preserve route names and page purposes.
- Keep existing content block order and media placements.
- Do not redesign document/PDF assets.

---

## Global Layout Contract

### 1. Header (all pages except redirect alias)
- Sticky top header.
- Site title: `Sebastien Samson`.
- Primary nav links in this exact order:
  1. `Home` -> `index.html`
  2. `Services` -> `services.html`
  3. `Proof` -> `proof.html`
  4. `Credits` -> `games.html`
  5. `Writings` -> `essays-and-talks.html`
  6. `Contact` -> `contact.html`
- One current page indicator (`aria-current="page"`) on top-level pages only.

### 2. Footer (all pages except redirect alias)
- Consulting-first CTA line with:
  - `Book an intro call` -> `mailto:contact@sebsamson.com?subject=Intro%20Call`
  - `Download one-pager` -> `pdf/CV 1 page - Sebastien Samson.pdf`
  - LinkedIn link -> `https://www.linkedin.com/in/sebsamson`
- Legal disclaimer paragraph below CTA line.

### 3. Shared frame + behavior
- Skip link to main content (`#main`).
- Main content container constrained to centered max width.
- Cards/sections are stacked with clear vertical rhythm.
- Mobile behavior: hero and card grids collapse to single-column.

---

## Route Map

### Core conversion pages
1. `index.html` (Home)
2. `services.html` (Services)
3. `proof.html` (Proof)
4. `contact.html` (Contact)

### Supporting pages
5. `games.html` (Credits)
6. `essays-and-talks.html` (Writings)
7. `impact.html` (legacy alias -> redirect to Proof)

### Project/detail pages (credit deep-links)
- `finalfury-vr.html`
- `synthriders-vr.html`
- `ugc.html`
- `jurassicworldalive-mobile.html`
- `jurassicworldthegame-mobile.html`
- `lovelink-mobile.html`
- `dragonsriseofberk-mobile.html`
- `dcheroesvillains-mobile.html`
- `projectcarsgo-mobile.html`
- `legolife-mobile.html`
- `spymaster-mobile.html`
- `farmerama-web.html`
- `skylandersuniverse-web.html`
- `combatofgiants-wii.html`
- `petzfantasy-ds.html`
- `myweightlosscoach-iphone.html`
- `iquit-iphone.html`
- `kilojam-installation.html`
- `projetxion-installation.html`
- `sanscoeurcircuit-installation.html`

---

## Detailed Page Specs

## `index.html` (Home)
### Required sections (order is mandatory)
1. Hero
- Left: portrait image.
- Right: positioning tagline, short lead, 2 CTA buttons.

2. `What I do`
- 3 bullet outcomes.

3. `How I work`
- 3 service cards (high-level summaries).

4. `Selected outcomes`
- 3 clickable cards linking to anchored sections in `proof.html`:
  - `#vision-reset`
  - `#backlog-triage`
  - `#retention-feature`

5. `Where I have done it`
- Short credibility paragraph.
- Link to `games.html`.

6. Closing CTA strip
- Repeated two-button CTA.

### Media on page
- `images/Seb_1Mb.jpg`

---

## `services.html` (Services)
### Required sections
1. Intro (`h2 + lead paragraph`)
2. 3 offer cards:
- `Vision and Prioritization Reset` (10 business days)
- `Execution Alignment Sprint` (4 to 6 weeks)
- `Fractional Game Direction Retainer` (ongoing)

3. Each offer includes:
- Short use-case paragraph
- `Deliverables` subheading
- Deliverables bullet list

4. Closing CTA strip
- `Book an intro call`
- `Download one-pager`

### Media on page
- No image assets required.

---

## `proof.html` (Proof)
### Required sections
1. Intro paragraph (`Selected outcomes from director and manager roles`)
2. 3 mini case studies (card format), each with fixed block structure:
- `Context`
- `Problem`
- `What I did`
- `Artifacts delivered`
- `Result`

3. 3 ultra-short proof bullets block
4. Testimonials block with 2 quote cards
5. Closing CTA strip (2 buttons)

### Anchors required
- `id="vision-reset"`
- `id="backlog-triage"`
- `id="retention-feature"`

### Media on page
- No image assets required.

---

## `contact.html` (Contact)
### Required sections
1. Intro paragraph
2. `Direct actions` panel
- Email CTA button
- LinkedIn button
- one-pager download button

3. `Engagement fit checklist` panel
4. `Response expectations` panel

### Media on page
- No image assets required.

---

## `games.html` (Credits)
### Required sections
1. Intro block (`h2: Credits` + bridge paragraph linking credits to services)
2. Employer/company timeline sections (Kluge, Ludia/Jam City, EA, LEGO, Playraven, Bigpoint, Frima, Ubisoft)
3. Each employer section:
- Employer logo in heading
- Role + date range
- Bullet/project links

### Media on page
- Employer logos:
  - `images/logos/kluge.png`
  - `images/logos/jamcity.png`
  - `images/logos/ea.png`
  - `images/logos/lego.png`
  - `images/logos/playraven.png`
  - `images/logos/bigpoint.png`
  - `images/logos/frima.png`
  - `images/logos/ubisoft.svg`

---

## `essays-and-talks.html` (Writings)
### Required sections
1. Intro paragraph
2. `Gamification & Player Psychology` section
3. `Game Design Theory` section
4. `Interactive Art & Technology` section
5. Each subsection contains title + brief summary + PDF links.

### Media on page
- No images.
- PDF links are required:
  - `pdf/The Big Gamification Challenge  2018.pdf`
  - `pdf/Compulsion Loops & Dopamine in Games and Gamification.pdf`
  - `pdf/Flow and Difficulty Adjustment in Video Games.pdf`
  - `pdf/Video games and Cybernetics.pdf`
  - `pdf/Interactivity, arts and new technologies.pdf`
  - `pdf/LARP as interactive work.pdf`

---

## `impact.html` (Compatibility alias)
### Required behavior
- Immediate redirect to `proof.html`.
- Canonical URL must be `https://sebsamson.com/proof.html`.
- Fallback text link to `proof.html` for bots/users without refresh support.

### Media on page
- No required media.

---

## Project/Detail Pages Template Spec

Applies to all project pages listed in route map.

### Required structure
1. Shared header/nav
2. Top back-link line to `games.html` (`Back to experience`)
3. Main content card (`section-box`) with:
- `h2` project title
- One or more media blocks (`img`), then descriptive text
- Optional metadata tag line (`Platform | Status | Role`)
- Bullet list of responsibilities/highlights
- Optional source/reference line
4. Shared footer

### Media usage pattern
- Most pages: single hero image.
- `ugc.html`: three-image gallery block.
- `petzfantasy-ds.html`: two-image row.
- Some installation pages are text-only or minimal media.

---

## Project Page Media Inventory
- `combatofgiants-wii.html` -> `images/dinosaurstrike.jpg`
- `dcheroesvillains-mobile.html` -> `images/dchv-hero.svg`
- `dragonsriseofberk-mobile.html` -> `images/dragons-berk-hero.jpg`
- `farmerama-web.html` -> `images/Farmerama.jpg`
- `finalfury-vr.html` -> `images/finalfury-cover.jpg`
- `iquit-iphone.html` -> `images/iquit.png`
- `jurassicworldalive-mobile.html` -> `images/jw-alive-hero.jpg`
- `jurassicworldthegame-mobile.html` -> `images/jwthegame.jpg`
- `legolife-mobile.html` -> `images/Legolife.jpg`
- `lovelink-mobile.html` -> `images/lovelink-hero.jpg`
- `myweightlosscoach-iphone.html` -> `images/mwlc41.jpg`
- `petzfantasy-ds.html` -> `images/petzmoonlight.jpg`, `images/petzsunshine.jpg`
- `projectcarsgo-mobile.html` -> `images/pcgo01.jpeg`
- `sanscoeurcircuit-installation.html` -> `images/sans_coeur_circuit_diagram.jpg`
- `skylandersuniverse-web.html` -> `images/skylanders.jpg`
- `spymaster-mobile.html` -> `images/Spymaster.png`
- `synthriders-vr.html` -> `images/synthriders-hero.jpg`
- `ugc.html` -> `images/horizonworlds-hero.jpg`, `images/roblox-ugc.jpg`, `images/uefn-square.jpg`

---

## CTA + Link Contract (must keep)
- Primary CTA everywhere: `mailto:contact@sebsamson.com?subject=Intro%20Call`
- Download CTA everywhere: `pdf/CV 1 page - Sebastien Samson.pdf`
- LinkedIn: `https://www.linkedin.com/in/sebsamson`

---

## Accessibility + Semantics Requirements
- Keep skip-link and main landmark (`id="main"`).
- Keep heading hierarchy logical (`h1` page title, then `h2` section titles).
- Keep alt text for all meaningful images.
- Keep descriptive link labels (avoid generic "click here").

---

## Deliverable Expected From External Designer
Provide a redesigned static HTML/CSS implementation that preserves:
- same route map,
- same section ordering,
- same media placements,
- same CTA/link targets,
- same redirect behavior for `impact.html`.

Content copy can remain placeholder-safe if section structure and slots are preserved exactly.
