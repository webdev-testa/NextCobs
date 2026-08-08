"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Sparkles, Layers, Cpu, Code2, Globe2, Cloud, Server, BrainCircuit, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection({
  onExploreWork,
  onOpenContact,
}: {
  onExploreWork: () => void;
  onOpenContact: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeMetric, setActiveMetric] = useState(0);

  // Distributed node network simulation on canvas
  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ["#0099ff", "#6a4cf5", "#d44df0", "#ff7a3d", "#22c55e"];

    for (let i = 0; i < 46; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.25,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle cloud grid mesh
      ctx.strokeStyle = "rgba(38, 38, 38, 0.4)";
      ctx.lineWidth = 1;
      const gridSize = 56;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and connect cluster nodes
      nodes.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          p.x += (dx / dist) * 0.5;
          p.y += (dy / dist) * 0.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        for (let j = idx + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - d / 110) * 0.16;
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shouldReduceMotion]);

  const stats = [
    { label: "Daily Active AI Queries", value: "18.4M+", icon: BrainCircuit, accent: "text-[#6a4cf5]" },
    { label: "P99 Global Edge Latency", value: "<8.2ms", icon: Cloud, accent: "text-[#ff7a3d]" },
    { label: "Distributed Microservices", value: "60+ Svc", icon: Server, accent: "text-[#d44df0]" },
    { label: "Cloud Platform Uptime", value: "99.99%", icon: Globe2, accent: "text-[#0099ff]" },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-[#262626]">
      {/* Background Interactive Cluster Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Atmospheric radial gradient spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] bg-gradient-to-r from-[#6a4cf5]/20 via-[#d44df0]/15 to-[#ff7a3d]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow & Status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs text-[#999999] mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-white">
              Available for Q3/Q4 Architecture Engagements
            </span>
          </motion.div>

          {/* Display Headline with aggressive negative tracking */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-white tracking-[-0.04em] leading-[0.98] font-[var(--font-outfit)] max-w-4xl"
          >
            Full Stack Architect · Cloud &amp; AI Systems
          </motion.h1>

          {/* Crisp Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-[#999999] max-w-[62ch] leading-relaxed"
          >
            Architecting high-throughput distributed backends, global edge cloud infrastructure, and production AI/LLM pipelines — wrapped in precision, artboard-grade user interfaces.
          </motion.p>

          {/* Dual Pill CTA Actions with tactile press */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <button
              onClick={onExploreWork}
              className="px-6 py-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-white/90 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none cursor-pointer"
            >
              <span>Explore Architecture &amp; Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#lab"
              className="px-6 py-3 rounded-full text-xs font-medium text-white bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] hover:border-[#444] transition-all duration-200 active:scale-95 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
            >
              <Terminal className="w-4 h-4 text-[#0099ff]" />
              <span>Launch Architecture Lab</span>
            </a>
          </motion.div>

          {/* Interactive Metric Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 text-left"
          >
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveMetric(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveMetric(idx);
                  }}
                  className={cn(
                    "cursor-pointer p-4 rounded-xl transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none active:scale-[0.98]",
                    activeMetric === idx
                      ? "bg-[#1c1c1c] border-[#0099ff]/60 shadow-[0_0_16px_rgba(0,153,255,0.18)]"
                      : "bg-[#141414]/90 border-[#262626] hover:bg-[#1c1c1c]/80 hover:border-[#3a3a3a]"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#999999] uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                    <Icon className={cn("w-4 h-4", item.accent)} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-[var(--font-outfit)] text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#999999] mt-0.5 leading-snug">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
