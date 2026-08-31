import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { StoryAndHobbiesSection } from "@/components/StoryAndHobbiesSection";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { InteractiveContact } from "@/components/InteractiveContact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col relative selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Sticky Figma Editorial Navbar */}
      <Navbar />

      {/* Pure White Canvas Hero with Interactive FigJam Sticky Note Board */}
      <HeroSection />

      {/* Projects Showcase & Architecture Inspector */}
      <ProjectShowcase />

      {/* Signature Lilac Block: Stories, Games & Life Explorations */}
      <StoryAndHobbiesSection />

      {/* Signature Mint Block: Technical Toolbox */}
      <SkillsMatrix />

      {/* Signature Coral Block: Career Journey & Mentorship */}
      <ExperienceTimeline />

      {/* Signature Pink Block: Interactive Contact */}
      <InteractiveContact />

      {/* Monochrome Editorial Footer */}
      <Footer />
    </main>
  );
}
