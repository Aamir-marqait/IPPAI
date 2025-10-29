"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HomeHero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden">
        <Image
          src="/home/hero.png"
          alt="IPPAI Background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-10">
        <main className="flex max-w-[1100px] mx-auto flex-col items-center justify-center w-full px-7 md:px-0">
          <div className="w-full flex flex-col items-center">
            <div className="text-center mb-16">
              <div className="mb-6 ">
                <h1 className="font-red-hat-display font-bold text-[30px] md:text-[64px] leading-[140%] tracking-[0%] text-center text-white">
                  Independent{" "}
                  <span className="text-[#D3363B]">Power Producers</span>{" "}
                  Association of India (IPPAI){" "}
                  {/* <Image
                    src="/home/line.png"
                    alt="Decorative line"
                    width={150}
                    height={8}
                    className="w-[150px] h-auto text-end f"
                  /> */}
                </h1>
              </div>

              <p className="font-poppins font-medium text-[24px] leading-[160%] tracking-[0%] text-center text-white max-w-xl mx-auto">
                Bringing 30 Years of India&apos;s Power Sector Experience to the
                World.
              </p>
            </div>
          </div>
          <Link href="/events">
            <Button className="hidden lg:flex cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors">
              See events
            </Button>
          </Link>
        </main>
      </div>
    </div>
  );
}
