"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <nav className="container-max flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
            <span className="font-display font-bold text-white text-lg">V</span>
          </div>
          <span className="font-display font-bold hidden sm:inline text-zinc-950 dark:text-white">Vrishtek</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {[
              { href: "/work", label: "Work" },
              { href: "/services", label: "Services" },
              { href: "/stack", label: "Stack" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-950 dark:text-white"
            aria-label="Toggle theme"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </motion.button>

          <Link
            href="/contact"
            className="btn-primary hidden sm:inline-flex text-sm"
          >
            Start a project
          </Link>
        </div>
      </nav>
    </header>
  );
}
