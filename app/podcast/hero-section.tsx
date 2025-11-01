"use client";

import React from "react";
import { VideoContainer } from "@/components/ui/video-container";

interface HeroVideo {
  _id: string;
  heroVideoFile: string;
  heroThumbnail: string;
  heroTitle: string;
  heroDescription?: string;
  heroDuration?: string;
}

interface HeroPageProps {
  heroVideo: HeroVideo | null;
}

export default function HeroPage({ heroVideo }: HeroPageProps) {
  // Fallback to default values if no hero video
  const videoSrc = heroVideo?.heroVideoFile || "/voice/2.mp4";
  const thumbnail = heroVideo?.heroThumbnail || "";

  return (
    <div className="max-w-[1100px] mx-auto pt-20 sm:pt-32 pb-10 px-2 sm:px-4 w-full">
      {/* Video Container */}
      <div className="rounded-xl overflow-hidden w-full flex justify-center">
        <VideoContainer
          width={1100}
          height={400}
          className="w-full"
          videoSrc={videoSrc}
          thumbnail={thumbnail}
        />
      </div>

      {/* Optional: Display hero title and description below video */}
      {heroVideo && (heroVideo.heroTitle || heroVideo.heroDescription) && (
        <div className="mt-6 text-center">
          {heroVideo.heroTitle && (
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {heroVideo.heroTitle}
            </h1>
          )}
          {heroVideo.heroDescription && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {heroVideo.heroDescription}
            </p>
          )}
          {heroVideo.heroDuration && (
            <p className="text-sm text-gray-500 mt-2">
              Duration: {heroVideo.heroDuration}
            </p>
          )}
        </div>
      )}
    </div>
  );
}