# Cinematic Engineering Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the original warm orange/yellow portfolio identity and rebuild the site as a narrative, motion-driven engineering portfolio.

**Architecture:** Keep typed content and the current Next.js App Router, replace repeated card/header patterns with section-specific compositions, and implement a desktop pinned project story with a mobile vertical chapter fallback. Use `motion/react` for all scroll, layout, presence, and pointer interactions.

**Tech Stack:** Next.js 15.1.11, React 18, TypeScript, Tailwind CSS, Motion, lucide-react.

## Global Constraints

- Restore original palette: `#FFFDF8`, `#1A1A1A`, `#F3EBDD`, `#FF8C42`, `#FFD95A`.
- No notebook, parchment, paper, brown, blue, purple, neon, or generic SaaS visual system.
- No images, SVG artwork, Lottie, particles, or decorative illustrations.
- Projects are a narrative experience, not generic cards.
- Desktop and mobile use intentionally different project choreography.
- Active navigation must be stable, keyboard accessible, and visually synchronized.
- Reduced motion must preserve all content and final states.

### Task 1: Restore brand tokens and add motion primitives

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Create: `components/motion/ambient-field.tsx`
- Create: `components/motion/pointer-depth.tsx`
- Modify: `components/motion/motion-config.ts`

- [ ] Replace all warm notebook tokens with the original ivory/ink/beige/orange/yellow palette.
- [ ] Add a restrained CSS ambient field with Motion opacity/translation values.
- [ ] Add pointer depth using `pointerType === "mouse"` and spring-smoothed transforms; disable for reduced motion and coarse pointers.
- [ ] Keep the background image-free and limit animation to transform/opacity.
- [ ] Run typecheck and lint.

### Task 2: Rebuild hero as the cinematic identity lockup

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] Make `PRAVEEN MANDALA` the largest visual element with layered line composition.
- [ ] Add ambient field and pointer depth behind the name.
- [ ] Add staggered entrance and scroll exit transforms.
- [ ] Keep role and View Projects/Resume actions in the first viewport at mobile widths.
- [ ] Run build and verify the exact hero content in rendered HTML.

### Task 3: Replace generic expertise and section patterns

**Files:**
- Modify: `components/sections/expertise.tsx`
- Create: `components/common/capability-index.tsx`
- Modify or remove: `components/common/badge.tsx`
- Modify or remove: `components/common/section-header.tsx`

- [ ] Build a capability index with selectable/focusable categories and animated active state.
- [ ] Render tools as a text-first editorial list rather than pills.
- [ ] Give the section a composition distinct from About, Projects, and Achievements.
- [ ] Verify keyboard selection and reduced-motion behavior.

### Task 4: Build the desktop pinned project narrative

**Files:**
- Modify: `components/sections/projects.tsx`
- Create: `components/sections/project-story.tsx`
- Create: `components/common/project-stage.tsx`
- Modify: `constants/site.ts`

- [ ] Add project-specific stage metadata and decision content.
- [ ] Implement a desktop sticky chapter rail with scroll progress controlling the active chapter.
- [ ] Use `AnimatePresence`, `layout`, and directional transitions between project stages.
- [ ] Give IntelliSupport, Evaluation Framework, Feature Store, and NLP-Service distinct CSS/DOM compositions.
- [ ] Include problem, architecture path, decisions, impact, and actions without generic cards.
- [ ] Verify desktop pinned story behavior and no content loss with reduced motion.

### Task 5: Build mobile project chapters

**Files:**
- Modify: `components/sections/project-story.tsx`
- Modify: `components/common/project-stage.tsx`
- Modify: `app/globals.css`

- [ ] Add a mobile-only vertical chapter sequence with a compact sticky project index.
- [ ] Preserve the project-specific stage before the readable content.
- [ ] Ensure touch users can reach all details without hover or horizontal scrolling.
- [ ] Verify 320px, 375px, 768px, and 1024px layouts.

### Task 6: Rebuild navigation and section motion

**Files:**
- Create: `hooks/use-active-section.ts`
- Modify: `components/navbar.tsx`
- Modify: `components/sections/experience.tsx`
- Modify: `components/sections/achievements.tsx`

- [ ] Use a stable section list and top-biased active-section observer.
- [ ] Update active state on click before scroll settles.
- [ ] Add `LayoutGroup` shared underline, mobile focus return, Escape handling, and body scroll lock.
- [ ] Preserve animated timeline and achievement counters as section-specific motion.
- [ ] Verify desktop and mobile navigation states by keyboard and runtime assertions.

### Task 7: Final cleanup and verification

**Files:**
- Modify: `app/not-found.tsx`
- Modify any file required by verification findings.
- Remove: unused generic project/card/header render files after references are gone.

- [ ] Remove all notebook tokens, generic badge/card paths, and stale palette references from the active render path.
- [ ] Run `npm run build`, `npx tsc --noEmit`, `npm run lint`, and `git diff --check`.
- [ ] Run production runtime assertions for the original palette, hero, project chapters, navigation, and resume URL.
- [ ] Report any browser verification limitation explicitly.
