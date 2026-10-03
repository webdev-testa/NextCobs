import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PersonalNotesSection } from "@/components/PersonalNotesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export function HomeView() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col relative selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Editorial Open Studio Hero with Tactile Note Cluster & Guglieri Headline */}
      <HeroSection />

      {/* Partner Ecosystem Running Marquee: Partnering as a Full Stack Engineer & AI Systems Lead */}
      <PartnerMarquee />

      {/* Selected Work: Exhibit with Hierarchy (LG SM Wiki Flagship + Paired Row + Supporting) */}
      <SelectedWorkSection />

      {/* Experience: Quiet Reading Interval */}
      <ExperienceSection />

      {/* Personal Material: Editorial Studio Wall (Currently Focus + Field Notes + Sketch Artifact) */}
      <PersonalNotesSection />

      {/* Contact: Clear Next Step & Large Typographic Gesture */}
      <ContactSection />

      {/* Footer */}
      <Footer className="border-t border-[#bed68b]" />
    </main>
  );
}

export default HomeView;
