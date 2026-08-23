# Error Handling & Fallback Experience

## Goal

Keep the portfolio branded, navigable, and interactive when a route is missing or rendering fails.

## Design

Use one shared client recovery experience for the route-level and root-level Next.js fallbacks. It reuses the existing cream/orange/black tokens, mono eyebrow labels, border-led layout, and reduced-motion behavior. The 404 variant stays lightweight and does not load the game; runtime-error variants include a small dependency-free Snake game.

The recovery surface provides a recognizable PM mark, a short architecture-themed message, animated signal lines, Home and Projects navigation, and a visible status label. `app/error.tsx` receives Next's `reset` callback for retry. `app/global-error.tsx` supplies its own document shell so failures in the root layout still render a complete page.

Add a client React Error Boundary around the app content as an additional client-rendering guard. Next's `error.tsx` and `global-error.tsx` remain the server/segment boundaries and preserve their required interfaces.

## Snake

`ErrorSnake` uses a fixed logical grid drawn to a responsive canvas. Arrow keys and WASD change direction; four touch buttons provide the same controls on mobile. A short interval advances the game, collision ends it, and a restart button resets it. The high score is read and written through guarded `localStorage` access so unavailable storage never breaks the fallback.

## Verification

- Home route returns successfully.
- An unknown route renders the branded 404 with Home and Projects links.
- Runtime and global error entry points compile.
- Lint and production build pass.
- Snake renders with reduced motion and exposes keyboard/touch controls.
- Temporary development server is stopped after verification.
