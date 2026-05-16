import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { readdir } from "fs/promises";
import { join } from "path";

async function getBlogPosts() {
  const postsDir = join(process.cwd(), "app/blog/content");
  const files = await readdir(postsDir);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      return { slug, file };
    });

  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Sample blog posts data (in a real app, this would be extracted from frontmatter)
  const blogPosts = [
    {
      slug: "postgresql-vs-mongodb",
      title: "Why we use PostgreSQL for almost everything",
      description:
        "A deep dive into why we choose PostgreSQL over NoSQL databases for 90% of projects, and when MongoDB actually makes sense.",
      date: "2025-03-15",
      category: "Architecture",
      readTime: "8 min",
    },
    {
      slug: "prisma-migrations-production",
      title: "Prisma migrations in production without downtime",
      description:
        "A practical guide to running database migrations safely in production. We've learned this the hard way.",
      date: "2025-03-10",
      category: "PostgreSQL",
      readTime: "6 min",
    },
    {
      slug: "nextjs-app-router-structure",
      title: "How we structure a Next.js App Router project for scale",
      description:
        "Opinionated patterns for organizing Next.js 14 projects that scale. From folder structure to API design.",
      date: "2025-03-05",
      category: "React",
      readTime: "10 min",
    },
    {
      slug: "chrome-extension-manifest-v3",
      title: "Building a Chrome Extension with Manifest V3 and React",
      description:
        "A complete guide to building modern Chrome extensions with React. The missing documentation Google didn't write.",
      date: "2025-02-28",
      category: "Architecture",
      readTime: "12 min",
    },
    {
      slug: "streaming-claude-api-fastapi",
      title: "Streaming Claude API responses with FastAPI and SSE",
      description:
        "Real-time AI features in production. How to stream LLM responses with proper error handling and backpressure.",
      date: "2025-02-20",
      category: "AI Engineering",
      readTime: "7 min",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:py-48 bg-gradient-to-b from-zinc-900 to-zinc-950 dark:from-black dark:to-zinc-950 text-white">
        <div className="container-max max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Engineering Insights
          </h1>
          <p className="text-lg text-zinc-300">
            Deep dives into systems we've built, problems we've solved, and patterns we've discovered along the way.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container-max max-w-3xl">
          <div className="space-y-8">
            {blogPosts.map((post, idx) => (
              <Link
                key={idx}
                href={`/blog/${post.slug}`}
                className="group block p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-yellow-600/50 hover:shadow-lg dark:hover:shadow-yellow-900/20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {post.readTime} read
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-yellow-600 transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {post.description}
                </p>
                <time className="text-xs text-zinc-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
