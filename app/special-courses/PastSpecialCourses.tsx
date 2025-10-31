import React from "react";
import Image from "next/image";
import { CalendarCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PastSpecialCourses() {
  return (
    <section className="bg-white px-4 py-12 flex flex-col items-center w-full">
      <div className="mb-3 text-center">
        <span className="font-red-hat-display font-bold text-base leading-none text-center uppercase text-[#D3363B]">
          SPECIAL COURSE
        </span>
        <h2 className="font-red-hat-display font-bold text-4xl leading-none text-center text-[#141414] mb-2 mt-4">
          Past Special Courses
        </h2>
        <p className="font-poppins font-normal text-base leading-7 text-center text-[#141414] max-w-2xl mb-10 mt-3">
          Explore some of our recently conducted capacity-building programs
          across India.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-start mt-7 max-w-5xl">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start w-full">
          <div className="font-poppins font-semibold text-[28px] leading-[100%] tracking-[0%] align-middle text-black mb-5">
            Special Training Program on the Regulatory & Policy Framework in the
            Power Sector
          </div>
          <div className="font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-[#4D5756] mb-5">
            Organized for Maharashtra State Electricity Transmission Company
            Limited (MSETCL)
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle text-[#4D5756]">
              <MapPin className="w-5 h-5 text-red-500" />
              Rambhau Mhalagi Prabodhini, Bhayandar, Maharashtra
            </div>
            <div className="flex items-center gap-2 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle text-[#4D5756]">
              <CalendarCheck className="w-5 h-5 text-red-500" />
              September 11–13, 2025
            </div>
          </div>
          <Link href="/photo-gallery" className="hidden lg:flex">
            <Button className="cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors">
              View Gallery
            </Button>
          </Link>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/psc.png"
            alt="Special Course event"
            width={430}
            height={280}
            className="rounded-2xl object-cover w-[350px] h-[240px] md:w-[430px] md:h-[280px] bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
