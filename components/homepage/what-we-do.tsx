import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <div className="w-screen min-h-screen bg-white">
      <div className="w-full max-w-[1100px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/home/what.png"
                alt="Wind turbines in a field against cloudy sky"
                fill
                className="object-contain"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Label */}
            <div className="flex items-center gap-2">
              <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
              <span className="text-[#D3363B] font-bold font-red-hat-display leading-none uppercase text-xs sm:text-sm md:text-base xl:text-base">
                What we do?
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-[#141414]">
              Leading the way in bringing innovation and inspiration to the
              power sector.
            </h1>

            {/* Bullet Points */}
            <div className="space-y-4">
              {[
                "A neutral platform for all power sector stakeholders.",
                "Driving impactful energy and sustainability policies.",
                "Sharing research, innovation, and best practices.",
                "Bridging government, industry, and consumers.",
                "Advancing clean and innovative power solutions.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-3 h-3 text-[#D3363B]" strokeWidth={3} />

                  <p className="text-black font-normal font-poppins leading-none text-xs sm:text-sm md:text-base xl:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/contact">
                <Button
                  className="cursor-pointer bg-[#D3363B] hover:bg-[#D3363B]/90 text-white font-medium font-work-sans leading-none text-center px-8 py-3 text-xs sm:text-sm md:text-base xl:text-base rounded-full"
                  style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
                >
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
