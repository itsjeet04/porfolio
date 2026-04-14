"use client";
import { useState, useEffect } from "react";

const NAV = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 -mx-6 px-6 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between py-4">
        <a href="#" className="font-mono text-sm text-light font-medium tracking-tight">
          sirjanjeet<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                className="text-sm text-muted hover:text-light transition-colors duration-200"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-subtle transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-subtle transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-subtle transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-4" : "max-h-0"}`}>
        <ul className="flex flex-col gap-1">
          {NAV.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted hover:text-light transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
