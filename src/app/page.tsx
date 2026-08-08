"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { HeroSection } from "@/components/HeroSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ApiWorkbench } from "@/components/ApiWorkbench";
import { ArchitecturePillars } from "@/components/ArchitecturePillars";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InteractiveContact } from "@/components/InteractiveContact";
import { Footer } from "@/components/Footer";
import { MultiplayerCursorLayer } from "@/components/MultiplayerCursorLayer";

export default function Home() {
  const [multiplayerActive, setMultiplayerActive] = useState(true);

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col relative selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Figma Multiplayer Cursor Simulation Layer */}
      <MultiplayerCursorLayer active={multiplayerActive} />

      {/* Sticky White Editorial Navigation */}
      <Navbar
        multiplayerActive={multiplayerActive}
        onToggleMultiplayer={() => setMultiplayerActive(!multiplayerActive)}
      />

      {/* Thin Marquee Ribbon with Key Stacks */}
      <MarqueeStrip />

      {/* Pure White Canvas Hero Section with Interactive FigJam Board */}
      <HeroSection />

      {/* Projects Showcase & Architecture Blueprints */}
      <ProjectShowcase />

      {/* Signature Lime Color Block: Live API Test Console */}
      <ApiWorkbench />

      {/* Signature Lilac Color Block: Engineering Pillars & ADRs */}
      <ArchitecturePillars />

      {/* Signature Mint Color Block: Technical Stack Matrix */}
      <SkillsMatrix />

      {/* Signature Coral Color Block: Experience Timeline */}
      <ExperienceTimeline />

      {/* Signature Navy Color Block: Endorsements & Peer Reviews */}
      <TestimonialsSection />

      {/* Signature Pink Color Block: Interactive Contact & Hire */}
      <InteractiveContact />

      {/* Monochrome Editorial Footer */}
      <Footer />
    </main>
  );
}
