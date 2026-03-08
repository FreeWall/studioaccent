"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/studio", label: "Studio" },
  { href: "/sluzby", label: "Služby" },
  { href: "/reference", label: "Reference" },
  { href: "/karaoke", label: "Karaoke" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : ""
      }`}
    >
      <div className="max-w-[1200px] w-[90vw] mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none gap-0">
          <span
            className="text-white font-extrabold text-xl tracking-wide"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Accent
          </span>
          <span className="text-[#d4a017] text-[0.7rem] uppercase tracking-[0.18em]">
            Recording Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded text-sm font-medium transition-all duration-300 ${
                  pathname === href
                    ? "text-[#f0c040] bg-white/5"
                    : "text-[#8888a0] hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/kontakt"
              className={`ml-1 px-4 py-2 rounded text-sm font-bold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] transition-all duration-300 hover:opacity-90 hover:-translate-y-px ${
                pathname === "/kontakt" ? "opacity-90" : ""
              }`}
            >
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-1.5 border-none bg-transparent cursor-pointer"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#e8e8f0] rounded transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8e8f0] rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8e8f0] rounded transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-[rgba(10,10,15,0.97)] backdrop-blur-xl border-b border-white/10 px-8 pb-8 pt-4 flex flex-col gap-2 transition-all duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`px-4 py-3 rounded text-base font-medium transition-all duration-300 ${
              pathname === href
                ? "text-[#f0c040] bg-white/5"
                : "text-[#8888a0] hover:text-white hover:bg-white/5"
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/kontakt"
          onClick={() => setMenuOpen(false)}
          className="mt-2 text-center px-4 py-3 rounded text-base font-bold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017]"
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
