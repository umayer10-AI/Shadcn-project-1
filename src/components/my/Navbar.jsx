"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Browse",
    href: "/browse",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const isLoggedIn = true;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:opacity-80"
        >
          <div className="rounded-lg bg-primary p-2">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>

          <span className="text-2xl font-bold tracking-tight">
            Book<span className="text-primary">Self</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <UserDropdown />
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/register">Register</Link>
              </Button>

              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}