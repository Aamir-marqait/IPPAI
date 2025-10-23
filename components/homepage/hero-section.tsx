"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeHero() {
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    {
      title: "26th Regulators & Policymakers Retreat",
      desc: "Advancing Regulatory Excellence & Strategic Policy Implementation",
      date: "7th- 10th January, 2026",
      location: "Shoonya Farm Retreat, Village Belgundi, Belgaum, Karnataka",
      image: "/optimized/bg2.webp",
    },
    {
      title: "Intensive Course",
      desc: "The Evolving Power Sector: Navigating Geopolitics, Markets & India's Energy Transition",
      date: "29th - 31st October, 2025",
      location:
        "Bangalore International Centre (BIC), 4th Main Rd, 2 Stage, Domlur, Bengaluru, Karnataka",
      image: "/optimized/hero.webp",
    },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className="relative">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden">
        <Image
          src={events[currentEvent].image}
          alt="Event background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-40">
        <main className="flex max-w-[1100px] mx-auto flex-col items-center justify-center w-full px-7 md:px-0">
          <div className="w-full flex flex-col items-center">
            <div className="text-center mb-8 min-h-[180px] flex flex-col justify-center">
              <h1 className="font-red-hat-display font-bold text-[64px] leading-[100%] tracking-[0%] text-center text-white mb-4 min-h-[80px] w-screen flex items-center justify-center">
                {events[currentEvent].title}
              </h1>

              <p className="font-poppins font-medium text-[24px] leading-[150%] tracking-[0%] text-center text-white mt-3 max-w-2xl mx-auto min-h-[60px] flex items-center justify-center">
                {events[currentEvent].desc}
              </p>
            </div>

            <div className="bg-white/96 rounded-[20px] p-6 md:p-8 max-w-2xl mb-5 shadow-2xl w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/home/calendar.svg"
                      alt="Calendar"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                      {events[currentEvent].date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/home/location.svg"
                      alt="Location"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                      {events[currentEvent].location}
                    </span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button
                    className="cursor-pointer bg-[#D3363B] hover:bg-[#D3363B]/90 text-white text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none text-center rounded-[25px] p-[10px] px-8"
                    style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-start gap-2 mb-16">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentEvent
                      ? "bg-[#D3363B] w-16"
                      : "bg-white/40 w-7 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
          <div
            className="bg-white rounded-[20px] border border-[#CCCCCC] p-6 md:py-8 mx-auto w-full max-w-4xl"
            style={{ boxShadow: "0px 12px 30px 0px #00000030" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* <div className="flex items-center gap-4">
                  <span className="text-[#656565] font-light font-briem-hand leading-none text-base sm:text-lg md:text-xl xl:text-2xl">
                    Sponsored By
                  </span>
                  <Image
                    src="/optimized/s.webp"
                    alt="Sponsor"
                    width={60}
                    height={60}
                    className="h-10 w-auto"
                    loading="lazy"
                  />
                  <div
                    className="w-px h-8 "
                    style={{
                      border: "1px solid #DEDEDE",
                    }}
                  ></div>
                </div> */}

              <div className="flex items-center gap-4">
                <span className="text-[#656565] font-light font-briem-hand leading-none text-base sm:text-lg md:text-xl xl:text-2xl">
                  Knowledge Partner
                </span>

                <Image
                  src="/optimized/kp1.webp"
                  alt="Idam - Enabling Carbon Minimal World"
                  width={120}
                  height={60}
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/optimized/kp2.webp"
                  alt="IPPAI"
                  width={156}
                  height={59}
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Previous Button */}
      <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-start pl-20">
        <button
          onClick={() =>
            setCurrentEvent(
              (prev) => (prev - 1 + events.length) % events.length
            )
          }
          className="cursor-pointer pointer-events-auto p-6 hover:scale-105 transition-transform"
        >
          <Image
            src="/next.png"
            alt="Previous"
            width={200}
            height={150}
            className="w-full h-10 max-w-[200px] rotate-180"
            priority
          />
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-end pr-20">
        <button
          onClick={() => setCurrentEvent((prev) => (prev + 1) % events.length)}
          className="cursor-pointer pointer-events-auto p-6 hover:scale-105 transition-transform"
        >
          <Image
            src="/next.png"
            alt="Next"
            width={200}
            height={150}
            className="w-full h-10 max-w-[200px]"
            priority
          />
        </button>
      </div>
    </div>
  );
}
