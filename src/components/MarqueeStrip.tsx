"use client";

import React from "react";

export function MarqueeStrip() {
  const items = [
    "JAVA 21 & SPRING BOOT 3.3",
    "POSTGRESQL RBAC & ROW-LEVEL SECURITY",
    "APPLIED MACHINE LEARNING & TENSORFLOW",
    "ISO 27001 COMPLIANCE AUTOMATION",
    "SERVERLESS AWS S3 & LAMBDA",
    "CLIENT-SIDE ZERO-KNOWLEDGE AES-256 GCM",
    "BI-DIRECTIONAL WEBSOCKETS & STOMP",
    "DBSCAN & K-MEANS TRAFFIC ROUTING",
    "REST & GRAPHQL ARCHITECTURE",
    "REDIS PUB/SUB & GEOSPATIAL CACHING",
    "DOCKER & CONTAINERIZED MICROSERVICES",
  ];

  return (
    <div className="w-full bg-[#000000] text-[#ffffff] overflow-hidden py-2.5 border-y border-[#262626]">
      <div className="flex select-none whitespace-nowrap overflow-hidden">
        <div className="flex shrink-0 items-center animate-marquee gap-8">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.60px] font-medium text-[#ffffff]">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d8b]"></span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center animate-marquee gap-8" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.60px] font-medium text-[#ffffff]">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d8b]"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
