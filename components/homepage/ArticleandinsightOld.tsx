import React from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Industry Perspective",
    description:
      "Expert analysis and insights on market trends, technological innovations, and regulatory changes in the power sector.",
    imgSrc: "/home/industry.png",
    imgAlt: "Industry Perspective Icon",
  },
  {
    title: "Socio - Ecological Narratives",
    description:
      "Exploring the intersection of energy transition, environmental sustainability, and community impact stories.",
    imgSrc: "/home/socio.png",
    imgAlt: "Socio-Ecological Narratives Icon",
  },
  {
    title: "Energy Security",
    description:
      "Strategic insights on India's energy independence, supply chain resilience, and sustainable power solutions.",
    imgSrc: "/home/energy.png",
    imgAlt: "Energy Security Icon",
  },
];

const ArticlesAndInsightsOld = () => {
  return (
    <section
      className="min-h-[85vh] px-4 py-12 flex flex-col justify-center items-center"
      style={{
        background:
          "linear-gradient(255.27deg, #D3363B 26.48%, #6D1C1E 110.06%)",
      }}
    >
      <div className="mb-8 text-center">
        <h2 className="font-red-hat-display font-bold text-4xl leading-none text-center text-white mb-2">
          Articles and Insights
        </h2>
        <p className="font-poppins font-normal text-base leading-7 text-center text-white">
          Your gateway to energy intelligence and thought leadership.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center items-center mb-8 ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl flex flex-col items-center px-6 flex-1 min-w-[240px] max-w-[350px] mx-auto ${
              idx === 1 ? "py-8" : "py-8 scale-95"
            }`}
            style={{ boxShadow: "0px 6px 16px 0px #A3A3A333" }}
          >
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-5">
              {card.imgSrc ? (
                <Image
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              ) : (
                <div className="w-14 h-14" />
              )}
            </div>
            <h3 className="font-red-hat-display font-semibold text-[28px] leading-[38px] text-center capitalize text-[#121212] mb-3">
              {card.title}
            </h3>
            <p className="font-poppins pl-3 pr-3 font-normal text-lg leading-[30px] text-center text-[#636363]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/articles"
        className="font-sora font-semibold text-base leading-[150%] uppercase text-white px-6 py-2 rounded-md cursor-pointer  transition flex items-center gap-2"
      >
        VIEW ALL<span className="text-base">&rarr;</span>
      </Link>
    </section>
  );
};

export default ArticlesAndInsightsOld;
