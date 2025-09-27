import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Header from "../Header";

export default function HomeHero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/home/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="flex max-w-[1100px] mx-auto flex-col items-start justify-center min-h-[calc(100vh-120px)] lg:mt-2">
          <div className=" w-full">
            <div className="text-center mb-12">
              <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-6 leading-[150%]">
                Intensive Course on
                <br />
                Regulatory & Policy{" "}
                <span className="relative inline-block">
                  Framework
                  <Image
                    src="/home/line.png"
                    alt=""
                    width={400}
                    height={20}
                    className="absolute -bottom-2 left-0 w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] opacity-80"
                  />
                </span>
                <br />
                in the{" "}
                <span className="relative bg-gradient-to-r from-[#D3363B] to-[#EA7A7D] bg-clip-text text-transparent">
                  Power Sector
                </span>
              </h1>

              <p className="text-left text-xs sm:text-sm md:text-base xl:text-base font-light font-poppins text-white leading-none mt-5 max-w-2xl">
                IPPAI brings together policymakers, regulators, and industry
                leaders to shape India&apos;s energy and infrastructure future.
              </p>
            </div>

            <div className="bg-white/96 rounded-[20px] p-6 md:p-8 max-w-2xl mb-16 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-red-500 w-5 h-5" />
                    <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                      25th to 27th September 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-red-500 w-5 h-5" />
                    <span className="text-[#222222] text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none">
                      Shoonya Farm Retreat, Belagavi, Karnataka 2
                    </span>
                  </div>
                </div>
                <Button
                  className="cursor-pointer bg-[#D3363B] hover:bg-[#D3363B]/90 text-white text-xs sm:text-sm md:text-base xl:text-base font-medium font-work-sans leading-none text-center rounded-[25px] p-[10px] px-8"
                  style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
                >
                  Register Now
                </Button>
              </div>
            </div>

            <div
              className="bg-white rounded-[20px] border border-[#CCCCCC] p-6 md:py-8 mx-auto"
              style={{ boxShadow: "0px 12px 30px 0px #00000030" }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-[#656565] font-light font-briem-hand leading-none text-base sm:text-lg md:text-xl xl:text-2xl">
                    Sponsored By
                  </span>
                  <Image
                    src="/home/s.png"
                    alt="Sponsor"
                    width={60}
                    height={60}
                    className="h-10 w-auto"
                  />
                  <div
                    className="w-px h-8 "
                    style={{
                      border: "1px solid #DEDEDE",
                    }}
                  ></div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#656565] font-light font-briem-hand leading-none text-base sm:text-lg md:text-xl xl:text-2xl">
                    Knowledge Partner
                  </span>

                  <Image
                    src="/home/kp1.png"
                    alt="Idam - Enabling Carbon Minimal World"
                    width={120}
                    height={60}
                    className="h-10 w-auto"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/home/kp2.png"
                    alt="IPPAI"
                    width={156}
                    height={59}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
