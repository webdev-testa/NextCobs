"use client";

import { motion } from "motion/react";
import { Briefcase, Award, Sparkles, Terminal, CheckCircle2, ArrowUpRight, Server, Cloud, BrainCircuit, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export function CareerTimeline() {
  const testimonials = [
    {
      quote: "Alex architected our hybrid vector RAG retrieval pipeline with sub-8ms latency and built a world-class live telemetry cockpit. Rare full stack caliber.",
      author: "David Chen",
      role: "VP of Engineering",
      company: "Cortex Cloud Systems",
    },
    {
      quote: "Handled our global multi-region cloud failover across 280+ POPs with zero packet loss during massive datacenter outages. Exceptional systems engineer.",
      author: "Sarah Jenkins",
      role: "Head of Infrastructure",
      company: "Stratos Networks",
    },
  ];

  return (
    <section id="experience" className="py-24 border-b border-[#262626] bg-[#090909]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[11px] font-mono uppercase tracking-wider text-[#999999] mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#0099ff]" />
            <span>Production Leadership &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.035em] font-[var(--font-outfit)]">
            Engineering Leadership &amp; Taxonomy
          </h2>
        </div>

        {/* Stack Taxonomy Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PORTFOLIO_DATA.stack.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col justify-between space-y-4"
            >
              <div className="text-xs font-bold text-white font-mono uppercase tracking-wider border-b border-[#262626] pb-2">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] text-[#999999] text-[11px] font-mono border border-[#262626]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Career Milestones */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#999999] mb-4">
              Architecture &amp; Roles
            </h3>

            {PORTFOLIO_DATA.career.map((item) => (
              <div
                key={item.company}
                tabIndex={0}
                className="rounded-[22px] bg-[#141414] border border-[#262626] p-6 sm:p-7 hover:border-[#333333] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="text-lg font-semibold text-white font-[var(--font-outfit)]">
                    {item.role}
                  </div>
                  <span className="text-xs font-mono text-[#0099ff] bg-[#1c1c1c] px-3 py-0.5 rounded-full self-start sm:self-auto border border-[#262626]">
                    {item.period}
                  </span>
                </div>

                <div className="text-sm font-medium text-white/90 mb-2">{item.company}</div>
                <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-[#1c1c1c] text-[#999999] text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Engineering Accolades & Quotes */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-white font-medium text-sm mb-4">
                <Award className="w-4 h-4 text-[#ff7a3d]" />
                <span>Production Metrics &amp; Benchmarks</span>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Distributed Vector Search P99", metric: "<7.8ms", year: "50M Vectors" },
                  { title: "Kafka Real-Time Telemetry", metric: "250k evt/s", year: "Zero Data Lag" },
                  { title: "Multi-Cloud Serverless Edge", metric: "4.8B req/mo", year: "280+ POPs" },
                  { title: "Autonomous Agent Reasoning", metric: "98.4% Pass", year: "80k Runs/Day" },
                ].map((honor) => (
                  <div
                    key={honor.title}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#090909] border border-[#262626] text-xs hover:border-[#3a3a3a] transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-white">{honor.title}</div>
                      <div className="text-[11px] text-[#999999]">{honor.year}</div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-[#ff7a3d]">
                      {honor.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#999999]">
                Engineering Leadership Endorsements
              </h3>

              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-[20px] bg-[#141414] border border-[#262626] p-5 relative"
                >
                  <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed mb-3">
                    “{t.quote}”
                  </p>
                  <div className="text-xs">
                    <span className="font-semibold text-white">{t.author}</span> ·{" "}
                    <span className="text-[#999999]">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
