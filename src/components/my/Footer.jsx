import Link from "next/link";
import { BookOpen } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Browse",
    href: "/browse",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Profile",
    href: "/profile",
  },
];

const categories = [
  "Programming",
  "Science",
  "Business",
  "Novel",
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <BookOpen className="h-7 w-7 text-primary" />
              <span>BookSelf</span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Discover thousands of books, manage your reading journey,
              and explore your favorite authors with BookSelf.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-3">
              {categories.map((category) => (
                <li
                  key={category}
                  className="text-muted-foreground"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Follow Us
            </h3>

            <div className="flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              📧 support@bookself.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BookSelf. All rights reserved.</p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}