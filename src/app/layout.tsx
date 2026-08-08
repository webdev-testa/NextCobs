import type { Metadata } from "next";
import { Outfit, Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Rivera — Creative Technologist & Interaction Architect",
  description:
    "Portfolio of Alex Rivera. Creative technologist and interaction architect crafting dark-canvas spatial interfaces, high-performance web systems, and artboard-grade digital experiences.",
  keywords: [
    "Creative Technologist",
    "Design Engineer",
    "Interaction Design",
    "Framer Design System",
    "Bento Grid Portfolio",
    "Next.js",
    "Motion",
  ],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera — Creative Technologist & Interaction Architect",
    description:
      "Crafting dark-canvas spatial interfaces, high-performance web systems, and artboard-grade digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${geist.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-[#090909] text-white antialiased selection:bg-[#0099ff] selection:text-white min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
