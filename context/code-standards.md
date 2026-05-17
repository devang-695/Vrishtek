# Code Standards

## General
- Craft first: Write code that reads well.
- Fix root causes, do not layer workarounds.
- "We choose boring infrastructure and exciting products." Build on solid, predictable patterns.

## TypeScript & Next.js
- Strict mode is mandatory. Avoid `any`.
- Default to React Server Components (RSC) to reduce client JS payload.
- Add `"use client"` only for interactivity, `useState`, or Framer Motion components.
- Use `next/image` for automatic WebP conversion and lazy loading.
- Use `next/font` for zero layout shift font loading.

## Styling
- Use Tailwind CSS utility classes exclusively.
- Extract recurring visual patterns using `cva` (Class Variance Authority) combined with `tailwind-merge` (the default shadcn/ui pattern).
- Map all colors to the global custom properties defined in `ui-context.md`.

## Performance & SEO
- Lighthouse targets: Performance 95+, Accessibility 95+, Best Practices 100, SEO 100.
- All dynamic pages (like Blog posts) should leverage `generateStaticParams` to pre-build where possible.
- Use standard metadata exports and `@vercel/og` for dynamic Open Graph images.

## APIs & Validation
- Validate unknown external input (e.g., Contact Form submissions) at system boundaries using Zod.
- Form submissions must trigger predictable JSON responses.