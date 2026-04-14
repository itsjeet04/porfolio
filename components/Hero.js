"use client";
import { useEffect, useRef } from "react";

const ROLES = ["SDE Intern", "Frontend Intern", "Full Stack Intern", "Data Analytics"];

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-reveal]");
    els?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.1}s`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section ref={ref} className="pt-20 pb-24 border-b border-border">
      {/* Status */}
      <div data-reveal className="flex items-center gap-2 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="font-mono text-xs text-muted">Open to internships</span>
      </div>

      {/* Name */}
      <h1 data-reveal className="text-4xl md:text-5xl font-bold text-light tracking-tight mb-3">
        Sirjanjeet Singh
      </h1>

      {/* College */}
      <p data-reveal className="text-sm text-muted mb-6 font-mono">
        B.Tech · Information Technology · BPIT, GGSIPU Delhi
      </p>

      {/* Roles */}
      <div data-reveal className="flex flex-wrap gap-2 mb-8">
        {ROLES.map((r) => (
          <span
            key={r}
            className="text-xs font-mono border border-border text-subtle px-3 py-1 rounded-full"
          >
            {r}
          </span>
        ))}
      </div>

      {/* Bio */}
      <p data-reveal className="text-base text-subtle leading-relaxed max-w-lg mb-10">
        I build full-stack web applications and care about clean code, good UX,
        and shipping products that work. Currently exploring data analytics
        alongside my core stack.
      </p>

      {/* CTAs */}
      <div data-reveal className="flex flex-wrap items-center gap-3">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 text-sm font-medium bg-accent text-bg px-5 py-2.5 rounded-md hover:bg-accent/90 transition-colors"
        >
          {/* Download icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>
        <a
          href="https://github.com/itsjeet04"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-subtle border border-border px-5 py-2.5 rounded-md hover:text-light hover:border-subtle transition-colors"
        >
          GitHub
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/sirjanjeetsingh2004"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-subtle border border-border px-5 py-2.5 rounded-md hover:text-light hover:border-subtle transition-colors"
        >
          LinkedIn
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
