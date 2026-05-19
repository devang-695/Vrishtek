# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Core Development:**
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npx prisma studio` - View and edit database (PostgreSQL via Neon.tech)

**Database Operations:**
- `npm run db:migrate` - Run Prisma migrations
- `npm run db:seed` - Seed database with initial data
- `npm run db:push` - Push Prisma schema changes to database
- `npx prisma generate` - Generate Prisma Client

**Code Quality:**
- TypeScript type checking is built into Next.js dev/build processes
- ESLint configuration follows Next.js defaults - run via IDE or `npx eslint .` if needed
- Tailwind CSS v4 with PostCSS processing - automatic rebuild on changes

## Project Architecture

**Technology Stack:**
- Framework: Next.js 14 (App Router) with TypeScript
- UI: Tailwind CSS + shadcn/ui component primitives
- Animations: Framer Motion for page transitions and micro-interactions
- Content: MDX for blog engine with syntax highlighting
- Database: PostgreSQL (Neon.tech) with Prisma ORM
- Email: Resend for transactional emails
- Hosting: Vercel (edge-optimized)

**File Organization:**
- `app/` - Next.js App Router: pages, layouts, API routes (`/api/contact`, `/api/blog`)
- `components/ui/` - Base shadcn/ui primitives (buttons, cards, forms, etc.)
- `components/sections/` - Domain-specific layout segments (HeroSection, TechPhilosophy, etc.)
- `content/blog/` - Static MDX files for engineering insights
- `prisma/` - Database schema (`schema.prisma`) and migrations
- `public/` - Static assets (SVGs, favicon)
- `context/` - Project documentation and guidelines (see below)

**Key Architectural Decisions:**
- PostgreSQL preferred over MongoDB for relational data integrity
- Minimal client-side state: leverage URL state and React Server Components
- Third-party scripts must not impact Lighthouse performance (<95 score threshold)
- Strict TypeScript enforcement with no `any` types
- Server Components prioritized for data fetching and SEO

## Core Directives (from CLAUDE.md)

1. **No Generic Agency UI:** Avoid template-like components; aesthetic must feel premium (Vercel/Linear/Stripe caliber)
2. **Vedic Identity:** Embody Venus (craft), Jupiter (wisdom), Mercury (precision) in design/copy—no explicit astrology references
3. **Tech Honesty:** Strict adherence to declared stack; no unauthorized technology introductions
4. **State Management:** Update `context/progress-tracker.md` after meaningful implementation changes
5. **Performance Target:** Maintain Lighthouse 95+ across all metrics

## Context Documentation (Read in Order)

Before implementing features or architectural changes, consult:
1. `context/project-overview.md` - Brand identity, core pages, success criteria
2. `context/architecture.md` - Stack details, system boundaries, storage model, invariants
3. `context/ui-context.md` - Theme (dark-first, Zinc/Gold/Teal palette), typography, motion constraints
4. `context/code-standards.md` - Implementation rules, RSC preference, TypeScript strictness, SEO targets
5. `context/ai-workflow-rules.md` - Development workflow, scoping rules, design adherence
6. `context/progress-tracker.md` - Current phase, completed work, next steps (update after changes)

## Key Pages & Features

**Core Pages:**
- `/` - Homepage (primary conversion surface)
- `/work` - Case studies portfolio (3-5 projects)
- `/services` - Offerings: Full-stack, SaaS, APIs, React Native
- `/stack` - Technical transparency page (differentiator)
- `/about` - Founding story, studio values, team
- `/blog` - Engineering insights (MDX-based)
- `/contact` - Inquiry form + calendar booking (PostgreSQL + Resend)
- `/careers` - Open roles

**Technical Features:**
- MDX blog with syntax highlighting via rehype-pretty-code
- Dynamic OG image generation for blog posts
- Contact form with PostgreSQL storage and email notifications
- Dark/light mode with seamless transitions (no layout shifts)
- Framer Motion page transitions and micro-interactions
- Next.js Image optimization and font loading (Geist via next/font)
- Responsive design with Tailwind CSS

## Development Workflow

1. Start with `npm run dev` and implement feature in isolation
2. Follow existing patterns in `components/sections/` for UI consistency
3. Use Server Components for data fetching when possible
4. Update `context/progress-tracker.md` after meaningful changes
5. Test responsive design and dark/light mode transitions
6. Verify Lighthouse performance remains ≥95
7. Ensure TypeScript stricter checks pass (`tsc --noEmit`)