"use client";

import { useRef } from "react";
import { EventCard } from "../event-card";

export function VoicesInAction() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const items = [
    {
      imgSrc: "/home/voice1.png",
      imgAlt: "Participants group photo",
      date: "Aug 10, 2025",
      title: "Breaking Barriers: Youth Shaping Tomorrow",
      description:
        "Explore how young leaders are taking charge of community projects, inspiring peers, and creating real social impact.",
    },
    {
      imgSrc: "/home/voice2.png",
      imgAlt: "Conference speakers on podium",
      date: "Sep 10, 2025",
      title: "Breaking Barriers: Youth Shaping Tomorrow",
      description:
        "Platform for sharing opportunities, publications, and award programs with civic impact.",
    },
    {
      imgSrc: "/home/voice3.png",
      imgAlt: "Award ceremony",
      date: "Aug 10, 2025",
      title: "Breaking Barriers: Youth Shaping Tomorrow",
      description:
        "Unique confluences of industry and civil society engaging for a brighter future.",
    },
    {
      imgSrc: "/home/voice1.png",
      imgAlt: "Panel discussion",
      date: "Aug 10, 2025",
      title: "Breaking Barriers: Youth Shaping Tomorrow",
      description:
        "Leaders discuss sector transformation and inclusive policy initiatives.",
    },
    {
      imgSrc: "/home/voice2.png",
      imgAlt: "Community workshop",
      date: "Aug 12, 2025",
      title: "Breaking Barriers: Youth Shaping Tomorrow",
      description:
        "Hands-on workshops showcasing innovation and collaborative problem solving.",
    },
  ];

  return (
    <section className="w-screen bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3">
              <span
                className="h-4 w-[4px] rounded-full bg-[#D3363B]"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm md:text-base xl:text-base font-bold font-red-hat-display leading-none uppercase text-[#D3363B]">
                Latest Events
              </span>
            </div>
            <h2 className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-[#141414]">
              Voices In Action
            </h2>
            <p className="mt-3 max-w-[720px] text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-7 text-[#141414]/70">
              Unique confluences of stalwarts from government, industry and
              civil society engaging and deliberating for a brighter future.
            </p>
          </div>

          {/* Controls - hidden on mobile, shown on md+ */}
          <div className="hidden items-center gap-3 pt-3 md:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-muted/30 text-muted-foreground hover:bg-muted/50 transition"
            >
              {/* Left chevron */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15 6L9 12L15 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-(--brand-red)/10 text-[color:var(--brand-red)] hover:bg-(--brand-red)/15 transition"
            >
              {/* Right chevron */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M9 6L15 12L9 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards scroller */}
        <div className="mt-8">
          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-px-4 snap-x snap-mandatory pb-2"
          >
            {items.map((it, idx) => (
              <EventCard key={idx} {...it} />
            ))}
          </div>

          {/* Controls on mobile */}
          <div className="mt-4 flex items-center justify-end gap-3 md:hidden">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-muted/30 text-muted-foreground"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15 6L9 12L15 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-(--brand-red)/10 text-[color:var(--brand-red)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M9 6L15 12L9 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
