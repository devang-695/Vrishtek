import Link from "next/link";
import { ArrowRight, Code2, Briefcase, HeartHandshake, Zap, Scale } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function WorkPage() {
  const projects = [
    {
      id: "stackpulse",
      name: "StackPulse",
      clientType: "B2B SaaS startup",
      challenge:
        "A SaaS startup needed a real-time performance monitoring platform for Next.js applications, built from the ground up with high scalability and developer experience in mind.",
      solution:
        "We designed and implemented a full-stack monitoring solution using Next.js, PostgreSQL, and WebSockets for real-time data streaming. Custom agents were developed for seamless integration with client applications.",
      outcome: [
        "Reduced load time by 60% for monitored applications.",
        "Scaled to 10K active users within 3 months post-launch.",
        "Achieved 99.9% uptime for the monitoring infrastructure.",
      ],
      stack: ["React", "Next.js", "PostgreSQL", "WebSockets", "TypeScript"],
      image: "/project-stackpulse.png", // Placeholder image
      icon: <Code2 className="w-16 h-16 text-white opacity-20" />,
      colorFrom: "from-blue-500",
      colorTo: "to-purple-600",
    },
    {
      id: "wealthflow",
      name: "WealthFlow",
      clientType: "FinTech scaleup",
      challenge:
        "A FinTech company required a secure, cross-platform mobile application for investment management, integrating with multiple financial APIs and ensuring robust data privacy.",
      solution:
        "We developed a React Native mobile application paired with a FastAPI backend. Implemented secure authentication, real-time portfolio updates, and integrated with Stripe for subscription management.",
      outcome: [
        "Increased user engagement by 30% with intuitive mobile interface.",
        "Secured compliance with financial data regulations.",
        "Reduced customer support tickets by 20% through self-service features.",
      ],
      stack: ["React Native", "FastAPI", "PostgreSQL", "Stripe", "Python"],
      image: "/project-wealthflow.png", // Placeholder image
      icon: <Briefcase className="w-16 h-16 text-white opacity-20" />,
      colorFrom: "from-green-500",
      colorTo: "to-teal-600",
    },
    {
        id: "vrishtek-labs-jobs",
        name: "Vrishtek Labs: Job Board",
        clientType: "Vrishtek Labs",
        challenge: "As an internal project, we wanted to build a high-performance job board platform to showcase our capabilities in building scalable applications with modern web technologies.",
        solution: "Developed a full-stack job board using Next.js for the frontend, Node.js/Express for the backend API, and PostgreSQL with Prisma for data management. Implemented advanced search, filtering, and job application workflows.",
        outcome: [
            "Demonstrated expertise in building complex data-driven applications.",
            "Achieved sub-second load times for job listings.",
            "Provided a robust and extensible platform for future features.",
        ],
        stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
        image: "/project-job-board.png", // Placeholder image
        icon: <HeartHandshake className="w-16 h-16 text-white opacity-20" />,
        colorFrom: "from-orange-500",
        colorTo: "to-red-600",
    },
    {
        id: "vrishtek-labs-dashboard",
        name: "Vrishtek Labs: Analytics Dashboard",
        clientType: "Vrishtek Labs",
        challenge: "To visualize complex data sets from various sources in an intuitive and performant manner, building an internal analytics dashboard that can be adapted for client use cases.",
        solution: "Engineered a React-based interactive dashboard with real-time data updates using WebSockets and Redis caching. Focused on modular components and a flexible chart library.",
        outcome: [
            "Enabled rapid data insight generation for internal projects.",
            "Reduced data retrieval times by 70% with optimized caching strategies.",
            "Provided a reusable template for client-facing analytics features.",
        ],
        stack: ["React", "TypeScript", "WebSockets", "Redis", "Framer Motion", "D3.js"],
        image: "/project-dashboard.png", // Placeholder image
        icon: <Scale className="w-16 h-16 text-white opacity-20" />,
        colorFrom: "from-teal-500",
        colorTo: "to-blue-600",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="section-padding bg-white dark:bg-zinc-950">
          <div className="container-max text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              Selected projects that showcase our approach to product engineering. From startups to scale-ups, we build systems that last.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white dark:bg-zinc-950">
          <div className="container-max">
            <div className="grid grid-cols-1 gap-16">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 lg:gap-16 items-center`}
                >
                  <div className="md:w-1/2">
                    {/* Placeholder for project image/preview */}
                    <div className={`aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br ${project.colorFrom} ${project.colorTo} flex items-center justify-center`}>
                        {project.icon}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {project.clientType}
                    </p>
                    <h3 className="text-lg font-semibold mt-6 mb-2">The Challenge</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.challenge}</p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Our Solution</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.solution}</p>

                    {project.outcome.length > 0 && (
                        <>
                            <h3 className="text-lg font-semibold mt-6 mb-2">Key Outcomes</h3>
                            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-4 space-y-1">
                                {project.outcome.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.id}`}
                      className="btn-primary mt-8 inline-flex items-center gap-2"
                    >
                      Read full case study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
