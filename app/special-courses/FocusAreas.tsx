import React from "react";
import Image from "next/image";

const cards = [
  {
    iconSrc: "/pr.png", // Add your Policy Research icon src here
    iconAlt: "Policy Research Icon",
    title: "Policy Research",
  },
  {
    iconSrc: "/cb.png", // Add your Capacity Building icon src here
    iconAlt: "Capacity Building Icon",
    title: "Capacity Building",
  },
  {
    iconSrc: "/it.png", // Add your Industry Training icon src here
    iconAlt: "Industry Training Icon",
    title: "Industry Training",
  },
];

export default function FocusAreas() {
  return (
    <section className="w-full bg-white py-8 flex justify-center items-center max-w-[1100px] mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg bg-white flex flex-col items-start px-8 py-7 min-w-[220px] max-w-[340px] w-full shadow-none"
          >
            <div className="bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
              {card.iconSrc ? (
                <Image
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              ) : (
                <div className="w-8 h-8" />
              )}
            </div>
            <div className="font-work-sans font-normal text-[28px] leading-[100%] tracking-[0%] text-black">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
