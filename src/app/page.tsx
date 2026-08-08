"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BentoGrid } from "@/components/BentoGrid";
import { InteractiveLab } from "@/components/InteractiveLab";
import { DesignSystemViewer } from "@/components/DesignSystemViewer";
import { CareerTimeline } from "@/components/CareerTimeline";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { ContactModal } from "@/components/ContactModal";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-[100dvh] bg-[#090909] text-white selection:bg-[#0099ff] selection:text-white font-[var(--font-inter)]">
      {/* Top Fixed Header */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Section */}
      <HeroSection
        onExploreWork={scrollToWork}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Selected Work Bento Grid */}
      <BentoGrid onSelectProject={(p) => setSelectedProject(p)} />

      {/* Interactive Interaction Lab */}
      <InteractiveLab />

      {/* Design System & Token Matrix */}
      <DesignSystemViewer />

      {/* Career & Accolades */}
      <CareerTimeline />

      {/* Dense Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
