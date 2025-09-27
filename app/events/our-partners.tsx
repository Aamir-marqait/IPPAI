"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // If you use shadcn, otherwise use clsx or classNames

// Example logos for each row (replace with your assets)
const companiesRow1 = [
  { name: "Jindal Power", logo: "/home/company1.jpg" },
  { name: "Tata", logo: "/home/company2.jpg" },
  { name: "Jaypee", logo: "/home/company3.jpg" },
  { name: "Essar", logo: "/home/company4.jpg" },
  { name: "Adhunik", logo: "/home/company5.jpg" },
  { name: "Suzlon", logo: "/home/company6.jpg" },
];

const companiesRow2 = [
  { name: "Suzlon", logo: "/home/company6.jpg" },
  { name: "Adhunik", logo: "/home/company5.jpg" },
  { name: "Jaypee", logo: "/home/company3.jpg" },
  { name: "Essar", logo: "/home/company4.jpg" },
  { name: "Tata", logo: "/home/company2.jpg" },
  { name: "Jindal Power", logo: "/home/company1.jpg" },
];

export default function OurPartners() {
  // Repeat arrays for smooth infinite scroll
  const row1 = [...companiesRow1, ...companiesRow1];
  const row2 = [...companiesRow2, ...companiesRow2];

  return (
    <section className="bg-white py-10 w-full">
      <div className="max-w-screen mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl xl:text-[36px] font-bold text-center mb-2 leading-none text-[#141414] font-['Red_Hat_Display']">
          Our Partners
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto text-sm md:text-base xl:text-base font-normal leading-7 font-['Poppins']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        {/* Carousel */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="relative overflow-hidden py-2">
            <div
              className={cn("flex gap-6 animate-scroll-x items-center")}
              style={{
                animation: "scroll-x 22s linear infinite",
              }}
            >
              {row1.map((company, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-56 h-28 bg-white rounded-2xl shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={110}
                    height={64}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 (opposite direction, slower) */}
          <div className="relative overflow-hidden  py-2">
            <div
              className={cn("flex gap-6 animate-scroll-x-reverse items-center")}
              style={{
                animation: "scroll-x-reverse 28s linear infinite",
              }}
            >
              {row2.map((company, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-56 h-28 bg-white rounded-2xl shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={110}
                    height={64}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Carousel animations */}
        <style jsx>{`
          @keyframes scroll-x {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes scroll-x-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-scroll-x {
            width: max-content;
          }
          .animate-scroll-x-reverse {
            width: max-content;
          }
        `}</style>
      </div>
    </section>
  );
}
