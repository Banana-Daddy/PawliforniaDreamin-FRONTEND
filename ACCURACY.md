# Accuracy Review — Pawlifornia Dreamin' (FRONTEND-FX build)

Cross-referenced against: Zack's 23-questions answer doc, the 2024 BusinessPlan PDF (Rhoda's own document), the PD23 flyer, and the Wayback archive of pawliforniadreamin.com (home + services).

## Verified ✓

### Business facts
- **Name**: Pawlifornia Dreamin' LLC ✓ (per BusinessPlan.pdf p1)
- **Founder**: Rhoda Coscetti (she/her/hers) ✓ (BusinessPlan.pdf Executive Summary + Organizational Plan)
- **Established**: July 2022 ✓ (BusinessPlan.pdf Executive Summary)
- **Service area**: Coachella Valley (high desert, low desert, beyond) — Palm Springs, Palm Desert, La Quinta, Indio, Rancho Mirage, Joshua Tree ✓ (PD23 flyer + Zack's answers #22)
- **Out-of-region**: open to local destination weddings in Southern CA ✓ (Zack's answer #22)
- **Tagline**: "Irreplaceable memories are guaranteed when our team takes the leash" ✓ (PD23 flyer + old home.html)
- **Mission / value prop**: dog-inclusive event care, coordinate with vendors, safe transport, quality insured care ✓ (matches BusinessPlan Description of Business)
- **Bilingual**: "¡También hablamos español!" ✓ (full bilingual site is a future goal per Zack's answer #11 — using callout for now)
- **LGBTQIA+ inclusive, all cultural celebrations** ✓ (PD23 flyer)

### Packages & pricing (exactly per BusinessPlan.pdf p14)
- Desert Engagement · 1hr · **From $200** ✓
- Desert Snapshot · 1.5hr · **From $350** ✓
- Desert Escape (Elopement) · 1.5hr · **From $350** ✓
- Desert Oasis · 3hr · **From $750** · +20 miles ✓
- Desert Paradise · 5hr · **From $1,200** · +25 miles ✓
- Desert Dreamin' · 7hr · **From $1,500** · +30 miles ✓
- Fairytail Bundle — 3+ services, 15% off ✓
- Add-ons (additional pet +$150, additional hour +$150, rehearsal, post-wedding care until midnight, overnight stay, formal wear rental) ✓

### Included-in-every-package
- Handler (1 per pet, meet-and-greet before event on request) ✓
- Safe transport (up to 30 miles, Adaptil calming spray, seat belt & crate) ✓
- Basic supplies (water, poop bags, treats, AirTag) ✓
- Rental attire (black harness, leash, bow tie/flower accessory) ✓
- Event coordination with vendors & venues (Oasis and up) ✓

### Founder bio (BusinessPlan.pdf p13)
- Coachella Valley native ✓
- BS Animal Biology at UC Davis ✓
- 8+ years animal welfare at rescues and municipal shelters ✓

### Lily tribute
- "Pawlifornia Dreamin' is in honor of Lily who crossed the rainbow bridge in 2023." ✓ (BusinessPlan.pdf p13)
- Zack's answer #19 confirmed she wants a quiet, beautiful tribute — not front-and-center. Our tribute is a small centered paragraph with a single sparkle, inside the "Behind the Leash" section.

### Contact preferences
- Phone prefer form or DM with follow-up call ✓ (Zack's answer #21)
- Payment: Venmo for now ✓ (Zack's answer #9) — not surfaced on public page (correct call — don't broadcast payment method)
- Home address: NOT on site ✓ (Zack's answer #20) — we list service area only, no street address

### Hero/feature case study
- The beach wedding with chocolate labs is the hero feature ✓ (Zack's answer #13 confirmed: "yes feature" — movie-poster energy)
- Photo/Video Release on file per Zack's answer #14 covers all wedding photos
- Venice Beach location ✓ (visible palm-tree skyline + Venice Beach boardwalk buildings in the background of the shoot)
- July 2023 ✓ (inferred from Jul 10/15 2023 EXIF timestamps on _AC_XXXX files)

## Flagged for Zack's review

These details were written by me (plausibly) or are items Rhoda asked us to include but that may need her specific confirmation before going client-facing:

1. **Pull quote on the feature spread — attributed to Rhoda**
   - "They weren't guests — they were family. Our team handled pickup, wardrobe, and the walk down the aisle. The couple just got to be the couple."
   - **This is my writing, not Rhoda's.** It reads like her voice but she should approve or replace. If she has actual quotes from the couple (or from her about the day), even better — those carry more weight than an owner quote.

2. **"Partner inquiries" email goes to `info@pawliforniadreamin.com`** with subject "Partner Inquiry" — same address as general inquiries. No dedicated partners email was shared; this is fine but worth confirming.

3. **Credentials / trust stamps** — we display Insured · Pet CPR Certified · Fear Free · LGBTQIA+ Inclusive · All Cultural Celebrations.
   - Per Zack's answer #16: Rhoda **was** insured but isn't currently; Pet CPR cert **expired Nov 2025**. She said "I can become insured again easily" and "I can redo it when needed."
   - **Recommendation**: before the live site goes public (post-mockup), Rhoda should reinstate insurance and re-cert Pet CPR so the stamps are literally true. Until then, these are aspirational — fine for a mockup to show the intended positioning, but flag in the client handoff.

4. **Fear Free Handling cert** — we show the stamp. Per BusinessPlan.pdf p12, Rhoda's own requirement for every handler is "certified in pet CPR, as well as Fear Free handling." Confirming Rhoda is personally Fear Free certified would strengthen the claim.

5. **Three testimonials exist** (per Zack's answer #12, "some may even be on the Google business profile"). **We did not include testimonials** in this build because Zack didn't share them directly — surfacing them is a strong Phase 2 addition (see BRIEF.md "Quick wins"). Recommend Rhoda pulls the three testimonials (with client names + any headshot/release status) and we add a dedicated "Notes from Couples" section.

6. **Instagram handle** — we link to `@pawliforniadreamin`. Verify that handle is correct (not `@pawlifornia_dreamin` or `@pawliforniadreaminllc`). Based on PD23 flyer which says "@PAWLIFORNIADREAMIN" I believe it's correct.

7. **Email: info@pawliforniadreamin.com** ✓ per PD23 flyer — confirmed.

## Caught & Fixed During Review

- Initial hero polaroid width (72vw) caused horizontal overflow on mobile when combined with the -3deg rotation. Reduced to `min(62vw, 340px)` and added right padding container.
- "PAWLIFORNIA" masthead clamp was too aggressive (17vw floor at 3.7rem) — reduced to 13.5vw / 2.7rem min so the word fits comfortably at 375px mobile width without clipping.
- Top stamp line "№ 01 · Vol. II · Palm Springs Edition · Est 2022" clipped off the right edge on mobile. Shortened at sub-breakpoint: now "Palm Springs Edition · Est 2022" on mobile, full on larger screens.
- Spanish: flyer uses "Quinceñera" (missing the tilde). Industry-standard and Rhoda's business plan both use "Quinceñera" — but correct spelling is **Quinceañera**. We used the correct spelling on the mockup. Flag to Rhoda in case she wants to match her existing flyer exactly.

## Not displayed (per Zack's direction)

- **Home address** (20151 Acoff Rd) — hidden per Zack's answer #20. Only service area shown.
- **Phone number** — hidden per Zack's answer #21 (form/DM preferred). Fine to surface later if Rhoda wants tap-to-call.
- **Future services** (wedding venue, pawty planning, photo studio, sanctuary, custom attire, merch) — omitted per Zack's answer #18 (strict today-services only).
- **Founder portrait as hero anchor** — kept quiet per Zack's answer #17 ("more behind the scenes"). Small portrait of Rhoda with Lily + Leaf lives inside "Behind the Leash" section, not on the homepage hero.
