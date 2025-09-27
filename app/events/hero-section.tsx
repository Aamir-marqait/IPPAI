"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/event/bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <Header />

        <main className="flex  mx-auto px-4 h-[calc(100vh-120px)] items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
            {/* Left Side - Person with Red Circle */}
            <div className="relative flex justify-center lg:justify-start">
             
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-red-hat-display font-bold text-[56px] leading-none tracking-normal text-center uppercase text-white mb-4">
                ANNUAL BUSINESS
                <br />
                <span className="text-[#D3363B]">EVENT 2025</span>
              </h1>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-4 h-4 bg-[#D3363B] rounded"></div>
                  <span className="font-poppins text-white text-base lg:text-lg">
                    25th to 27th September 2025
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-4 h-4 bg-[#D3363B] rounded"></div>
                  <span className="font-poppins text-white text-base lg:text-lg">
                    Shoonya Farm Retreat, Belagavi,
                    <br />
                    Karnataka 2
                  </span>
                </div>
              </div>

              {/* Register Button */}
              <Button className="bg-[#D3363B] hover:bg-[#D3363B]/90 text-white font-work-sans font-medium text-base px-8 py-3 rounded-[25px] shadow-[0px_4px_4px_0px_#D3363B4F]">
                Register Now
              </Button>
            </div>
          </div>
        </main>

        {/* Countdown Timer Box */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white rounded-[20px] px-8 py-6 shadow-2xl">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="font-red-hat-display font-bold text-3xl text-[#D3363B] mb-1">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="font-poppins text-sm text-gray-600">Days</div>
              </div>

              <div className="text-center">
                <div className="font-red-hat-display font-bold text-3xl text-[#D3363B] mb-1">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="font-poppins text-sm text-gray-600">Hours</div>
              </div>

              <div className="text-center">
                <div className="font-red-hat-display font-bold text-3xl text-[#D3363B] mb-1">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="font-poppins text-sm text-gray-600">
                  Minutes
                </div>
              </div>

              <div className="text-center">
                <div className="font-red-hat-display font-bold text-3xl text-[#D3363B] mb-1">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="font-poppins text-sm text-gray-600">
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
