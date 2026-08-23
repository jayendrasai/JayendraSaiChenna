# Systems Notebook Portfolio Design Specification

## Objective

Rebuild Praveen Mandala's portfolio as a fast, accessible, recruiter-focused product engineer portfolio. The site positions Praveen as an AI Engineer, Backend Engineer, and Distributed Systems Enthusiast. Projects are the primary proof of engineering ability and receive the strongest visual and content hierarchy.

## Product Positioning

The first viewport must answer three questions within five seconds:

1. Who is this? Praveen Mandala, an AI and backend engineer.
2. What does he build? Generative AI systems, RAG pipelines, evaluation infrastructure, and distributed backend systems.
3. Why should I continue? The work includes concrete architecture choices and measurable outcomes.

The tone is precise, direct, and technical. Avoid generic “full stack developer” positioning, inflated claims, filler copy, and visual metaphors that do not add information.

## Site Map

Single-page information architecture with stable anchor sections:

- `#home` — Hero / immediate positioning and primary actions.
- `#about` — Short profile, education, location, and focus areas.
- `#expertise` — Categorized engineering toolbox.
- `#projects` — Four featured projects; the visual centerpiece.
- `#experience` — Zengen Technologies timeline entry.
- `#achievements` — Credibility indicators and certifications.
- `#contact` — Direct contact paths and resume link.

The sticky navigation mirrors these anchors and includes a persistent Resume action on desktop. The mobile menu uses the same links and closes after navigation.

## Content Model

All content is stored in typed constants under `constants/site.ts`.

```ts
type Project = {
  title: string;
  eyebrow: string;
  problem: string;
  architecture: string[];
  technologies: string[];
  impact: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};
```

Project content from `public/PraveenMandalaAI.pdf`:

- IntelliSupport: hybrid retrieval using semantic search, BM25, intent classification, and reranking with FastAPI, PostgreSQL, pgvector, and OpenAI APIs. Impact: 85% retrieval hit rate, 90% intent accuracy, 88% faithfulness, and 82% relevance.
- LLM Evaluation Framework: modular LLM-as-a-Judge and metric suite covering faithfulness, context relevancy, answer relevancy, BLEU, ROUGE, and BERTScore; benchmarks OpenAI and Gemini through Docker-based CI.
- Real-Time Feature Store: Kafka, Faust, RocksDB, Redis, PostgreSQL, and FastAPI event-driven feature processing with Redis online serving, PostgreSQL history, idempotent persistence, and cache-aside fallback.
- NLP-Service: asynchronous FastAPI, Celery, RabbitMQ, and PostgreSQL pipeline for sentiment analysis and named entity recognition with queue-based inference.

## Visual Direction

“Systems Notebook” is a quiet, information-first interface:

- Black, white, and neutral gray surfaces.
- One muted blue accent used only for active navigation, links, and small status markers.
- Thin rules and compact metadata create structure instead of cards with heavy shadows.
- Project cards use bordered panels and architecture annotations, not images or decorative art.
- The page remains legible and hierarchical when viewed in grayscale.
- No gradients, particles, noise overlays, glassmorphism, profile images, illustrations, SVG artwork, Lottie, or decorative graphics.

## Design Tokens

CSS custom properties in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --surface: #f7f7f8;
  --surface-raised: #ffffff;
  --foreground: #111113;
  --muted: #6b6d73;
  --subtle: #92949a;
  --border: #e5e5e7;
  --border-strong: #cfcfd3;
  --accent: #315c9b;
  --accent-soft: #edf3fb;
  --focus: #315c9b;
}
```

Use Tailwind semantic utilities or CSS variables rather than one-off colors. Radius is restrained: `0.375rem` for cards and `0.25rem` for small controls. Shadows are avoided except for a minimal mobile menu elevation.

Spacing uses a 4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, and 128px. Section padding is `clamp(5rem, 10vw, 9rem)` vertically and `clamp(1rem, 5vw, 5rem)` horizontally.

## Typography Scale

Use `Inter` as the primary font and a system monospace stack for technical metadata. The current Google font setup may remain if it can be loaded without build or network issues; do not add a new font dependency.

- Display / hero title: `clamp(3.25rem, 8vw, 7.5rem)`, line-height `0.98`, letter-spacing `-0.075em`, weight 600.
- Section title: `clamp(2rem, 4vw, 4rem)`, line-height `1.05`, letter-spacing `-0.055em`, weight 600.
- Project title: `clamp(1.75rem, 3vw, 3rem)`, line-height `1.08`, letter-spacing `-0.045em`, weight 600.
- Lead paragraph: `clamp(1.125rem, 1.6vw, 1.375rem)`, line-height `1.55`.
- Body: `1rem`, line-height `1.65`.
- Metadata / labels: `0.6875rem` to `0.75rem`, uppercase, letter-spacing `0.12em`, monospace.
- Buttons: `0.8125rem`, weight 600.

Heading order is semantic: one `h1`, section `h2`s, project and subsection `h3`s. Do not use typography as a replacement for heading structure.

## Component Hierarchy

```text
RootLayout
├── Providers
├── Navbar
│   ├── Monogram
│   ├── DesktopNav
│   └── MobileNav
└── HomePage
    ├── Hero
    │   ├── SectionLabel
    │   ├── Reveal
    │   ├── Badge
    │   └── ExternalLink / CTA
    ├── About
    │   └── SectionHeader
    ├── Expertise
    │   ├── SectionHeader
    │   └── ExpertiseBlock
    ├── Projects
    │   ├── SectionHeader
    │   └── ProjectCard × 4
    ├── Experience
    │   ├── SectionHeader
    │   └── TimelineItem
    ├── Achievements
    │   ├── SectionHeader
    │   └── AchievementItem
    └── Contact
        ├── SectionHeader
        └── ExternalLink
```

Required reusable primitives:

- `SectionHeader`: section index, kicker, title, and optional description.
- `Reveal`: viewport-triggered fade-up wrapper with reduced-motion fallback.
- `Badge`: compact technology or status label.
- `ProjectCard`: problem, architecture list, technologies, impact list, and links.
- `TimelineItem`: role, company, date, summary, highlights, and technology badges.
- `ExternalLink`: accessible external anchor with consistent arrow affordance and secure target attributes.

## Responsive Breakpoints

Use mobile-first CSS and only the following layout thresholds:

- Base: 0–639px. One column, 16px page gutters, 40–64px section gaps, full-width project cards.
- `sm`: 640px. Two-column metadata and compact grids where content remains readable.
- `md`: 768px. Tablet layout, 24–32px gutters, two-column project internals.
- `lg`: 1024px. Desktop navigation, 40px gutters, project cards use a 5/7 content split.
- `xl`: 1280px. Max content width of 1180px, increased display type and whitespace.
- `2xl`: 1536px+. Preserve the max width; never stretch text columns across the viewport.

No element may use `100vw` for layout width. Images are not part of the design. Verify at 320px, 375px, 768px, 1024px, 1440px, and 1920px widths.

## Navigation and Interaction

The navbar is fixed with a plain opaque or near-opaque surface and a bottom border. It changes height subtly after scrolling. Active section state is derived from `IntersectionObserver`; the current section is indicated by text weight and a small accent rule, not color alone. Mobile navigation is a native button with `aria-expanded`, `aria-controls`, visible focus, Escape-to-close, and focusable links.

All smooth scrolling uses native CSS with `scroll-margin-top` on sections. Remove Lenis and avoid duplicate scroll systems. Resume links use:

```ts
export const RESUME_URL =
  "https://drive.google.com/file/d/1C4-IFqtmUdhTK3VJi7P2auXBTwntNHfO/view?usp=drive_link";
```

Every external resume anchor uses `target="_blank"`, `rel="noopener noreferrer"`, and an accessible label.

## Animation System

Use Framer Motion only for:

- Hero content entrance: opacity and 12px upward translation, 500–700ms.
- Section reveal: opacity and 16px upward translation, 500ms, once per element.
- Project card hover: border color and a 2–4px text/link shift, no scale or glow.
- Mobile menu: opacity and 8px vertical translation, 180ms.

Use a shared `viewport={{ once: true, amount: 0.18 }}` configuration. When `prefers-reduced-motion` is active, render content immediately and disable transitions. No typing, rotating text, parallax, pinned horizontal scrolling, bouncing, spinning, or large-scale transforms.

## Performance and Accessibility

- Remove unused animation and decorative components from the render tree and delete their dependencies only if no remaining code uses them.
- Keep the page statically renderable; remove `dynamic = "force-dynamic"` unless required by runtime behavior.
- Use semantic landmarks, visible focus rings, descriptive link labels, sufficient contrast, and keyboard navigation.
- Avoid layout shifts by using deterministic content and CSS sizing.
- External links must be obvious and safe. Email and phone links must be usable on mobile.
- The page must not horizontally scroll at any target width.
- Preserve metadata, sitemap, robots, and social preview behavior while removing references to deleted local PDF assets.

## Favicon / App Icon

Replace the existing artwork favicon with a minimal typography-based `PM` monogram. Use a small dark square with white uppercase `PM` rendered as text in an icon-compatible HTML/SVG-free route where supported. If the framework requires an icon file, use a minimal text-only SVG with no illustration, gradients, or paths beyond text layout. The visible system must remain sharp at 16px and 32px.

## Folder Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  common/
    badge.tsx
    external-link.tsx
    reveal.tsx
    section-header.tsx
  sections/
    about.tsx
    achievements.tsx
    contact.tsx
    experience.tsx
    hero.tsx
    expertise.tsx
    projects.tsx
  navbar.tsx
  footer.tsx
constants/
  site.ts
hooks/
  use-scroll-spy.ts
public/
  favicon.svg
```

Delete or stop importing legacy decorative and motion components once the new page no longer depends on them. Remove `public/PRAVEENMANDALA.pdf` and any other bundled resume asset after references are migrated. Preserve the user-provided `public/PraveenMandalaAI.pdf` as source material until the content migration is complete, then remove it as well if the user wants no local PDF assets in the final repository.

## Verification Criteria

- `npm run build` exits 0.
- `npx tsc --noEmit` exits 0.
- `npm run lint` exits 0 if supported by the installed Next.js toolchain.
- No references remain to `/PRAVEENMANDALA.pdf`, `download`, old orange/warm theme tokens, GSAP, Lenis, particles, or decorative background components in the active render path.
- Browser verification confirms no console errors, no horizontal overflow, working anchor navigation, working mobile menu, working external resume links, visible focus states, and reduced-motion behavior.
