"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolioData";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-[#141414] border border-[#262626] shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white p-6 sm:p-9 z-10 no-scrollbar"
        >
          {/* Close button with high-contrast visible focus */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-[#999999] hover:text-white hover:border-[#444] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-mono text-[#999999]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#0099ff]">Year {project.year}</span>
            {project.award && (
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white">
                ★ {project.award}
              </span>
            )}
          </div>

          <h2
            id="project-modal-title"
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] font-[var(--font-outfit)] leading-tight mb-2"
          >
            {project.title}
          </h2>
          <div className="text-sm sm:text-base text-[#999999] mb-6 font-medium">
            {project.subtitle} · {project.client}
          </div>

          {/* Spotlight Hero Banner inside modal */}
          <div
            className="w-full h-44 rounded-2xl p-6 flex flex-col justify-between mb-8 relative overflow-hidden border border-white/10"
            style={{
              background:
                project.spotlightVariant === "violet"
                  ? "radial-gradient(130% 130% at 50% 0%, #6a4cf5 0%, #3011a6 55%, #100638 100%)"
                  : project.spotlightVariant === "orange"
                  ? "radial-gradient(130% 130% at 50% 0%, #ff7a3d 0%, #b83d09 55%, #380f00 100%)"
                  : project.spotlightVariant === "magenta"
                  ? "radial-gradient(130% 130% at 50% 0%, #d44df0 0%, #8916a3 55%, #290433 100%)"
                  : "radial-gradient(130% 130% at 50% 0%, #1c1c1c 0%, #141414 100%)",
            }}
          >
            <div className="flex justify-between items-start text-xs font-mono text-white/80">
              <span>Interactive Architecture Spec</span>
              <span className="bg-black/30 px-2 py-0.5 rounded backdrop-blur-md">
                Production Ready
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs text-white/70">Engineered Impact Metric</div>
                <div className="text-2xl sm:text-3xl font-bold font-[var(--font-outfit)] text-white">
                  {project.metrics.value}
                </div>
              </div>
              <div className="text-xs font-mono text-white/80">{project.metrics.label}</div>
            </div>
          </div>

          {/* Description & Impact */}
          <div className="space-y-4 mb-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#999999]">
              Engineering Overview
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {project.description}
            </p>
            <div className="p-4 rounded-xl bg-[#090909] border border-[#262626] text-xs sm:text-sm text-[#0099ff] flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>{project.impact}</span>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#999999] mb-3">
              Technologies &amp; Protocols
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-mono text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions with visible focus rings */}
          <div className="pt-6 border-t border-[#262626] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-xs font-medium text-white transition-all focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
            >
              Close Artboard
            </button>

            <button
              onClick={() => {
                alert(`Demo for ${project.title} running in live WebGL session.`);
              }}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
            >
              <span>Launch Live Preview</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
