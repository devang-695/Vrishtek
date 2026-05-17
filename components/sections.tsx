import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection({
  headline,
  subheadline,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
}: {
  headline: string;
  subheadline: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 dark:bg-black overflow-hidden pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-950/50 to-black dark:from-black dark:via-black dark:to-black" />
      </div>

      <div className="container-max relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCtaHref}
            className="btn-primary group inline-flex items-center gap-2"
          >
            {primaryCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryCta && secondaryCtaHref && (
            <Link href={secondaryCtaHref} className="btn-secondary">
              {secondaryCta}
            </Link>
          )}
        </div>

        <div className="mt-20 pt-12 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">
            Trusted by product teams in 🇮🇳 🇺🇸 🇬🇧 🇦🇪 🇸🇬
          </p>
        </div>
      </div>
    </section>
  );
}

export function FeatureCardsSection({
  headline,
  subheadline,
  features,
}: {
  headline: string;
  subheadline: string;
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}) {
  return (
    <section className="section-padding bg-white dark:bg-zinc-950">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">{headline}</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TextSection({
  headline,
  content,
  cta,
  ctaHref,
}: {
  headline: string;
  content: string;
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section-padding bg-zinc-900 dark:bg-black text-white">
      <div className="container-max max-w-3xl">
        <h2 className="text-4xl md:text-5xl mb-8 font-bold leading-tight">{headline}</h2>
        <p className="text-lg text-zinc-300 leading-relaxed mb-8 font-light">{content}</p>
        {cta && ctaHref && (
          <Link href={ctaHref} className="btn-primary inline-flex gap-2">
            {cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
