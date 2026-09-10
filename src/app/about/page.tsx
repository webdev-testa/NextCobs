import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ABOUT_ESSAY, EXPERIENCE_DATA, DEVELOPER_INFO } from "@/data/portfolioData";
import { ArrowLeft, ArrowRight, Quote, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About — Ammardito Shafaat",
  description: "How I Got Here: from studying Information Systems to machine learning and software engineering. I build things so other people can carry less.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-[#ffffff]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#666666] hover:text-[#000000] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Essay Header */}
        <header className="mb-8 pb-6 border-b border-[#e6e6e6]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#ffffff] text-xs font-mono tracking-widest uppercase mb-4">
            <span>{ABOUT_ESSAY.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#000000] leading-tight mb-4">
            {ABOUT_ESSAY.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-[#666666]">
            By {DEVELOPER_INFO.name} &bull; Software Engineer 
          </p>
        </header>

        {/* Author Illustrated Bio Card */}
        <section className="mb-12 p-6 sm:p-7 rounded-3xl bg-[#f7f7f5] border border-[#e6e6e6] flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="shrink-0 flex flex-col items-center">
            <div className="p-2.5 bg-[#ffffff] rounded-2xl border border-[#e6e6e6] shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="relative w-36 sm:w-44 aspect-square rounded-xl overflow-hidden bg-[#ffffff]">
                <Image
                  src="/images/sketches/avatar-sketch.png"
                  alt="Ammardito Shafaat sketch"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
              <p className="text-xs font-mono text-[#666666] text-center mt-2 italic">
                Dito &bull; Jakarta
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#666666] mb-1">
              Field Notes &bull; Author
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000] mb-2">
              Building things so people can carry less.
            </h2>
            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-4 max-w-lg">
              Software engineer focused on AI knowledge workflows, lightweight production systems, and physical endurance outside the terminal.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#e6e6e6] text-[#333333]">
                📍 Jakarta, Indonesia
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#e6e6e6] text-[#333333]">
                ⚙️ LG Sinarmas &bull; AI Lead
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#e6e6e6] text-[#333333]">
                📖 Speculative Fiction
              </span>
            </div>
          </div>
        </section>

        {/* The Full Essay Body */}
        <article className="prose prose-neutral max-w-none mb-16">
          <div className="space-y-6 text-base sm:text-lg text-[#222222] leading-relaxed font-normal">
            
            <p>
              Growing up, the people held up as models of purpose were doctors, soldiers, teachers — anyone whose whole career exists for others at personal cost. That was never what I wanted. I wanted a comfortable life, room to experiment, curiosity without guilt.
            </p>

            <p>
              I studied Information Systems Technology — not computer science. It&apos;s a solid major if you want to end up in strategy, analysis, documentation. I didn&apos;t. Somewhere in my first internship, doing InfoSec work, I got handed a task with nothing to do with my actual job: build a chatbot using Google Sheets. It was small and a little absurd, and it stuck with me more than any planning deck I&apos;d made up to that point.
            </p>

            {/* Pull Quote */}
            <div className="my-8 p-6 sm:p-8 rounded-3xl bg-[#f4ecd6] border border-[#ded0b1] relative">
              <Quote className="w-6 h-6 text-[#000000]/20 absolute top-4 left-4" />
              <p className="text-lg sm:text-xl font-medium text-[#111111] italic leading-snug pl-6">
                &ldquo;That was the moment I realized I care less about analyzing a problem and more about actually building the thing that fixes it. Planning tells you what should exist. Building is where you find out if it actually works — and where you learn the most, fast, by breaking things and fixing them yourself.&rdquo;
              </p>
            </div>

            <p>
              From there I went looking for a way in — machine learning through Bangkit, full-stack courses, Google Cloud Arcade, anything that got me building instead of documenting. Eventually that pointed pretty clearly toward software engineering, and I stuck with it.
            </p>

            <div className="p-6 sm:p-7 rounded-3xl bg-[#f7f7f5] border border-[#e6e6e6] my-8 shadow-xs">
              <p className="text-lg sm:text-xl font-bold text-[#000000] leading-snug">
                &ldquo;I can&apos;t carry what people carry by planning around their problems from a distance. But I can carry some of it by actually building the thing that lightens their load.&rdquo;
              </p>
            </div>

          </div>
        </article>

        {/* Career Milestones Section */}
        <section className="mb-16 pt-10 border-t border-[#e6e6e6]">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-1">
                Timeline & Context
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#000000]">
                Where I&apos;ve Built & Guided
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#000000] hover:underline"
            >
              <span>See case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-6">
            {EXPERIENCE_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6e6e6] shadow-2xs hover:border-[#000000] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-[#000000]">{exp.role}</span>
                    <span className="text-xs font-mono text-[#666666]">&bull; {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-[#888888]">{exp.period}</span>
                </div>

                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-[#444444] list-disc list-outside pl-4 leading-relaxed">
                  {exp.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-[#f1f1f1] flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-[#f7f7f5] text-[#555555]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-[#e6e6e6] flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#000000] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000000] text-[#ffffff] text-xs font-semibold hover:bg-[#222222] transition-colors"
          >
            <span>Explore Selected Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
