"use client";

import Image from "next/image";

const PARTNERS = [
  { name: "LG Sinar Mas", badge: "Software Engineer", image: "lgsmlogo.webp", width: 2560, height: 346, crop: [0, 0, 2560, 346], displayHeight: 28 },
  { name: "Bank Indonesia", badge: "Co-Trainer", image: "BI_Logo.png", width: 2201, height: 697, crop: [1, 151, 2200, 395], displayHeight: 28 },
  { name: "Google Cloud Arcade", badge: "Facilitator", image: "Arcade.webp", width: 864, height: 865, crop: [0, 0, 864, 865], displayHeight: 44 },
  { name: "Bangkit Academy", badge: "Mentor", image: "Bangkit-logo.png", width: 600, height: 141, crop: [0, 0, 600, 141], displayHeight: 32 },
  { name: "Mekari", badge: "Alum", image: "logo-mekari.svg", width: 695, height: 135, crop: [0, 0, 695, 135], displayHeight: 28 },
  { name: "Institut Teknologi Bandung", badge: "Alum", image: "Logo_Institut_Teknologi_Bandung.png", width: 512, height: 512, crop: [9, 10, 497, 497], displayHeight: 44 },
  { name: "Dr. Meoww", badge: "Client", image: "Dr.Meow.png", width: 1080, height: 1080, crop: [66, 460, 949, 147], displayHeight: 28 },
  { name: "byGewa", badge: "Client", image: "logo by gewa.png", width: 2004, height: 1093, crop: [206, 273, 1591, 547], displayHeight: 36 },
];

export function PartnerMarquee() {
  return (
    <section
      aria-label="Partner organizations and client ecosystems"
      className="w-full bg-[#ffffff] border-y border-[#f1f1f1] py-5 sm:py-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-3">
        {/* Eyebrow caption */}
        <div className="flex items-center justify-between gap-2.5 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1ea64a] shrink-0" />
            <p className="text-xs sm:text-[13px] text-[#555555] font-mono leading-relaxed">
              Partnering as a{" "}
              <span className="font-semibold text-[#000000] font-sans">
                Full Stack Engineer, AI, or Mentor
              </span>{" "}
              with teams & clients at:
            </p>
          </div>
        </div>
      </div>

      {/* Infinite running logo marquee with soft edge masks (pauses on hover) */}
      <div
        className="marquee-container group relative flex max-w-[1400px] mx-auto overflow-hidden select-none py-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {[0, 1, 2].map((track) => (
          <div
            key={track}
            aria-hidden={track > 0 ? true : undefined}
            className="partner-marquee-track flex shrink-0 items-center gap-5 sm:gap-6 animate-marquee pr-5 sm:pr-6"
          >
            {PARTNERS.map((partner) => {
              // Use the visible artwork bounds so transparent margins don't shrink a logo.
              const [left, top, width, height] = partner.crop;
              const scale = Math.min(partner.displayHeight / height, 180 / width);
              return (
                <div key={partner.name} className="partner-marquee-item flex shrink-0 flex-col items-center gap-2 px-1 whitespace-nowrap">
                  <div className="partner-marquee-logo flex h-11 items-center gap-2">
                    <div className="relative overflow-hidden shrink-0" style={{ width: width * scale, height: height * scale }}>
                      <Image
                        src={`/images/marque/${partner.image}`}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                        sizes={`${Math.ceil(partner.width * scale)}px`}
                        className="absolute max-w-none"
                        style={{ width: partner.width * scale, height: partner.height * scale, left: -left * scale, top: -top * scale }}
                      />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666]">{partner.badge}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
