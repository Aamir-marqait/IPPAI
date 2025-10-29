import React from "react";
import Image from "next/image";

const items = [
  {
    iconSrc: "/a.png", // Add your mission icon src here
    iconAlt: "Mission Icon",
    title: "Our Mission",
    description:
      "To serve as a neutral platform for all stakeholders in India's power sector, facilitating dialogue, collaboration, and policy development for sustainable energy solutions.",
  },
  {
    iconSrc: "/b.png", // Add your vision icon src here
    iconAlt: "Vision Icon",
    title: "Our Vision",
    description:
      "To drive impactful energy and sustainability policies that position India as a global leader in clean, reliable, and affordable power generation.",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="bg-white max-w-[1100px] mx-auto  py-10 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row  justify-center items-center max-w-4xl">
        {/* Left Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/mvs.png"
            alt="Solar panels and wind turbines"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-[320px] h-[320px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
          />
        </div>
        {/* Mission & Vision */}
        <div className="flex-1 flex flex-col gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="border border-[#D3363B] rounded-2xl px-6 py-5 flex flex-col gap-4 bg-[#F8F8F8]"
            >
              {/* Icon and Title Row */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.iconSrc ? (
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  ) : (
                    <div className="w-10 h-10" />
                  )}
                </div>
                <div className="text-[32px] font-semibold text-[#1C1C1C] leading-[100%] font-['Red_Hat_Display']">
                  {item.title}
                </div>
              </div>
              {/* Description - Full Width */}
              <div className="text-[16px] font-light text-[#141414] leading-[130%] font-['Poppins'] w-full">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
