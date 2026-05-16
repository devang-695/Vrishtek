import Link from "next/link";
import { ArrowRight, Code2, Zap, Network, Layers, Users, Briefcase } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection, FeatureCardsSection, TextSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        headline="Engineered with intent."
        subheadline="Vrishtek builds full-stack digital products for startups and scale-ups who refuse to ship mediocrity."
        primaryCta="See our work →"
        primaryCtaHref="/work"
        secondaryCta="Start a project"
        secondaryCtaHref="/contact"
      />

      {/* What Vrishtek Does */}
      <FeatureCardsSection
        headline="What Vrishtek Does"
        subheadline="We don't do 50 things. We do product engineering exceptionally."
        features={[
          {
            title: "Product Engineering",
            description:
              "We take your idea from napkin to production. Full-stack, tested, documented, deployed.",
            icon: <Layers className="w-6 h-6" />,
          },
          {
            title: "SaaS Development",
            description:
              "Subscription billing, multi-tenancy, real-time features — we've built the patterns so you don't pay to learn them.",
            icon: <Zap className="w-6 h-6" />,
          },
          {
            title: "API & Systems Design",
            description:
              "Clean APIs, event-driven architectures, and database schemas that don't need to be redesigned in 6 months.",
            icon: <Network className="w-6 h-6" />,
          },
        ]}
      />

      {/* Selected Work Preview */}
      <section className="section-padding bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container-max">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
            <Link
              href="/work"
              className="text-yellow-600 hover:text-yellow-700 dark:hover:text-yellow-500 font-semibold flex items-center gap-2"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-white opacity-20" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    DevTools
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    SaaS
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">StackPulse</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Real-time performance monitoring platform for Next.js applications. Built from greenfield, shipped in 8 weeks.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    React · Next.js · PostgreSQL · WebSockets
                  </span>
                  <ArrowRight className="w-4 h-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <Briefcase className="w-16 h-16 text-white opacity-20" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                    FinTech
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
                    Mobile
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">WealthFlow</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Cross-platform investment management app for retail investors. React Native + FastAPI backend.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    React Native · Node.js · PostgreSQL · Stripe
                  </span>
                  <ArrowRight className="w-4 h-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Philosophy */}
      <TextSection
        headline="We choose boring infrastructure and exciting products."
        content="We use proven, production-grade tools — not the framework of the month. PostgreSQL over hype databases. REST before GraphQL unless GraphQL is right. Prisma for schema sanity. TypeScript everywhere. Docker from day one. We move fast because we build on solid ground."
        cta="Explore our stack →"
        ctaHref="/stack"
      />

      {/* How We Work */}
      <section className="section-padding bg-white dark:bg-zinc-950">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">How We Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "One structured call. We understand your problem, not just your feature list. We ask hard questions.",
              },
              {
                step: "02",
                title: "Architect",
                description:
                  "We propose a technical plan before writing a line of code. You see the system before we build it.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Weekly demos. GitHub access from day one. No black boxes. You always know where we are.",
              },
              {
                step: "04",
                title: "Ship & Support",
                description:
                  "We deploy. We monitor. We fix what breaks. Handoff includes docs, not just a zip file.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-yellow-600 text-white font-bold flex items-center justify-center font-display">
                  {item.step}
                </div>
                <div className="pt-12 pl-6 pb-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-zinc-900 dark:bg-black text-white">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What People Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Vrishtek didn't just build our MVP — they built it right. The code is clean, the architecture makes sense, and they documented everything. This is how software should be handed over.",
                author: "Arjun Patel",
                title: "Founder & CEO",
                company: "StackPulse",
                country: "🇮🇳",
              },
              {
                quote:
                  "We've worked with many agencies. Vrishtek is different. They think about the system, not just the sprint. They asked questions we weren't even thinking about.",
                author: "Sarah Chen",
                title: "Head of Product",
                company: "TechFlow",
                country: "🇸🇬",
              },
              {
                quote:
                  "The quality of engineering here is exceptional. PostgreSQL, TypeScript, proper testing — this is what credible tech companies look like. Highly recommended.",
                author: "James Murphy",
                title: "CTO",
                company: "FinScale",
                country: "🇬🇧",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-yellow-600/50 transition-colors"
              >
                <p className="text-sm mb-6 italic text-zinc-300">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-zinc-400">
                      {testimonial.title} · {testimonial.company}
                    </p>
                  </div>
                  <span className="text-lg">{testimonial.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have something to build?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            We take on 2–3 new projects per quarter. Tell us what you're solving.
          </p>
          <Link href="/contact" className="btn-primary inline-flex gap-2">
            Start the conversation →
          </Link>
          <p className="mt-8 text-sm text-zinc-500">
            Or email us directly:{" "}
            <a href="mailto:hello@vrishtek.com" className="text-yellow-600 hover:text-yellow-700">
              hello@vrishtek.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
