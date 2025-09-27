"use client";
import { JoinUsModal } from "@/components/JoinMembershipModal";
import Image from "next/image";
import { useState } from "react";

export default function RecognizedCatalystSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full">
      <div className="bg-black h-[60vh]  pb-32">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-0">
          {/* Top Headings */}
          <div className="mb-10">
            <div className=" text-[#D3363B] font-red-hat-display font-bold text-base leading-none tracking-normal uppercase mb-8 border-l-4 border-[#D3363B] pl-3">
              SINCE 1994
            </div>
            <h2 className="font-red-hat-display font-bold text-4xl leading-none tracking-normal text-white mb-2">
              Recognized as a Catalyst
              <br />
              for Change
            </h2>
            <p className="font-poppins font-normal text-base leading-7 tracking-normal text-white/80 mt-2">
              Our impact resonates across India&apos;s
              <br className="md:hidden" /> energy sector and beyond
            </p>
          </div>
        </div>
      </div>
      {/* Cards Section - Half out of black background */}
      <div className="relative -mt-[13.3rem]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-7 w-full relative z-10">
            {/* Industry Partnerships */}
            <div className="w-[356px] h-[404px] flex flex-col justify-between bg-white rounded-[20px] border border-[#DFDFDF] overflow-hidden mx-auto">
              <div className="px-6 pt-8 pb-2 flex flex-col gap-3 justify-center text-left h-full">
                <h3 className="font-red-hat-display font-bold text-2xl leading-none tracking-normal text-[#D3363B] mb-1">
                  Industry Partnerships
                </h3>
                <p className="font-poppins font-light text-base leading-none tracking-normal text-black mb-2">
                  Collaborated with 500+ industry stakeholders across the power
                  sector.
                </p>
              </div>
              <div className="w-full h-full relative">
                <Image
                  src="/about/ip.png"
                  alt="Industry Partnerships"
                  fill
                  className="object-cover"
                  sizes="356px"
                  priority
                />
              </div>
            </div>
            {/* Global Recognition */}
            <div className="w-[356px] h-[404px] flex flex-col justify-between bg-white rounded-[20px] border border-[#DFDFDF] overflow-hidden mx-auto">
              <div className="px-6 pt-8 pb-2 flex flex-col gap-3 justify-center text-left h-full">
                <h3 className="font-red-hat-display font-bold text-2xl leading-none tracking-normal text-[#D3363B] mb-1">
                  Global Recognition
                </h3>
                <p className="font-poppins font-light text-base leading-none tracking-normal text-black mb-2">
                  Acknowledged internationally as a model for energy sector
                  associations.
                </p>
              </div>
              <div className="w-full h-full relative">
                <Image
                  src="/about/gr.png"
                  alt="Global Recognition"
                  fill
                  className="object-cover"
                  sizes="356px"
                  priority
                />
              </div>
            </div>
            {/* Excellence Awards */}
            <div className="w-[356px] h-[404px] flex flex-col justify-between bg-white rounded-[20px] border border-[#DFDFDF] overflow-hidden mx-auto">
              <div className="px-6 pt-8 pb-2 flex flex-col gap-3 justify-center text-left h-full">
                <h3 className="font-red-hat-display font-bold text-2xl leading-none tracking-normal text-[#D3363B] mb-1">
                  Excellence Awards
                </h3>
                <p className="font-poppins font-light text-base leading-none tracking-normal text-black mb-2">
                  Received multiple accolades for contribution to sustainable
                  energy, development.
                </p>
              </div>
              <div className="w-full h-full relative">
                <Image
                  src="/about/ea.png"
                  alt="Excellence Awards"
                  fill
                  className="object-cover"
                  sizes="356px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section */}
      <div className="w-full flex justify-center items-center py-16 bg-white">
        <div className="w-[1100px] h-[352px] overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/about/bg3.png"
              alt="Driving Innovation"
              fill
              className="object-cover"
              priority
              sizes="1100px"
            />
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <div className="relative z-20 flex flex-col justify-center items-center w-full h-full">
              <h3 className="font-red-hat-display font-bold text-4xl leading-none tracking-normal text-white text-center mb-5 drop-shadow">
                Join IPPAI in Driving Innovation
              </h3>
              <p className="font-poppins font-normal max-w-lg text-base leading-none tracking-normal text-white text-center align-middle mb-10 drop-shadow">
                Be part of India&apos;s energy transformation. Together, we can
                build a sustainable, reliable, and affordable power future for
                all.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer bg-[#D3363B] shadow-[0px_4px_4px_0px_#D3363B4F] font-work-sans font-medium text-base leading-none tracking-normal text-center text-white px-7 py-2 rounded-full"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <JoinUsModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
