import React from "react";
import Image from "next/image";
// Replace these avatar URLs with actual image paths
const testimonials = [
  {
    name: "Assistant Director",
    role: "Central Electricity Authority",
    avatar: "/course/user2.jpg",
    text: `“The course helped provide a detailed overview of various key concepts of the Indian Power sector, such as Resource Adequacy, Open Access and GNA Mechanisms.”`,
  },
  {
    name: "Assistant Engineer",
    role: "KSEBL",
    avatar: "/course/user2.jpg",
    text: `“Good opportunity to interact with various power experts from across the country. Refreshing course”.`,
  },
  {
    name: "Exec Engineer",
    role: "MSPGCL",
    avatar: "/course/user2.jpg",
    text: `“Benefitted from the interaction with legends of the regulatory field. Gained a broader knowledge of the Regulation and Policy arena and current power industry approach.”`,
  },
];

export default function OurAlumni() {
  return (
    <section className="bg-[#F5F5F5] min-h-[80vh] w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] px-4 py-10 mx-auto">
        {/* Heading */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="font-red-hat-display font-bold text-[36px] leading-[46px] text-center text-[#121212] mb-2">
            What our Alumni say
          </h2>
          <p className="font-poppins font-normal  max-w-xl mx-auto text-[18px] leading-[30px] text-center text-[#7C7D7F]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero
          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-1 bg-white border border-[#E0E0E0] rounded-[20px] px-8 py-8 min-w-[300px] flex flex-col shadow-sm transition-all"
              style={{ boxShadow: "0 1px 8px 0 rgba(0,0,0,0.03)" }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-[56px] h-[56px] rounded-full overflow-hidden border border-[#ECECEC]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-poppins mb-2  font-bold text-[20px] leading-[20px] text-[#D3363B]">
                    - {t.name}
                  </div>
                  <div className="font-poppins font-normal text-[15px] leading-[18px] text-[#6D6D6D]">
                    {t.role}
                  </div>
                </div>
              </div>
              <div className="font-poppins font-normal text-base leading-[30px] text-[#636363] mt-2">
                {t.text}
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full border-none bg-[#F2EAEA] text-[#D13B3B] focus:outline-none shadow-sm"
            aria-label="Previous testimonial"
            tabIndex={0}
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
            className="w-10 h-10 flex items-center justify-center rounded-full border-none bg-[#D13B3B] text-white focus:outline-none shadow-sm"
            aria-label="Next testimonial"
            tabIndex={0}
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
      </div>
    </section>
  );
}
