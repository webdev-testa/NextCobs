"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";

// Vertical rail inspired by 21st.dev's Modern Timeline by Caio Bonato.
// Uses the portfolio's existing data and native disclosures, with no motion dependency.
export function ExperienceSection() {
  const section = useRef<HTMLElement>(null);
  const roles = EXPERIENCE_DATA.filter((role) => role.type !== "Certification");

  useEffect(() => {
    const node = section.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.entered = "true";
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={section} id="experience" aria-labelledby="experience-title" className="experience-section scroll-mt-20">
      <div className="experience-layout max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="experience-intro">
          <h2 id="experience-title">Where I’ve<br />made an impact.</h2>
          <p>Work experience across enterprise systems, independent zero-cost builds, and technical mentorship.</p>
          <a href="#selected-work" className="experience-link">Explore case studies <ArrowDown size={16} aria-hidden="true" /></a>
          <div className="career-note">
            <span className="career-note-date">2023 — NOW</span>
            <p>From understanding systems<br />to building better ones.</p>
            <span className="career-note-caption">Balancing speed, constraints &amp; maintainability.</span>
          </div>
        </div>

        <div className="experience-record">
          <div className="experience-record-heading"><h3>Work experience</h3><span>Recent roles first</span></div>
          <ol className="experience-timeline" data-reveal-group>
            {roles.map((role, index) => {
              const current = role.period.includes("Present");
              return (
                <li key={role.id} className="experience-entry" data-current={current} data-reveal="quiet">
                  <details open={index < 2} className="experience-disclosure">
                    <summary>
                      <span className="experience-meta"><span>{role.period}</span>{current && <span className="experience-status">Current</span>}</span>
                      <span className="experience-company">{role.company}</span>
                      <span className="experience-role">{role.role}</span>
                      <Plus className="experience-toggle" size={20} aria-hidden="true" />
                    </summary>
                    <div className="experience-detail">
                      <p className="experience-location">{role.type} · {role.location}</p>
                      <ul>{role.description.map((description) => <li key={description}>{description}</li>)}</ul>
                      <div className="experience-technologies" aria-label="Technologies and skills">{role.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                    </div>
                  </details>
                </li>
              );
            })}
          </ol>
          <Link href="/about" className="experience-link experience-more">Read the story behind the roles <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
