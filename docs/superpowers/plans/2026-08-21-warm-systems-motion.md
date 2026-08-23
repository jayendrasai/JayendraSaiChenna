# Warm Systems Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve the existing Systems Notebook into a warm, memorable, motion-led engineering portfolio without sacrificing recruiter clarity or accessibility.

**Architecture:** Migrate the existing Framer Motion usage to the current `motion/react` package, centralize motion variants and reduced-motion behavior, and add only local client state for project expansion and animated counters. Preserve the existing typed content and section architecture.

**Tech Stack:** Next.js 15.1.11, React 18, TypeScript, Tailwind CSS, `motion`, lucide-react.

## Global Constraints

- Use warm ivory, parchment, stone, charcoal, deep umber, muted bronze, and terracotta only.
- No purple, indigo, blue, neon, bright gradients, glows, particles, floating blobs, or decorative imagery.
- Make `PRAVEEN MANDALA` the dominant hero brand lockup.
- Use `useScroll`, `useTransform`, `useSpring`, `whileInView`, `layout`, `AnimatePresence`, and `useReducedMotion` from `motion/react` where they serve a visible interaction.
- Respect reduced motion and keep all information accessible without hover.
- Projects must be the strongest section and expand into case-study detail.

### Task 1: Migrate Motion and define warm tokens

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Create: `components/motion/motion-config.ts`
- Create: `components/motion/blueprint-grid.tsx`

- [ ] Replace the direct `framer-motion` dependency with current `motion` and migrate imports to `motion/react`.
- [ ] Replace the neutral blue/white tokens with the warm material palette.
- [ ] Add blueprint-grid CSS using restrained linear gradients and a client component that accepts scroll-linked styles.
- [ ] Define shared easing, reveal variants, and a reduced-motion-safe transition helper.
- [ ] Run `npm ci`, `npx tsc --noEmit`, and `npm run lint`; expected: no stale `framer-motion` imports remain.

### Task 2: Rebuild the hero identity and scroll depth

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] Render `PRAVEEN` and `MANDALA` as the dominant two-line `h1` lockup.
- [ ] Add `useScroll`, `useTransform`, and `useSpring` for name drift, blueprint translation, and restrained opacity.
- [ ] Add staggered entrance variants for the label, name, role, value proposition, badges, and actions.
- [ ] Keep role and CTA visible in the first viewport on mobile.
- [ ] Run `npx tsc --noEmit` and `npm run build`; expected: static build succeeds and the hero markup contains the exact name and role.

### Task 3: Make projects interactive case studies

**Files:**
- Modify: `components/common/project-card.tsx`
- Modify: `components/sections/projects.tsx`

- [ ] Add local expanded state per card with a keyboard-accessible button and `aria-expanded`/`aria-controls`.
- [ ] Use `layout` and `AnimatePresence` for expansion and exit; use `layoutId` for the card’s active rule or action highlight.
- [ ] Keep closed cards compact while exposing problem, architecture, engineering decisions, technologies, impact, and links in the expanded state.
- [ ] Add small hover elevation, technology stagger, and repository action transitions without large transforms.
- [ ] Verify at mobile width that tap-to-expand works and the content does not overflow.

### Task 4: Add motion to navigation, experience, and achievements

**Files:**
- Modify: `components/navbar.tsx`
- Modify: `components/sections/experience.tsx`
- Modify: `components/sections/achievements.tsx`
- Create: `components/common/animated-number.tsx`
- Modify: `components/common/reveal.tsx`

- [ ] Add shared animated underline for active navigation using `layoutId` and menu presence animation using `AnimatePresence`.
- [ ] Add section-progress scaleY to the experience rule using `useScroll` and `useSpring`.
- [ ] Add reduced-motion-safe animated counters for the achievement values.
- [ ] Keep reveals once-only and staggered without delaying critical hero content.
- [ ] Run type checking, lint, and build.

### Task 5: Polish responsive behavior and verify runtime

**Files:**
- Modify: `app/globals.css`
- Modify any component touched by verification findings.

- [ ] Verify 320px, 375px, 768px, 1024px, 1440px, and 1920px layouts for overflow and clear hierarchy.
- [ ] Verify keyboard focus, mobile menu, project expansion, external links, reduced motion, and active nav state.
- [ ] Run `npm run build`, `npx tsc --noEmit`, `npm run lint`, and `git diff --check`.
- [ ] Run runtime assertions against the local page for the warm palette, exact name, four projects, and Drive resume URL.
