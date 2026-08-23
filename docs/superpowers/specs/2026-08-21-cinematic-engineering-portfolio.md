# Cinematic Engineering Portfolio Specification

## Objective

Replace the current warm material/notebook treatment with a cinematic engineering portfolio that restores the original orange, yellow, ivory, and ink identity while adding premium, narrative motion. The site must feel custom-built and memorable without becoming a designer portfolio or sacrificing recruiter clarity.

## Brand Foundation

Restore and refine the original palette:

```css
:root {
  --background: #fffdf8;
  --foreground: #1a1a1a;
  --surface: #f3ebdd;
  --surface-strong: #fff6d8;
  --border: rgba(26, 26, 26, 0.12);
  --border-strong: rgba(26, 26, 26, 0.24);
  --accent: #ff8c42;
  --accent-soft: rgba(255, 140, 66, 0.16);
  --gold: #ffd95a;
  --muted: #8c8a85;
}
```

Use the original warm palette as the recognizable identity, with restrained layering rather than a full redesign into beige or brown. Orange is the primary interactive accent; yellow is reserved for signal moments and project-specific highlights. Preserve grayscale legibility and avoid rainbow gradients, neon, cyberpunk, or generic blue/purple AI styling.

## Experience Principles

- The hero communicates name, role, and value before secondary metadata.
- Motion creates continuity between sections instead of decorating isolated components.
- Projects are a narrative sequence, not a grid of cards.
- Each project owns a visual treatment based on its system behavior.
- Desktop, tablet, and mobile use different interaction choreography where needed.
- Every interaction has a non-hover and reduced-motion equivalent.

## Site Composition

1. Hero — full viewport identity lockup and cinematic entrance.
2. About — one focused statement with a compact proof rail.
3. Expertise — editorial capability index, not a tag grid.
4. Projects — pinned narrative chapters, the visual centerpiece.
5. Experience — animated timeline with one meaningful milestone.
6. Achievements — a moving proof strip, not four equal cards.
7. Contact — direct close with a strong final transition.

Section labels should not all use the same generic index/rule/header component. Each section gets a distinct composition:

- About uses a large statement and side proof rail.
- Expertise uses a horizontal index with active category content.
- Projects use a pinned chapter title and project-specific stages.
- Experience uses a single timeline scene.
- Achievements use a horizontal metric rail.

## Hero Signature

`PRAVEEN MANDALA` is the brand mark. Render it as a two-line, oversized uppercase lockup with a controlled offset between lines. The name uses the strongest type scale on the site and occupies the visual center of the first viewport.

The role is immediately underneath: `AI Engineer & Backend Engineer`. The value proposition follows in one short paragraph. Primary action is `View projects`; secondary action is the external resume link.

Motion layers:

- Intro stagger: label → first name line → second name line → role → proposition → actions.
- Name depth: first and second lines drift at different scroll rates with spring smoothing.
- Cursor depth: a subtle pointer-responsive highlight field and horizontal offset on the name container, disabled for coarse pointers and reduced motion.
- Background: a restrained animated mesh/line field built from CSS and Motion values, using original warm colors.
- Scroll exit: the name compresses and fades as the project story enters; no large rotation or gimmicky scaling.

## Project Narrative System

### Desktop

The projects section is a pinned scene. A sticky chapter rail remains visible while the active project changes as the user scrolls through a vertical scene. Project content transitions using Motion `AnimatePresence`, `layout`, and `useScroll`/`useTransform`.

The scene contains:

- A chapter number and project title rail.
- A large project-specific visual stage built from typography, rules, metrics, and architecture labels.
- A concise problem statement.
- A system path that changes per project.
- Impact values that animate into place.
- Source/live actions.

Project identities:

- IntelliSupport: orange retrieval funnel / layered query-to-context-to-answer composition.
- LLM Evaluation Framework: gold score matrix and benchmark axis composition.
- Real-Time Feature Store: amber event stream with online/offline storage split.
- NLP-Service: terracotta queue-to-worker pipeline composition.

These are CSS/DOM compositions only. No images, SVG artwork, Lottie, or decorative illustrations. The visual stages must still communicate architecture when color is disabled through layout, labels, numbers, and rules.

The active project should transition with a directional slide/fade and preserve continuity of the chapter rail. The story must never require reading all four projects simultaneously.

### Mobile

Mobile does not use a pinned horizontal scene. It uses a vertically progressive chapter experience:

- Each project gets a full-width scene with a large ordinal marker.
- The project-specific architecture composition appears before details.
- Problem, decisions, impact, and actions follow in a deliberate sequence.
- A compact sticky project index allows direct jumps.
- Tap interaction reveals secondary architecture details but does not hide the core proof.

## Expertise Composition

Replace the generic badge grid with an interactive capability index. Categories appear as a vertical or horizontal list. Selecting or focusing a category reveals its tools in an editorial list with a small animated active marker. Skills remain text-first and accessible; no progress bars and no repeated pill badges.

## Navigation

Implement a dedicated `useActiveSection` hook:

- Use a stable section ID array defined outside render.
- Track one active section using a top-biased IntersectionObserver root margin.
- Update active state immediately on navigation click, then let the observer reconcile after scroll settles.
- Include Home in the visible navigation state.
- Render one shared Motion underline with `layoutId` inside `LayoutGroup`.
- Mobile menu has focus return, Escape close, active item styling, and body scroll lock while open.
- All links have visible focus and `aria-current` for the active section.

## Motion System

Use `motion/react` only. Centralize values in `components/motion/motion-config.ts`.

- `useScroll` + `useTransform` for hero depth and project chapter progress.
- `useSpring` for scroll-linked smoothing.
- `AnimatePresence` for project chapter content and mobile menu.
- `layout`/`layoutId` for active underline, project stage continuity, and expertise selection.
- `whileInView` for one-time section entrances.
- Pointer depth only on the hero and project stages; use `pointerType` to avoid touch overhead.
- `useReducedMotion` disables parallax, pointer depth, counters, and chapter transforms while preserving final states.

Motion must be transform/opacity-first. No perpetual bouncing, spinning, or cursor trails.

## Responsive Interaction Matrix

| Viewport | Navigation | Hero | Projects | Expertise |
| --- | --- | --- | --- | --- |
| Mobile | Menu with focus return | Stacked name lockup with reduced pointer layer | Vertical chapters with sticky index | Tap/focus category disclosure |
| Tablet | Compact inline nav | Offset name and restrained pointer depth | Reduced pinned scene or vertical chapters | Two-column editorial index |
| Desktop | Full nav with shared underline | Full depth composition | Pinned chapter storytelling | Horizontal/side-by-side index |
| Ultrawide | Capped content rail | More negative space, same type hierarchy | Capped stage with persistent chapter rail | No text stretching |

No horizontal overflow is allowed. Hover-only information must also be visible to keyboard and touch users.

## Component Changes

Create or update:

```text
components/
  motion/
    motion-config.ts
    ambient-field.tsx
    pointer-depth.tsx
  sections/
    hero.tsx
    expertise.tsx
    projects.tsx
    project-story.tsx
    experience.tsx
    achievements.tsx
  common/
    reveal.tsx
    capability-index.tsx
    project-stage.tsx
    animated-number.tsx
  navbar.tsx
hooks/
  use-active-section.ts
  use-pointer-depth.ts
app/globals.css
constants/site.ts
```

Delete the generic `Badge`, `ProjectCard`, and generic `SectionHeader` render paths once their replacements are wired. Keep the typed content model but add project-specific stage data and decisions.

## Verification

- `npm run build` exits 0.
- `npx tsc --noEmit` exits 0.
- `npm run lint` exits 0.
- Desktop runtime confirms pinned project narrative transitions and active navigation.
- Mobile runtime confirms the vertical chapter experience, menu focus behavior, and no horizontal overflow.
- Reduced-motion runtime confirms immediate final states with no parallax or counters.
- No generic notebook tokens, blue/purple accents, old badge grid, or old project-card render path remain active.
