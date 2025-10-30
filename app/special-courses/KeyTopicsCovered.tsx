import React from "react";
import Image from "next/image";

const topics = [
  "Legislative Framework of the Indian Power Sector",
  "Functioning of Transmission System & Grid Congestion",
  "Resource Adequacy Planning",
  "AI-Driven Forecasting & Scheduling",
  "General Network Access (GNA)",
  "Open Access Mechanism",
  "Deviation Settlement Mechanisms",
  "System Operations",
  "Evolution of Power Markets",
  "Transmission Planning",
];

export default function KeyTopicsCovered() {
  return (
    <section className="bg-white px-4 py-12 w-full flex flex-col items-center">
      <div className="mb-3 max-w-[1100px] w-full">
        <div className="flex flex-row items-center gap-2 mb-4">
          <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
          <span className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-[#D3363B] uppercase">
            Key topics
          </span>
        </div>
        <h2 className="font-red-hat-display font-bold text-xl sm:text-[36px] leading-none text-[#141414] mb-4 sm:mb-6">
          Key Topics Covered
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <Image
              src="/key.png"
              alt="Grid system illustration"
              width={500}
              height={350}
              className="rounded-2xl object-cover w-[350px] h-[350px] md:w-[500px] md:h-[350px] bg-gray-200"
            />
          </div>
          {/* Topics List */}
          <ul className="flex-1 flex flex-col gap-2 w-full max-w-2xl">
            {topics.map((topic, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle text-[#4D5756]"
              >
                <Image
                  src="/tick.png"
                  alt="Check mark"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
