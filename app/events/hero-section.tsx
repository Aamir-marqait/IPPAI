"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionData {
  title: string;
  subtitle?: string;
  highlightText?: string;
  eventDate?: string;
  eventLocation?: string;
  registrationLink?: string;
  knowMoreLink?: string;
  countdownTargetDate?: string;
  backgroundImage: string;
  frameImage?: string;
  heroImage?: string;
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

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [data.countdownTargetDate]);

  return (
    <div className="relative overflow-hidden pb-14">
      {/* Background */}
      <div
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${data.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[620px] md:min-h-screen">
        <main className="flex-1 flex items-center">
          <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-10 lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
            {/* Left side – frame + hero image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-none">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {data.frameImage && (
                  <Image
                    src={data.frameImage}
                    alt="Event Frame"
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                )}

                {data.heroImage && (
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-xl overflow-hidden">
                    <Image
                      src={data.heroImage}
                      alt="Event Hero"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 500px"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right side – text + buttons + countdown */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-4 mt-4 lg:mt-0 pt-2 lg:pt-16 lg:translate-y-10">
              {/* Title */}
              <div>
                <h1 className="font-red-hat-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[150%] tracking-normal text-white text-left">
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
                      <span className="text-[#D3363B]">
                        {data.highlightText}
                      </span>
                    </>
                  )}
                </h1>
                <div className="mt-3 flex justify-start">
                  <Image
                    src="/home/line.png"
                    alt="Line"
                    width={500}
                    height={4}
                    className="h-auto w-auto max-w-[120px] xs:max-w-[150px] sm:max-w-[180px] md:min-w-[270px]"
                  />
                </div>
              </div>

              {/* Event details */}
              <div>
                <div className="space-y-3 sm:space-y-4">
                  {data.eventDate && (
                    <div className="flex flex-wrap items-center justify-start gap-3">
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
                    <div className="flex flex-wrap items-start justify-start gap-3">
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

                {/* Buttons */}
                {(data.registrationLink || data.knowMoreLink) && (
                  <div className="pt-5 flex justify-start">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {data.registrationLink && (
                        <Link href={data.registrationLink}>
                          <Button className="bg-[#D3363B] hover:bg-[#D3363B]/90 text-white font-work-sans font-medium text-base leading-none px-6 sm:px-8 py-2.5 sm:py-3 rounded-[25px] shadow-[0px_4px_4px_0px_#D3363B4F] cursor-pointer">
                            Register Now
                          </Button>
                        </Link>
                      )}
                      {data.knowMoreLink && (
                        <Link href={data.knowMoreLink}>
                          <Button className="bg-white shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] font-work-sans font-medium text-base leading-none text-center text-[#D3363B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[25px] hover:text-white hover:bg-[#D3363B] cursor-pointer">
                            Know More
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Countdown */}
              {data.countdownTargetDate && (
                <div className="pt-6 lg:pt-10">
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
