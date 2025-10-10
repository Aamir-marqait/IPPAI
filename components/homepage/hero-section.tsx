"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
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

  return (
    <div className="relative">
      {/* First Event - Top Half */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={events[0].image}
          alt="Event background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content for first event */}
        <div className="relative z-10 h-full flex items-center pt-20">
          <div className="max-w-[1100px] mx-auto w-full px-7 md:px-0">
            <div className="mb-8">
              <h1 className="max-w-xl text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-bold font-red-hat-display text-white mb-4 leading-[150%]">
                {events[0].title}
              </h1>
              <p className="max-w-md text-left text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-none">
                {events[0].desc}
              </p>
            </div>
            
            <div className="bg-white/96 rounded-[20px] p-6 md:p-8 max-w-2xl shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/optimized/calendar.webp"
                      alt="Calendar"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      loading="lazy"
                    />
                    <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                      {events[0].date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/optimized/location.webp"
                      alt="Location"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      loading="lazy"
                    />
                    <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                      {events[0].location}
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
          </div>
        </div>
      </div>
      
      {/* Divider Line */}
      <div 
        className="w-screen h-[4px] mx-auto"
        style={{
          background: "linear-gradient(90deg, #D3363B 0%, #5E1517 100%)"
        }}
      ></div>
      
      {/* Second Event - Bottom Half */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={events[1].image}
          alt="Event background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content for second event */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1100px] mx-auto w-full px-7 md:px-0 flex justify-end">
            <div className="max-w-xl">
              <div className="mb-8">
                <h1 className="max-w-xl text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-bold font-red-hat-display text-white mb-4 leading-[150%]">
                  {events[1].title}
                </h1>
                <p className="text-left text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-none ml-auto">
                  {events[1].desc}
                </p>
              </div>
              
              <div className="bg-white/96 rounded-[20px] p-6 md:p-8 max-w-2xl shadow-2xl ml-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src="/optimized/calendar.webp"
                        alt="Calendar"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        loading="lazy"
                      />
                      <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                        {events[1].date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/optimized/location.webp"
                        alt="Location"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        loading="lazy"
                      />
                      <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                        {events[1].location}
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Knowledge Partners Section */}
      {/* <div className="relative bg-white py-8">
        <div className="max-w-[1100px] mx-auto px-7 md:px-0">
          <div
            className="bg-white rounded-[20px] border border-[#CCCCCC] p-6 md:py-8"
            style={{ boxShadow: "0px 12px 30px 0px #00000030" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
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
        </div>
      </div> */}
    </div>
  );
}