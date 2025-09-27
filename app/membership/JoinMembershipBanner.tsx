"use client";

import { JoinUsModal } from "@/components/JoinMembershipModal";
import Image from "next/image";
import { useState } from "react";

export default function JoinMembershipBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="relative rounded-2xl overflow-hidden shadow"
          style={{
            minHeight: "350px",
          }}
        >
          {/* Background image */}
          <Image
            src="/membership/bg2.png" // <-- Set your image path here
            alt="Membership Banner"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center h-full py-16">
            <h2 className="text-white text-3xl md:text-5xl xl:text-[48px] font-bold text-center mb-4 drop-shadow leading-[46px] font-red-hat-display">
              Join Our Membership
            </h2>
            <p className="text-white text-lg md:text-xl xl:text-lg text-center mb-7 font-semibold drop-shadow leading-[46px] font-poppins">
              Unlock exclusive benefits, resources, and connections
              <br className="hidden md:block" />
              designed to help you grow.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D3363B] cursor-pointer hover:bg-[#B8303A] transition text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md w-fit"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      <JoinUsModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
