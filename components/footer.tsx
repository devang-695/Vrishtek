import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 dark:bg-black text-zinc-50 py-16 md:py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-white">V</span>
              </div>
              <span className="font-display font-bold">Vrishtek</span>
            </div>
            <p className="text-zinc-400 text-sm">Engineered with intent.</p>
            <p className="text-zinc-400 text-sm mt-2">
              Building full-stack digital products for startups and scale-ups.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/stack" className="hover:text-white transition-colors">
                  Stack
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/vrishtek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <p className="text-sm text-zinc-400 mb-4">
              <a
                href="mailto:hello@vrishtek.com"
                className="hover:text-white transition-colors"
              >
                hello@vrishtek.com
              </a>
            </p>
            <p className="text-xs text-zinc-500">
              Based in Indore, India (IST). Available 9 AM–7 PM IST.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-zinc-500">
            © {currentYear} Vrishtek. Built with Next.js. Deployed on Vercel.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <a
              href="https://github.com/vrishtek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/vrishtek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/vrishtek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
