import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bricolage)", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Dark mode (default)
        "vrishtek-dark": {
          bg: "#09090B",
          surface: "#18181B",
          border: "#27272A",
          "text-primary": "#FAFAFA",
          "text-muted": "#71717A",
          accent: "#D4A853",
          "accent-hover": "#E8BC6A",
          teal: "#14B8A6",
        },
        // Light mode
        "vrishtek-light": {
          bg: "#FFFFFF",
          surface: "#F4F4F5",
          border: "#E4E4E7",
          "text-primary": "#09090B",
          "text-muted": "#71717A",
          accent: "#B8902A",
          teal: "#0D9488",
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out",
        "stagger": "stagger 0.1s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        stagger: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
