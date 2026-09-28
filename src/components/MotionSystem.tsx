"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionSystem() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("motion-ready");

    const setupGroups = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const children = Array.from(group.querySelectorAll<HTMLElement>(":scope > [data-reveal], :scope > * > [data-reveal]"));
        children.forEach((child, index) => {
          child.style.setProperty("--reveal-order", String(Math.min(index, 6)));
        });
      });
    };

    setupGroups();

    if (reduceMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
        item.dataset.revealed = "true";
      });
      return;
    }

    const observedSet = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.dataset.revealed = "true";
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const observeNewItems = () => {
      setupGroups();
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
        if (!observedSet.has(item) && item.dataset.revealed !== "true") {
          observedSet.add(item);
          observer.observe(item);
        }
      });
    };

    observeNewItems();

    // Watch for DOM changes (e.g. client-side filtering)
    const mutationObserver = new MutationObserver(() => {
      observeNewItems();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
