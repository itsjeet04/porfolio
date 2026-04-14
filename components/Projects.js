"use client";
import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    name: "Edemy",
    desc:
      "A production-ready Learning Management System. Instructors can create and publish courses; students browse, purchase, and track progress. Features full authentication via Clerk, Stripe-powered payments, Cloudinary for media, and a responsive dashboard for both roles.",
    tags: ["React", "Node.js", "MongoDB", "Clerk", "Stripe", "Cloudinary", "Vercel"],
    live: "https://edemy.vercel.app",
    code: "https://github.com/itsjeet04",
    featured: true,
  },
  {
    name: "next-auth",
    desc:
      "A robust authentication system built from scratch in Next.js with TypeScript. Implements email + password auth, email verification via OTP codes, and custom JWT token flows — no third-party auth library. Clean separation of auth logic, middleware, and API routes.",
    tags: ["Next.js", "TypeScript", "JWT", "Email OTP", "REST API"],
    live: null,
    code: "https://github.com/itsjeet04/next-auth",
    featured: false,
  },
  {
    name: "BPIT Department Website",
    desc:
      "Collaborative portal for a college department. Covers faculty profiles, notices, events, and student resources. Built with the team using a component-driven architecture and mobile-first layout.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    live: null,
    code: "https://github.com/itsjeet04",
    featured: false,
  },
];

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

export default function Projects() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-20 border-b border-border">
      <h2 data-reveal className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
        Projects
      </h2>

      <div className="space-y-4">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            data-reveal
            className="group border border-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-200"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-light">{p.name}</h3>
                {p.featured && (
                  <span className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 shrink-0">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent/80 transition-colors">
                    Live <ExternalIcon />
                  </a>
                )}
                <a href={p.code} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-subtle transition-colors">
                  Code <ExternalIcon />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-subtle leading-relaxed mb-4">{p.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[11px] text-muted border border-border px-2.5 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div data-reveal className="mt-6">
        <a
          href="https://github.com/itsjeet04"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-mono text-xs text-muted hover:text-subtle transition-colors w-fit"
        >
          View all on GitHub <ExternalIcon />
        </a>
      </div>
    </section>
  );
}
