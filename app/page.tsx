import Link from "next/link";
import { ArrowRight, Code2, Zap, Network } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection, FeatureCardsSection, TextSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection
        headline="Engineered with intent."
        subheadline="We build full-stack products for founders who won't ship mediocrity. Full ownership, real results, shipped to production."
        primaryCta="See our work"
        primaryCtaHref="/work"
        secondaryCta="Start a project"
        secondaryCtaHref="/contact"
      />

      <FeatureCardsSection
        headline="What We Build"
        subheadline="We don't do everything. We do product engineering at the highest level."
        features={[
          {
            title: "Product Engineering",
            description:
              "From concept to production. Full-stack, tested, documented, deployed. We think in systems, not components.",
            icon: <Code2 className="w-6 h-6" />,
          },
          {
            title: "SaaS Infrastructure",
            description:
              "Multi-tenant auth, billing, real-time features, and observability. We've built these patterns so you don't repeat our mistakes.",
            icon: <Zap className="w-6 h-6" />,
          },
          {
            title: "Systems Design",
            description:
              "APIs that don't need redesigning. Event-driven architectures. Database schemas built to scale. Solid engineering fundamentals.",
            icon: <Network className="w-6 h-6" />,
          },
        ]}
      />

      <section className="section-padding bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container-max">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Recent Projects</h2>
            <Link
              href="/work"
              className="text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 font-semibold flex items-center gap-2 transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-xl">
              <div className="h-48 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">StackPulse</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                    DevTools
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                    SaaS
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">StackPulse</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Performance monitoring platform built from greenfield. Real-time dashboards, alert management, and team collaboration features.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                    React · Next.js · PostgreSQL · WebSockets
                  </span>
                  <ArrowRight className="w-4 h-4 text-amber-600 dark:text-amber-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-xl">
              <div className="h-48 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">WealthFlow</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                    FinTech
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                    Mobile
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">WealthFlow</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Cross-platform investment platform for retail investors. React Native frontend, Node.js backend, secure payment processing.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                    React Native · Node.js · PostgreSQL · Stripe
                  </span>
                  <ArrowRight className="w-4 h-4 text-amber-600 dark:text-amber-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TextSection
        headline="We build with proven foundations."
        content="PostgreSQL over hype databases. REST before GraphQL. TypeScript everywhere. Docker from day one. We move fast because we build on solid ground. The tech stack serves the product, never the other way around."
        cta="Explore our full stack"
        ctaHref="/stack"
      />

      <section className="bg-black dark:bg-black pb-16 md:pb-24 border-b border-zinc-800">
        <div className="container-max max-w-3xl">
          <p className="text-sm text-zinc-500 text-center flex flex-wrap justify-center gap-x-6 gap-y-3">
            <span className="font-semibold text-zinc-300">React</span>
            <span className="text-zinc-700">·</span>
            <span className="font-semibold text-zinc-300">Next.js</span>
            <span className="text-zinc-700">·</span>
            <span className="font-semibold text-zinc-300">Node.js</span>
            <span className="text-zinc-700">·</span>
            <span className="font-semibold text-zinc-300">PostgreSQL</span>
            <span className="text-zinc-700">·</span>
            <span className="font-semibold text-zinc-300">TypeScript</span>
            <span className="text-zinc-700">·</span>
            <span className="font-semibold text-zinc-300">Redis</span>
            <span className="text-zinc-700">·</span>
            <span className="font-semibold text-zinc-300">Docker</span>
            <span className="text-zinc-700">·</span>
            <span className="font-semibold text-zinc-300">AWS</span>
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-zinc-950">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your problem deeply. Not just features—the business constraints, technical constraints, and what truly matters.",
              },
              {
                step: "02",
                title: "Architecture",
                description:
                  "Detailed technical plan. You review it before we write code. No surprises, no black boxes, complete alignment.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Weekly demos. GitHub access always. You watch the system come together. We iterate based on real feedback.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "We deploy. We monitor. We fix what breaks. Handoff includes documentation, runbooks, and ongoing support.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center font-display text-lg">
                  {item.step}
                </div>
                <div className="pt-12 pl-6 pb-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-zinc-900 dark:bg-black text-white">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What our partners say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "They didn't just build our MVP. They built it right. The code is clean, the architecture is sound. This is how handoff should work.",
                author: "Arjun Patel",
                title: "Founder & CEO",
                company: "StackPulse",
              },
              {
                quote:
                  "Different approach entirely. They ask hard questions about the system, not just the sprint. Forced us to think bigger.",
                author: "Sarah Chen",
                title: "Head of Product",
                company: "TechFlow",
              },
              {
                quote:
                  "Exceptional engineering quality. PostgreSQL, TypeScript, proper testing. This is what a credible tech partner looks like.",
                author: "James Murphy",
                title: "CTO",
                company: "FinScale",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-zinc-800/40 border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <p className="text-sm mb-6 leading-relaxed text-zinc-300">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.title} · {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build something real?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 font-light leading-relaxed">
            We take 2–3 projects per quarter. The best work happens when we focus completely on what matters.
          </p>
          <Link href="/contact" className="btn-primary inline-flex gap-2">
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-500">
            Or reach out directly:{" "}
            <a href="mailto:hello@vrishtek.com" className="text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 font-medium transition-colors">
              hello@vrishtek.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
