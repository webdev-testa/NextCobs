"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getDeveloperProfile } from "@/lib/portfolio-catalog";
import { ArrowUpRight } from "lucide-react";

export function Footer({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string>("");
  const dev = getDeveloperProfile();

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
    <footer className={`w-full bg-[#ffffff] text-[#000000] py-14 border-t relative ${className || "border-[#e6e6e6]"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold text-xs">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-[#000000]">
                {dev.name}
              </span>
              <span className="text-xs font-mono text-[#666666]">
                Jakarta, ID &bull; {time || "00:00:00"} (UTC+7)
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <Link href="/work" className="hover:text-[#000000] text-[#666666] transition-colors">
              Case Studies
            </Link>
            <Link href="/#experience" className="hover:text-[#000000] text-[#666666] transition-colors">
              Experience
            </Link>
            <Link href="/about" className="hover:text-[#000000] text-[#666666] transition-colors">
              About
            </Link>
            <Link href="/notes" className="hover:text-[#000000] text-[#666666] transition-colors">
              Notes
            </Link>
            <Link href="/pursuits" className="hover:text-[#000000] text-[#666666] transition-colors">
              Pursuits
            </Link>
            <a
              href={`mailto:${dev.email}`}
              className="hover:underline text-[#000000] transition-colors"
            >
              Email
            </a>
            <a
              href={dev.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#000000] transition-colors flex items-center gap-0.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={dev.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#000000] transition-colors flex items-center gap-0.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#f1f1f1] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#666666]">
          <span>&copy; {new Date().getFullYear()} {dev.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
