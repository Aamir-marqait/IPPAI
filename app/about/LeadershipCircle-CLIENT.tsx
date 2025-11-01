"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  image: string;
  altText: string;
  name: string;
  position: string;
  bio: string;
  featured: boolean;
}

interface LeadershipCircleProps {
  smallTitle: string;
  mainTitle: string;
  description?: string;
  teamMembers: TeamMember[];
  featuredMember: TeamMember | null;
}

export default function LeadershipCircle({
  smallTitle,
  mainTitle,
  description,
  teamMembers,
  featuredMember,
}: LeadershipCircleProps) {
  const [centerMember, setCenterMember] = useState(
    featuredMember || teamMembers[0] || null
  );
  const [currentIndex, setCurrentIndex] = useState(
    featuredMember 
      ? teamMembers.findIndex(m => m.featured) 
      : 0
  );

  if (!centerMember || teamMembers.length === 0) {
    return (
      <section
        className="relative w-full min-h-screen py-12 flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(232.4deg, rgba(211, 54, 59, 0) 0%, rgba(211, 54, 59, 0.2) 43.28%, rgba(211, 54, 59, 0) 100%), #000000",
        }}
      >
        <div className="max-w-[1100px] mx-auto w-full px-4 z-10">
          <div className="text-center text-white text-lg">
            No team members available at the moment.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative w-full min-h-screen py-12 flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(232.4deg, rgba(211, 54, 59, 0) 0%, rgba(211, 54, 59, 0.2) 43.28%, rgba(211, 54, 59, 0) 100%), #000000",
      }}
    >
      <div className="max-w-[1100px] mx-auto w-full px-4 z-10">
        {/* Top: Title and Subtitle */}
        <div className="text-center mb-20">
          <div
            className="uppercase text-center font-red-hat-display mb-2"
            style={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#D3363B",
            }}
          >
            {smallTitle}
          </div>
          <h2
            className="text-center font-red-hat-display mb-3"
            style={{
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#FFFFFF",
            }}
          >
            {mainTitle}
          </h2>
          {description && (
            <p
              className="text-center font-poppins max-w-[40rem] mx-auto"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "28px",
                letterSpacing: "0%",
                color: "#e0e0e0",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Content: Image Left, Description Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-[800px] mx-auto">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <div className="relative w-[300px] h-[300px]">
              <Image
                src={centerMember.image}
                alt={centerMember.altText}
                fill
                className="object-cover rounded-lg transition-all duration-300 ease-in-out"
                priority
              />
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Name */}
            <div
              className="font-red-hat-display transition-all duration-300 ease-in-out"
              style={{
                fontWeight: 800,
                fontSize: "42px",
                lineHeight: "64px",
                letterSpacing: "1%",
                color: "#D3363B",
              }}
            >
              {centerMember.name}
            </div>

            {/* Position */}
            <div
              className="font-poppins transition-all duration-300 ease-in-out"
              style={{
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "144%",
                letterSpacing: "3%",
                color: "#FFFFFF",
              }}
            >
              {centerMember.position}
            </div>

            {/* Bio */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                fontFamily: "poppins",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "160%",
                letterSpacing: "0%",
                color: "#d6d6d6",
              }}
            >
              {centerMember.bio}
            </div>

            {/* Navigation Arrows */}
            {teamMembers.length > 1 && (
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => {
                    const newIndex =
                      currentIndex <= 0 ? teamMembers.length - 1 : currentIndex - 1;
                    setCurrentIndex(newIndex);
                    setCenterMember(teamMembers[newIndex]);
                  }}
                  className="w-12 h-12 rounded-full border-2 border-gray-800 cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white group"
                  aria-label="Previous member"
                >
                  <ChevronLeft className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />
                </button>

                <button
                  onClick={() => {
                    const newIndex =
                      currentIndex >= teamMembers.length - 1 ? 0 : currentIndex + 1;
                    setCurrentIndex(newIndex);
                    setCenterMember(teamMembers[newIndex]);
                  }}
                  className="w-12 h-12 rounded-full border-2 border-gray-800 cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white group"
                  aria-label="Next member"
                >
                  <ChevronRight className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}