import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:py-48 bg-gradient-to-b from-zinc-900 to-zinc-950 dark:from-black dark:to-zinc-950 text-white">
        <div className="container-max max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Built by an engineer who got tired of watching good ideas die on bad codebases.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container-max max-w-3xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Beginning</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Devang started as a civil engineer. Then he taught himself to code, went through 100xDevs, and spent three years building products at SBL Labs—a startup that scaled from 0 to 10K users. He learned early that ideas are worthless without execution, and execution is worthless without a solid technical foundation.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              He watched too many startups fail not because the idea was bad, but because the code was a liability. Bad architecture meant slow deployments. Poor testing meant bugs shipped to production. Lack of documentation meant new hires were lost for weeks. He realized: most agencies don't solve these problems—they create them.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What Vrishtek Is</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Vrishtek is not an agency. Not freelancing. Not a staff augmentation firm. It's a focused product engineering studio with a point of view on how software should be built.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We take on 2–3 projects per quarter. We own the outcome. We build systems that scale. We write code that reads like documentation. We ship things that work. And we hand off projects that outlast the engagement.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What We're Building Toward</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              A small, elite team. International clients. Products that are hard to build, not hard to sell. Systems that scale from 0 to 1M users. Codebases that get better, not worse, with time.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We're not trying to be everything to everyone. We're trying to be indispensable to the founders and CTOs who know the difference between good engineering and good marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-zinc-900 dark:bg-black text-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Craft First",
                description:
                  "We care how the code reads, not just whether it runs. We write code for the humans who maintain it, not just the machines that execute it.",
              },
              {
                title: "Owned Outcomes",
                description:
                  "We don't hand off problems. We solve them. We're not vendors—we're partners invested in your success.",
              },
              {
                title: "Radical Clarity",
                description:
                  "In code, in communication, in pricing. No jargon. No hidden costs. No surprises.",
              },
              {
                title: "Long-Term Thinking",
                description:
                  "We build for the system you'll have in 3 years, not just the sprint you're in. Technical debt is a burden we refuse to leave you with.",
              },
            ].map((value, idx) => (
              <div key={idx} className="border border-zinc-800 rounded-xl p-8 hover:border-yellow-600/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white dark:bg-zinc-950">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-16 text-center">The Team</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-32 h-32 rounded-lg mx-auto mb-8 flex items-center justify-center text-white text-4xl font-display font-bold">
              D
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Devang Rathod</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Founder & Principal Engineer
              </p>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                Built products at SBL Labs. Learned TypeScript, React, Node.js, PostgreSQL the hard way—by shipping, breaking, and fixing in production. Believes that good engineering is invisible. Bad engineering is all anyone remembers.
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-500 italic">
                Vrishtek is currently a focused solo studio with a vetted network of collaborators for large engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-zinc-900 dark:bg-black text-white border-t border-zinc-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let's build something great</h2>
          <p className="text-lg text-zinc-300 mb-8">
            If this resonates with you, let's talk about what you're building.
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
