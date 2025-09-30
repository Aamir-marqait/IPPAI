"use client";

import { useState } from "react";

interface VideoContainerProps {
  width?: number;
  height?: number;
  className?: string;
}

export function VideoContainer({ 
  width = 1100, 
  height = 400, 
  className = ""
}: VideoContainerProps) {
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
      className={`relative border-2 rounded-lg overflow-hidden ${className}`}
      style={{ width: width, height: height }}
    >
      <video
        ref={setVideoRef}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        controls={false}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Button Overlay */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 group ${
          isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
        }`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {/* Outer div with white background */}
        <div 
          className="rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{
            width: '70.13043212890625px',
            height: '70.81553649902344px',
            background: '#FFFFFFBF',
            opacity: 1
          }}
        >
          {/* Play icon with Font Awesome styling */}
          <div
            className="flex items-center justify-center"
            style={{
              fontFamily: 'Font Awesome 6 Free',
              fontWeight: 900,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              background: 'linear-gradient(180deg, #E33E5F 0%, #B00A2B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </div>
        </div>
      </button>
    </div>
  );
}