import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  author: string;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), "app", "blog", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ""),
      ...(data as Omit<BlogPost, "slug">),
    };
  });

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <>
      <Header />
      <main>
        <section className="section-padding bg-white dark:bg-zinc-950">
          <div className="container-max text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Engineering Insights
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              Thoughts, guides, and deep dives on product engineering,
              architecture, and developer experience.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white dark:bg-zinc-950">
          <div className="container-max">
            {/* Categories */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full bg-yellow-600 text-white text-sm font-medium hover:bg-yellow-700 transition-colors"
              >
                All
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog?category=${category}`}
                  className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-yellow-600 hover:text-white transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>

            {/* Blog Posts List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group block rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <div className="p-6">
                    <p className="text-sm text-yellow-600 mb-2">
                      {post.category} · {post.readingTime}
                    </p>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                      {post.description}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
