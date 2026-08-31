"use client";

import React, { useState, useEffect } from "react";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#ffffff] text-[#000000] py-12 border-t border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold text-xs">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-[#000000]">
                {DEVELOPER_INFO.name}
              </span>
              <span className="text-xs font-mono text-[#666666]">
                Jakarta, ID &bull; {time || "00:00:00"} (UTC+7)
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="hover:underline text-[#000000] transition-colors"
            >
              Email
            </a>
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#000000] transition-colors flex items-center gap-0.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#000000] transition-colors flex items-center gap-0.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#f1f1f1] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#666666]">
          <span>&copy; {new Date().getFullYear()} {DEVELOPER_INFO.name}. All rights reserved.</span>
          <span>Figma-Editorial Portfolio &bull; Next.js 15</span>
        </div>
      </div>
    </footer>
  );
}
