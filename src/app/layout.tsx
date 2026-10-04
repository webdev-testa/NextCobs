import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionSystem } from "@/components/MotionSystem";
import { ChatWidget } from "@/components/ChatAssistant";
import { DEVELOPER_INFO } from "@/data/portfolioData";

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
  title: `${DEVELOPER_INFO.name} — ${DEVELOPER_INFO.role}`,
  description: DEVELOPER_INFO.tagline,
  keywords: [
    DEVELOPER_INFO.name,
    DEVELOPER_INFO.role,
    "Software Engineer",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Case Studies",
  ],
  authors: [{ name: DEVELOPER_INFO.name }],
  openGraph: {
    title: `${DEVELOPER_INFO.name} — ${DEVELOPER_INFO.role}`,
    description: DEVELOPER_INFO.tagline,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/images/sketches/avatar-sketch - Copy.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
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
