# Warm Systems / Material Notebook Motion Design

## Direction

Evolve the existing Systems Notebook into a premium engineering portfolio with a warm material language and purposeful interaction. The portfolio remains engineering-first: typography establishes identity, motion explains hierarchy and state, and project content remains the primary proof of ability.

The first viewport must communicate, in this order:

1. PRAVEEN MANDALA
2. AI Engineer & Backend Engineer
3. A concise statement about building serious AI and distributed backend systems.

## Visual System

The palette is intentionally warm and human, not startup-blue or futuristic:

```css
:root {
  --background: #2a2520;       /* deep umber */
  --surface: #37312b;          /* charcoal / layered surface */
  --surface-raised: #474039;   /* elevated stone */
  --foreground: #f4ecdf;       /* warm ivory */
  --muted: #c4b6a4;            /* warm gray */
  --subtle: #8f8173;           /* stone */
  --border: #5a4e43;           /* umber rule */
  --border-strong: #776657;    /* active rule */
  --accent: #c77d59;           /* terracotta */
  --accent-soft: #4b352b;      /* terracotta wash */
  --bronze: #b69a72;           /* muted bronze */
  --focus: #e3b58e;
}
```

Use flat fills, fine rules, and restrained tonal layering. Do not use purple, indigo, blue accents, neon colors, cyberpunk treatment, bright gradients, glows, particles, floating blobs, profile images, illustrations, or decorative graphics. A low-contrast CSS drafting grid is allowed because it reinforces the engineering notebook metaphor.

## Hero Identity

The Hero is a client component with a measured entrance and scroll-linked depth.

- `h1` contains the exact name in two visual lines: `PRAVEEN` and `MANDALA`.
- The name uses `clamp(3.75rem, 13vw, 12.5rem)`, line-height `.82`, weight 600, and tight tracking.
- The second name line is offset by a responsive amount and uses warm ivory with a subtle muted-ivory contrast; it is not italic or gradient-filled.
- A small monospaced index label establishes the notebook language without competing with the name.
- The role appears below the name as `AI Engineer & Backend Engineer` at a confident but subordinate size.
- The value proposition, technology badges, and actions appear below the role.
- A CSS-only blueprint grid layer sits behind the content. It uses background linear gradients and a mask; it is not an image or SVG illustration.
- The grid and name shift at different rates while scrolling. Use only transform and opacity for scroll-linked effects.

## Motion Architecture

Migrate from `framer-motion` imports to the current `motion` package and `motion/react` entrypoint. Use the official Motion React patterns:

- `useScroll` tracks page or target progress.
- `useTransform` maps progress to translate, opacity, and scale values.
- `useSpring` softens scroll-linked values without adding a second scroll library.
- `whileInView` and staggered variants reveal content once.
- `layout` animates project card expansion using transforms.
- `AnimatePresence` handles expanded-case-study entry and exit.
- `layoutId="project-underline"` creates a shared navigation underline.
- `useReducedMotion` bypasses parallax, count-up, and layout transitions.

Motion is limited to these behaviors:

| Area | Motion | Timing |
| --- | --- | --- |
| Hero entrance | staggered opacity / 12px upward reveal | 500–700ms |
| Hero scroll | name drift, grid translation, subtle opacity | scroll-linked |
| Sections | once-only fade-up reveal | 450–550ms |
| Navigation | shared underline and menu presence | 180–250ms |
| Projects | hover lift, stack reveal, expandable layout | 180–350ms |
| Experience | progress rule scaleY tied to section progress | scroll-linked |
| Achievements | count-up from zero when visible | 800ms |

No bounce, spin, large-scale transforms, cursor trails, or auto-playing motion. Pointer-aware interaction is limited to small card offsets or a discreet highlight, and must not be required to understand content.

## Project Showcase

Project cards are compact summaries on initial render and expandable case studies on click or keyboard activation. Each card must expose:

- Problem
- Architecture
- Technologies
- Engineering decisions
- Impact

The closed card shows the title, project type, a one-line problem statement, top technologies, and impact metrics. The expanded panel reveals the full architecture and decisions list through `AnimatePresence`; the card uses `layout` and the expanded control uses `aria-expanded` and `aria-controls`.

The action area contains GitHub and live links. Hover states change border, title accent, and icon position only. The card must remain useful on touch devices; mobile users tap to expand.

## Sections

- Hero: identity first, role second, project CTA third.
- About: concise credibility and education context.
- Expertise: calmer and more compact than Projects.
- Projects: strongest section, four expandable case studies.
- Experience: timeline with warm accent progression and technology badges.
- Achievements: animated counters for 20+, 300+, 4 certifications, and 4 featured systems.
- Contact: dark warm closing panel with email, resume, and social links.

## Responsive Behavior

- Base 0–639px: name is 18vw maximum-controlled by clamp, role and value proposition are full-width, grid layer is low contrast, cards expand inline, navigation becomes a compact menu.
- `sm` 640px: metadata becomes a three-column row, badges wrap naturally, cards get larger internal padding.
- `md` 768px: name lockup gains offset composition, project detail grid becomes two columns when expanded.
- `lg` 1024px: desktop nav and full project showcase layout; hero content uses the full width without clipping.
- `xl` 1280px and above: content remains capped at 1180px; the oversized name can breathe without stretching body text.

All breakpoints must be free of horizontal overflow. Interactions must be keyboard reachable, visible on focus, and usable without hover.

## Components and Files

Create or update:

```text
components/
  common/
    reveal.tsx
    animated-number.tsx
    section-header.tsx
    project-card.tsx
  motion/
    motion-config.ts
    blueprint-grid.tsx
  sections/
    hero.tsx
    projects.tsx
    experience.tsx
    achievements.tsx
  navbar.tsx
app/globals.css
constants/site.ts
package.json
```

`motion-config.ts` owns the shared easing, reveal variants, and viewport settings. It must not create a global state store. `BlueprintGrid` is presentational and uses CSS backgrounds only. `AnimatedNumber` is a small client component that parses a numeric prefix/suffix from the typed achievement value and honors reduced motion.

## Accessibility and Performance

- Motion does not replace information; all project details are in the DOM when expanded and accessible by keyboard.
- Use `useReducedMotion` and provide immediate final states for reduced-motion users.
- Animate transform, opacity, and scale only; avoid layout-thrashing scroll handlers.
- Buttons must expose expanded state and control IDs.
- Active nav state is communicated by text weight and a shared rule, not color alone.
- Do not add a cursor-following global listener or a third-party smooth-scroll library.
- Keep the page statically rendered and avoid network-loaded fonts.

## Verification

- `npm run build` exits 0.
- `npx tsc --noEmit` exits 0.
- `npm run lint` exits 0.
- Runtime checks confirm the warm palette, exact hero name, Motion markup, all four projects, and resume links.
- Browser/runtime checks confirm no horizontal overflow, keyboard-expandable project cards, reduced-motion bypass, and mobile menu behavior.

## Official Motion References

- https://motion.dev/docs/react-use-scroll
- https://motion.dev/docs/react-use-transform
- https://motion.dev/docs/react-layout-animations
- https://motion.dev/docs/react-animate-presence
