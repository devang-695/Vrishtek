"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    budget: "Not sure yet",
    timeline: "Flexible",
    source: "Direct",
    sourceDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          description: "",
          budget: "Not sure yet",
          timeline: "Flexible",
          source: "Direct",
          sourceDetails: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white dark:bg-zinc-950">
          <div className="container-max text-center max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Got it, {formData.name}.
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              You'll hear from Devang within 24 hours with initial thoughts - not a sales pitch.
            </p>

            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 border border-zinc-200 dark:border-zinc-800 mb-12">
              <h2 className="font-semibold mb-4">In the meantime, check out:</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                A recent case study that might be relevant to what you're building.
              </p>
              <Link href="/work" className="btn-primary inline-flex gap-2">
                View case studies →
              </Link>
            </div>

            <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              ← Back to home
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:py-48 bg-gradient-to-b from-zinc-900 to-zinc-950 dark:from-black dark:to-zinc-950 text-white">
        <div className="container-max max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's scope your project.</h1>
          <p className="text-lg text-zinc-300">
            Fill this out and we'll respond within 24 hours with initial thoughts - not a sales pitch.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-950">
        <div className="container-max max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2">
                Company / Project name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold mb-2">
                What are you building? *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                  Estimated budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  <option>Not sure yet</option>
                  <option>Under $5K</option>
                  <option>$5K–$15K</option>
                  <option>$15K–$50K</option>
                  <option>$50K+</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  <option>Flexible</option>
                  <option>ASAP</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                </select>
              </div>
            </div>

            {/* How did you find us */}
            <div>
              <label htmlFor="source" className="block text-sm font-semibold mb-2">
                How did you find Vrishtek?
              </label>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <option>Direct</option>
                <option>GitHub</option>
                <option>LinkedIn</option>
                <option>Recommendation</option>
                <option>Blog post</option>
                <option>Other</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary font-semibold py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send inquiry →"}
            </button>
          </form>

          {/* Additional info */}
          <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Prefer email?</h3>
                <a
                  href="mailto:hello@vrishtek.com"
                  className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400"
                >
                  hello@vrishtek.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Let's talk first?</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  15-min intro call. No commitment.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400"
                >
                  Book a time →
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Based in Indore, India (IST).</strong> Available for calls 9 AM–7 PM IST. Early morning or evening calls for US/UK clients available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
