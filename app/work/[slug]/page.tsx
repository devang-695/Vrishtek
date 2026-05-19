import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const caseStudies = [
  {
    id: "stackpulse",
    name: "StackPulse",
    clientType: "B2B SaaS startup",
    overview:
      "StackPulse is a real-time performance monitoring platform for Next.js applications, offering deep insights into application health and user experience.",
    problem:
      "The client, a rapidly growing SaaS startup, needed to provide their users with granular, real-time performance data without introducing significant overhead. Existing solutions were either too generic, too expensive, or lacked specific integration for Next.js and Vercel's ecosystem.",
    approach:
      "We adopted an event-driven architecture, leveraging WebSockets for real-time data streaming and a highly optimized PostgreSQL database for storing time-series metrics. A custom Next.js agent was developed to capture performance events efficiently.",
    technicalDecisions: [
      {
        heading: "PostgreSQL over MongoDB",
        description:
          "For structured time-series data and complex aggregations, PostgreSQL's robust ACID compliance and advanced indexing capabilities (e.g., BRIN, custom functions for JSONB) offered superior performance and data integrity compared to schema-less NoSQL alternatives like MongoDB. This decision was crucial for reliable metric storage and querying.",
      },
      {
        heading: "WebSockets for Real-time",
        description:
          "Given the requirement for immediate feedback on application performance, WebSockets (implemented with `ws` library on Node.js) were chosen over traditional polling. This drastically reduced latency and server load, providing a snappier user experience.",
      },
      {
        heading: "Next.js for Agent and Frontend",
        description:
          "Utilizing Next.js for both the performance agent (as an API route) and the dashboard frontend allowed for a consistent developer experience, easy server-side rendering for initial loads, and efficient static asset serving. The App Router's server components were leveraged for data-intensive views.",
      },
      {
        heading: "Prisma ORM",
        description:
          "Prisma provided a type-safe, declarative schema definition and an intuitive query builder for PostgreSQL. Its migration system streamlined database changes, and the automatic type generation ensured data consistency across the stack.",
      },
    ],
    results: [
      "Achieved sub-second latency for real-time metric visualization.",
      "Successfully processed over 10,000 concurrent data streams.",
      "Reduced development time by 25% due to type-safe environment.",
      "Received overwhelmingly positive feedback from beta users on data accuracy and interface responsiveness.",
    ],
    reflection:
      "This project reinforced our belief in combining established, reliable infrastructure with modern development practices. The emphasis on type safety and robust database design from day one proved invaluable in managing complexity and ensuring long-term maintainability.",
    relatedWork: ["wealthflow", "vrishtek-labs-dashboard"], // IDs of related projects
    stack: ["React", "Next.js", "PostgreSQL", "WebSockets", "TypeScript", "Prisma", "Tailwind CSS"],
    colorFrom: "from-blue-500",
    colorTo: "to-purple-600",
    // Adding placeholder icon - in a real app, this would be an actual icon component
    icon: <div className="w-6 h-6">📊</div>,
  },
  {
    id: "wealthflow",
    name: "WealthFlow",
    clientType: "FinTech scaleup",
    overview:
      "WealthFlow is a comprehensive, cross-platform mobile application designed to empower retail investors with real-time portfolio management, financial insights, and secure transaction capabilities.",
    problem:
      "The client identified a gap in the market for an intuitive yet powerful mobile investment platform that could cater to both novice and experienced investors. Key challenges included integrating diverse financial APIs, ensuring enterprise-grade security, and delivering a seamless cross-platform user experience.",
    approach:
      "We architected a robust backend with FastAPI to handle high-throughput API requests and complex financial calculations, coupled with React Native for a fluid and consistent mobile frontend across iOS and Android. Security protocols and compliance were paramount throughout development.",
    technicalDecisions: [
      {
        heading: "React Native for Cross-Platform",
        description:
          "To achieve a native look and feel on both iOS and Android with a single codebase, React Native (with Expo bare workflow for custom native modules) was chosen. This accelerated development cycles and ensured feature parity across platforms.",
      },
      {
        heading: "FastAPI for Backend",
        description:
          "FastAPI, a modern Python web framework, was selected for its high performance, asynchronous capabilities, and automatic data validation/serialization. This proved ideal for handling the numerous external API integrations and complex business logic required for a FinTech application.",
      },
      {
        heading: "Stripe for Payments",
        description:
          "For secure and compliant payment processing, Stripe's comprehensive API was integrated for subscription management and handling various financial transactions, abstracting away much of the PCI DSS complexity.",
      },
      {
        heading: "PostgreSQL with Citus for Sharding",
        description:
          "Anticipating massive user growth, PostgreSQL was chosen not just for its reliability, but specifically with Citus Data extension for horizontal sharding. This allowed us to design for scalable data distribution from the outset, mitigating future database bottlenecks.",
      },
    ],
    results: [
      "Launched on both App Store and Google Play within the projected timeline.",
      "Achieved a 4.8-star rating across both app stores in the first month.",
      "Seamlessly integrated with 5+ external financial data providers.",
      "Passed rigorous third-party security audits without major findings.",
    ],
    reflection:
      "The WealthFlow project highlighted the importance of a 'security-first' mindset in FinTech. Proactive threat modeling and strict adherence to best practices, combined with a performant tech stack, led to a highly successful and trustworthy product.",
    relatedWork: ["stackpulse", "vrishtek-labs-jobs"], // IDs of related projects
    stack: ["React Native", "FastAPI", "PostgreSQL", "Stripe", "Python", "TypeScript"],
    colorFrom: "from-green-500",
    colorTo: "to-teal-600",
    // Adding placeholder icon - in a real app, this would be an actual icon component
    icon: <div className="w-6 h-6">💰</div>,
  },
  // Add more case studies here as needed for other projects
];

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = caseStudies.find((cs) => cs.id === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <article className="section-padding bg-white dark:bg-zinc-950">
          <div className="container-max max-w-4xl mx-auto">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all work
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">{caseStudy.name}</h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8">
              {caseStudy.clientType}
            </p>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                {caseStudy.overview}
              </p>
            </section>

            {/* Problem */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                {caseStudy.problem}
              </p>
            </section>

            {/* Our Approach */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                {caseStudy.approach}
              </p>
            </section>

            {/* Technical Decisions */}
            {caseStudy.technicalDecisions && caseStudy.technicalDecisions.length > 0 && (
                <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Technical Decisions</h2>
                <div className="space-y-8">
                    {caseStudy.technicalDecisions.map((decision, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold mb-2">{decision.heading}</h3>
                        <p className="text-lg text-zinc-700 dark:text-zinc-300">
                        {decision.description}
                        </p>
                    </div>
                    ))}
                </div>
                </section>
            )}

            {/* Results */}
            {caseStudy.results && caseStudy.results.length > 0 && (
                <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Results</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300">
                    {caseStudy.results.map((result, index) => (
                    <li key={index}>{result}</li>
                    ))}
                </ul>
                </section>
            )}

            {/* Reflection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Reflection</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                {caseStudy.reflection}
              </p>
            </section>

            {/* Stack Used */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Related Work (Placeholder) */}
            {caseStudy.relatedWork && caseStudy.relatedWork.length > 0 && (
                <section>
                    <h2 className="text-3xl font-bold mb-4">Related Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudy.relatedWork.map((relatedId) => {
                            const relatedProject = caseStudies.find(cs => cs.id === relatedId);
                            if (!relatedProject) return null;
                            return (
                                <Link href={`/work/${relatedProject.id}`} key={relatedProject.id} className="group rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-2">
                                    <div className={`h-32 bg-gradient-to-br ${relatedProject.colorFrom} ${relatedProject.colorTo} flex items-center justify-center`}>
                                        {relatedProject.icon}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">{relatedProject.name}</h3>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {relatedProject.overview.substring(0, 100)}...
                                        </p>
                                        <div className="flex justify-end mt-4">
                                            <ArrowRight className="w-4 h-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
