"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary"
        >
          📚 BookSelf
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-black hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Login */}
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <UserDropdown></UserDropdown>
      </div>
    </header>
  );
}