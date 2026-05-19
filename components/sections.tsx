"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const words = headline.split(" ");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 dark:bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-950/50 to-black dark:from-black dark:via-black dark:to-black" />
      </div>

      <div className="container-max relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, idx) => (
            <motion.span key={idx} variants={wordVariants} className="inline-block mr-3">
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
        </motion.div>

        <motion.div
          className="mt-20 pt-12 border-t border-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-zinc-500">
            Trusted by product teams in 🇮🇳 🇺🇸 🇬🇧 🇦🇪 🇸🇬
          </p>
        </motion.div>
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">{headline}</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
            {subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
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
        <motion.h2
          className="text-4xl md:text-5xl mb-8 font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {headline}
        </motion.h2>
        <motion.p
          className="text-lg text-zinc-300 leading-relaxed mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {content}
        </motion.p>
        {cta && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link href={ctaHref} className="btn-primary inline-flex gap-2">
              {cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
