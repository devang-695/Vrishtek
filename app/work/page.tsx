import Link from "next/link";
import { ArrowRight, Code2, Briefcase, TrendingUp } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function WorkPage() {
  const projects = [
    {
      slug: "stackpulse",
      title: "StackPulse",
      category: "DevTools SaaS",
      description:
        "Real-time performance monitoring platform for Next.js applications.",
      challenge:
        "A startup with a compelling idea but no scalable technical foundation. They needed a production-ready monitoring system that could handle real-time data ingestion and visualization for thousands of developers.",
      solution:
        "Built a full-stack SaaS with Next.js frontend, Express/Node.js backend, PostgreSQL for time-series data, WebSockets for real-time updates, and Redis for caching. Implemented a robust API that handles 100K+ events per second. Added Stripe integration for subscription billing and role-based access control.",
      outcome: [
        "Launched in 8 weeks from greenfield",
        "Scales to 100K events/second",
        "Zero downtime deployments",
        "50ms avg query latency",
      ],
      stack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "WebSockets", "Redis", "Stripe", "Docker"],
      bgGradient: "from-blue-500 to-purple-600",
    },
    {
      slug: "wealthflow",
      title: "WealthFlow",
      category: "FinTech Mobile",
      description:
        "Cross-platform investment management app for retail investors.",
      challenge:
        "A team with strong product vision but no mobile development expertise. They needed to reach iOS and Android users without maintaining separate native codebases, while handling sensitive financial data securely.",
      solution:
        "Built React Native app with Expo managed workflow for rapid iteration. FastAPI backend with async workers for data processing. PostgreSQL with encrypted fields for sensitive data. Implemented WebSocket connections for real-time portfolio updates. Stripe for transaction processing and payment infrastructure.",
      outcome: [
        "iOS + Android from single codebase",
        "Sub-100ms real-time updates",
        "SOC 2 compliant data handling",
        "Successfully raised Series A",
      ],
      stack: ["React Native", "Expo", "Python", "FastAPI", "PostgreSQL", "WebSockets", "Stripe", "Docker", "AWS"],
      bgGradient: "from-green-500 to-teal-600",
    },
    {
      slug: "docarch",
      title: "DocArch",
      category: "Enterprise SaaS",
      description:
        "Document architecture and compliance platform for regulated industries.",
      challenge:
        "Enterprise customers needed to track document lineage, maintain audit trails, and ensure compliance across distributed teams. Existing solutions were expensive and inflexible.",
      solution:
        "Built event-sourced architecture in TypeScript with Node.js backend. Used PostgreSQL with jsonb for document metadata and audit logging. Implemented Redis-backed job queue (BullMQ) for async document processing. Multi-tenancy with row-level security. AWS S3 for document storage with encryption.",
      outcome: [
        "Reduced compliance audit time by 70%",
        "Handles 10M+ documents",
        "$2M ARR within 18 months",
      ],
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "GitHub Actions"],
      bgGradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:py-48 bg-gradient-to-b from-zinc-900 to-zinc-950 dark:from-black dark:to-zinc-950 text-white">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Selected Work</h1>
          <p className="text-lg text-zinc-300 max-w-2xl">
            Projects where we took responsibility for the full product stack — from architecture to deployment. These aren't portfolio pieces. They're systems built to scale.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container-max space-y-20">
          {projects.map((project, idx) => (
            <div key={idx} className="border-t border-zinc-200 dark:border-zinc-800 pt-16 first:border-t-0 first:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h2>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">{project.description}</p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-semibold mb-2 text-sm uppercase text-zinc-600 dark:text-zinc-500">
                        The Challenge
                      </h3>
                      <p className="text-zinc-700 dark:text-zinc-300">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-sm uppercase text-zinc-600 dark:text-zinc-500">
                        What We Built
                      </h3>
                      <p className="text-zinc-700 dark:text-zinc-300">{project.solution}</p>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-sm uppercase text-zinc-600 dark:text-zinc-500">
                      Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {project.outcome.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                          <TrendingUp className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase text-zinc-600 dark:text-zinc-500">
                      Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-500 hover:text-yellow-700 dark:hover:text-yellow-400 font-semibold"
                  >
                    Read full case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual */}
                <div
                  className={`h-96 rounded-xl bg-gradient-to-br ${project.bgGradient} flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity`}
                >
                  {idx === 0 && <Code2 className="w-20 h-20 text-white opacity-30" />}
                  {idx === 1 && <Briefcase className="w-20 h-20 text-white opacity-30" />}
                  {idx === 2 && <TrendingUp className="w-20 h-20 text-white opacity-30" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-zinc-900 dark:bg-black text-white border-t border-zinc-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a similar challenge?</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Let's talk about your product. We take on 2–3 projects per quarter.
          </p>
          <Link href="/contact" className="btn-primary inline-flex gap-2">
            Start the conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
