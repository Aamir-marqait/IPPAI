/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export function VideoPlayer({ 
  src, 
  width = 1100, 
  height = 400, 
  className = "",
  alt = "Video content"
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className={`relative border-2 border-red-500 rounded-lg overflow-hidden ${className}`}
      style={{ width: width, height: height }}
    >
      <video
        ref={setVideoRef}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Button Overlay */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 group"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <div className="bg-red-500 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" fill="white" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          )}
        </div>
      </button>
    </div>
  );
}