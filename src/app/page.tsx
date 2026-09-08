import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { WhyIWorkSection } from "@/components/WhyIWorkSection";
import { ThingsISpendTimeOnSection } from "@/components/ThingsISpendTimeOnSection";
import { CurrentlySection } from "@/components/CurrentlySection";
import { NotesPreviewSection } from "@/components/NotesPreviewSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col relative selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Editorial Hero with Tactile Sticky Board */}
      <HeroSection />

      {/* Selected Work (4 Key Case Studies) */}
      <SelectedWorkSection />

      {/* Why I Work Signature Manifesto Block */}
      <WhyIWorkSection />

      {/* Things I Spend Time On */}
      <ThingsISpendTimeOnSection />

      {/* Currently Dashboard */}
      <CurrentlySection />

      {/* Notes Preview */}
      <NotesPreviewSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
