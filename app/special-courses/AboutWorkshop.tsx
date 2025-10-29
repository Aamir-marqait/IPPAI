import React from "react";
import Image from "next/image";

export default function AboutWorkshop() {
  return (
    <section className="flex justify-center items-center py-12 px-4 bg-white w-full">
      <div className="w-full max-w-[1100px]">
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/workshop.png"
            alt="Workshop Background"
            width={1200}
            height={340}
            className="w-full h-[340px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex gap-3 flex-col justify-center items-center px-6 py-10">
            <span className="font-red-hat-display font-bold text-[16px] leading-[100%] tracking-[0%] uppercase text-white mb-4">
              SPECIAL COURSE
            </span>

            <h2 className="font-red-hat-display font-bold text-[36px] leading-[100%] tracking-[0%] text-center align-middle capitalize text-white mb-4">
              About The Workshop
            </h2>
            <p className="font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-center align-middle text-white max-w-4xl">
              The 3-day residential workshop brought together participants from
              MSETCL to engage in rich discussions on critical issues shaping
              the Power Sector. The dialogue blended regulatory insights with
              operational realities, fostering deeper understanding and
              actionable learning between regulatory experts and practitioners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
