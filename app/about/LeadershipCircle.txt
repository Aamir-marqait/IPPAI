"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  {
    src: "/user.jpg",
    alt: "Asok Dasgupta",
    name: "Asok Dasgupta",
    occupation: "President",
    description:
      "Leading IPPAI's strategic vision and fostering partnerships across India's power sector ecosystem.",
    size: 55,
    style: { top: "3%", left: "60%" },
  },
  {
    src: "/user.jpg",
    alt: "Dharun Kapur",
    name: "Dharun Kapur",
    occupation: "Vice President",
    description:
      "Supporting organizational leadership and driving initiatives for sustainable energy development.",
    size: 115,
    style: { top: "1%", left: "74%" },
  },
  {
    src: "/user.jpg",
    alt: "Gulrez Patwegar",
    name: "Gulrez Patwegar",
    occupation: "Secretary General",
    description:
      "Managing administrative operations and coordinating key stakeholder engagements across the organization.",
    size: 140,
    style: { top: "37%", left: "93%" },
  },
  {
    src: "/user.jpg",
    alt: "Anil Rai",
    name: "Anil Rai",
    occupation: "Head, Business Development",
    description:
      "Expanding IPPAI's reach through strategic partnerships and new business opportunities in the power sector.",
    size: 120,
    style: { top: "68%", left: "85%" },
  },
  {
    src: "/user.jpg",
    alt: "Adv Divya Sood",
    name: "Adv Divya Sood",
    occupation: "Head, Regulatory Affairs",
    description:
      "Expert in power sector regulations, navigating policy frameworks and compliance matters.",
    size: 90,
    style: { top: "78%", left: "70%" },
  },
  {
    src: "/user.jpg",
    alt: "Aren Morena",
    name: "Aren Morena",
    occupation: "Human Resources",
    description:
      "Building and nurturing IPPAI's talent pool, fostering a culture of excellence and collaboration.",
    size: 110,
    style: { top: "68%", left: "45%" },
  },
  {
    src: "/user.jpg",
    alt: "Purabi Rana",
    name: "Purabi Rana",
    occupation: "Research Associate",
    description:
      "Conducting in-depth research on energy policy, market trends, and regulatory developments.",
    size: 100,
    style: { top: "40%", left: "36%" },
  },
  {
    src: "/user.jpg",
    alt: "Shelton Prabhakar",
    name: "Shelton Prabhakar",
    occupation: "Marketing Associate",
    description:
      "Amplifying IPPAI's message and engagement through strategic marketing and communications.",
    size: 120,
    style: { top: "15%", left: "40%" },
  },
];

const defaultCenterMember = {
  src: "/user.jpg",
  alt: "Asok Dasgupta",
  name: "Asok Dasgupta",
  occupation: "President",
  description:
    "Leading IPPAI's strategic vision and fostering partnerships across India's power sector ecosystem.",
};

export default function LeadershipCircle() {
  const [centerMember, setCenterMember] = useState(defaultCenterMember);
  const [currentIndex, setCurrentIndex] = useState(0);

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
            Meet Our Leadership Team
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
            The Driving Force of IPPAI
          </h2>
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
            Our dedicated leadership team brings together decades of expertise
            and vision, steering IPPAI&apos;s mission to transform India&apos;s
            power sector through strategic collaboration and innovation.
          </p>
        </div>

        {/* Content: Image Left, Description Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-[800px] mx-auto">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <div className="relative w-[300px] h-[300px]">
              <Image
                src={centerMember.src}
                alt={centerMember.alt}
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

            {/* Occupation */}
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
              {centerMember.occupation}
            </div>

            {/* Description */}
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
              {centerMember.description}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => {
                  const newIndex =
                    currentIndex <= 0 ? members.length - 1 : currentIndex - 1;
                  setCurrentIndex(newIndex);
                  const member = members[newIndex];
                  setCenterMember({
                    src: member.src,
                    alt: member.alt,
                    name: member.name,
                    occupation: member.occupation,
                    description: member.description,
                  });
                }}
                className="w-12 h-12 rounded-full border-2 border-gray-800 cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white group"
                aria-label="Previous member"
              >
                <ChevronLeft className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />
              </button>

              <button
                onClick={() => {
                  const newIndex =
                    currentIndex >= members.length - 1 ? 0 : currentIndex + 1;
                  setCurrentIndex(newIndex);
                  const member = members[newIndex];
                  setCenterMember({
                    src: member.src,
                    alt: member.alt,
                    name: member.name,
                    occupation: member.occupation,
                    description: member.description,
                  });
                }}
                className="w-12 h-12 rounded-full border-2 border-gray-800 cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white group"
                aria-label="Next member"
              >
                <ChevronRight className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
