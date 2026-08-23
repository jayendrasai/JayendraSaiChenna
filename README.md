# Praveen Mandala Portfolio

## Overview
A premium, production-ready developer portfolio for Praveen Mandala highlighting AI engineering, full stack builds, and systems architecture. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS + tailwindcss-animate
- Framer Motion
- shadcn/ui patterns
- Aceternity UI + Magic UI inspired components
- Lucide Icons + React Icons
- next-themes
- react-scroll-parallax + Intersection Observer

## Features
- Cinematic hero with aurora glow, animated grid, spotlight, and particles
- Floating navbar with scroll progress indicator
- About, skills, experience, projects, marquee, and contact sections
- Bento grid projects with hover glow effects
- Parallax layers and scroll-triggered animations
- SEO optimized metadata, OpenGraph, Twitter cards, sitemap, and robots
- Accessibility-friendly with reduced-motion support
- Responsive design for mobile, tablet, and desktop

## Getting Started
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build
```bash
npm run build
npm start
```

## Deployment (Vercel)
1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Next.js.
4. Build command: `next build`.
5. Output directory: `.next`.
6. Deploy.

## Lighthouse Goals
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Screenshots
Store captured screenshots in `public/screenshots` and reference them here:
- Hero
- Projects
- Skills
- Mobile

## Project Structure
```
app/                Next.js App Router
components/         UI + sections + motion
constants/          Site data and content
hooks/              Custom hooks
lib/                Utilities and animations
public/             Static assets
```

## Environment
No environment variables are required for the base portfolio.

## License
MIT
