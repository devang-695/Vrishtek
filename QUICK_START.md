# Quick Start - Vrishtek Website

Welcome to the Vrishtek website project! This is a premium, full-stack SaaS website built with Next.js 14, Tailwind CSS, and PostgreSQL.

## What's Already Done ✅

- **Design System:** Dark-first theme with Zinc/Gold/Teal color scheme
- **All Pages:** Home, Services, Work, About, Stack, Blog, Careers, Contact
- **Navigation:** Header with theme toggle, Footer with links
- **Content:** 5 blog posts with MDX support
- **Database:** Prisma schema with ContactInquiry, BlogPost, PageView models
- **Contact Form:** UI + API endpoint ready for email integration
- **Styling:** Tailwind CSS with custom animations and components

## What You Need To Do 🚀

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database

Get a free PostgreSQL database from [Neon.tech](https://neon.tech):
1. Create account and project
2. Copy connection string
3. Create `.env.local`:
   ```
   DATABASE_URL="postgresql://user:password@host.neon.tech/database?sslmode=require"
   ```
4. Run migrations:
   ```bash
   npm run db:migrate
   ```

### 3. Set Up Email (Resend)

Get API key from [Resend](https://resend.com):
1. Copy API key
2. Add to `.env.local`:
   ```
   RESEND_API_KEY="re_your_api_key_here"
   CONTACT_EMAIL_FROM="noreply@vrishtek.com"
   CONTACT_EMAIL_TO="contact@vrishtek.com"
   ```

### 4. Run Locally
```bash
npm run dev
```
Visit http://localhost:3000

### 5. Test Contact Form
1. Fill out contact form on `/contact`
2. Check it saves to database: `npm run db:studio`
3. Update API to send emails (see SETUP_GUIDE.md)

### 6. Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy (auto-deploys on future pushes)

## File Structure

```
├── app/                    # Next.js pages & API routes
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── work/              # Case studies
│   ├── about/             # About page
│   ├── stack/             # Tech stack
│   ├── blog/              # Blog listing & posts
│   ├── careers/           # Open roles
│   ├── contact/           # Contact form
│   ├── api/contact/       # Contact API endpoint
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── header.tsx         # Navigation
│   ├── footer.tsx         # Footer
│   ├── sections.tsx       # Reusable sections
│   └── theme-provider.tsx # Dark mode setup
├── lib/
│   ├── fonts.ts           # Next.js fonts
│   └── prisma.ts          # Database client
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Sample data
├── context/               # Project documentation
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-context.md
│   ├── code-standards.md
│   ├── ai-workflow-rules.md
│   └── progress-tracker.md
├── CLAUDE.md              # Instructions for AI
├── SETUP_GUIDE.md         # Detailed setup steps
├── DEPLOYMENT.md          # Production deployment
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies & scripts
```

## Useful Commands

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run db:migrate       # Create database tables
npm run db:studio        # Open database viewer
npm run db:seed          # Add sample data
npm run db:push          # Sync schema to database
```

## Key Technologies

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, React 19, TypeScript |
| Styling | Tailwind CSS 4, Framer Motion |
| Database | PostgreSQL, Prisma ORM |
| Content | MDX blog posts |
| Email | Resend (not yet integrated) |
| Hosting | Vercel |
| Fonts | Bricolage Grotesque, Inter, JetBrains Mono |

## Common Tasks

### Add a Blog Post
1. Create new file: `app/blog/posts/my-post.mdx`
2. Add frontmatter:
   ```yaml
   ---
   title: My Post Title
   description: Short description
   date: 2024-01-15
   category: Next.js
   readingTime: 5 min read
   author: Devang Kushwah
   ---
   ```
3. Write content in Markdown/MDX
4. Post appears automatically on `/blog`

### Update Service Description
Edit `app/services/page.tsx` - update the `services` array

### Update Case Studies
Edit `app/work/page.tsx` - update the `projects` array

### Change Theme Colors
Edit `app/globals.css` - change CSS variables in `:root`

### Update Navigation Links
Edit `components/header.tsx` - update the navigation menu

## Next Steps

1. **Read CLAUDE.md** for AI development guidelines
2. **Read SETUP_GUIDE.md** for detailed steps
3. **Check context/** for brand, architecture, and design decisions
4. **Follow DEPLOYMENT.md** when ready to go live

## Need Help?

- Check `context/code-standards.md` for development rules
- Review `context/ai-workflow-rules.md` for AI workflow
- Refer to individual page files for examples
- Check `progress-tracker.md` for what's been done

---

**Start here:** `npm install && npm run dev` 🎉
