# Systems Notebook Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing animation-heavy portfolio with a recruiter-focused, accessible Systems Notebook portfolio for an AI Engineer and Backend Engineer.

**Architecture:** Keep the existing Next.js App Router and Tailwind setup, replace the active page with typed content constants, focused section components, and six small reusable UI primitives. Use Framer Motion for restrained reveals and native browser scrolling with IntersectionObserver scroll spy.

**Tech Stack:** Next.js 15, React 18, TypeScript, Tailwind CSS, Framer Motion, lucide-react only for interface icons where needed.

## Global Constraints

- Use black, white, neutral gray, and one muted blue accent.
- No images, profile photos, illustrations, decorative graphics, Lottie, particles, gradients, or glassmorphism.
- Position Praveen as AI Engineer, Backend Engineer, and Distributed Systems Enthusiast.
- Projects are the strongest section and must include problem, architecture, technologies, impact, and GitHub link.
- Use `RESUME_URL` for every resume link; open externally with `noopener noreferrer`.
- Respect `prefers-reduced-motion` and avoid horizontal scrolling at every breakpoint.
- Use typed constants and reusable `SectionHeader`, `Reveal`, `Badge`, `ProjectCard`, `TimelineItem`, and `ExternalLink` primitives.

### Task 1: Replace content model and global design tokens

**Files:**
- Modify: `constants/site.ts`
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] Add `RESUME_URL`, typed project/experience/skill/achievement records, and exact PDF-derived content.
- [ ] Replace warm theme tokens with semantic monochrome tokens and a muted blue accent.
- [ ] Define the spacing, typography, focus, reduced-motion, and section layout utilities.
- [ ] Remove the old theme names and progress-bar data from the active constants.
- [ ] Run `npx tsc --noEmit` and `npm run build`; expected: existing page still compiles against the updated constants or failures identify remaining consumers.

### Task 2: Add reusable primitives and navigation

**Files:**
- Create: `components/common/section-header.tsx`
- Create: `components/common/reveal.tsx`
- Create: `components/common/badge.tsx`
- Create: `components/common/external-link.tsx`
- Modify: `components/navbar.tsx`
- Modify: `hooks/use-scroll-spy.ts`

- [ ] Implement semantic `SectionHeader`, `Reveal`, `Badge`, and secure `ExternalLink` components.
- [ ] Rebuild the navbar with active section tracking, accessible mobile menu state, Escape handling, and Resume URL.
- [ ] Use native anchor scrolling and `scroll-margin-top` instead of Lenis.
- [ ] Run type checking and build; expected: primitives compile and navigation has no stale warm-theme imports.

### Task 3: Rebuild the core recruiter path

**Files:**
- Modify: `components/sections/hero.tsx`
- Modify: `components/sections/about.tsx`
- Create: `components/sections/expertise.tsx`
- Modify: `components/sections/skills.tsx` or remove it from the page
- Modify: `app/page.tsx`

- [ ] Implement the hero with immediate role positioning, concise value proposition, technology badges, View Projects CTA, and external Resume CTA.
- [ ] Implement About with education, location, and technical focus.
- [ ] Implement expertise blocks with no progress bars.
- [ ] Wire the section order so recruiters see Hero → About → Expertise → Projects.
- [ ] Run `npm run build`; expected: the first half of the page compiles and is statically renderable.

### Task 4: Build the projects centerpiece

**Files:**
- Create: `components/sections/projects.tsx`
- Create: `components/common/project-card.tsx`
- Remove or stop importing: legacy GSAP/horizontal-project dependencies from the active page

- [ ] Implement four architecture-focused project cards using the typed project records.
- [ ] Present Problem, Architecture, Technologies, and Impact as scannable subsections.
- [ ] Include GitHub links and conditional live links with secure external behavior.
- [ ] Add subtle Framer Motion reveal and hover micro-interactions without scale, glow, or pinned scrolling.
- [ ] Run `npx tsc --noEmit` and `npm run build`; expected: all four projects render without overflow.

### Task 5: Rebuild experience, achievements, contact, and footer

**Files:**
- Modify: `components/sections/experience.tsx`
- Create: `components/sections/achievements.tsx`
- Modify: `components/sections/contact.tsx`
- Modify: `components/footer.tsx`

- [ ] Implement the professional timeline with impact, responsibilities, technologies, company, and period.
- [ ] Implement credibility indicators for repositories, DSA, certifications, and project focus.
- [ ] Add contact links and Resume URL to the contact section.
- [ ] Keep footer minimal and image-free.
- [ ] Run type checking and build.

### Task 6: Remove legacy assets and runtime systems

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/opengraph-image.tsx` and `app/twitter-image.tsx` only if they reference deprecated assets
- Remove: `public/PRAVEENMANDALA.pdf`
- Replace: `public/icon.svg` with the PM monogram favicon

- [ ] Remove `LivingBackground`, `SmoothScroll`, and `dynamic = "force-dynamic"` from the active render path.
- [ ] Remove old resume references and verify the Google Drive constant is the only resume target.
- [ ] Replace the favicon with a minimal PM monogram.
- [ ] Remove the bundled local resume assets once no references remain.
- [ ] Run `rg` to confirm no old resume downloads, orange theme tokens, GSAP, Lenis, particles, or decorative backgrounds remain active.

### Task 7: Verify responsive and accessible behavior

**Files:**
- Modify only files required by verification findings.

- [ ] Run `npx tsc --noEmit`, `npm run lint`, and `npm run build`.
- [ ] Start the app and verify desktop and mobile layouts in a real browser at 320px, 375px, 768px, 1024px, 1440px, and 1920px widths.
- [ ] Check console output, horizontal overflow, keyboard focus, mobile menu behavior, active navigation, anchor scrolling, external resume links, and reduced-motion behavior.
- [ ] Review the final diff and report any limitations with evidence.
