"use client";

import { HubCard } from "../hub-card";
import Image from "next/image";

export default function KnowledgeHub() {
  return (
    <section
      aria-label="Knowledge Hub"
      className="relative w-screen overflow-hidden"
    >
      {/* Curved light backdrop using SVG that scales to the viewport width */}
      <div className="absolute left-0 top-0 -z-10 w-full">
        <svg
          viewBox="0 0 1600 360"
          preserveAspectRatio="none"
          className="h-[260px] sm:h-[300px] md:h-[330px] w-full text-muted"
          aria-hidden="true"
        >
          <path
            d="M0 0H1600V220c-220 70-480 70-800 0s-580 70-800 0V0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-14 pb-12 md:pb-16">
        <header className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-center text-[#141414]">
            Knowledge Hub
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-7 text-center text-[#141414]/85">
            Your gateway to energy intelligence and thought leadership.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          <HubCard
            icon={<Image src="/home/1.png" alt="Articles and Insights" width={32} height={32} />}
            title="Articles and Insights"
            description="Access comprehensive reports, research, and policy updates that shape India's power sector landscape."
          />
          <HubCard
            icon={<Image src="/home/2.png" alt="Research and Reports" width={32} height={32} />}
            title="Research and Reports"
            description="Platform for thought leadership through speaking opportunities, publications, and award programs."
          />
          <HubCard
            icon={<Image src="/home/3.png" alt="Policy Recommendations" width={32} height={32} />}
            title="Policy Recommendations"
            description="Connect directly with policymakers, regulators, and industry leaders driving sector transformation."
          />
        </div>
      </div>
    </section>
  );
}
