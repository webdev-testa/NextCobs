import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WhyIWorkSection } from "@/components/WhyIWorkSection";
import { PersonalNotesSection } from "@/components/PersonalNotesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col relative selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Editorial Open Studio Hero with Tactile Note Cluster & Guglieri Headline */}
      <HeroSection />

      {/* Selected Work: Exhibit with Hierarchy (LG SM Wiki Flagship + Paired Row + Supporting) */}
      <SelectedWorkSection />

      {/* Experience: Quiet Reading Interval */}
      <ExperienceSection />

      {/* Why I Work: Typographic Pause Manifesto */}
      <WhyIWorkSection />

      {/* Personal Material: Editorial Studio Wall (Currently Focus + Field Notes + Sketch Artifact) */}
      <PersonalNotesSection />

      {/* Contact: Clear Next Step & Large Typographic Gesture */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
