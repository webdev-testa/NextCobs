import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Ammardito Shafaat — Full Stack Engineer & AI Project Lead",
  description:
    "Portfolio of Ammardito Shafaat. Full Stack Engineer, Freelance Builder, and AI Project Lead at LG Sinar Mas based in Jakarta.",
  keywords: [
    "Ammardito Shafaat",
    "Full Stack Engineer",
    "AI Project Lead",
    "React",
    "TypeScript",
    "Capacitor",
    "Java Spring Boot",
    "Jakarta",
    "Portfolio",
  ],
  authors: [{ name: "Ammardito Shafaat" }],
  openGraph: {
    title: "Ammardito Shafaat — Full Stack Engineer & AI Project Lead",
    description:
      "Building practical full-stack systems, leading AI initiatives, and exploring story-driven worlds.",
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
        {children}
      </body>
    </html>
  );
}
