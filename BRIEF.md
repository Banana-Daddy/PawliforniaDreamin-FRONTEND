# Pawlifornia Dreamin' — Design Brief (FRONTEND-FX build)

## Brand Synopsis

Pawlifornia Dreamin' is the dog-inclusive wedding service of the California desert. Founder Rhoda Coscetti — Coachella Valley native, UC Davis Animal Biology, 8+ years in animal welfare — built the business in 2022 around one idea: couples shouldn't have to choose between a polished celebration and including the pet who started the family.

The service is a full-stack event pet care operation — one handler per pet, safe transport (up to 30 miles), basic supplies, rental attire, and vendor/venue coordination on the day. Target audience is couples planning weddings, elopements, engagements, quinceañeras, and family photos in the Coachella Valley (Palm Springs, La Quinta, Indio, Joshua Tree); the dream client is the wedding planner who refers Pawlifornia repeatedly.

The brand is LGBTQIA+ inclusive, bilingual-welcoming ("¡También hablamos español!"), and priced as a premium service ($200–$1,500 per package). It's built in honor of Lily, a senior chihuahua who crossed the rainbow bridge in 2023.

---

## Design Decisions

### Direction: Vogue Weddings in Palm Springs, 1973

A sophisticated editorial wedding magazine that treats dogs as the leading cast. Not cutesy. Not saccharine. Cream-paper canvas, oversized italic serif mastheads, ritualistic section numbering (№ 01–08), rotated polaroid frames, periwinkle reserved as the memorable "house color" flash. Brand-adjacent to Boozehounds' desert sophistication and Fairy Tail's storybook softness — without leaning into either trope.

### Type System

- **Display**: Fraunces (variable, SOFT axis) — editorial fairy-tale italic that reads like a wedding masthead
- **Body**: Cormorant Garamond — intimate wedding-magazine serif, pairs naturally with Fraunces italics
- **Utility**: Archivo (small caps, wide tracking) — labels, buttons, nav

All loaded via Google Fonts.

### Palette

```
--canvas: #F5EFE4          warm cream paper, NOT white
--canvas-dim: #EEE6D6      section variance
--ink: #1A1614             warm black-brown body text
--ink-soft: #5E5548        captions/metadata

--periwinkle: #8C8FE8      signature flash (sparkles, dividers, badges)
--periwinkle-deep: #5C5FBF text-contrast links, section numbers
--periwinkle-mist: #D8D9F3 hover/wash backgrounds

--terracotta: #C96A49      desert accent
--dusty-rose: #D9A79F      soft warm wash
--sand: #E7D4BC            section background strip
--sage: #99A88D            tertiary / reserved
```

Dominant: cream canvas + warm ink. Accent: periwinkle at ~10% surface area, but in high-leverage moments (drop caps, section numbers, ring seals, pull quotes). Warm desert tones carry backgrounds and secondary UI moments.

### Signature moves

1. **The Magazine Masthead** — hero animates in like a Vogue cover unfurling. "PAWLIFORNIA" lands first, then "Dreamin'" swoops in italic below, then the periwinkle "№ 01 · Vol. II" ornament fades up. The hero IS a wedding-magazine cover.
2. **Editorial section numbering** — every section opens with "№ 0X — [Section Name]" set in periwinkle italic Fraunces + Archivo small caps, separated by a hairline rule. Turns scrolling into turning pages.
3. **Evolving sparkle** — the logo's sparkle becomes a recurring 4-point periwinkle star ornament used as list bullets, section dividers, and Lily's tribute mark. Honors the existing motif without repeating the logo.
4. **Polaroid-esque rotated frames** — hero + case-study photos sit in cream frames at -2° to -4° rotation. Warm, human, instantly editorial.

### Motion principles

- Staggered masthead reveal on load (80–140ms stagger, ease-out-quart, blur→focus on each line)
- Scroll-triggered section reveals via IntersectionObserver — "developed photograph" fade + 20px drift
- Hover on polaroid photos: slight scale + tilt correction, 400ms cubic-bezier
- 3 slow-drifting periwinkle sparkles in hero only
- Link underlines draw in from right→left on hover
- Full killswitch via `prefers-reduced-motion`

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Hero masthead | Hero 03 / Hero 04 (Ali Imam) | `hero editorial magazine serif` | [21st-sources/hero-editorial-masthead.tsx](21st-sources/hero-editorial-masthead.tsx) | Oversized display wordmark with tight negative tracking; marginalia paragraphs flanking the big type; asymmetric image placement with rotation |
| Packages pricing | Pricing Card (Ultimate Plan) | `pricing editorial serif minimal` | [21st-sources/pricing-editorial-card.tsx](21st-sources/pricing-editorial-card.tsx) | Split-column price/description/features layout; "From $X" + secondary meta pattern; staggered row entrance |
| In Every Package rows | Content Block (Tailark) | `section divider numbered editorial` | [21st-sources/section-row-divided.tsx](21st-sources/section-row-divided.tsx) | Row-based asymmetric content blocks with thin rules; grid split for text + illustration; "№ 0X — [Label]" section opener with divider |
| Case-study pull quote | Testimonials Two + before:bg-primary variant | `testimonial pull quote italic serif` | [21st-sources/testimonial-pullquote.tsx](21st-sources/testimonial-pullquote.tsx) | Massive serif pull quote with tight leading and italic emphasis; vertical-rule-left attribution pattern |
| Inquiry form | Contact Form (shadcn Card) | `contact form editorial serif` | [21st-sources/contact-form-editorial.tsx](21st-sources/contact-form-editorial.tsx) | Label + Input stack with generous vertical rhythm; Select dropdown for structured choices; clean submit at bottom |
| Footer oversized wordmark | Modem Animated Footer | `footer oversized typographic serif` | [21st-sources/footer-oversized-wordmark.tsx](21st-sources/footer-oversized-wordmark.tsx) | Huge low-opacity brand wordmark as atmospheric background; gradient fade tucking text into the page |

### Logos used (Logo Search)

- Instagram — pulled via `logo_search` but ultimately not used as rendered SVG. The footer links to Instagram as a text link instead, which better matches the editorial type treatment. SVG cached in case we want to restore the branded icon later.

### Trends used (BLAST-only directive — N/A)

FRONTEND-FX mode — `TRENDS_QUICK_REFERENCE.md` is not consulted per CLAUDE.md. The frontend-design skill drives the design intelligence. Style references instead: Vogue Weddings editorial spreads, 70s Palm Springs postcard aesthetic, Boozehounds neighborhood-restaurant sophistication, Fairy Tail Pet Care storybook softness.

---

## Content Inventory

### Images used (local, web-optimized)

All sourced from Zack's delivered photo set (pawliforniadreamin.com shoots, July 2023). Originals preserved in `Images/` + `Images/Logos/`. Web-optimized versions live in `images/` (see [images/](images/)):

- `kiss.jpg` — the bride-and-groom kiss with both chocolate labs at their feet (_AC_7141 resized to 1800w)
- `bride-dog.jpg` — bride kneeling beside chocolate lab (_AC_7198)
- `groom-dog.jpg` — groom in navy tux with chocolate lab (_AC_7228)
- `family-laugh.jpg` — family moment, couple laughing with both dogs (_AC_7016) — also the OG image source
- `family-wide.jpg` — wide family shot (_AC_6978)
- `rhoda.jpg` — founder portrait with Lily + Leaf (Rhoda.jpg)
- `logo.png` — brand wordmark/medallion (transparent PNG)
- `og.jpg` — 1200×630 Open Graph preview image (cropped from family-laugh)
- `favicon.png` — 256×256 medallion-only favicon
- `favicon-512.png` — 512×512 Apple touch icon

### Copy sources

- Headlines / taglines: pulled from BusinessPlan.pdf, PD23 flyer, and the Wayback home.html
- Package names/pricing/descriptions: **exact** from BusinessPlan.pdf p14 "Service Description & Cost"
- Founder bio: paraphrased from BusinessPlan.pdf p13 "Organizational Plan — Owner Background & Experience"
- Lily tribute: Rhoda's own words from BusinessPlan.pdf p13 ("…in honor of Lily who crossed the rainbow bridge in 2023")
- Case study quote: **fabricated in Rhoda's voice, flagged in ACCURACY.md** — replace with real testimonial when available

### Links preserved

- Instagram: `https://instagram.com/pawliforniadreamin`
- Email: `info@pawliforniadreamin.com`
- Inquiry form: in-page anchor (mockup — not wired to a real handler)

---

## Share Preview

- **OG image source**: `images/og.jpg` — 1200×630 crop of `_AC_7016.JPG` (the family laughing with both chocolate labs on the sand at Venice Beach, July 2023). This is the "movie poster energy" shot Zack flagged — sells the joy of the service in a single frame. Cropped with `sips` (resize to 1200 wide → center-crop to 630 tall → 82% JPEG quality). Final file size: 136KB.
- **OG title**: `Pawlifornia Dreamin' — Irreplaceable memories when our team takes the leash`
- **OG description**: `The dog-inclusive wedding service of the California desert. Handlers, transportation, and attire so your four-legged best friend is part of every vow.`
- **Favicon source**: medallion cropped from `logo_transparrent.PNG` (top portion, excluding wordmark), scaled to 256×256 and 512×512 via PIL LANCZOS.
- **Theme color**: `#F5EFE4` (warm cream canvas — matches the page so the mobile URL bar blends seamlessly).
- **Sub-pages with own OG**: none (single-page mockup).

---

## Build Timing

| Phase | Duration |
|---|---|
| Step 1: READ | ~8 min (deep PDF + photo cataloging) |
| Step 2: DIRECTION | ~4 min (frontend-design skill + 21st pass) |
| Step 3: BUILD | ~15 min (HTML + CSS + JS one-pass) |
| Step 3.5: Image prep + favicon + OG | ~3 min |
| Step 4: VERIFY + ACCURACY.md | ~4 min |
| Step 5: BRIEF.md | ~3 min |
| Step 6: PUBLISH (pending) | — |
| Step 7: DELIVER (pending) | — |
| **Total: prompt → mockup ready to publish** | ~37 min |

---

## Image Generation Prompts

**None needed for this build.** Rhoda's professional photo set (the Venice Beach chocolate-lab shoot) covers every slot on the page — hero, case study, supporting grid, and "In Every Package" row. All AI image generation tiers (Grok, Gemini) were skipped because real brand photography was already the best possible asset. Per CLAUDE.md accuracy rules, we would never generate fake couples for a real business anyway.

If we expand the page (Phase 2) and need atmospheric filler — desert textures, sunset washes, abstract sparkle backgrounds — prompts will go here. No prompts are needed today.

**API cost for this build: $0.00.**

---

## Suggested Next Mockups / Phase 2

1. **Testimonials section ("Notes from Couples")** — Rhoda has 3 testimonials (some on Google Business profile per Zack's answer #12). A dedicated editorial section with the couple's name, a portrait, and their words would strengthen the social proof dramatically. Plays beautifully into the magazine aesthetic.
2. **Full bilingual toggle** — per Zack's answer #11, Rhoda would love a full Spanish site eventually. Phase 2 could introduce an `EN · ES` toggle that swaps copy. The site is already structured for it (clear sections, minimal variable copy).
3. **"A Day in the Life" editorial timeline** — turn the BusinessPlan's event production steps into a scrollable editorial timeline: First Inquiry → Meet & Greet → The Drive → On-Site Coordination → The Ceremony → Afterparty. Photography + minimal copy. Could be a standalone page.
4. **Wedding Planner / Vendor Portal** — given the dream client is the referring planner (Zack's answer #7), a dedicated `/partners` landing page with referral info, coordinated styling guidance, and a planner-specific inquiry form would be high-leverage.
5. **Service Area Map** — a stylized editorial map of the Coachella Valley with Rhoda's service radius. Editorial illustrated style, not Google Maps. Doubles as SEO content and a brand flourish.
6. **Hero-Wedding Case Studies** — the Venice Beach wedding is featured here; if Rhoda has 1–2 more "hero" weddings worth storytelling around, each could be a full editorial spread. Creates an ever-growing portfolio and deepens the magazine metaphor.

---

## Production Notes

To build this into a real, production-grade site:

**Recommended stack**: **Next.js (App Router) + Tailwind + shadcn/ui**, hosted on **Vercel**.

- The cached `21st-sources/*.tsx` files are real, production-grade React + Tailwind. HANDOFF MODE can drop them directly into a Next.js project and re-apply the Pawlifornia copy/images — massive acceleration vs. rebuilding from scratch.
- CMS option: **Sanity** or **Contentful** for Rhoda to self-manage testimonials, package pricing, and case studies. Package pricing in particular benefits from CMS control since Rhoda may adjust.
- Form handler: **Resend + React Email** to send form submissions to `info@pawliforniadreamin.com`. Optional: **Notion API** to auto-create a "new inquiry" row in a Notion database for Rhoda's intake workflow.
- Analytics: **Vercel Analytics + Google Business Profile** for local SEO.
- Payments (future): **Stripe Payment Links** once Rhoda moves past Venmo (Zack's answer #9 says Venmo is fine for now).
- Fonts: Fraunces, Cormorant Garamond, and Archivo are all Google Fonts → self-host in production build for performance.

For a mid-budget production build (no custom CMS, just Next.js + form + Stripe): ~2 weeks of work. With CMS + content model + testimonial system: ~4 weeks.
