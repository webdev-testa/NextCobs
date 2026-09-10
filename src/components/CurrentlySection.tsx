"use client";

import React from "react";
import { CURRENTLY_DATA } from "@/data/portfolioData";
import {
  BookSketchIcon,
  GamepadSketchIcon,
  ActivitySketchIcon,
  CodeSketchIcon,
} from "@/components/SketchIcons";

export function CurrentlySection() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "book":
        return <BookSketchIcon className="w-4 h-4 text-[#000000]" />;
      case "gamepad":
        return <GamepadSketchIcon className="w-4 h-4 text-[#000000]" />;
      case "activity":
        return <ActivitySketchIcon className="w-4 h-4 text-[#000000]" />;
      case "code":
        return <CodeSketchIcon className="w-4 h-4 text-[#000000]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#f7f7f5] py-14 border-b border-[#e6e6e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#1ea64a] animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#000000] font-semibold">
            Currently &bull; Active Focus
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURRENTLY_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#ffffff] border border-[#e6e6e6] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#666666]">
                  {getIcon(item.icon)}
                  <span className="text-xs font-mono uppercase font-semibold text-[#000000]">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {item.value}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#f1f1f1] text-xs font-mono text-[#888888]">
                <span>In Progress</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
