/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import Image from "next/image";

export default function MentorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate how many cards to show per view
  const cardsPerView = 4; // Show 4 cards at once on desktop
  const cardWidth = 243.67;
  const gap = 24;
  const slideWidth = cardWidth + gap;

   const mentors = [
    {
      id: 1,
      name: "Mr. V.P. Raja",
      role: "Former Chairman, MERC",
      imgSrc: "/fc/1.jpg",
      imgAlt: "Mr. V.P. Raja portrait",
    },
    {
      id: 2,
      name: "Mr. Ashok Kumar Rajput",
      role: "Former Member (Power Systems), CEA",
      imgSrc: "/fc/2.jpg",
      imgAlt: "Mr. Ashok Kumar Rajput portrait",
    },
    {
      id: 3,
      name: "Dr. Upendra N. Behera",
      role: "Former Chairman, OERC",
      imgSrc: "/fc/3.jpg",
      imgAlt: "Dr. Upendra N. Behera portrait",
    },
    {
      id: 4,
      name: "Mr. B.B Mehta",
      role: "Director(SLDC), OPTCL",
      imgSrc: "/fc/4.jpg",
      imgAlt: "Mr. B.B Mehta portrait",
    },
    {
      id: 5,
      name: "Mr. P.K Agarwal",
      role: "Former Director & CISO, POSOCO",
      imgSrc: "/fc/5.jpg",
      imgAlt: "Mr. P.K Agarwal portrait",
    },
    {
      id: 6,
      name: "Mr. Satyajit Ganguly",
      role: "Former CEO & MD, PXIL",
      imgSrc: "/fc/6.jpg",
      imgAlt: "Mr. Satyajit Ganguly portrait",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    const maxIndex = mentors.length - cardsPerView;
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#8C2428] to-[#D3363B] py-16 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-white"></div>
              <p className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-white text-sm tracking-wider uppercase">
                OUR MENTORS
              </p>
            </div>
            <h2 className="font-red-hat-display font-bold xl:text-[35px] xl:leading-[100%] xl:tracking-[0%] text-white text-5xl capitalize">
              Meet Our Guiding Force
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#9d2e35] transition-all duration-300 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#9d2e35] transition-all duration-300 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}px)`,
            }}
          >
            {mentors.map((mentor, index) => (
              <div
                key={mentor.id}
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
                  src={mentor.imgSrc}
                  alt={mentor.imgAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Share Button */}
              </div>
              {/* <button className="absolute cursor-pointer overflow-visible z-50 top-[68%] right-6 w-8 h-8 bg-[#D3363B] rounded flex items-center justify-center text-white hover:bg-[#9d2e35]  ">
                <Share2 size={18} />
              </button> */}

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
  );
}
