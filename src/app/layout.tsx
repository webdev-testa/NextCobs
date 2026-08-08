import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ammardito Shafaat — Backend Developer & Systems Architect",
  description:
    "Portfolio of Ammardito Shafaat. Specializing in high-throughput Java & Spring Boot backends, scalable distributed systems, applied Machine Learning, and Information Security.",
  keywords: [
    "Ammardito Shafaat",
    "Backend Developer",
    "Java Spring Boot",
    "Machine Learning Engineer",
    "Distributed Systems",
    "Information Security",
    "Portfolio",
    "Jakarta",
  ],
  authors: [{ name: "Ammardito Shafaat" }],
  openGraph: {
    title: "Ammardito Shafaat — Backend Developer & Systems Architect",
    description:
      "High-throughput APIs, distributed data pipelines, and machine learning models with engineering precision and design sensibility.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans bg-[#ffffff] text-[#000000] antialiased selection:bg-[#000000] selection:text-[#ffffff] min-h-screen flex flex-col">
        {/*
        THESIS: Figma's confident monochrome editorial canvas interrupted by oversized, hand-cut pastel color blocks (Lime, Lilac, Cream, Mint, Pink, Coral, Navy) acting as vibrant living sticky notes and interactive engineering artboards on a clean white desk, paired with an interactive creative technologist & backend systems workbench.
        OWN-WORLD: Monochrome #000000 and #ffffff chrome, Inter variable weights (320, 340, 480, 540, 700), uppercase JetBrains Mono tracked eyebrows, pill-shaped CTAs (rounded-full), circular icon buttons (40px), and full-width oversized pastel color block sections (#dceeb1, #c5b0f4, #f4ecd6, #c8e6cd, #efd4d4, #f3c9b6, #1f1d3d, #ff3d8b).
        STORY: Ammardito Shafaat's portfolio as an exceptional Backend Developer & Creative Systems Architect (Java/Spring Boot, ML & Computer Vision, InfoSec, Distributed Systems), showcasing live API test workbench, system architecture simulator, interactive FigJam sticky notes, verified case studies, and instant collaboration channels.
        FIRST VIEWPORT: Crisp white canvas hero with oversized display type (-1.72px tracking), variable weight typography, interactive FigJam multiplayer cursor indicators, quick-switch architecture filter, and signature dual-pill CTAs ("Explore Architecture" & "Get in Touch") next to a live Jakarta status badge.
        FORM: Figma-Editorial Portfolio with Interactive Systems Canvas & Color Block Storytelling.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        {children}
      </body>
    </html>
  );
}
