"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/portfolioData";
import { CheckCircle2, MessageSquare, Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="w-full bg-[#ffffff] py-16 lg:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Navy Color Block Section */}
        <div className="w-full rounded-[24px] lg:rounded-[32px] bg-[#1f1d3d] p-6 sm:p-10 lg:p-12 border border-[#2f2c5e] shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-[#ffffff]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#ffffff]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3d8b] text-[#ffffff] text-xs font-mono font-bold tracking-mono-eyebrow uppercase mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>ENDORSEMENTS & PEER REVIEWS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#ffffff]">
                Trusted by Leaders & Peers.
              </h2>
              <p className="text-sm sm:text-base font-normal text-[#c5b0f4] max-w-2xl mt-2">
                What engineering managers, fellow mentors, and startup founders say about collaborating with Ammardito.
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs font-mono text-[#ffffff]/80 bg-[#ffffff]/10 px-4 py-2 rounded-full border border-[#ffffff]/10 self-start md:self-auto">
              <span>5.0 Verified Feedback Score</span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#ffffff]/5 border border-[#ffffff]/10 backdrop-blur-sm flex flex-col justify-between transition-all hover:bg-[#ffffff]/10 hover:border-[#ffffff]/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#ff3d8b]">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <Quote className="w-5 h-5 text-[#ffffff]/20" />
                  </div>

                  <p className="text-sm text-[#f1f1f1] leading-relaxed mb-6 font-normal">
                    "{item.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ffffff]/10 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#ffffff]/20"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#ffffff]">{item.name}</span>
                    <span className="text-[11px] text-[#c5b0f4]">{item.role}</span>
                    <span className="text-[9px] font-mono text-[#1ea64a] flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {item.verified}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
