"use client";
import { useEffect, useRef } from "react";

const ITEMS = [
  {
    title:  "PR Head",
    org:    "NSS Cell, BPIT",
    period: "2023 — Present",
    type:   "Leadership",
    points: [
      "Manage public relations and outreach for BPIT's National Service Scheme cell.",
      "Coordinate with college administration to plan and communicate NSS events and campaigns.",
      "Oversee social media presence and inter-college communication.",
    ],
  },
  {
    title:  "Certificate — AI Fundamentals",
    org:    "Samsung Innovation Campus",
    period: "2024",
    type:   "Certificate",
    points: [
      "Completed Samsung's Innovation Campus program with a focus on Artificial Intelligence.",
      "Covered machine learning concepts, data preprocessing, and model evaluation fundamentals.",
      "Strengthened interest in data analytics and Python-based data workflows.",
    ],
  },
  {
    title:  "B.Tech — Information Technology",
    org:    "BPIT, GGSIPU Delhi",
    period: "2022 — 2026",
    type:   "Education",
    points: [
      "Core coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks.",
      "Active in technical and social clubs; NSS PR Head and SRM Hackathon Top 10 finisher.",
    ],
  },
];

const TYPE_STYLE = {
  Leadership:  "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Certificate: "text-green-400  bg-green-400/10  border-green-400/20",
  Education:   "text-blue-400   bg-blue-400/10   border-blue-400/20",
};

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-20 border-b border-border">
      <h2 data-reveal className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
        Experience & Education
      </h2>

      <div className="space-y-5">
        {ITEMS.map((item) => (
          <div key={item.title} data-reveal className="border border-border rounded-lg p-6 hover:border-border/80 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-y-2 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-light mb-0.5">{item.title}</h3>
                <p className="font-mono text-xs text-muted">{item.org}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className={`font-mono text-[10px] border px-2 py-0.5 rounded-full ${TYPE_STYLE[item.type]}`}>
                  {item.type}
                </span>
                <span className="font-mono text-xs text-muted">{item.period}</span>
              </div>
            </div>

            <ul className="space-y-1.5">
              {item.points.map((pt, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-subtle">
                  <span className="text-muted mt-1.5 shrink-0">—</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
