import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  const openRoles = [
    {
      title: "Senior Full-Stack Engineer",
      description:
        "Join us to build production systems at scale. You'll own features end-to-end, from database schema to UI. Experience with Next.js, TypeScript, and PostgreSQL required.",
      type: "Full-time",
      location: "Indore, India / Remote",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:py-48 bg-gradient-to-b from-zinc-900 to-zinc-950 dark:from-black dark:to-zinc-950 text-white">
        <div className="container-max max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Vrishtek
          </h1>
          <p className="text-lg text-zinc-300">
            We're building a small, elite team of engineers who believe in craft, systems thinking, and shipping quality software.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "We Hire for Taste",
                description:
                  "Not just skills. We want engineers who care about how code reads, how systems scale, and how products feel.",
              },
              {
                title: "We Ship Things",
                description:
                  "No endless meetings. We build, we test, we deploy. You'll see your work in production within days, not months.",
              },
              {
                title: "We Grow Together",
                description:
                  "Working on hard problems with smart people. You'll level up alongside a team that knows PostgreSQL, TypeScript, and systems design.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-zinc-900 dark:bg-black text-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-bold mb-12">Open Roles</h2>

          {openRoles.length > 0 ? (
            <div className="space-y-6">
              {openRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="border border-zinc-700 rounded-xl p-8 hover:border-yellow-600/50 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-yellow-600/20 text-yellow-300">
                          {role.type}
                        </span>
                        <span className="text-sm text-zinc-400">{role.location}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-yellow-600 transition-colors" />
                  </div>
                  <p className="text-zinc-300 mb-6">{role.description}</p>
                  <Link href="/contact" className="text-yellow-500 hover:text-yellow-400 font-semibold text-sm">
                    Apply now →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-zinc-800/50 rounded-xl p-12 text-center border border-zinc-700">
              <p className="text-lg text-zinc-300 mb-4">
                We don't have open roles right now, but we're always looking for exceptional engineers.
              </p>
              <p className="text-zinc-400 mb-6">
                Interested in working with us? Send us your GitHub profile and let's talk.
              </p>
              <Link href="/contact" className="btn-primary inline-flex gap-2">
                Get in touch →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Think you'd be a good fit?</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Tell us about yourself. Links to GitHub and past work are golden.
          </p>
          <Link href="/contact" className="btn-primary inline-flex gap-2">
            Apply to Vrishtek →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
