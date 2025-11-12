"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Alumni } from "@/lib/sanity/queries/courses";

interface OurAlumniProps {
  alumni: Alumni[];
}

export default function OurAlumni({ alumni }: OurAlumniProps) {
  const [currentPage, setCurrentPage] = useState(0);

  // Sort alumni by order
  const sortedAlumni = [...alumni].sort((a, b) => a.order - b.order);

  // Paginate alumni - show 3 per page
  const itemsPerPage = 3;
  const totalPages = Math.ceil(sortedAlumni.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAlumni = sortedAlumni.slice(startIndex, endIndex);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  // If no alumni, return null
  if (!sortedAlumni.length) {
    return null;
  }

  return (
    <section className="bg-[#F5F5F5] min-h-[80vh] w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] px-4 py-10 mx-auto">
        {/* Heading */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="font-red-hat-display font-bold text-[36px] leading-[46px] text-center text-[#121212] mb-2">
            What our Alumni say
          </h2>
          <p className="font-poppins font-normal max-w-xl mx-auto text-[18px] leading-[30px] text-center text-[#7C7D7F]">
            Hear from professionals who have transformed their careers through
            our intensive courses and training programs in the power sector.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
          {currentAlumni.map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${i}`}
              className="flex-1 bg-white border border-[#E0E0E0] rounded-[20px] px-8 py-8 min-w-[300px] flex flex-col shadow-sm transition-all"
              style={{ boxShadow: "0 1px 8px 0 rgba(0,0,0,0.03)" }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-[56px] h-[56px] rounded-full overflow-hidden border border-[#ECECEC]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-poppins mb-2 font-bold text-[20px] leading-[20px] text-[#D3363B]">
                    - {testimonial.name}
                  </div>
                  <div className="font-poppins font-normal text-[15px] leading-[18px] text-[#6D6D6D]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <div className="font-poppins font-normal text-base leading-[30px] text-[#636363] mt-2">
                {testimonial.text}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full border-none bg-[#F2EAEA] text-[#D13B3B] focus:outline-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#D13B3B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border-none bg-[#D13B3B] text-white focus:outline-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M7.5 5L12.5 10L7.5 15"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}