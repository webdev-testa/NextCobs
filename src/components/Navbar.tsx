"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEVELOPER_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUp, ArrowDown, ChevronDown } from "lucide-react";

const HOME_SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "studio", label: "Studio" },
  { id: "selected-work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "notes", label: "Notes" },
  { id: "contact", label: "Get in Touch" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const sentinel = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const menuOpener = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    if (sentinel.current) observer.observe(sentinel.current);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (document.activeElement?.closest("#mobile-navigation")) menuOpener.current?.focus();
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    if (!isHome) return;
    // Adapted from the 21st/interior.dev scroll-spy pattern: measure once per frame,
    // and update only the active section. Native anchors own navigation/history.
    let frame = 0;
    const measure = () => {
      frame = 0;
      const readingLine = (header.current?.getBoundingClientRect().height ?? 64) + 32;
      let current = HOME_SECTIONS[0].id;
      for (const section of HOME_SECTIONS) {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= readingLine) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = "contact";
      setActiveSection(previous => previous === current ? previous : current);
    };
    const sync = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const resize = new ResizeObserver(sync);
    HOME_SECTIONS.forEach(section => {
      const node = document.getElementById(section.id);
      if (node) resize.observe(node);
    });
    if (header.current) resize.observe(header.current);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [isHome]);

  const pageLinks = [
    { label: "Home", href: "/", isActive: false },
    { label: "Case Studies", href: "/work", isActive: pathname.startsWith("/work") },
    { label: "About", href: "/about", isActive: pathname === "/about" },
    { label: "Notes", href: "/notes", isActive: pathname.startsWith("/notes") },
    { label: "Pursuits", href: "/pursuits", isActive: pathname.startsWith("/pursuits") },
  ];
  const homeLinks = HOME_SECTIONS.map(section => ({ label: section.label, href: `#${section.id}`, isActive: section.id === activeSection }));
  const navLinks = isHome ? homeLinks.slice(0, -1) : pageLinks;
  const index = HOME_SECTIONS.findIndex(section => section.id === activeSection);
  const current = HOME_SECTIONS[index];
  const closeMenu = () => setMobileMenuOpen(false);
  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    menuOpener.current = event.currentTarget;
    setMobileMenuOpen(open => !open);
  };
  const sectionControls = () => (
    <div role="group" aria-label="Previous and next home sections" className="flex items-center gap-1">
      {[-1, 1].map(direction => {
        const target = HOME_SECTIONS[index + direction];
        const label = `${direction < 0 ? "Previous" : "Next"}: ${target?.label ?? "end of page"}`;
        const Icon = direction < 0 ? ArrowUp : ArrowDown;
        const classes = "inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#f1f1ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";
        return target ? (
          <Link key={direction} href={`#${target.id}`} aria-label={label} title={label} onClick={closeMenu} className={classes}><Icon size={17} aria-hidden="true" /></Link>
        ) : (
          <button key={direction} type="button" disabled aria-label={direction < 0 ? "No previous section" : "No next section"} className={`${classes} opacity-30`}><Icon size={17} aria-hidden="true" /></button>
        );
      })}
    </div>
  );

  return (
    <>
      <div ref={sentinel} className="absolute top-0 h-px w-px" aria-hidden="true" />
      <header ref={header} className={`sticky top-0 z-50 w-full bg-white border-b transition-colors duration-200 ${scrolled ? "border-[#e6e6e6]" : "border-[#f1f1f1]"}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-16 flex items-center justify-between gap-4">
          <Link href={isHome ? "#intro" : "/"} aria-label={isHome ? "Ammardito Shafaat, return to Intro" : "Ammardito Shafaat, return to home"} onClick={closeMenu} className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            <span className="w-8 h-8 shrink-0 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">AS</span>
            <span className="flex flex-col">
              <span className="font-bold text-base tracking-tight">{DEVELOPER_INFO.name}</span>
              <span className="text-[11px] font-mono text-[#5c5c5c] leading-none">{DEVELOPER_INFO.role}</span>
            </span>
          </Link>
          <nav aria-label={isHome ? "Home sections" : "Main navigation"} className="hidden lg:flex items-center gap-4 xl:gap-5">
            {navLinks.map(item => (
              <Link key={item.href} href={item.href} aria-current={item.isActive ? (isHome ? "location" : "page") : undefined} className={`inline-flex min-h-11 items-center text-sm relative rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${item.isActive ? "text-black font-semibold" : "text-[#5c5c5c] hover:text-black"}`}>
                {item.label}
                {item.isActive && <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-black rounded-full" />}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            {isHome && <div className="border-l border-[#e6e6e6] pl-2">{sectionControls()}</div>}
            <Link href={isHome ? "#contact" : "/#contact"} aria-current={isHome && activeSection === "contact" ? "location" : undefined} className="inline-flex min-h-11 items-center px-4 rounded-full text-xs font-semibold text-white bg-black hover:bg-[#222222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Get in Touch</Link>
          </div>
          <button onClick={toggleMenu} className="lg:hidden p-3 rounded-full hover:bg-[#f7f7f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
        {isHome && (
          <div className="lg:hidden border-t border-[#f1f1f1] px-4 sm:px-6 flex items-center justify-between h-11">
            <button type="button" onClick={toggleMenu} aria-label={`Current section: ${current.label}. Choose section`} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              {current.label}<ChevronDown size={15} aria-hidden="true" />
            </button>
            {sectionControls()}
          </div>
        )}
        {mobileMenuOpen && (
          <nav id="mobile-navigation" aria-label={isHome ? "Mobile home sections" : "Mobile navigation"} className="absolute top-full inset-x-0 max-h-[calc(100dvh-7rem)] overflow-y-auto border-b border-[#e6e6e6] bg-white px-6 py-4 flex flex-col gap-1 shadow-lg lg:hidden">
            {(isHome ? homeLinks : pageLinks).map(item => (
              <Link key={item.href} href={item.href} onClick={closeMenu} aria-current={item.isActive ? (isHome ? "location" : "page") : undefined} className={`min-h-11 flex items-center text-sm border-b border-[#f1f1f1] ${item.isActive ? "font-semibold text-black" : "text-[#555555]"}`}>{item.label}</Link>
            ))}
            {!isHome && <>
              <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="min-h-11 flex items-center text-sm">GitHub</a>
              <Link href="/#contact" onClick={closeMenu} className="min-h-11 flex items-center text-sm">Get in Touch</Link>
            </>}
          </nav>
        )}
      </header>
    </>
  );
}
