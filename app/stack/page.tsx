import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function StackPage() {
  const stack = {
    frontend: [
      {
        name: "Next.js 14 (App Router)",
        description:
          "Server components reduce client JS. App Router enables streaming and nested layouts that scale. We've been on this since beta.",
      },
      {
        name: "React 18 + TypeScript",
        description:
          "TypeScript is non-negotiable. It catches bugs before your users do.",
      },
      {
        name: "Tailwind CSS + shadcn/ui",
        description:
          "Utility-first for velocity. shadcn for components we own, not depend on.",
      },
      {
        name: "TanStack Query",
        description:
          "Caching, invalidation, and optimistic updates without Redux boilerplate.",
      },
      {
        name: "Framer Motion",
        description:
          "For animations that feel intentional, not decorative.",
      },
    ],
    backend: [
      {
        name: "Node.js + Express (or Fastify for high-throughput)",
        description:
          "The JavaScript runtime we know deeply. Fastify when latency matters.",
      },
      {
        name: "Python FastAPI",
        description:
          "For AI/ML endpoints and data-heavy services. Async-native, typed, fast.",
      },
      {
        name: "PostgreSQL",
        description:
          "Our default database. ACID compliance, JSONB when schema flexibility matters, PostGIS when location matters. We do not reach for MongoDB first.",
      },
      {
        name: "Prisma ORM",
        description:
          "Schema-as-code. Migrations in version control. Type-safe queries. The query builder we would design ourselves if we had to.",
      },
      {
        name: "Redis",
        description:
          "Caching, BullMQ job queues, WebSocket presence. Not a primary database.",
      },
      {
        name: "WebSockets (ws / Socket.io)",
        description:
          "For real-time features where polling is not acceptable.",
      },
    ],
    mobile: [
      {
        name: "React Native + Expo",
        description:
          "One codebase, two platforms. Expo managed workflow unless the project demands bare. We do not build separate native apps unless you have a 10-person mobile team to maintain them.",
      },
    ],
    infrastructure: [
      {
        name: "Docker + Docker Compose",
        description:
          "Every project runs identically in dev, staging, and production. 'Works on my machine' is not a sentence we say.",
      },
      {
        name: "AWS (EC2 / ECS Fargate / RDS / S3 / CloudFront / SES)",
        description:
          "We know AWS. We do not over-architect — we use the right service, not the most impressive one.",
      },
      {
        name: "GitHub Actions",
        description:
          "CI/CD on every PR. Lint, type-check, test, build, deploy — automated from day one, not added six months later.",
      },
      {
        name: "Vercel",
        description:
          "For Next.js frontends where Vercel's edge network is the right call. We choose between ECS and Vercel based on the project, not habit.",
      },
    ],
    aiIntegration: [
      {
        name: "Anthropic Claude API",
        description:
          "Our preferred LLM for text generation, summarization, and structured output. We prompt-engineer, version control prompts, and cap token spend.",
      },
      {
        name: "OpenAI API (when required)",
        description:
          "For embeddings and cases where the client specifies GPT.",
      },
      {
        name: "LangChain (selectively)",
        description:
          "We use it when the agent complexity justifies it. We do not add it to every AI feature just because it exists.",
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <section className="section-padding bg-white dark:bg-zinc-950">
          <div className="container-max text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What we build with — and why.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              Technical decisions are product decisions. Here is how we think about our tools.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white dark:bg-zinc-950">
          <div className="container-max grid grid-cols-1 gap-16 md:gap-24">
            {/* Frontend */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-yellow-600">Frontend</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {stack.frontend.map((tech, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-yellow-600">Backend</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {stack.backend.map((tech, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-yellow-600">Mobile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {stack.mobile.map((tech, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-yellow-600">Infrastructure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {stack.infrastructure.map((tech, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Integration */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-yellow-600">AI Integration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {stack.aiIntegration.map((tech, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honest Note */}
            <div className="text-center mt-16 max-w-2xl mx-auto">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 italic">
                "We do not add tools to seem impressive. We remove tools whenever possible.
                Complexity is a liability we charge your users for every request."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
