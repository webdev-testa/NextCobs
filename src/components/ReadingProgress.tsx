"use client";

import { useEffect, useState } from "react";

export interface ReadingProgressItem {
  id: string;
  label: string;
}

export function ReadingProgress({ items, label = "On this page" }: { items: ReadingProgressItem[]; label?: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <div className="reading-progress-bar" aria-hidden="true" />
      <nav className="reading-progress-nav" aria-label={label}>
        <span className="reading-progress-label">{label}</span>
        <div className="reading-progress-links">
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
