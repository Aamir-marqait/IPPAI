"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Mentor } from "@/lib/sanity/queries/courses";

interface MentorsSectionProps {
  mentors: Mentor[];
}

export default function MentorsSection({ mentors }: MentorsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Sort mentors by order
  const sortedMentors = [...mentors].sort((a, b) => a.order - b.order);

  // Desktop shows 4 cards at once, so max scroll is (total - 4)
  const cardsPerView = 4;
  const maxDesktopIndex = Math.max(0, sortedMentors.length - cardsPerView);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      // On mobile: can scroll through all cards
      // On desktop: scroll only until last 4 cards are visible
      const maxIndex = isMobile ? sortedMentors.length - 1 : maxDesktopIndex;
      return prev < maxIndex ? prev + 1 : prev;
    });
  };

  // Calculate max index for button disabled state
  const maxIndex = isMobile ? sortedMentors.length - 1 : maxDesktopIndex;

  // If no mentors, return null
  if (!sortedMentors.length) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-[#8C2428] to-[#D3363B] py-16 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-white"></div>
              <p className="font-red-hat-display font-bold text-white text-sm md:text-base tracking-wider uppercase">
                Faculty Members
              </p>
            </div>
            <h2 className="font-red-hat-display font-bold text-white text-2xl md:text-4xl xl:text-[35px] capitalize">
              Meet Our Guiding Force
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#9d2e35] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#9d2e35] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div className="relative overflow-hidden">
          {/* Mobile: Show 1 card */}
          <div className="md:hidden">
            <div className="flex justify-center">
              <div className="bg-white rounded-[4.17px] overflow-hidden group relative w-full max-w-[280px]">
                {/* Image Container */}
                <div className="relative overflow-hidden w-full aspect-[227/240.63] rounded-t-[4.17px]">
                  <Image
                    src={sortedMentors[currentIndex].image}
                    alt={`${sortedMentors[currentIndex].name} portrait`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="280px"
                  />
                </div>

                {/* Info Container */}
                <div className="px-5 py-7">
                  <h3 className="font-red-hat-display font-bold text-[20px] leading-[19.24px] text-[#0E2A46] mb-1 capitalize">
                    {sortedMentors[currentIndex].name}
                  </h3>
                  <p className="font-sora font-normal text-[14.16px] leading-[26.66px] text-[#D3363B]">
                    {sortedMentors[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop: Show multiple cards with scroll */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 lg:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (243.67 + 24)}px)`,
              }}
            >
              {sortedMentors.map((mentor) => (
                <div
                  key={mentor.name}
                  className="bg-white rounded-[4.17px] overflow-hidden group relative flex-shrink-0"
                  style={{
                    width: "243.67px",
                    height: "342.34px",
                  }}
                >
                  {/* Image Container */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "227px",
                      height: "240.63px",
                      top: "8.33px",
                      left: "8.33px",
                      borderTopLeftRadius: "4.17px",
                      borderTopRightRadius: "4.17px",
                      opacity: 1,
                    }}
                  >
                    <Image
                      src={mentor.image}
                      alt={`${mentor.name} portrait`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Info Container */}
                  <div className="px-5 py-7">
                    <h3 className="font-red-hat-display font-bold xl:text-[20px] xl:leading-[19.24px] xl:tracking-[0%] text-[#0E2A46] text-lg mb-1 capitalize">
                      {mentor.name}
                    </h3>
                    <p className="font-sora font-normal xl:text-[14.16px] xl:leading-[26.66px] xl:tracking-[0%] text-[#D3363B] text-sm">
                      {mentor.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}