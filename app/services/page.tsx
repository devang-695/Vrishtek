import Link from "next/link";
import {
  Layers,
  Zap,
  Network,
  Smartphone,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  const services = [
    {
      id: "full-stack-product-development",
      title: "Full-Stack Product Development",
      description:
        "From greenfield to production. React/Next.js frontend, Node.js/Express backend, PostgreSQL + Prisma ORM, deployed on AWS ECS or Vercel.",
      bestFor:
        "Startups building their first product / Series A companies rebuilding their MVP properly.",
      icon: <Layers className="w-12 h-12 text-yellow-600" />,
    },
    {
      id: "saas-architecture-development",
      title: "SaaS Architecture & Development",
      description:
        "Multi-tenancy, subscription billing (Stripe), role-based access control, audit logs, and usage analytics — the infrastructure every SaaS needs but nobody wants to build from scratch.",
      bestFor:
        "Founders who have validated a B2B idea and need it built right.",
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
    },
    {
      id: "api-design-backend-systems",
      title: "API Design & Backend Systems",
      description:
        "REST and GraphQL APIs, event-driven systems with BullMQ + Redis, real-time features via WebSockets, and PostgreSQL schemas that don't become technical debt.",
      bestFor:
        "Teams with a frontend but no reliable backend foundation.",
      icon: <Network className="w-12 h-12 text-yellow-600" />,
    },
    {
      id: "react-native-mobile",
      title: "React Native Mobile",
      description:
        "Cross-platform iOS + Android from a single TypeScript codebase. Expo-managed workflow for speed, bare workflow when you need native modules.",
      bestFor:
        "Web products expanding to mobile without a separate native team.",
      icon: <Smartphone className="w-12 h-12 text-yellow-600" />,
    },
    {
      id: "technical-consulting-architecture-review",
      title: "Technical Consulting & Architecture Review",
      description:
        "2-week engagement. We review your current system, identify the 3 biggest risks, and give you a written remediation plan with prioritized actions.",
      bestFor:
        "CTOs who inherited a codebase and need an outside read.",
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="section-padding bg-white dark:bg-zinc-950">
          <div className="container-max text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              We specialize in building robust, scalable, and delightful digital products. Here's how we can help.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white dark:bg-zinc-950">
          <div className="container-max grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-start p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800`}
              >
                <div className="flex-shrink-0">{service.icon}</div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                    {service.description}
                  </p>
                  <p className="text-md text-zinc-500 dark:text-zinc-300 mb-8">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-200">Best for:</span> {service.bestFor}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Discuss this project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
