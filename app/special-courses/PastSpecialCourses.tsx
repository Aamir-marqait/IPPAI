"use client";

import React from "react";
import Image from "next/image";
import { CalendarCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PastSpecialCourses() {
  return (
    <section className="bg-white px-4 py-12 flex flex-col items-center w-full">
      <div className="mb-3 text-center px-4">
        <span className="font-red-hat-display font-bold text-sm sm:text-base leading-none text-center uppercase text-[#D3363B]">
          SPECIAL COURSE
        </span>
        <h2 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-4xl leading-[120%] text-center text-[#141414] mb-2 mt-4">
          Past Special Courses
        </h2>
        <p className="font-poppins font-normal text-sm sm:text-base leading-6 sm:leading-7 text-center text-[#141414] max-w-2xl mb-6 sm:mb-10 mt-3 mx-auto">
          Explore some of our recently conducted capacity-building programs
          across India.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-start mt-4 sm:mt-7 max-w-5xl px-4">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start w-full">
          <div className="font-poppins font-semibold text-xl sm:text-2xl md:text-[28px] leading-[120%] text-black mb-4 sm:mb-5">
            Special Training Program on the Regulatory & Policy Framework in the
            Power Sector
          </div>
          <div className="font-poppins font-normal text-sm sm:text-base leading-[140%] text-[#4D5756] mb-4 sm:mb-5">
            Organized for Maharashtra State Electricity Transmission Company
            Limited (MSETCL)
          </div>
          <div className="flex flex-col gap-3 mb-5 sm:mb-6">
            <div className="flex items-start gap-2 font-poppins font-normal text-sm sm:text-base leading-[140%] text-[#4D5756]">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span>Rambhau Mhalagi Prabodhini, Bhayandar, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 font-poppins font-normal text-sm sm:text-base leading-[140%] text-[#4D5756]">
              <CalendarCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>September 11–13, 2025</span>
            </div>
          </div>
          <Button
            onClick={() => {
              document
                .getElementById("register-now")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-sm sm:text-base leading-none tracking-normal text-center uppercase text-white px-5 sm:px-6 py-2 rounded-full transition-colors"
          >
            Enquire Now
          </Button>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/course/Img4.png"
            alt="Special Course event"
            width={430}
            height={280}
            className="rounded-2xl object-cover w-full max-w-[350px] h-auto aspect-[430/280] md:max-w-[430px] bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
