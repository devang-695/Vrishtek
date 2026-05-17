# Deployment Guide - Vrishtek Website

This guide covers deploying the Vrishtek website to Vercel with a PostgreSQL database on Neon.tech and email service through Resend.

## Prerequisites

- GitHub account with your repository
- Vercel account (free tier is sufficient)
- Neon.tech account (free PostgreSQL database)
- Resend account (free email service)

## 1. Database Setup (Neon.tech)

### Create a PostgreSQL Database

1. Go to https://neon.tech
2. Sign up or log in
3. Create a new project:
   - Project name: `vrishtek` (or your choice)
   - Region: Choose closest to your users
4. Create a database (usually defaults to `neondb`)
5. Copy the connection string from the "Connection string" section
   - Format: `postgresql://user:password@host.neon.tech/database?sslmode=require`

### Create a `.env.local` file (for local development)

```bash
DATABASE_URL="postgresql://user:password@host.neon.tech/database?sslmode=require"
RESEND_API_KEY="your_resend_api_key_here"
CONTACT_EMAIL_FROM="noreply@vrishtek.com"
CONTACT_EMAIL_TO="contact@vrishtek.com"
```

### Run Initial Migration Locally

```bash
npm run db:migrate
```

This creates the tables in your Neon database. You should see:
- `ContactInquiry` table
- `BlogPost` table
- `PageView` table

## 2. Email Setup (Resend)

### Create Resend Account

1. Go to https://resend.com
2. Sign up with your email
3. Go to API Keys section
4. Create a new API key and copy it

### Configure Email Domain

For development/testing, you can use Resend's sandbox domain. For production:

1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `vrishtek.com`)
3. Add the DNS records Resend provides to your domain registrar
4. Verify the domain

### Email Addresses

- **From:** `noreply@vrishtek.com` (must be verified domain or use Resend sandbox)
- **To:** `contact@vrishtek.com` (where you receive notifications)

## 3. GitHub Setup

### Push Your Code

```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

Ensure your repository includes:
- All source code
- `.env.example` (environment template)
- `SETUP_GUIDE.md` and `DEPLOYMENT.md`
- `.gitignore` (should exclude `.env.local`, `node_modules`, `.next`, etc.)

## 4. Vercel Deployment

### Connect Repository

1. Go to https://vercel.com/new
2. Select "Import Project"
3. Paste your GitHub repository URL
4. Click "Import"

### Configure Project Settings

1. **Project Name:** `vrishtek` (or your preference)
2. **Framework Preset:** Select "Next.js" (usually auto-detected)
3. **Build Command:** (default is fine) `next build`
4. **Output Directory:** (default is fine) `.next`
5. **Install Command:** (default is fine) `npm install`

### Add Environment Variables

Before deploying, click "Environment Variables" and add:

```
DATABASE_URL=postgresql://user:password@host.neon.tech/database?sslmode=require
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL_FROM=noreply@vrishtek.com
CONTACT_EMAIL_TO=contact@vrishtek.com
```

### Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like `https://vrishtek.vercel.app`

### Test Deployment

After deployment:

1. Visit your Vercel URL
2. Check that pages load correctly
3. Test dark/light mode toggle
4. Submit a contact form
5. Check your email for the contact notification
6. Verify the entry in your Neon database

## 5. Custom Domain

### Set Up Custom Domain

1. In Vercel project settings, go to "Domains"
2. Click "Add Domain"
3. Enter `vrishtek.com` (or your domain)
4. Follow the DNS configuration instructions for your domain registrar

Options for DNS:
- **Nameservers** (recommended): Use Vercel's nameservers
- **CNAME**: Point to `cname.vercel-dns.com`

### SSL Certificate

Vercel automatically generates and renews SSL certificates. Your site will be:
- `https://vrishtek.com` (www redirect optional)
- Green padlock in all browsers

## 6. Post-Deployment Monitoring

### Vercel Analytics

1. In project settings, enable "Web Analytics"
2. Monitor page views, device types, geographic distribution

### Database Monitoring

1. Go to Neon.tech dashboard
2. Monitor connection count, storage usage, query performance

### Email Delivery

1. In Resend dashboard, check "Emails" section for delivery status
2. Monitor bounce/spam rates

## 7. Continuous Deployment

By default, Vercel auto-deploys every time you push to your main branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Your site will redeploy automatically within seconds.

### Rollback

If needed, rollback to previous deployment:
1. In Vercel project, go to "Deployments"
2. Find the deployment you want
3. Click the three dots → "Promote to Production"

## 8. Troubleshooting

### Build Failures

Check the build logs in Vercel:
1. Go to "Deployments"
2. Click on the failed deployment
3. Expand "Build Logs" to see errors

Common issues:
- Missing environment variables → Add them in project settings
- TypeScript errors → Fix locally and redeploy
- Prisma schema issues → Ensure migrations ran

### Database Connection Issues

```bash
# Test connection locally
npm run db:studio

# Check connection string format
DATABASE_URL="postgresql://user:password@host.neon.tech/database?sslmode=require"
```

### Email Not Sending

1. Check `RESEND_API_KEY` is correct
2. Verify sender email domain in Resend
3. Check spam folder
4. Review Resend "Emails" log for delivery errors

### Performance Issues

1. Check Vercel Analytics for slow pages
2. Run Lighthouse on production URL
3. Optimize images using `next/image`
4. Consider enabling Image Optimization in Vercel

## 9. Production Checklist

- [ ] Database configured on Neon.tech
- [ ] Migrations run successfully
- [ ] Resend API key verified
- [ ] Email domain configured (or using sandbox)
- [ ] Environment variables set in Vercel
- [ ] Initial deployment successful
- [ ] All pages load and render correctly
- [ ] Contact form tested end-to-end
- [ ] Dark/light mode toggle working
- [ ] Custom domain configured with SSL
- [ ] Lighthouse scores 95+
- [ ] Analytics enabled
- [ ] Error monitoring set up (optional)
- [ ] Backup strategy in place (Neon handles this)

## 10. Ongoing Maintenance

### Weekly
- Monitor Vercel Analytics
- Check error logs in Vercel

### Monthly
- Review database performance (Neon.tech)
- Check email delivery metrics (Resend)
- Monitor uptime and performance

### Quarterly
- Update Next.js dependencies
- Update Prisma
- Run security audits

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Neon.tech Docs:** https://neon.tech/docs
- **Resend Docs:** https://resend.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Prisma Docs:** https://www.prisma.io/docs

---

**Last Updated:** May 2026

For questions or issues, refer to the context files or reach out to the development team.
