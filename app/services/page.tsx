import Link from "next/link";
import { ArrowRight, Database, Zap, Shield, Layers } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const services = [
  {
    title: "Full-Stack Product Development",
    description:
      "From greenfield to production. React/Next.js frontend, Node.js/Express backend, PostgreSQL + Prisma ORM, deployed on AWS ECS or Vercel.",
    icon: Layers,
    bestFor: "Startups building their first product / Series A companies rebuilding their MVP properly",
    features: [
      "Complete product ownership",
      "Scalable architecture from day one",
      "Full test coverage",
      "CI/CD pipelines included",
      "Production monitoring & alerting",
    ],
  },
  {
    title: "SaaS Architecture & Development",
    description:
      "Multi-tenancy, subscription billing (Stripe), role-based access control, audit logs, and usage analytics — the infrastructure every SaaS needs but nobody wants to build from scratch.",
    icon: Zap,
    bestFor: "Founders who have validated a B2B idea and need it built right",
    features: [
      "Multi-tenant isolation",
      "Subscription billing integration",
      "RBAC implementation",
      "Audit logging",
      "Usage analytics",
      "API rate limiting",
    ],
  },
  {
    title: "API Design & Backend Systems",
    description:
      "REST and GraphQL APIs, event-driven systems with BullMQ + Redis, real-time features via WebSockets, and PostgreSQL schemas that don't become technical debt.",
    icon: Database,
    bestFor: "Teams with a frontend but no reliable backend foundation",
    features: [
      "RESTful & GraphQL APIs",
      "Event-driven architecture",
      "Job queue systems",
      "Real-time WebSocket features",
      "Database optimization",
      "Caching strategies",
    ],
  },
  {
    title: "React Native Mobile",
    description:
      "Cross-platform iOS + Android from a single TypeScript codebase. Expo-managed workflow for speed, bare workflow when you need native modules.",
    icon: Shield,
    bestFor: "Web products expanding to mobile without a separate native team",
    features: [
      "Single codebase for iOS + Android",
      "Expo managed & bare workflow",
      "Native module integration",
      "Push notifications",
      "Offline-first architecture",
      "App Store deployment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:py-48 bg-gradient-to-b from-zinc-900 to-zinc-950 dark:from-black dark:to-zinc-950 text-white">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What Vrishtek Builds</h1>
          <p className="text-lg text-zinc-300 max-w-2xl">
            We specialize in full-stack product development. Every engagement is tailored to your stage, but here's what we do best.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container-max space-y-20">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Main content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    </div>

                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="font-semibold mb-3 text-sm uppercase text-zinc-600 dark:text-zinc-500">
                        What's Included
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-8 border border-zinc-200 dark:border-zinc-800 h-fit">
                    <h3 className="font-semibold text-sm uppercase text-zinc-600 dark:text-zinc-500 mb-3">
                      Best For
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                      {service.bestFor}
                    </p>

                    <Link
                      href="/contact"
                      className="btn-primary w-full justify-center text-sm"
                    >
                      Discuss this project →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-zinc-900 dark:bg-black text-white border-t border-zinc-800">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Regardless of which service you choose, every engagement follows the same proven process: structured discovery, technical planning, weekly iterations, and professional handoff. No surprises. No surprises. No late deliveries. Just shipping.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-semibold">
            See how we work →
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build?</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Let's have a conversation about your product and where we fit.
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
