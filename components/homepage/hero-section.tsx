import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Header from "../Header";

export default function HomeHero() {
  return (
    <div className="min-h-screen ">
      <div
        className="absolute inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/background.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="flex max-w-[1100px] mx-auto flex-col items-start justify-center min-h-[calc(100vh-120px)] lg:mt-10">
          <div className=" w-full">
            <div className="text-center mb-12">
              <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-7xl font-bold font-red-hat-display text-white mb-6 leading-[150%]">
                Intensive Course on
                <br />
                Regulatory & Policy Framework
                <br />
                in the{" "}
                <span className="relative bg-gradient-to-r from-[#D3363B] to-[#EA7A7D] bg-clip-text text-transparent">
                  Power Sector
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                IPPAI brings together policymakers, regulators, and industry
                leaders to shape India&apos;s energy and infrastructure future.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-16 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-red-500 w-5 h-5" />
                    <span className="text-gray-800 font-semibold">
                      25th to 27th September 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-red-500 w-5 h-5" />
                    <span className="text-gray-800">
                      Shoonya Farm Retreat, Belagavi, Karnataka 2
                    </span>
                  </div>
                </div>
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Register Now
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-blue-600 font-medium text-lg">
                    Sponsored By
                  </span>
                  <div className="w-px h-8 bg-blue-300"></div>
                  <Image
                    src="/images/sponsor-logo.png"
                    alt="Sponsor"
                    width={60}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-blue-600 font-medium text-lg">
                    Knowledge Partner
                  </span>
                  <div className="w-px h-8 bg-blue-300"></div>
                  <Image
                    src="/images/idam-logo.png"
                    alt="Idam - Enabling Carbon Minimal World"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/images/ippai-logo.png"
                    alt="IPPAI"
                    width={156}
                    height={59}
                    className="h-12 w-auto"
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
