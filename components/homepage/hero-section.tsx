"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeHero() {
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    {
      title: "Regulators & Policy Makers Retreat",
      desc: "The Evolving Power Sector: Navigating Geopolitics, Markets & India’s Energy Transition",
      date: "25th to 27th September 2025",
      location: "Shoonya Farm Retreat, Belagavi, Karnataka",
      image: "/hero.png",
    },
    {
      title: "Renewable Energy Policy Summit",
      desc: "Driving Sustainable Growth through Innovative Policies & Strategic Implementation",
      date: "15th to 17th October 2025",
      location: "Green Valley Resort, Pune, Maharashtra",
      image: "/hero.png",
    },
    {
      title: "Sustainable Finance & Investment Forum",
      desc: "Mobilizing Capital for Clean Energy Projects and Green Infrastructure Development",
      date: "20th to 22nd November 2025",
      location: "Tech Park Convention Center, Bangalore",
      image: "/hero.png",
    },
    {
      title: "Energy Transition Workshop Series",
      desc: "Accelerating the Shift to Clean and Renewable Energy Sources for Sustainable Growth",
      date: "10th to 12th December 2025",
      location: "Coastal Resort, Goa",
      image: "/hero.png",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className="relative">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden">
        <Image
          src={events[currentEvent].image}
          alt="Event background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-28">
        <main className="flex max-w-[1100px] mx-auto flex-col items-start justify-center min-h-[calc(100vh-120px)] lg:mt-2">
          <div className=" w-full">
            <div className="text-center mb-12 mx-7 md:mx-0">
              <h1 className="max-w-xl md:max-w-md text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-6 leading-[150%]">
                {events[currentEvent].title}
              </h1>

              <p className="md:max-w-md text-left text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-none mt-5 max-w-sm">
                {events[currentEvent].desc}
              </p>
            </div>

            <div className="bg-white/96 rounded-[20px] mx-7 md:mx-0 p-6 md:p-8 max-w-2xl mb-5 shadow-2xl">
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
            <div className="flex justify-start gap-2 mb-16 mx-7 md:mx-0">
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

            <div
              className="bg-white rounded-[20px] border border-[#CCCCCC] p-6 md:py-8 md:mx-auto mx-7"
              style={{ boxShadow: "0px 12px 30px 0px #00000030" }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
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

                <div className="flex items-center gap-4 ">
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
          </div>
        </main>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-between px-20">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentEvent((prev) => (prev === 0 ? events.length - 1 : prev - 1))}
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
        
        {/* Next Button */}
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
