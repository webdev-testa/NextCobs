# Portfolio layout and motion direction

Proposed direction, 30 September 2026. Design study only; application code is unchanged.

## Recommendation

Evolve the portfolio into an open studio wall: generous editorial composition, large project exhibits, a tactile cluster of personal notes, and a small number of deliberate motion sequences. Preserve Ammar's grounded engineering story, white/black foundation, pastel paper objects, sketches, and existing routes.

Audience: clients, founders, engineering managers, and peers evaluating practical engineering work. The first viewport should establish who Ammar is and lead directly toward evidence of his work. Exploration and personality should reward attention without delaying that path.

## Evidence and reference

Inspected the running local homepage at desktop and mobile sizes, its section components, global CSS, shared reveal observer, project data, PRODUCT.md, and DESIGN.md. Visually inspected https://guglieri.com/, /work, /feed, and /about, plus mobile /work. Reference observations are from this session; the site may change.

Guglieri's layout consistently uses a compact identity/bio header, a small navigation strip, introductions aligned to the right half on desktop, oversized typography with selectively emphasized words and inline objects, and large image surfaces spanning nearly the entire viewport. Work and Feed use close-spaced image grids; About gives photography substantial space. The homepage has a large visual link into the next page. The white Work/Feed/About surfaces also show why adopting only the black homepage would miss the broader system.

The applicable lessons are spatial hierarchy, consistent alignment, media scale, and clear transitions between destinations. A complete animation/performance audit of the reference was not performed; motion values below are proposed for our portfolio, not reverse-engineered reference settings.

## Current portfolio

- Identity: Inter + JetBrains Mono, white and black, pale lime/lilac/cream/mint/coral, circular monogram, pill buttons, rounded containers.
- Homepage sequence: introduction + sticky board, four selected projects, career timeline, manifesto, Currently cards, Notes cards, contact form, footer.
- Strengths: memorable core statement, useful case-study content, personal notes/sketches, detailed career evidence, responsive navigation, reduced-motion support.
- Layout friction: most sections repeat a centered 1152px container and similar vertical intervals. Project, Currently, and Notes cards have similar borders/radii/density despite different purposes. The opening has competing identity, statement, description, two CTAs, stats, and note-board layers.
- Mobile: identity appears in both header and hero; the board follows a long introduction and stats block, pushing project evidence further down.
- Motion: paper arrivals and note settling already exist. Shared IntersectionObserver reveals and hover lifts are mostly independent entrances. Adding more of these will not create continuity between sections.
- Assets: selected-project data currently provides written case studies and architecture descriptions, but no project screenshot fields. Local image assets are predominantly book covers and sketches. Real project media is a material dependency for the proposed exhibits.
- Documentation caveat: DESIGN.md describes a broader Figma marketing system; PRODUCT.md mentions three themes that are not represented by the inspected homepage implementation. Use the running portfolio and source as visual evidence; do not silently repair or expand those documents as part of this proposal.

## Proposed composition

### 1. Opening: identity, statement, one tactile moment

Use a wider desktop frame, approximately 1320–1440px maximum with fluid gutters. Keep reading text narrow within that frame. A 12-column grid gives the whole page a shared alignment system.

Place compact identity/context on the left and the existing statement, “I build things so other people can carry less,” across roughly the right seven columns. Explore 72–88px desktop display type with deliberate line breaks. Keep one obvious route into selected work. Relocate the current stats into supporting content instead of adding another hero box.

Below or alongside the statement, replace the nested scrolling board frame with a curated cluster of two or three notes. Keep the sketch visible. Offer the full board and note composer through an explicit control. Existing note actions remain reachable. Notes are local session state today; do not imply public persistence without building it.

At 390px, collapse to one reading column: identity, statement, short description, work link, compact note preview. Avoid requiring users to pass through a full board before reaching work.

### 2. Selected work: an exhibit with hierarchy

Make one flagship project substantially larger than the others. Suggested first treatment: LG SM Wiki as a wide feature, then Dr. Meoww and byGewa as a paired row, then the automation case as a compact supporting feature. Final order should follow the strongest real demonstration available, not just category prestige.

Each exhibit gets a real screenshot or recording, project title, context, and one existing outcome. Keep detailed technology tags and paragraphs in the case study. Pastel surfaces can frame the work; they should not become empty colored rectangles substituting for evidence.

Use a restrained crop/scale response on pointer hover, with visible titles and links at rest. Clicking leads to the existing case-study route. A shared visual transition is an optional later enhancement, with ordinary navigation as the fallback.

### 3. Experience: a quiet reading interval

Retain the useful desktop sticky introduction and accessible disclosures. Use a compact summary for each role and open detail on demand, so the home page does not become a long résumé before reaching the personal content. Keep the full career content accessible and preserve the existing experience anchor.

### 4. Manifesto: a typographic pause

Give the existing line “I can't carry what other people carry. But I can build things that make the weight lighter.” more scale and breathing room. Reduce the surrounding badge/quote framing. Keep the longer paragraphs as supporting reading or on the existing About page. This is a change of emphasis, not new factual copy.

### 5. Personal material: a small editorial composition

Compose Currently and Notes as a related region with distinct content roles: one featured essay, compact current interests, and a sketch/book artifact. Use proximity and alignment instead of enclosing every item in the same card. Preserve direct links to Notes and Pursuits.

### 6. Closing: a clear next step

Give contact one large typographic gesture and an easy-to-find email action. Retain the existing form and its behavior. Add an editorial next-destination treatment where useful on case-study/About pages, using our own media and existing routes.

## Motion thesis

Paper and artifacts settle into place; navigation feels continuous; reading surfaces stay stable.

| Moment | Proposed behavior | Starting range |
| --- | --- | --- |
| First arrival | Identity settles, statement enters by line, notes follow with slight rotation | 500–750ms focal sequence; total stagger under 200ms |
| Pointer over notes | Slight lift/rotation toward neutral; optional small pointer response within the object | 150–250ms; maximum roughly 4–6px travel |
| Selecting/opening a note | Existing object expands into a readable state and returns to its origin | 300–450ms |
| Project hover | Media scales very slightly within a fixed crop; title/link stay stable | 200–300ms; scale around 1.02 |
| Work enters view | One media reveal per exhibit, with its caption following closely | 350–500ms |
| Disclosure/form feedback | Immediate acknowledgement, brief state transition | 120–220ms |
| Navigation | Optional continuity between project image and detail-page media | 300–450ms; never delay working navigation |

Reuse the current decelerating arrival curve as a starting point. Avoid bouncing headings, continuous floating, whole-page pointer movement, and identical reveals on every block. Begin with native scrolling. Smoothness must come from responsive input, consistent timing, and stable composition; an inertial scroll dependency is not required for the first iteration.

Mobile gets the same hierarchy with smaller movement, no hover dependency, and no pinned sequence that consumes multiple screens. Reduced motion uses stable visible content and immediate state changes. Every interactive object needs a keyboard/tap path, visible focus, and a usable target. Stop offscreen media and avoid introducing multiple autoplay demos.

## Build sequence and acceptance

1. Source matching patterns through the required 21st.dev MCP search/get workflow before writing component markup. No 21st tool is callable in this session, and no component implementation was attempted for this study.
2. Recompose the hero, selected-work section, and their handoff first. Keep the rest of the page in context when judging them.
3. Establish the opening choreography and note interactions with CSS/WAAPI where sufficient. Consider one motion library only if interruptible shared layout meaningfully requires it; the existing package.json has no Motion or GSAP dependency.
4. Carry the spacing/type hierarchy into experience, manifesto, personal content, and closing.
5. Check desktop and mobile together, keyboard order, reduced motion, direct case-study navigation, back/scroll restoration, form actions, long notes, and loading/missing media.

Success: a viewer immediately understands Ammar's role, sees a meaningful project preview early, recognizes one memorable personal interaction, and can reach work/contact without waiting for choreography. Evaluate performance on real devices before claiming a frame-rate target.

## Skill synthesis

Taste: preserve the established identity, audit first, vary composition according to content, and make actual work the visual evidence.

Impeccable: treat the portfolio as an Experience surface with clear visitor outcomes; use one authored focal interaction and quiet supporting states. Group content by meaning and create deliberate changes in rhythm.

UI/UX Pro Max: apply responsive hierarchy, touch/keyboard affordances, reduced-motion behavior, and restrained transition guidance. Its first design-system result recommended brutalism with instant transitions, which conflicts with this brief; that preset was rejected. A narrower style search supported the existing spacious monochrome/grid foundation without dictating the final concept.
