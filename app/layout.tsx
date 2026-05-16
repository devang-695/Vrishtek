import type { Metadata } from "next";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Vrishtek — Full-Stack Product Engineering Studio",
  description:
    "Vrishtek builds full-stack digital products for startups and scale-ups. Next.js, Node.js, PostgreSQL, React Native. Based in India. Working globally.",
  keywords: [
    "full-stack development",
    "product engineering",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "React Native",
    "SaaS development",
    "India",
  ],
  authors: [{ name: "Vrishtek", url: "https://vrishtek.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vrishtek.com",
    siteName: "Vrishtek",
    title: "Vrishtek — Full-Stack Product Engineering Studio",
    description: "Engineered with intent. Building full-stack digital products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vrishtek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrishtek — Full-Stack Product Engineering Studio",
    description: "Engineered with intent. Building full-stack digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
