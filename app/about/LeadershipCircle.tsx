"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const members = [
  // Circle around the central image (positions are % relative to container)
  {
    src: "/about/user2.png",
    alt: "Dr. Priya Sharma",
    name: "Dr. Priya Sharma",
    occupation: "Director of Energy Policy",
    description:
      "Leading renewable energy initiatives with 15+ years of experience in sustainable power solutions.",
    size: 55,
    style: { top: "3%", left: "60%" },
  },
  {
    src: "/about/user3.png",
    alt: "Rajesh Kumar",
    name: "Rajesh Kumar",
    occupation: "Chief Technology Officer",
    description:
      "Pioneering smart grid technologies and digital transformation in the power sector.",
    size: 115,
    style: { top: "1%", left: "74%" },
  },
  {
    src: "/about/user2.png",
    alt: "Ms. Anjali Verma",
    name: "Ms. Anjali Verma",
    occupation: "Head of Regulatory Affairs",
    description:
      "Expert in power sector regulations with deep understanding of compliance frameworks.",
    size: 140,
    style: { top: "37%", left: "93%" },
  },
  {
    src: "/about/user3.png",
    alt: "Dr. Suresh Patel",
    name: "Dr. Suresh Patel",
    occupation: "Senior Research Advisor",
    description:
      "Leading research in grid modernization and energy storage solutions for India.",
    size: 120,
    style: { top: "68%", left: "85%" },
  },
  {
    src: "/about/user2.png",
    alt: "Kavita Singh",
    name: "Kavita Singh",
    occupation: "Operations Director",
    description:
      "Streamlining power sector operations with innovative management strategies.",
    size: 90,
    style: { top: "78%", left: "70%" },
  },
  {
    src: "/about/user1.png",
    alt: "Arjun Mehta",
    name: "Arjun Mehta",
    occupation: "Strategic Planning Head",
    description:
      "Developing long-term strategies for sustainable power infrastructure development.",
    size: 110,
    style: { top: "68%", left: "45%" },
  },
  {
    src: "/about/user2.png",
    alt: "Dr. Ravi Gupta",
    name: "Dr. Ravi Gupta",
    occupation: "Innovation Lead",
    description:
      "Driving technological innovation in renewable energy and smart power systems.",
    size: 100,
    style: { top: "40%", left: "36%" },
  },
  {
    src: "/about/user3.png",
    alt: "Neha Agarwal",
    name: "Neha Agarwal",
    occupation: "Policy Research Manager",
    description:
      "Analyzing policy impacts and shaping regulatory frameworks for power sector growth.",
    size: 120,
    style: { top: "15%", left: "40%" },
  },
];

const defaultCenterMember = {
  src: "/about/user1.png",
  alt: "Mr. V.P. Raja",
  name: "Mr. V.P. Raja",
  occupation: "Former Chairman, Maharashtra Electricity Regulatory Commission",
  description:
    "The experience and competence of our team will help build your business successful.",
};

export default function LeadershipCircle() {
  const [centerMember, setCenterMember] = useState(defaultCenterMember);
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 means showing default center member
  const [originalCenterMember] = useState(defaultCenterMember);
  const [rotationOffset, setRotationOffset] = useState(0);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (members.length + 1);
        
        if (nextIndex === members.length) {
          // Show default center member
          setCenterMember(originalCenterMember);
          setRotationOffset(members.length); // Keep rotation going
          return -1;
        } else {
          // Show member at nextIndex
          const member = members[nextIndex];
          setCenterMember({
            src: member.src,
            alt: member.alt,
            name: member.name,
            occupation: member.occupation,
            description: member.description,
          });
          setRotationOffset(nextIndex + 1); // Always increment for animation
          return nextIndex;
        }
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [originalCenterMember]);

  // Function to get rotated member data (position and size)
  const getRotatedMember = (memberIndex: number) => {
    const rotatedIndex = (memberIndex + rotationOffset) % members.length;
    return members[rotatedIndex];
  };

  return (
    <section
      className="relative w-full min-h-screen py-12 flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(232.4deg, rgba(211, 54, 59, 0) 0%, rgba(211, 54, 59, 0.2) 43.28%, rgba(211, 54, 59, 0) 100%), #000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full px-4 z-10">
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
            Advisory Board Members
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
            Leadership at IPPAI
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
            Guided by experienced leaders, experts, and advisors shaping the
            future of India&apos;s power sector.
          </p>
        </div>

        {/* Bottom: Left-Right Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Featured Member */}
          <div className="flex flex-col flex-shrink-0 md:w-sm w-full mb-10 md:mb-0">
            <div className="">
              <div
                className="text-right font-red-hat-display mb-2 flex items-center transition-all duration-300 ease-in-out"
                style={{
                  fontWeight: 800,
                  fontSize: "48px",
                  lineHeight: "64px",
                  letterSpacing: "1%",
                  color: "#D3363B",
                }}
              >
                {centerMember.name}
              </div>
              <div
                className="font-poppins mb-2 transition-all duration-300 ease-in-out"
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
              <div
                className="flex items-center transition-all duration-300 ease-in-out"
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
            </div>
          </div>
          {/* Right: Circle Images */}
          <div className="relative flex-1 min-h-[600px] flex items-center justify-center">
            {/* Central member */}
            <div className="absolute z-20 top-[39%] left-[63%] w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2">
              <div className="relative rounded-full border-[3px] border-white shadow-lg w-[300px] h-[300px] transition-all duration-300 ease-in-out">
                <Image
                  src={centerMember.src}
                  alt={centerMember.alt}
                  fill
                  className="object-cover rounded-full transition-all duration-300 ease-in-out"
                  style={{ borderRadius: "9999px" }}
                  priority
                />
              </div>
            </div>
            {/* Surrounding members */}
            {members.map((m, i) => {
              const rotatedMember = getRotatedMember(i);
              return (
                <div
                  key={i}
                  className="absolute z-10"
                  style={{
                    ...rotatedMember.style,
                    width: rotatedMember.size,
                    height: rotatedMember.size,
                    transform: "translate(-50%, -50%)",
                    transition: "top 1s ease-in-out, left 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out",
                  }}
                >
                  <div
                    className="relative rounded-full border-4 transition-all duration-300 ease-in-out"
                    style={{
                      border: "3px solid #FFF",
                      boxShadow: "0px 0px 15px 0px #1C1D2226",
                      width: rotatedMember.size,
                      height: rotatedMember.size,
                      transform: currentIndex === i ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <Image
                      src={
                        currentIndex === i
                          ? originalCenterMember.src
                          : m.src
                      }
                      alt={
                        currentIndex === i
                          ? originalCenterMember.alt
                          : m.alt
                      }
                      fill
                      className="object-cover rounded-full transition-all duration-300 ease-in-out"
                      style={{ borderRadius: "9999px" }}
                      sizes={`${rotatedMember.size}px`}
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
