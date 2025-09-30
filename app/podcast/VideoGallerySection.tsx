"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const videos = [
  {
    thumb: "/vid1.png",
    src: "/video.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video2.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video3.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video4.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video5.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video6.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video7.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video8.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    thumb: "/vid1.png",
    src: "/video9.mp4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
];

export default function VideoGallerySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState("podcasts");

  return (
    <section className="w-full flex justify-center bg-white py-8 sm:py-12 px-2">
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        {/* Tabs Container with Slider */}
        <div className="relative bg-gray-200 rounded-full p-1 mb-2 inline-flex">
          {/* Slider Background */}
          <div
            className={`absolute top-1 bottom-1 bg-[#D3363B] rounded-full transition-all duration-300 ease-in-out shadow-[0px_4px_4px_0px_#D3363B1F] ${
              activeTab === "podcasts"
                ? "left-1 w-[calc(50%-2px)]"
                : "left-[calc(50%+1px)] w-[calc(50%-2px)]"
            }`}
          />

          {/* Tab Buttons */}
          <button
            onClick={() => setActiveTab("podcasts")}
            className={`relative z-10 px-7 py-2.5 font-medium text-base leading-none tracking-normal text-center transition-colors duration-300 ${
              activeTab === "podcasts"
                ? "text-white"
                : "text-[#161C2D] cursor-pointer"
            }`}
            style={{
              fontFamily: "Work Sans",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Our Podcasts
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`relative z-10 px-7 py-2.5 font-medium text-base leading-none tracking-normal text-center transition-colors duration-300 ${
              activeTab === "gallery"
                ? "text-white"
                : "text-[#161C2D] cursor-pointer"
            }`}
            style={{
              fontFamily: "Work Sans",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Video Gallery
          </button>
        </div>
        {/* Tab Content */}
        {activeTab === "podcasts" && (
          <div className="w-full">
            <div
              className="text-center text-[#4D5756] text-base leading-6 tracking-normal max-w-xl mb-7 mx-auto"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Discover insights and conversations that shape India&apos;s energy
              future through our exclusive podcast series.
            </div>
            {/* Podcast content placeholder */}
            <div className="w-full flex justify-center items-center py-16">
              <p className="text-gray-500 text-lg font-medium">
                No video is available at the moment.
              </p>
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="w-full">
            <div
              className="text-center text-[#4D5756] text-base leading-6 tracking-normal max-w-xl mb-7 mx-auto"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              See the faces behind the impact, witness the transformative power
              of our programmes and explore visual stories of hope and
              resilience.
            </div>
            {/* Video Grid */}
            {videos.length > 0 ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
                {videos.map((video, idx) => (
                  <Dialog
                    key={idx}
                    open={modalOpen && activeVideo?.src === video.src}
                    onOpenChange={(open) => {
                      setModalOpen(open);
                      if (!open) setActiveVideo(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer group"
                        onClick={() => {
                          setActiveVideo(video);
                          setModalOpen(true);
                        }}
                      >
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-sm border border-[#ececec]">
                          <Image
                            src={video.thumb}
                            alt="video thumbnail"
                            fill
                            className="object-cover w-full h-full"
                          />
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className="rounded-full bg-white/85 flex items-center justify-center transition-transform group-hover:scale-110 shadow"
                              style={{ width: 70, height: 70 }}
                            >
                              <div
                                className="flex items-center justify-center"
                                style={{
                                  fontFamily: "Font Awesome 6 Free",
                                  fontWeight: 900,
                                  fontSize: "30px",
                                  background:
                                    "linear-gradient(180deg, #E33E5F 0%, #B00A2B 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                }}
                              >
                                ▶
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 font-poppins text-base font-semibold text-[#222]">
                          {video.title}
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none">
                      <div className="w-full h-full flex items-center justify-center bg-black/70 p-0">
                        <video
                          src={video.src}
                          controls
                          autoPlay
                          className="rounded-lg w-full h-full max-h-[70vh] bg-black"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center py-16">
                <p className="text-gray-500 text-lg font-medium">
                  No video is available at the moment.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
