# Vrishtek Website - Setup & Deployment Guide

This guide walks through the final steps to get the Vrishtek website production-ready.

## Prerequisites
- Node.js 18+ and npm installed
- PostgreSQL database (Neon.tech recommended for free hosting)
- Resend API key (for email service)
- Vercel account (for deployment)

## Step 1: Install Dependencies

```bash
npm install
```

All required dependencies are already in `package.json`:
- `next` - Framework
- `prisma` - ORM
- `zod` - Validation
- `resend` - Email service
- `tailwindcss` - Styling
- `framer-motion` - Animations
- `next-themes` - Dark mode
- `gray-matter` - MDX frontmatter parsing

## Step 2: Set Up Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in the environment variables:
   - **DATABASE_URL:** PostgreSQL connection string from Neon.tech
   - **RESEND_API_KEY:** API key from Resend dashboard
   - **CONTACT_EMAIL_FROM:** Sender email (must be verified in Resend)
   - **CONTACT_EMAIL_TO:** Admin email for contact notifications

### Getting a Database (Neon.tech)
1. Go to https://neon.tech/
2. Create a free account
3. Create a new project
4. Copy the connection string to `DATABASE_URL`

### Getting Resend API Key
1. Go to https://resend.com/
2. Create an account
3. Copy the API key to `RESEND_API_KEY`
4. Verify your domain or use Resend's sandbox for testing

## Step 3: Initialize Database

Run Prisma migrations to create tables:

```bash
npx prisma migrate dev --name init
```

This will:
1. Create PostgreSQL tables: `ContactInquiry`, `BlogPost`, `PageView`
2. Generate Prisma Client in `lib/generated/prisma/`

To inspect the database:
```bash
npx prisma studio
```

## Step 4: Update Email Templates (Resend)

The Contact API is ready, but email templates need to be implemented. Update `/app/api/contact/route.ts`:

### Option A: Use Resend React Email (Recommended)
```bash
npm install @react-email/core @react-email/render
```

Create email templates in `lib/emails/`:
```typescript
// lib/emails/contact-confirmation.tsx
import { Html, Body, Container, Text } from "@react-email/core";

export function ContactConfirmationEmail({ name }: { name: string }) {
  return (
    <Html>
      <Body>
        <Container>
          <Text>Hi {name},</Text>
          <Text>Thanks for reaching out to Vrishtek. We'll review your inquiry and get back to you within 24 hours.</Text>
          <Text>Devang</Text>
        </Container>
      </Body>
    </Html>
  );
}
```

Then in `/app/api/contact/route.ts`:
```typescript
import { render } from "@react-email/render";
import { ContactConfirmationEmail } from "@/lib/emails/contact-confirmation";

// In the POST handler:
const confirmationEmail = render(<ContactConfirmationEmail name={name} />);
await resend.emails.send({
  from: process.env.CONTACT_EMAIL_FROM,
  to: email,
  subject: "We received your inquiry — Vrishtek",
  html: confirmationEmail,
});
```

### Option B: Plain HTML (Simpler)
```typescript
await resend.emails.send({
  from: process.env.CONTACT_EMAIL_FROM,
  to: email,
  subject: "We received your inquiry — Vrishtek",
  html: `
    <p>Hi ${name},</p>
    <p>Thanks for reaching out to Vrishtek. We'll review your inquiry and get back to you within 24 hours.</p>
    <p>Devang</p>
  `,
});
```

## Step 5: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and test:
1. Navigation between pages
2. Dark/Light mode toggle
3. Contact form submission (check database and console logs)
4. Blog posts rendering with syntax highlighting

## Step 6: Blog Posts & Content

5 sample blog posts are in `app/blog/posts/`:
- `nextjs-app-router-for-scale.mdx`
- `prisma-migrations-in-production.mdx`
- `why-postgresql-for-everything.mdx`
- `chrome-extension-manifest-v3-react.mdx`
- `streaming-claude-api-fastapi-sse.mdx`

To add more posts:
1. Create a new `.mdx` file in `app/blog/posts/`
2. Include frontmatter:
   ```yaml
   ---
   title: Your Post Title
   description: Short description
   date: 2024-01-15
   category: Next.js
   readingTime: 8 min read
   author: Devang Sharma
   ---
   ```

## Step 7: Performance & SEO Validation

Before deployment, run:

```bash
npm run build
npm run start
```

Check Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

Install Lighthouse CLI:
```bash
npm install -g lighthouse
lighthouse https://localhost:3000
```

## Step 8: Deployment to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. Go to https://vercel.com/new
3. Import the GitHub repository
4. Set environment variables:
   - `DATABASE_URL`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_FROM`
   - `CONTACT_EMAIL_TO`

5. Click "Deploy"

6. After deployment, visit your live site and test:
   - Contact form submission
   - Dark/Light mode
   - All pages load correctly

## Step 9: Post-Deployment

1. **Custom Domain:** Go to Vercel project settings → Domains, add your custom domain
2. **Email Verification:** In Resend, verify your domain or use transactional emails
3. **Analytics:** Enable Vercel Analytics in project settings
4. **Monitoring:** Set up error tracking (Sentry optional)

## Troubleshooting

### Contact form not saving
- Check `DATABASE_URL` is correct
- Run `npx prisma db push` to sync schema
- Check Prisma logs: `npx prisma studio`

### Emails not sending
- Verify `RESEND_API_KEY` is correct
- Check email is verified in Resend dashboard
- Look at Resend API logs

### Lighthouse scores low
- Ensure `next/image` is used for all images
- Verify fonts have `display: swap`
- Check for third-party scripts blocking rendering
- Run `npm run build && npm start` to test production build

## Production Checklist

- [ ] Database configured and migrations run
- [ ] Resend API key set up and domain verified
- [ ] Contact form tested end-to-end
- [ ] Blog posts rendering with syntax highlighting
- [ ] Dark/Light mode toggle working
- [ ] Lighthouse scores 95+
- [ ] Deployed to Vercel
- [ ] Custom domain configured
- [ ] SSL certificate valid (automatic on Vercel)
- [ ] Analytics enabled
- [ ] Error tracking set up (optional)
- [ ] SEO metadata verified

## Architecture Overview

### Frontend
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS 4 with custom color variables
- **Components:** shadcn/ui primitives + custom sections
- **Animations:** Framer Motion (subtle, intentional)
- **Theme:** Dark-first with light mode support

### Backend
- **API:** Next.js API Routes (serverless functions)
- **Database:** PostgreSQL with Prisma ORM
- **Email:** Resend for transactional emails
- **Content:** MDX blog posts with gray-matter parsing

### Deployment
- **Hosting:** Vercel (Edge, fast, auto-scaling)
- **CDN:** Vercel's global edge network
- **Database:** Neon.tech PostgreSQL (serverless)
- **Email:** Resend

## Support

For questions about the architecture or implementation, refer to the context files:
- `context/project-overview.md` - Brand and features
- `context/architecture.md` - System design
- `context/ui-context.md` - Theme and design tokens
- `context/code-standards.md` - Development rules
- `context/ai-workflow-rules.md` - AI development workflow
