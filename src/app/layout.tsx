import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionSystem } from "@/components/MotionSystem";
import { ChatWidget } from "@/components/ChatAssistant";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
  title: "Ammardito Shafaat — Software Engineer | AI & Systems",
  description:
    "I build practical software & AI solutions—with a dash of creative spark—so teams can work faster and carry less.",
  keywords: [
    "Ammardito Shafaat",
    "Software Engineer",
    "AI & Systems",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Jakarta",
    "Portfolio",
    "Case Studies",
  ],
  authors: [{ name: "Ammardito Shafaat" }],
  openGraph: {
    title: "Ammardito Shafaat — Software Engineer | AI & Systems",
    description:
      "I build practical software & AI solutions—with a dash of creative spark—so teams can work faster and carry less.",
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
        <MotionSystem />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
