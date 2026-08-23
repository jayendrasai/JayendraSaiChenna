# Error Fallback Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add branded 404 and runtime-error experiences with a resilient, accessible mini Snake game.

**Architecture:** Thin Next.js fallback entry points consume a shared client recovery surface. A client Error Boundary guards app content, while `error.tsx` and `global-error.tsx` cover segment and root failures independently.

**Tech Stack:** Next.js App Router, React 18, TypeScript, Tailwind CSS, existing `motion/react`, Canvas 2D, browser `localStorage`.

## Global Constraints

- Reuse the existing cream/orange/black theme tokens and typography.
- Do not add dependencies.
- Respect `prefers-reduced-motion`.
- Keep 404 lightweight; load Snake only for runtime-error experiences.
- Keep keyboard and touch controls available.
- Do not modify unrelated worktree changes.

### Task 1: Shared recovery surface

**Files:** Create `components/common/recovery-experience.tsx`.

- [ ] Add a client component with `variant: "not-found" | "error"`, optional `error`, `onRetry`, and `showGame` behavior.
- [ ] Render branded status text, architecture-themed message, animated signal motif, Home link, Projects link, and error-only Retry/report actions.
- [ ] Disable nonessential motion when `useReducedMotion()` is true.
- [ ] Keep the 404 branch free of the Snake import/render.

### Task 2: Snake game

**Files:** Create `components/common/error-snake.tsx`.

- [ ] Use a client component with a 16×16 logical canvas grid and responsive CSS sizing.
- [ ] Handle Arrow/WASD input, touch direction buttons, food, wall/self collision, score, restart, and guarded localStorage high score.
- [ ] Stop the timer on unmount and game over; avoid timers or storage during server rendering.
- [ ] Make controls labeled buttons and expose status text for keyboard and assistive technology users.

### Task 3: Next.js boundaries

**Files:** Modify `app/not-found.tsx`; create `app/error.tsx`; create `app/global-error.tsx`; create `components/common/error-boundary.tsx`; modify `app/layout.tsx`.

- [ ] Replace the generic 404 with the shared `not-found` variant and absolute `/#home` / `/#projects` links.
- [ ] Add a client `error.tsx` with `error` and `reset`, passing retry to the shared error variant.
- [ ] Add `global-error.tsx` with its own `<html>`/`<body>` and the same fallback component.
- [ ] Add a class-based client Error Boundary and wrap the root layout's children without hiding the root `<html>`/`<body>`.

### Task 4: Verification

- [ ] Run `npm run lint`.
- [ ] Run `npm run build` with no `next dev` process writing to `.next`.
- [ ] Run the dev server and request `/` and an invalid route; inspect logs for missing chunks or runtime errors.
- [ ] Review the diff and stop the temporary dev server.
