"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionData {
  title: string;
  subtitle?: string;
  highlightText?: string;  // ✅ Made optional to match Sanity
  eventDate?: string;  // ✅ Made optional to match Sanity
  eventLocation?: string;  // ✅ Made optional to match Sanity
  registrationLink?: string;  // ✅ Made optional to match Sanity
  knowMoreLink?: string;  // ✅ Made optional to match Sanity
  countdownTargetDate?: string;  // ✅ Made optional to match Sanity
  backgroundImage: string;
  frameImage?: string;  // ✅ Made optional to match Sanity
  heroImage?: string;  // ✅ Made optional to match Sanity
}

interface HeroSectionProps {
  data: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!data.countdownTargetDate) return;

    const calculateTimeLeft = () => {
      const eventDate = new Date(data.countdownTargetDate!).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [data.countdownTargetDate]);

  return (
    <div className="relative min-h-screen overflow-hidden pb-14">
      <div
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${data.backgroundImage}')`,
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
                {data.frameImage && (
                  <Image
                    src={data.frameImage}
                    alt="Event Frame"
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                )}
                {/* Hero image overlapping on top */}
                {data.heroImage && (
                  <div
                    className="absolute top-8 left-8 inset-0 bg-contain bg-center bg-no-repeat h-[28rem] w-[28em] rounded-xl"
                    style={{
                      backgroundImage: `url('${data.heroImage}')`,
                      zIndex: 10,
                    }}
                  ></div>
                )}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 text-center space-y-8 lg:space-y-3 lg:translate-y-20 mt-10 lg:mt-0  pt-20  ">
              {/* Main Title */}
              <div>
                <h1 className="font-red-hat-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[150%] tracking-normal  text-white text-left">
                  {data.title}
                  {data.subtitle && (
                    <>
                      <br />
                      {data.subtitle}
                    </>
                  )}
                  {data.highlightText && (
                    <>
                      <br />
                      <span className="text-[#D3363B]">{data.highlightText}</span>
                    </>
                  )}
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
                  {data.eventDate && (
                    <div className="flex flex-wrap items-center justify-start gap-2 xs:gap-3">
                      <Image
                        src="/home/calendar.svg"
                        alt="Calendar"
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      <span className="font-work-sans text-white text-base xs:text-lg sm:text-xl font-medium leading-relaxed">
                        {data.eventDate}
                      </span>
                    </div>
                  )}

                  {data.eventLocation && (
                    <div className="flex flex-wrap items-start justify-start gap-2 xs:gap-3">
                      <Image
                        src="/home/location.svg"
                        alt="Location"
                        width={20}
                        height={20}
                        className="flex-shrink-0 mt-1"
                      />
                      <span className="font-work-sans text-white text-base xs:text-lg sm:text-xl font-medium leading-relaxed text-left max-w-md">
                        {data.eventLocation}
                      </span>
                    </div>
                  )}
                </div>

                {/* Register Button */}
                {(data.registrationLink || data.knowMoreLink) && (
                  <div className="pt-4 flex justify-start">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {data.knowMoreLink && (
                        <Link href={data.knowMoreLink}>
                          <Button className="bg-[#D3363B] hover:bg-[#D3363B]/90 text-white font-work-sans font-medium text-base leading-none px-6 cursor-pointer sm:px-8 py-2.5 sm:py-3 rounded-[25px] shadow-[0px_4px_4px_0px_#D3363B4F]">
                            Register Now
                          </Button>
                        </Link>
                      )}
                      {data.knowMoreLink && (
                        <Link href={data.knowMoreLink}>
                          <Button className="bg-white shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] font-work-sans font-medium text-base leading-none text-center text-[#D3363B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[25px] hover:text-white cursor-pointer">
                            Know More
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {data.countdownTargetDate && (
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
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}