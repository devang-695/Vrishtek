import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const stackLayers = [
  {
    layer: "FRONTEND",
    items: [
      {
        name: "Next.js 14 (App Router)",
        reason:
          "Server components reduce client JS. App Router enables streaming and nested layouts that scale. We've been on this since beta.",
      },
      {
        name: "React 18 + TypeScript",
        reason:
          "TypeScript is non-negotiable. It catches bugs before your users do.",
      },
      {
        name: "Tailwind CSS + shadcn/ui",
        reason:
          "Utility-first for velocity. shadcn for components we own, not depend on.",
      },
      {
        name: "TanStack Query",
        reason:
          "Caching, invalidation, and optimistic updates without Redux boilerplate.",
      },
      {
        name: "Framer Motion",
        reason:
          "For animations that feel intentional, not decorative.",
      },
    ],
  },
  {
    layer: "BACKEND",
    items: [
      {
        name: "Node.js + Express",
        reason:
          "The JavaScript runtime we know deeply. Fast, battle-tested, production-ready.",
      },
      {
        name: "Python FastAPI",
        reason:
          "For AI/ML endpoints and data-heavy services. Async-native, typed, fast.",
      },
      {
        name: "PostgreSQL",
        reason:
          "Our default database. ACID compliance, JSONB when schema flexibility matters, PostGIS when location matters. We do not reach for MongoDB first.",
      },
      {
        name: "Prisma ORM",
        reason:
          "Schema-as-code. Migrations in version control. Type-safe queries. The query builder we would design ourselves if we had to.",
      },
      {
        name: "Redis",
        reason:
          "Caching, BullMQ job queues, WebSocket presence. Not a primary database.",
      },
      {
        name: "WebSockets (ws / Socket.io)",
        reason:
          "For real-time features where polling is not acceptable.",
      },
    ],
  },
  {
    layer: "MOBILE",
    items: [
      {
        name: "React Native + Expo",
        reason:
          "One codebase, two platforms. Expo managed workflow unless the project demands bare. We do not build separate native apps unless you have a 10-person mobile team to maintain them.",
      },
    ],
  },
  {
    layer: "INFRASTRUCTURE",
    items: [
      {
        name: "Docker + Docker Compose",
        reason:
          "Every project runs identically in dev, staging, and production. 'Works on my machine' is not a sentence we say.",
      },
      {
        name: "AWS (EC2 / ECS Fargate / RDS / S3 / CloudFront / SES)",
        reason:
          "We know AWS. We do not over-architect — we use the right service, not the most impressive one.",
      },
      {
        name: "GitHub Actions",
        reason:
          "CI/CD on every PR. Lint, type-check, test, build, deploy — automated from day one, not added six months later.",
      },
      {
        name: "Vercel",
        reason:
          "For Next.js frontends where Vercel's edge network is the right call. We choose between ECS and Vercel based on the project, not habit.",
      },
    ],
  },
  {
    layer: "AI INTEGRATION",
    items: [
      {
        name: "Anthropic Claude API",
        reason:
          "Our preferred LLM for text generation, summarization, and structured output. We prompt-engineer, version control prompts, and cap token spend.",
      },
      {
        name: "OpenAI API",
        reason:
          "For embeddings and cases where the client specifies GPT.",
      },
      {
        name: "LangChain (Selectively)",
        reason:
          "We use it when the agent complexity justifies it. We do not add it to every AI feature just because it exists.",
      },
    ],
  },
];

export default function StackPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:py-48 bg-gradient-to-b from-zinc-900 to-zinc-950 dark:from-black dark:to-zinc-950 text-white">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What We Build With</h1>
          <p className="text-lg text-zinc-300 max-w-2xl">
            Technical decisions are product decisions. Here is how we think about our tools.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container-max">
          <div className="space-y-16">
            {stackLayers.map((layer, idx) => (
              <div key={idx} className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-600 dark:text-yellow-500">
                  {layer.layer}
                </h2>

                <div className="space-y-6">
                  {layer.items.map((item, i) => (
                    <div key={i} className="pb-6 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-center text-zinc-600 dark:text-zinc-400 italic max-w-2xl mx-auto">
              "We do not add tools to seem impressive. We remove tools whenever possible. Complexity is a liability we charge your users for every request."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
