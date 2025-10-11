"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 56,
    hours: 2,
    minutes: 34,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pb-14">
      <div
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/event/bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-1 flex items-center">
          <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-5 lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
            {/* Left side - Overlapping Images */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Base frame image */}
                <Image
                  src="/event/frame.png"
                  alt="Event Frame"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain"
                />
                {/* Hero image overlapping on top */}
                <div
                  className="absolute top-8 left-8 inset-0 bg-contain bg-center bg-no-repeat h-[28rem] w-[28em] rounded-xl"
                  style={{
                    backgroundImage: "url('/hero.png')",
                    zIndex: 10,
                  }}
                ></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 text-center space-y-8 lg:space-y-3 lg:translate-y-20 mt-10 lg:mt-0  pt-20  ">
              {/* Main Title */}
              <div>
                <h1 className="font-red-hat-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[150%] tracking-normal uppercase text-white text-left">
                  Regulators & Policymakers
                  <br />
                  <span className="text-[#D3363B]">Retreat</span>
                </h1>
                <div className="flex justify-right">
                  <Image
                    src="/home/line.png"
                    alt="Line"
                    width={500}
                    height={4}
                    className="h-auto w-auto max-w-[120px] xs:max-w-[150px] sm:max-w-[180px] md:min-w-[270px]"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="">
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center justify-start gap-2 xs:gap-3">
                    <Image
                      src="/home/calendar.svg"
                      alt="Calendar"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <span className="font-work-sans text-white text-base xs:text-lg sm:text-xl font-medium leading-relaxed">
                      25th to 27th September 2025
                    </span>
                  </div>

                  <div className="flex flex-wrap items-start justify-start gap-2 xs:gap-3">
                    <Image
                      src="/home/location.svg"
                      alt="Location"
                      width={20}
                      height={20}
                      className="flex-shrink-0 mt-1"
                    />
                    <span className="font-work-sans text-white text-base xs:text-lg sm:text-xl font-medium leading-relaxed text-left max-w-md">
                      Shoonya Farm Retreat, Belagavi, Karnataka
                    </span>
                  </div>
                </div>

                {/* Register Button */}
                <div className="pt-4 flex justify-start">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Link href="/contact">
                      <Button className="bg-[#D3363B] hover:bg-[#D3363B]/90 text-white font-work-sans font-medium text-base leading-none px-6 cursor-pointer sm:px-8 py-2.5 sm:py-3 rounded-[25px] shadow-[0px_4px_4px_0px_#D3363B4F]">
                        Register Now
                      </Button>
                    </Link>
                    <Link href="/events/regulators-policymakers-retreat">
                      <Button className="bg-white shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] font-work-sans font-medium text-base leading-none text-center text-[#D3363B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[25px] hover:text-white cursor-pointer">
                        Know More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-8 lg:pt-24 ">
                <div className="inline-block bg-white rounded-[20px] px-4 xs:px-6 md:px-8 py-3 xs:py-4 lg:py-6 border shadow-lg">
                  <div className="flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
                    {[
                      { label: "Days", value: timeLeft.days },
                      { label: "Hours", value: timeLeft.hours },
                      { label: "Minutes", value: timeLeft.minutes },
                      { label: "Seconds", value: timeLeft.seconds },
                    ].map((item) => (
                      <div
                        className="text-center min-w-[56px]"
                        key={item.label}
                      >
                        <div className="font-poppins font-bold text-xl xs:text-2xl sm:text-3xl lg:text-[50px] leading-tight lg:leading-[60px] text-[#D3363BCC] mb-1">
                          {String(item.value).padStart(2, "0")}
                        </div>
                        <div className="font-poppins font-medium text-[10px] xs:text-xs sm:text-sm lg:text-base leading-relaxed text-[#696A87]">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* (Optional) You can put a hidden div here for future left-side content if needed */}
          </div>
        </main>
      </div>
    </div>
  );
}
