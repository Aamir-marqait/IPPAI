"use client";

import React from "react";
import { VideoContainer } from "@/components/ui/video-container";

export default function HeroPage() {
  return (
    <div className="max-w-[1100px] mx-auto pt-20 sm:pt-32 pb-10 px-2 sm:px-4 w-full">
      {/* Breadcrumb */}

      {/* Video Container */}
      <div className="rounded-xl overflow-hidden w-full flex justify-center">
        <VideoContainer
          width={1100}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  );
}
