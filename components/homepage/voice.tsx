"use client";

import { useRef, useState } from "react";

import { VideoCard } from "../video-card";
import { VideoModal } from "../ui/video-modal";

export function VoicesInAction() {
  const scrollBy = (dir: -1 | 1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // const scrollBy = (dir: -1 | 1) => {
  //   scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  // };

  const handleVideoClick = (videoSrc: string, title: string) => {
    setActiveVideo({ src: videoSrc, title });
    setModalOpen(true);
  };

  const items = [
    // {
    //   imgSrc: "/voice/1.png",
    //   imgAlt: "Video thumbnail",
    //   date: "Aug 10, 2025",
    //   title: "about IRPRI",
    //   description:
    //     "Explore how young leaders are taking charge of community projects, inspiring peers, and creating real social impact.",
    //   videoSrc: "/voice/1.mp4",
    // },
    {
      imgSrc: "/voice/2.png",
      imgAlt: "Video thumbnail",
      date: "Sep 10, 2025",
      title: "Pricing of electricity",
      description:
        "Platform for sharing opportunities, publications, and award programs with civic impact.",
      videoSrc: "/voice/2.mp4",
    },
    {
      imgSrc: "/voice/3.png",
      imgAlt: "Video thumbnail",
      date: "Aug 10, 2025",
      title: "Additional Surcharge",
      description:
        "Unique confluences of industry and civil society engaging for a brighter future.",
      videoSrc: "/voice/3.mp4",
    },
    {
      imgSrc: "/voice/4.png",
      imgAlt: "Video thumbnail",
      date: "Aug 10, 2025",
      title: "Price of power and reforms (UDAY)",
      description:
        "Leaders discuss sector transformation and inclusive policy initiatives.",
      videoSrc: "/voice/4.mp4",
    },
    {
      imgSrc: "/voice/5.png",
      imgAlt: "Video thumbnail",
      date: "Aug 12, 2025",
      title: "Electricity Duty",
      description:
        "Hands-on workshops showcasing innovation and collaborative problem solving.",
      videoSrc: "/voice/5.mp4",
    },
    {
      imgSrc: "/voice/6.png",
      imgAlt: "Video thumbnail",
      date: "Aug 12, 2025",
      title: "Open Access",
      description:
        "Hands-on workshops showcasing innovation and collaborative problem solving.",
      videoSrc: "/voice/6.mp4",
    },
    {
      imgSrc: "/voice/7.png",
      imgAlt: "Video thumbnail",
      date: "Aug 12, 2025",
      title: "Force majure",
      description:
        "Hands-on workshops showcasing innovation and collaborative problem solving.",
      videoSrc: "/voice/7.mp4",
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
                Latest Videos
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
              className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-muted/30 text-muted-foreground hover:bg-muted/50 transition"
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
              className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-(--brand-red)/10 text-[color:var(--brand-red)] hover:bg-(--brand-red)/15 transition"
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
              <VideoCard
                key={idx}
                {...it}
                onClick={
                  it.videoSrc
                    ? () => handleVideoClick(it.videoSrc, it.title)
                    : undefined
                }
              />
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

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          open={modalOpen}
          onOpenChange={(open) => {
            setModalOpen(open);
            if (!open) setActiveVideo(null);
          }}
          videoSrc={activeVideo.src}
          title={activeVideo.title}
        />
      )}
    </section>
  );
}
