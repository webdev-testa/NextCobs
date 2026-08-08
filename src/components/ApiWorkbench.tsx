"use client";

import React, { useState } from "react";
import { MOCK_API_ENDPOINTS } from "@/data/portfolioData";
import {
  Check,
  Copy,
  Play,
  RotateCcw,
  Server,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export function ApiWorkbench() {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [copied, setCopied] = useState(false);
  const [simulatedLatency, setSimulatedLatency] = useState(14.2);

  const currentEndpoint = MOCK_API_ENDPOINTS[selectedEndpointIndex];

  const handleExecuteRequest = () => {
    setIsLoading(true);
    setHasRun(false);

    // Randomize slight latency between 8ms and 32ms
    const randomLatency = +(Math.random() * 20 + 8).toFixed(1);

    setTimeout(() => {
      setSimulatedLatency(randomLatency);
      setIsLoading(false);
      setHasRun(true);
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentEndpoint.response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api-workbench" className="w-full bg-[#ffffff] py-16 lg:py-24 border-b border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Lime Color-Block Container */}
        <div className="w-full rounded-[24px] lg:rounded-[32px] bg-[#dceeb1] p-6 sm:p-10 lg:p-12 border border-[#bed68b] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          {/* Top Eyebrow & Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#000000]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono font-bold tracking-mono-eyebrow uppercase mb-3">
                <Terminal className="w-3.5 h-3.5 text-[#ff3d8b]" />
                <span>INTERACTIVE BACKEND LAB & API WORKBENCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#000000]">
                Live Endpoint Test Console.
              </h2>
              <p className="text-sm sm:text-base font-normal text-[#000000]/80 max-w-2xl mt-2">
                Simulate live HTTP requests against Ammardito's production architecture patterns. Inspect latency, HTTP headers, RBAC claims, and JSON response bodies.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffffff] border border-[#000000]/10 text-xs font-mono font-bold text-[#000000] shadow-sm self-start md:self-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1ea64a] animate-pulse"></span>
              <span>Java 21 • Spring Boot 3 • Node Cluster</span>
            </div>
          </div>

          {/* Workbench Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Endpoint Selectors (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#000000]/70 mb-1">
                Select API Route to Test:
              </div>

              {MOCK_API_ENDPOINTS.map((item, idx) => {
                const isSelected = selectedEndpointIndex === idx;
                const isGet = item.endpoint.startsWith("GET");

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedEndpointIndex(idx);
                      setHasRun(false);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-1.5 ${
                      isSelected
                        ? "bg-[#000000] text-[#ffffff] border-[#000000] shadow-md scale-[1.01]"
                        : "bg-[#ffffff]/80 text-[#000000] border-[#000000]/10 hover:bg-[#ffffff] hover:border-[#000000]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          isGet
                            ? isSelected
                              ? "bg-[#1ea64a] text-[#ffffff]"
                              : "bg-[#1ea64a]/20 text-[#1ea64a]"
                            : isSelected
                            ? "bg-[#ff3d8b] text-[#ffffff]"
                            : "bg-[#ff3d8b]/20 text-[#ff3d8b]"
                        }`}
                      >
                        {item.endpoint.split(" ")[0]}
                      </span>
                      <span className={`text-[10px] font-mono ${isSelected ? "text-[#ffffff]/60" : "text-[#000000]/50"}`}>
                        REST API
                      </span>
                    </div>

                    <div className="font-mono text-xs font-semibold">{item.endpoint.split(" ")[1]}</div>
                    <div className={`text-xs ${isSelected ? "text-[#ffffff]/80" : "text-[#000000]/70"}`}>
                      {item.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Interactive Terminal & JSON Inspector (7 cols) */}
            <div className="lg:col-span-7 flex flex-col rounded-2xl bg-[#000000] text-[#ffffff] border border-[#262626] shadow-2xl overflow-hidden">
              {/* Terminal Titlebar */}
              <div className="px-5 py-3.5 bg-[#141414] border-b border-[#262626] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5555]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <span className="font-mono text-xs text-[#888888] ml-2">
                    {currentEndpoint.endpoint}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-[#262626] text-[#888888] hover:text-[#ffffff] transition-colors"
                    title="Copy JSON response"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#27c93f]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Action Ribbon: Execute Button & Latency */}
              <div className="p-4 bg-[#1a1a1a] border-b border-[#262626] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleExecuteRequest}
                    disabled={isLoading}
                    className="px-5 py-2 rounded-full bg-[#dceeb1] text-[#000000] hover:bg-[#cbe39b] active:scale-95 text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Send Request</span>
                      </>
                    )}
                  </button>

                  <span className="text-xs text-[#888888]">
                    {currentEndpoint.description}
                  </span>
                </div>

                {hasRun && (
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#27c93f]/20 text-[#27c93f] font-bold">
                      200 OK
                    </span>
                    <span className="text-[#888888]">⚡ {simulatedLatency}ms</span>
                  </div>
                )}
              </div>

              {/* Code / JSON Response Body */}
              <div className="p-5 font-mono text-xs overflow-x-auto max-h-[360px] bg-[#000000] text-[#f1f1f1] leading-relaxed">
                {isLoading ? (
                  <div className="py-12 flex flex-col items-center justify-center gap-3 text-[#888888]">
                    <div className="w-6 h-6 border-2 border-[#dceeb1] border-t-transparent rounded-full animate-spin"></div>
                    <span>Executing Spring Boot / Fast Engine Handler...</span>
                  </div>
                ) : (
                  <pre className="text-[#dceeb1]">
                    {JSON.stringify(currentEndpoint.response, null, 2)}
                  </pre>
                )}
              </div>

              {/* Terminal Footer with Info */}
              <div className="px-5 py-2.5 bg-[#141414] border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                <span>Content-Type: application/json; charset=utf-8</span>
                <span>Thread: Worker-Pool-04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
