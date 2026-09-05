# Jayendra Sai Chenna Portfolio — UX and Visual Design Specification

> Implementation reference for humans and AI coding agents. This document describes the current portfolio as implemented in the repository. Preserve the existing interaction choreography and content-driven architecture unless a requested redesign explicitly changes them.

## 1. Product purpose

This is a single-page engineering portfolio for Jayendra Sai Chenna. It is designed to communicate technical credibility quickly, then let a recruiter or engineering lead inspect the systems behind that credibility.

The experience has three priorities:

1. Establish identity, role, location, and focus within the first viewport.
2. Prove capability through projects, architecture, decisions, outcomes, experience, and achievements.
3. Convert interest into a low-friction contact, resume, GitHub, LinkedIn, or email action.

The visual voice is editorial, technical, warm, restrained, and systems-oriented. It should feel like an engineering notebook presented as a polished product—not a generic template or a dashboard overloaded with controls.

## 2. Information architecture

The page is rendered in this order:

```text
Home / Hero
  → About / Context
  → Expertise / Capability index
  → Projects / Selected systems
  → Experience
  → Achievements / Proof rail
  → Contact / Open channel
```

The fixed navbar mirrors these seven anchors. The canonical IDs are `home`, `about`, `expertise`, `projects`, `experience`, `achievements`, and `contact`.

Primary source of truth:

- Identity, metadata, contact, projects, expertise, experience, achievements, links, and presentation copy: `constants/site.ts`
- Global palette, page shell, section rhythm, focus treatment, and project-stage visuals: `app/globals.css`
- Page composition: `app/page.tsx`
- Navigation behavior: `components/navbar.tsx` and `hooks/use-active-section.ts`

## 3. Audience and user goals

### Primary audience

- Recruiters scanning for role, location, education, and resume.
- Engineering managers evaluating depth and practical system decisions.
- Engineers or collaborators inspecting architecture, technologies, and code links.

### User goals

| User intent | Fastest useful path |
|---|---|
| Identify the candidate | Hero: name, subtitle, focus, location |
| Understand background | About: education, institution, working focus |
| Check technical range | Expertise: expandable capability groups |
| Evaluate real work | Projects: architecture, problem, decisions, impact |
| Verify professional experience | Experience timeline |
| Find proof points | Achievements metrics |
| Contact or download resume | Contact email, resume, social links |

## 4. Global visual system

### Palette

The palette is intentionally light and warm, with espresso text and rust interaction accents.

| Token | Value | Usage |
|---|---|---|
| `--background` | `#fafaf9` | Main page background, light text on dark surfaces |
| `--foreground` | `#1c1917` | Primary text, dark panels, strong controls |
| `--surface` | `#f5f5f4` | Cards, stage surfaces, secondary panels |
| `--surface-strong` | `#e7e5e4` | Elevated panels, active secondary surfaces |
| `--border` | `rgba(28, 25, 23, 0.12)` | Quiet rules and structural borders |
| `--border-strong` | `rgba(28, 25, 23, 0.24)` | Buttons and stronger boundaries |
| `--accent` | `#c2410c` | Links, active states, labels, progress, primary emphasis |
| `--accent-soft` | `rgba(194, 65, 12, 0.12)` | Selection, subtle accent wash, glow |
| `--gold` | `#d97757` | Secondary highlight, queue/status emphasis |
| `--muted` | `#78716c` | Eyebrows, metadata, supporting text |
| `--focus` | `#c2410c` | Keyboard focus outline |

Do not introduce unrelated blues, purples, pure black, pure white, neon yellow, or legacy ivory/orange values. Diagram assets may use the same colors as literal SVG values because external assets cannot consume CSS variables.

### Color behavior

- Light sections use `background` with `foreground` text.
- Contact is deliberately inverted: `foreground` background with `background` text.
- Rust is for meaning and interaction, not large page fills.
- Borders should remain quiet; they establish alignment and hierarchy.
- Never use color alone to communicate state; pair active states with text, position, an underline, or a marker.

### Typography

The implementation uses:

- Primary sans: `Inter`, falling back to `ui-sans-serif`, `system-ui`, and platform sans fonts.
- Technical/meta mono: `ui-monospace`, `SFMono-Regular`, `Menlo`, and `monospace`.

Typography roles:

| Role | Treatment |
|---|---|
| Hero name | `display-title`, weight 600, very tight tracking, `.82` line height, uppercase, responsive `clamp(3.25rem, 11vw, 10.5rem)` |
| Hero role | Responsive `clamp(1.75rem, 3.8vw, 3.5rem)`, medium weight, tight line height |
| Section heading | 5xl base / 6xl at small screens, semibold, `.9` line height, negative tracking |
| Project heading | 4xl base / 5xl at small screens, semibold, negative tracking |
| Body | Base or large text, approximately 1.5–1.75 line height |
| Eyebrow | Mono, approximately `.6875rem`, uppercase, `.14em–.16em` tracking |
| Metadata | Mono, approximately `.625rem`, uppercase, muted opacity |
| Metrics | Large semibold numerals with tight tracking |

The hierarchy is achieved through scale, whitespace, rules, and alignment—not excessive font weights or decorative colors.

## 5. Layout and responsive rules

### Horizontal alignment

`.page-shell` is the single horizontal container. It is centered and capped at approximately `73.75rem`:

- Small screens: viewport width minus `2rem`.
- Medium screens: viewport width minus `3rem`.
- Large screens: viewport width minus `5rem`.

Do not create independent section containers unless a deliberate full-bleed surface requires one. Full-width backgrounds may wrap a `.page-shell` content layer.

### Vertical rhythm

Standard sections use `.section-space`:

```css
padding-block: clamp(5rem, 10vw, 9rem);
```

Anchor sections use `.section-anchor`:

```css
scroll-margin-top: var(--nav-height);
```

The navbar is `4rem` high. Home remains a full viewport hero. Projects remains a special case because its desktop experience is a pinned, scroll-driven scene. Contact remains a special dark closing panel.

### Breakpoints

- Mobile-first base layout.
- Small-screen refinements at `640px`.
- Desktop/pinned project behavior at `1024px`.
- Wider project copy/stage proportions at `1280px`.

Do not remove the mobile fallback for the desktop project story.

## 6. Section-by-section UX specification

### Home / Hero

Purpose: answer “Who is this, what do they do, and why should I continue?” immediately.

Content:

- Eyebrow from `siteContent.hero.eyebrow`.
- Two-line name derived from `siteConfig.name`.
- Role line from `siteConfig.subtitle`.
- Supporting statement from `siteConfig.heroSubheadline`.
- Primary action: scroll to Projects.
- Secondary action: open configured resume URL in a new tab.
- Bottom metadata row: focus, location, and scroll cue.

Behavior:

- Full viewport minimum height.
- Subtle pointer-depth treatment around the name.
- Name translates upward and fades slightly with scroll.
- Reduced-motion users receive static/no-motion behavior.

Design constraints:

- Keep the name readable at narrow widths.
- Preserve the two-line lockup logic when the name changes.
- Do not let the ambient field reduce text contrast.

### About / Context

Purpose: humanize the candidate and establish technical direction.

Composition:

- Top rule and numbered eyebrow on the shared shell.
- Large editorial lead on the left.
- Body explanation below the lead.
- Education, institution/CGPA, current focus, and email on the right.

Interaction: reveal-on-scroll only; no hidden information should be required to understand the section.

### Expertise / Capability index

Purpose: let a visitor inspect technical breadth without presenting every technology at once.

Composition:

- Numbered category list on the left.
- Active category description and technology grid on the right.

Interaction:

- Clicking a category activates it.
- Keyboard focus also activates it.
- Active row has full opacity and a rust marker.
- Inactive rows are visually reduced but remain legible and interactive.
- Motion transitions between descriptions and item lists.

Accessibility: category controls must remain buttons, expose `aria-pressed`, and preserve visible focus.

### Projects / Selected systems

Purpose: provide the strongest evidence of engineering ability.

Desktop flow:

1. Section introduction establishes the count and framing.
2. The project story creates a scroll length based on `projects.length`.
3. The scene pins below the navbar.
4. Scrolling changes the active project chapter.
5. Chapter navigation can jump to a project.
6. The stage and project copy crossfade/slide between records.

Mobile flow:

1. A horizontally scrollable chapter strip remains sticky below the navbar.
2. Each project becomes a normal vertical article.
3. The architecture image/stage appears before the project explanation.
4. Chapter links jump to the corresponding article with an offset.

Project content model:

- `title`: project name.
- `eyebrow`: short positioning label.
- `problem`: constraint or problem statement.
- `architecture`: architecture narrative.
- `architectureImage`: optional local image metadata with source, alt text, width, and height.
- `decisions`: engineering tradeoffs.
- `technologies`: technology list.
- `impact`: outcome statements.
- `github` and optional `live`: external destinations.

Stage rules:

- Prefer the configured architecture image.
- Render images with explicit dimensions, responsive width, `object-contain`, and no cropping.
- Keep the generated stage fallback available for projects without an image.
- Preserve `aria-label` and meaningful image alt text.

### Experience

Purpose: show practical delivery context and team-based shipping.

Composition:

- Shared top rule, eyebrow, heading, and description.
- Vertical timeline with a rust progress indicator.
- Each item includes role/company, period, description, and technologies.

Interaction: progress responds to scroll; content remains readable without animation.

### Achievements / Proof rail

Purpose: support claims with compact measurable evidence.

Composition:

- Introductory heading and description.
- Metric rail with four columns on desktop and fewer columns on smaller screens.
- Animated numbers, labels, and supporting details.

Do not make the metrics feel like a marketing dashboard. They should read as evidence blocks within the editorial system.

### Contact / Open channel

Purpose: close the narrative with a direct conversion path.

Composition:

- Dark espresso/foreground panel.
- Rust eyebrow and large invitation heading.
- Supporting copy.
- Prominent email address.
- Location and phone.
- Resume action.
- Copyright/name and social links.

The email must be a `mailto:` link. Resume and social links must use configured values from `constants/site.ts`; never invent URLs.

## 7. Navigation and user-flow analysis

### Primary happy path: recruiter scan

```text
Load page
  → Read name and role
  → Confirm focus/location
  → Click Resume or scroll to Projects
  → Inspect project evidence
  → Reach Contact
  → Email, resume, or social link
```

### Technical evaluator path

```text
Load page
  → Open Expertise category
  → Scroll to Projects
  → Read architecture visual
  → Read problem and engineering decisions
  → Check impact and GitHub
  → Compare Experience and Achievements
  → Contact
```

### Direct-anchor path

```text
Open #about / #expertise / #projects / #experience / #achievements / #contact
  → Navbar remains visible
  → Section lands below the fixed 4rem navbar
  → User can continue forward or use navigation
```

### Mobile project path

```text
Open Projects
  → Sticky chapter strip appears
  → Choose a chapter
  → Jump to vertical project article
  → Contained architecture visual
  → Read decisions and impact
  → Continue to next article or Contact
```

### Error and recovery path

```text
404 or runtime error
  → Explain the failed route/state
  → Offer Return home
  → Offer View projects
  → Runtime error offers Retry and Report issue
  → Optional Snake recovery interaction
```

The error experience should preserve the same palette, typography, page shell, rules, and systems language as the main portfolio.

## 8. Interaction and motion contract

- Use the existing Motion API and timing curves.
- Preserve reveal-on-scroll behavior and `viewport={{ once: true }}` semantics.
- Preserve active navigation underline and capability marker transitions.
- Preserve project pinned-scene transitions and reduced-motion branch.
- Preserve the experience timeline spring.
- Preserve pointer-depth behavior in the hero.
- Never make essential copy appear only after motion.
- Respect `prefers-reduced-motion: reduce` globally and in component-level hooks.

## 9. Accessibility contract

- Use semantic section landmarks with stable IDs.
- Keep navbar links as real anchors.
- Keep expertise selectors as buttons with `aria-pressed`.
- Provide meaningful alt text for every architecture image.
- Keep visible `:focus-visible` outlines using the rust focus token.
- Use descriptive labels for resume, email, social, retry, and navigation controls.
- Ensure contrast remains readable on both light and dark surfaces.
- Do not rely on hover to expose important content.
- Keep keyboard access to mobile menu, expertise controls, project links, and error actions.

## 10. AI modification rules

Before modifying the design, an AI agent should:

1. Read `constants/site.ts` and use its values instead of adding rendered copy.
2. Read `app/globals.css` and reuse palette tokens/utilities.
3. Preserve `.page-shell`, `.section-space`, `.section-anchor`, and the special hero/project/contact rules.
4. Search for existing component patterns before creating new ones.
5. Keep public component props unchanged unless the user explicitly requests an API change.
6. Keep project architecture assets local under `public/projects/`.
7. Preserve explicit image dimensions and `object-contain` behavior.
8. Run `npx tsc --noEmit`, `npm run lint`, `npm run build`, and `git diff --check` after changes.
9. Scan for legacy colors and stale identity/link literals.
10. Test both desktop pinned projects and mobile vertical projects.

Safe customization points:

- Copy and identity: `constants/site.ts`.
- Palette values: `app/globals.css` `:root`.
- Section spacing: `.section-space`.
- Anchor offset: `.section-anchor` and `--nav-height`.
- Content layout: section components, without changing the data model.
- Project visuals: project records and local `public/projects` assets.

Avoid:

- Hardcoding a new person’s details inside JSX.
- Adding a second page-shell width.
- Replacing the pinned project story with a generic carousel.
- Cropping architecture diagrams.
- Guessing GitHub, LinkedIn, live, or resume URLs.
- Introducing new colors for one component.
- Removing reduced-motion behavior.

## 11. Current implementation notes to verify before future redesigns

The repository currently contains two areas worth checking when modifying the design:

1. Tailwind color definitions that use CSS variables should support opacity modifiers consistently. If classes such as `text-foreground/60`, `bg-background/90`, or `border-background/15` do not appear in generated CSS, define RGB companion variables and configure colors with `rgb(var(--token-rgb) / <alpha-value>)`.
2. Vercel Analytics and Speed Insights request `/_vercel` scripts only when the deployment integration is active. Local development should either gate those components to Vercel or accept the expected localhost 404s.

These are implementation/runtime concerns, not intended visual design choices.

## 12. Verification checklist

- [ ] Hero answers identity, role, focus, and location immediately.
- [ ] All seven navbar anchors land below the fixed navbar.
- [ ] Page-shell edges align across sections.
- [ ] Standard sections use shared section rhythm.
- [ ] Projects work as pinned chapters on desktop.
- [ ] Projects work as vertical chapters on mobile.
- [ ] Architecture images preserve aspect ratio and do not overflow.
- [ ] Expertise controls work by mouse and keyboard.
- [ ] Reduced-motion behavior remains functional.
- [ ] Contact email, resume, and social links use configured values.
- [ ] Palette contains only the approved stone/espresso/rust/clay/muted family.
- [ ] No stale identity, placeholder URL, or legacy palette literal remains in active UI.
- [ ] TypeScript, lint, build, and diff checks pass.
