import { prisma } from "@/lib/prisma";

async function main() {
  console.log("Seeding database...");

  // Clear existing data (optional, be careful in production)
  // await prisma.contactInquiry.deleteMany({});
  // await prisma.blogPost.deleteMany({});

  // Create sample contact inquiries
  const inquiry1 = await prisma.contactInquiry.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      company: "TechStartup Inc",
      description:
        "We need help building a SaaS platform for our product. Looking for a team that can handle full-stack development.",
      budget: "$50k-100k",
      timeline: "3 months",
      source: "Direct",
      status: "new",
    },
  });

  const inquiry2 = await prisma.contactInquiry.create({
    data: {
      name: "Sarah Smith",
      email: "sarah@example.com",
      company: "FinTech Solutions",
      description:
        "Seeking technical consultation on our current architecture. We have a monolithic Rails app and want advice on modernizing.",
      budget: "$5k-10k",
      timeline: "2 weeks",
      source: "Referral",
      status: "new",
    },
  });

  console.log("Sample contact inquiries created:", inquiry1, inquiry2);

  // Create sample blog post metadata (actual posts are MDX files in app/blog/posts/)
  const post1 = await prisma.blogPost.create({
    data: {
      slug: "nextjs-app-router-for-scale",
      title: "How we structure a Next.js App Router project for scale",
      description: "Opinionated guidance signaling architectural thinking.",
      author: "Devang Kushwah",
      date: new Date("2023-12-01"),
      category: "Next.js",
      readingTime: "8 min read",
      published: true,
    },
  });

  const post2 = await prisma.blogPost.create({
    data: {
      slug: "why-postgresql-for-everything",
      title: "Why we choose PostgreSQL for everything",
      description: "The case for PostgreSQL as your primary database.",
      author: "Devang Kushwah",
      date: new Date("2024-01-15"),
      category: "Database",
      readingTime: "6 min read",
      published: true,
    },
  });

  console.log("Sample blog posts created:", post1, post2);

  console.log("Seeding completed!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
