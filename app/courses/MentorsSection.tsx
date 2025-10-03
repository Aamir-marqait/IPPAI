"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";

export default function MentorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mentors = [
    {
      id: 1,
      name: "Cheryl Curry",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Willie Diaz",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Jimmy Sifuentes",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Micheal Hammond",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mentors.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < mentors.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#9d2e35] to-[#d84a4a] py-16 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-white"></div>
              <p className="text-white text-sm font-medium tracking-wider uppercase">
                OUR MENTORS
              </p>
            </div>
            <h2 className="text-white text-5xl font-bold">
              Meet Our Guiding Force
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#9d2e35] transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#9d2e35] transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className="bg-white rounded-[4.17px] overflow-hidden group relative"
              style={{
                width: "100%",
                maxWidth: "243.67px",
                height: "342.34px",
                margin: "0 auto",
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-[260px] overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Share Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-[#d84a4a] rounded flex items-center justify-center text-white hover:bg-[#9d2e35] transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Info Container */}
              <div className="p-5">
                <h3 className="text-gray-900 text-lg font-bold mb-1">
                  {mentor.name}
                </h3>
                <p className="text-[#d84a4a] text-sm font-medium">
                  {mentor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
