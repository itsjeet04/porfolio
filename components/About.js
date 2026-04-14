"use client";
import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" ref={ref} className="py-20 border-b border-border">
      <h2 data-reveal className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
        About
      </h2>

      <div className="space-y-4 text-subtle leading-relaxed">
        <p data-reveal>
          I&apos;m a 6th-semester B.Tech Information Technology student at{" "}
          <span className="text-light">Bhagwan Parshuram Institute of Technology (BPIT)</span>,
          affiliated with GGSIPU, Delhi. My focus is on building practical, full-stack
          web applications with the MERN stack and Next.js.
        </p>
        <p data-reveal>
          Beyond development, I serve as the{" "}
          <span className="text-light">PR Head for the NSS Cell at BPIT</span>, managing
          outreach and community initiatives. I&apos;m also a recipient of a{" "}
          <span className="text-light">Samsung Innovation Campus certificate in AI</span>,
          which sparked my interest in data analytics and machine learning fundamentals.
        </p>
        <p data-reveal>
          I&apos;m actively grinding DSA on LeetCode and preparing for product-company
          SDE interviews while building side projects to sharpen my full-stack skills.
        </p>
      </div>
    </section>
  );
}
