"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] ${
        scrolled || open ? "bg-white/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = link.href === pathname;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    active ? "bg-brand text-white" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className={`hidden rounded-full border px-5 py-2 text-sm font-medium transition-colors md:inline-flex ${
            pathname === "/contact"
              ? "border-brand bg-brand text-white"
              : "border-line text-ink shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:border-ink/30"
          }`}
        >
          Contact Us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 rounded-lg p-2 text-ink md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-4 pt-2 pb-5 md:hidden">
          <ul className="flex flex-col">
            {[...navLinks, { href: "/contact", label: "Contact Us" }].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base ${
                    link.href === pathname ? "bg-surface font-medium text-brand" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact?subject=quote"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
