import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  const teamMember = {
    name: "Devang Sharma",
    title: "Founder & Principal Engineer",
    bio: "Civil Engineer turned 100xDev, with 3 years of product engineering at SBL Labs. Obsessed with building elegant, scalable software.",
    github: "https://github.com/devang", // Placeholder
    linkedin: "https://linkedin.com/in/devang", // Placeholder
    avatar: "/devang-avatar.jpg", // Placeholder image
  };

  const values = [
    {
      title: "Craft first",
      description: "We care how the code reads, not just whether it runs.",
    },
    {
      title: "Owned outcomes",
      description: "We don't hand off problems. We solve them.",
    },
    {
      title: "Radical clarity",
      description: "In code, in communication, in pricing.",
    },
    {
      title: "Long-term thinking",
      description:
        "We build for the system you'll have in 3 years, not just the sprint you're in.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="section-padding bg-white dark:bg-zinc-950">
          <div className="container-max text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Built by an engineer who got tired of watching good ideas die on bad codebases.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              Our story is one of passion for engineering and a commitment to quality.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white dark:bg-zinc-950">
          <div className="container-max max-w-4xl mx-auto text-lg text-zinc-700 dark:text-zinc-300 space-y-8">
            <p>
              Vrishtek was founded by Devang Sharma, a Civil Engineer who transitioned into software development after realizing the profound impact well-engineered systems can have. His journey from self-taught developer to contributing to high-impact projects at 100xDevs and leading product engineering at SBL Labs for three years forged a deep understanding of what it takes to build software that truly lasts.
            </p>
            <p>
              Vrishtek is not just another agency or a collection of freelancers. It's a focused studio with a strong point of view on how software should be built: with intent, precision, and an unwavering commitment to quality. We believe in crafting solutions that are not only functional but also elegant, scalable, and maintainable.
            </p>
            <p>
              Our vision for Vrishtek is to partner with international clients who share our dedication to excellence, building a small, elite team capable of delivering products that outlast the initial engagement. We aim to create digital experiences that speak for themselves, reflecting our core values in every line of code and every interaction.
            </p>

            {/* Values Section */}
            <div className="pt-16">
              <h2 className="text-4xl font-bold mb-8 text-center text-yellow-600">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {values.map((value, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="pt-16">
              <h2 className="text-4xl font-bold mb-8 text-center text-yellow-600">The Team</h2>
              <div className="flex flex-col items-center text-center">
                <img
                  src={teamMember.avatar}
                  alt={teamMember.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-yellow-600"
                />
                <h3 className="text-3xl font-bold">{teamMember.name}</h3>
                <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-4">{teamMember.title}</p>
                <p className="text-md text-zinc-600 dark:text-zinc-400 max-w-md mb-6">
                  {teamMember.bio}
                </p>
                <div className="flex gap-4">
                  <a
                    href={teamMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={teamMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                <p className="mt-12 text-sm text-zinc-500 italic max-w-xl">
                  Vrishtek is currently a focused solo studio with a vetted network of collaborators for large engagements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
