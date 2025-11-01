"use client";

import { useRef, useState } from "react";
import { VideoCard } from "../video-card";
import { VideoModal } from "../ui/video-modal";

interface Video {
  _id: string;
  videoFile: string;
  videoThumbnail: string;
  videoTitle: string;
  videoDescription?: string;
  videoDuration?: string;
  videoDatePublished?: string;
  videoCategory?: string;
}

interface LatestVideosClientProps {
  videos: Video[];
}

export function LatestVideosClient({ videos }: LatestVideosClientProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const scrollBy = (dir: -1 | 1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const handleVideoClick = (videoSrc: string, title: string) => {
    setActiveVideo({ src: videoSrc, title });
    setModalOpen(true);
  };

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Recent";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className="w-screen bg-background py-10 md:py-14">
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
                VIDEOS
              </span>
            </div>
            <h2 className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-[#141414]">
              Latest Videos
            </h2>
            <p className="mt-3 max-w-[720px] text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-7 text-[#141414]/70">
              Unique confluences of stalwarts from government, industry and
              civil society engaging and deliberating for a brighter future.
            </p>
          </div>

          {/* Controls - hidden on mobile, shown on md+ */}
          {videos.length > 1 && (
            <div className="hidden items-center gap-3 pt-3 md:flex">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollBy(-1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-muted/30 text-muted-foreground hover:bg-muted/50 transition"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-[#D3363B]/10 text-[#D3363B] hover:bg-[#D3363B]/15 transition"
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
          )}
        </div>

        {/* Cards scroller */}
        <div className="mt-8">
          {videos.length > 0 ? (
            <>
              <div
                ref={scrollerRef}
                className="no-scrollbar flex gap-6 overflow-x-auto scroll-px-4 snap-x snap-mandatory pb-2"
              >
                {videos.map((video) => (
                  <VideoCard
                    key={video._id}
                    imgSrc={video.videoThumbnail}
                    imgAlt={video.videoTitle}
                    date={formatDate(video.videoDatePublished)}
                    title={video.videoTitle}
                    description={video.videoDescription || ""}
                    videoSrc={video.videoFile}
                    onClick={() => handleVideoClick(video.videoFile, video.videoTitle)}
                  />
                ))}
              </div>

              {/* Controls on mobile */}
              {videos.length > 1 && (
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
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border bg-[#D3363B]/10 text-[#D3363B]"
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
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No videos available at the moment.</p>
            </div>
          )}
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