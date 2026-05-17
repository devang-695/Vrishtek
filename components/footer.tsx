import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-black text-zinc-50 py-16 md:py-24 border-t border-zinc-900">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-white">V</span>
              </div>
              <span className="font-display font-bold">Vrishtek</span>
            </div>
            <p className="text-zinc-500 text-sm">Engineered with intent.</p>
            <p className="text-zinc-500 text-sm mt-2 font-light">
              Building full-stack digital products for founders who matter.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-zinc-50">Product</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/work" className="hover:text-amber-500 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/stack" className="hover:text-amber-500 transition-colors">
                  Stack
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-amber-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-zinc-50">Resources</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/blog" className="hover:text-amber-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/vrishtek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-zinc-50">Contact</h3>
            <p className="text-sm text-zinc-500 mb-4">
              <a
                href="mailto:hello@vrishtek.com"
                className="hover:text-amber-500 transition-colors"
              >
                hello@vrishtek.com
              </a>
            </p>
            <p className="text-xs text-zinc-600 font-light">
              Based in Indore, India (IST). Available 9 AM–7 PM IST.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-zinc-600">
            © {currentYear} Vrishtek. Built with Next.js. Deployed on Vercel.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <a
              href="https://github.com/vrishtek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-900 hover:text-amber-500 rounded-lg transition-colors text-zinc-500"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/vrishtek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-900 hover:text-amber-500 rounded-lg transition-colors text-zinc-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/vrishtek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-900 hover:text-amber-500 rounded-lg transition-colors text-zinc-500"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}