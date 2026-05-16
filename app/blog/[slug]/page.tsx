import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

const blogPosts: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    readTime: string;
    content: string;
  }
> = {
  "postgresql-vs-mongodb": {
    title: "Why we use PostgreSQL for almost everything",
    date: "March 15, 2025",
    category: "Architecture",
    readTime: "8 min",
    content: `
## The Default Question

When starting a new project, the first database question is almost always: PostgreSQL or MongoDB?

Most teams pick MongoDB because it's "flexible" or "schema-less." In reality, this flexibility often becomes a liability. We've learned to default to PostgreSQL and only reach for MongoDB when we have a specific reason.

## Why PostgreSQL?

**1. ACID Guarantees**

PostgreSQL gives you ACID compliance out of the box. Your data is correct. Full stop.

With MongoDB, even with replica sets, you're dealing with eventual consistency by default. Yes, you can enable transactions in newer versions, but you're fighting the architecture.

**2. JSONB for Flexibility**

If you need flexibility, PostgreSQL has you covered with JSONB. It's stored in a binary format, so queries are fast. You get the best of both worlds: structured and flexible data.

\`\`\`sql
SELECT data->>'name' FROM documents 
WHERE data->'tags' ? 'important';
\`\`\`

**3. Complex Queries**

MongoDB makes simple queries simple. But when you need joins, aggregations, or complex filtering, SQL is dramatically cleaner and more performant.

**4. Full-Text Search**

PostgreSQL has excellent full-text search built-in. No need for Elasticsearch for most use cases.

**5. Window Functions**

If you're doing analytics or time-series data, window functions are game-changing. MongoDB doesn't have an equivalent.

## When MongoDB Makes Sense

1. **Unstructured data at massive scale** (100B+ documents)
2. **Horizontal scaling requirements** from day one
3. **Real-time analytics** on massive datasets
4. **Complex nested documents** that you query as-is

For 90% of SaaS products, these don't apply. PostgreSQL is the right default.

## Our Stack

We start with PostgreSQL. We add Redis for caching. We add Elasticsearch only if we need it. We add analytics-specific tools only when PostgreSQL can't do the job.

This approach has scaled us to millions of records, thousands of users, and millions of queries per day. No sharding. No distributed transactions. Just PostgreSQL doing what it does best.
    `,
  },
  "prisma-migrations-production": {
    title: "Prisma migrations in production without downtime",
    date: "March 10, 2025",
    category: "PostgreSQL",
    readTime: "6 min",
    content: `
## The Problem

Database migrations in production are scary. A badly designed migration can lock your tables for hours, bringing your entire application down.

We use Prisma because it makes migrations declarative and version-controlled. But Prisma migrations aren't magic—they follow the same rules as raw SQL. A migration can still lock your database.

## The Solution

The key is understanding what operations are safe and what operations lock tables.

### Safe Operations (No Lock)

- Adding a new column with a default value
- Creating an index in the background
- Adding a constraint that doesn't require validation

### Dangerous Operations (Table Lock)

- Removing a column
- Changing a column type
- Adding a NOT NULL column without a default

## The Pattern

**Step 1: Add the new column with a default**

\`\`\`prisma
model Post {
  id Int @id @default(autoincrement())
  title String
  published Boolean @default(false)  // New column
}
\`\`\`

**Step 2: Deploy the migration**

Prisma creates the column with the default. Your app keeps running. No downtime.

**Step 3: Update your app code to use the new column**

**Step 4: In a separate deployment, remove the old column**

This approach ensures zero downtime. The migration is safe even on large tables.

## With Prisma

\`\`\`bash
prisma migrate dev --name add_published_column
prisma migrate deploy
\`\`\`

The generated SQL respects PostgreSQL's locking rules. You can audit the SQL before deploying.

## What We Do

Every migration goes through:
1. Run locally against staging database
2. Review the generated SQL
3. Test on a copy of production data
4. Deploy with a monitoring dashboard open
5. Verify in production

This adds 30 minutes per migration. But zero downtime is worth it.
    `,
  },
  "nextjs-app-router-structure": {
    title: "How we structure a Next.js App Router project for scale",
    date: "March 5, 2025",
    category: "React",
    readTime: "10 min",
    content: `
## Folder Structure That Works

After shipping 20+ Next.js projects, we've settled on a structure that scales from 1 person to 10 people.

\`\`\`
app/
  (auth)/
    login/
    signup/
  (dashboard)/
    layout.tsx
    page.tsx
    projects/
    settings/
  api/
    projects/
      route.ts
    users/
      route.ts
  layout.tsx
  page.tsx

components/
  ui/
    Button.tsx
    Card.tsx
  layout/
    Header.tsx
    Footer.tsx
  features/
    ProjectList.tsx
    ProjectForm.tsx

lib/
  db.ts
  auth.ts
  api.ts
  utils.ts

types/
  index.ts

hooks/
  useProjects.ts
  useAuth.ts
\`\`\`

## Why This Works

**Route groups for logical separation**

Group related pages (auth, dashboard, etc.) without changing the URL structure. This keeps your routes clean and your components organized.

**Features live near where they're used**

ProjectList and ProjectForm live in components/features/ because they're specific to the projects domain. Button and Card live in components/ui/ because they're reusable.

**lib/ for business logic**

Database queries, authentication, API calls—all in lib/. Your components import logic, not the other way around.

**types/ for single source of truth**

All TypeScript types live in one place. Your Prisma schema is the source of truth, then types/ exports what your components need.

## API Routes

Each API route handles one resource:

\`\`\`
app/api/projects/route.ts        // GET /api/projects, POST /api/projects
app/api/projects/[id]/route.ts   // GET /api/projects/:id
\`\`\`

We use lib/api.ts as a shared client for internal API calls:

\`\`\`typescript
export const api = {
  projects: {
    list: () => fetch("/api/projects"),
    create: (data) => fetch("/api/projects", { method: "POST", body: JSON.stringify(data) }),
  },
};
\`\`\`

Your components never call fetch directly. They use api.projects.list().

## Testing

With this structure, testing is straightforward:

\`\`\`
tests/
  unit/
  integration/
  e2e/
\`\`\`

Components are isolated. API routes are isolated. No surprises.
    `,
  },
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <>
        <Header />
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white dark:bg-zinc-950">
          <div className="container-max text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-yellow-600 hover:text-yellow-700">
              ← Back to blog
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Article */}
      <article className="min-h-[calc(100vh-64px)] bg-white dark:bg-zinc-950">
        <div className="container-max max-w-3xl py-16 md:py-32">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400 font-semibold mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                {post.category}
              </span>
              <span className="text-xs text-zinc-500">{post.readTime} read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <time className="text-zinc-600 dark:text-zinc-400">{post.date}</time>
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
          </div>

          {/* Author */}
          <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-display font-bold text-lg">
                D
              </div>
              <div>
                <p className="font-semibold">Written by Devang</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Founder & Principal Engineer at Vrishtek
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, p]) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-yellow-600/50 transition-all hover:-translate-y-1 group"
                  >
                    <h3 className="font-semibold mb-2 group-hover:text-yellow-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {p.readTime} read
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
