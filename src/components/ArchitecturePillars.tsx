"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Layers,
  Lock,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function ArchitecturePillars() {
  const [openAdr, setOpenAdr] = useState<number | null>(0);

  const pillars = [
    {
      title: "Resilient Java & Spring Architecture",
      icon: Server,
      desc: "Designing production-grade microservices with clean hexagonal layers, HikariCP connection pooling, and optimized PostgreSQL transactions.",
      highlights: [
        "Spring Boot 3.3 REST & GraphQL APIs",
        "Granular RBAC Authorization Filters",
        "Low-latency HikariCP query execution",
      ],
    },
    {
      title: "Applied ML & Vision Pipelines",
      icon: Cpu,
      desc: "Developing and deploying deep learning models (TensorFlow/Keras) directly to low-latency inference servers with bounding-box accuracy.",
      highlights: [
        "CNN Bounding Box Classification (89.2% mAP)",
        "FastAPI & ONNX Runtime Microservices",
        "DBSCAN & Heuristic Graph Optimization",
      ],
    },
    {
      title: "Reactive Telemetry & WebSockets",
      icon: Zap,
      desc: "Building bi-directional real-time data streams utilizing STOMP over WebSockets and Redis Pub/Sub for sub-20ms event propagation.",
      highlights: [
        "Spring Boot STOMP WebSocket Clusters",
        "Redis Pub/Sub & Geospatial Lookups",
        "Client Reconnect with Exponential Backoff",
      ],
    },
    {
      title: "InfoSec & Zero-Knowledge Vaults",
      icon: ShieldCheck,
      desc: "Enforcing ISO 27001 standard practices, end-to-end client-side AES-256 GCM encryption, and automated compliance policy verification.",
      highlights: [
        "Zero-Knowledge Client-Side Key Derivation",
        "ISO 27001 Security Automation via LLMs",
        "Cryptographic Nonce & Replay Attack Defense",
      ],
    },
  ];

  const adrs = [
    {
      title: "ADR 01: Spring Boot vs Express for High-Concurrency Job Portal",
      decision:
        "Adopted Java 21 & Spring Boot 3.3 with Virtual Threads over Node.js for the core assessment engine due to strict type safety, predictable multi-threading during synchronized exams, and first-class HikariCP pool optimization.",
      tradeoff: "Slightly heavier initial memory footprint in exchange for deterministic latency under 1,000+ simultaneous test submissions.",
    },
    {
      title: "ADR 02: Client-Side PBKDF2 & AES-GCM 256 for Zero-Knowledge Vault",
      decision:
        "Executed key derivation directly in the browser via Web Crypto API with 250,000 iterations before sending encrypted binary payloads to MongoDB GridFS.",
      tradeoff: "CPU computation shifted to client browser, ensuring server database compromises yield zero readable plaintext.",
    },
    {
      title: "ADR 03: Serverless AWS Lambda + S3 Vector Retrieval for ISO 27001",
      decision:
        "Utilized event-driven AWS Lambda hooks triggered by spreadsheet modifications rather than a persistent dedicated worker, keeping cloud costs minimal while delivering sub-4s answers.",
      tradeoff: "Occasional cold-start latency of ~800ms offset by near-zero idle compute expenses.",
    },
  ];

  return (
    <section id="pillars" className="w-full bg-[#ffffff] py-16 lg:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Lilac Color-Block Section */}
        <div className="w-full rounded-[24px] lg:rounded-[32px] bg-[#c5b0f4] p-6 sm:p-10 lg:p-12 border border-[#a991de] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#000000]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono font-bold tracking-mono-eyebrow uppercase mb-3">
                <Layers className="w-3.5 h-3.5 text-[#dceeb1]" />
                <span>ENGINEERING PHILOSOPHY & PILLARS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#000000]">
                How I Design Systems.
              </h2>
              <p className="text-sm sm:text-base font-normal text-[#000000]/80 max-w-2xl mt-2">
                Four foundational disciplines that guide every line of backend code, architectural decision, and machine learning pipeline I deliver.
              </p>
            </div>

            <div className="text-xs font-mono text-[#000000] font-semibold bg-[#ffffff] px-4 py-2 rounded-full border border-[#000000]/10 self-start md:self-auto">
              Clean Hexagonal Architecture
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#ffffff] border border-[#000000]/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-bold text-[#000000] mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f1f1f1] flex flex-col gap-1.5">
                    {pillar.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-[#222222]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1ea64a] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture Decision Records (ADRs) Accordion */}
          <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#000000]/10">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f1f1f1]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff3d8b]"></span>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#000000]">
                  Architectural Decision Records (ADR Insights)
                </h3>
              </div>
              <span className="text-xs font-mono text-[#666666]">Real Trade-Offs & Rationale</span>
            </div>

            <div className="space-y-3">
              {adrs.map((adr, idx) => {
                const isOpen = openAdr === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#e6e6e6] bg-[#f7f7f5] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenAdr(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between font-semibold text-xs sm:text-sm text-[#000000] hover:bg-[#eaeaea] transition-colors"
                    >
                      <span>{adr.title}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#666666]" /> : <ChevronDown className="w-4 h-4 text-[#666666]" />}
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-[#333333] space-y-2 border-t border-[#e6e6e6] bg-[#ffffff]">
                        <div className="pt-3">
                          <strong className="text-[#000000]">Decision: </strong>
                          {adr.decision}
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#dceeb1]/40 border border-[#bed68b] text-xs text-[#000000]">
                          <strong className="text-[#000000]">Trade-Off & Verdict: </strong>
                          {adr.tradeoff}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
