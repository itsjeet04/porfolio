"use client";
import { useEffect, useRef } from "react";

const LINKS = [
  {
    label: "Email",
    value: "jeetsirjan@gmail.com",
    href:  "mailto:jeetsirjan@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "sirjanjeetsingh2004",
    href:  "https://linkedin.com/in/sirjanjeetsingh2004",
  },
  {
    label: "GitHub",
    value: "itsjeet04",
    href:  "https://github.com/itsjeet04",
  },
  {
    label: "LeetCode",
    value: "sirjanjeet",
    href:  "https://leetcode.com/u/sirjanjeet/",
  },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`;
            el.classList.add("animate-fade-up");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-20 border-b border-border">
      <h2 data-reveal className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
        Contact
      </h2>

      <div data-reveal className="mb-8 max-w-md">
        <h3 className="text-xl font-semibold text-light mb-2">Let&apos;s connect</h3>
        <p className="text-sm text-subtle leading-relaxed">
          I&apos;m actively looking for SDE, frontend, and full-stack internship
          opportunities. If you have a role or just want to talk tech, reach out.
        </p>
      </div>

      <div data-reveal className="flex flex-col gap-3">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noreferrer"
            className="flex items-center justify-between group border border-border rounded-lg px-5 py-4 hover:border-accent/40 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted w-16">{l.label}</span>
              <span className="text-sm text-subtle group-hover:text-light transition-colors">{l.value}</span>
            </div>
            <svg className="text-muted group-hover:text-accent transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
