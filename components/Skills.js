"use client";
import { useEffect, useRef } from "react";

const GROUPS = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML / CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Next.js API Routes"],
  },
  {
    label: "Databases",
    items: ["MongoDB (NoSQL)", "SQL", "Mongoose"],
  },
  {
    label: "Data & AI",
    items: ["Python", "Pandas", "Data Analysis", "Samsung AI (Certified)"],
  },
  {
    label: "Tools & Misc",
    items: ["Git / GitHub", "Vercel", "Cloudinary", "Stripe", "Clerk Auth", "DSA"],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
            el.style.animationDelay = `${i * 0.08}s`;
            el.classList.add("animate-fade-up");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 border-b border-border">
      <h2 data-reveal className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
        Skills
      </h2>

      <div className="space-y-7">
        {GROUPS.map((g) => (
          <div key={g.label} data-reveal className="flex flex-col sm:flex-row sm:items-start gap-3">
            <span className="font-mono text-xs text-muted w-28 shrink-0 pt-0.5">{g.label}</span>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-subtle border border-border px-3 py-1 rounded-md hover:border-accent/40 hover:text-light transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
