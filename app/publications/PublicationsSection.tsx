"use client";

import Image from "next/image";

const publications = [
  {
    image: "/pub/1.jpg",
    title: "Powering Andhra",
    author: "IPPAI",
    date: "17 Jan 2025",
    desc: "Comprehensive analysis of Andhra Pradesh's power sector transformation, policy reforms, and energy infrastructure development strategies.",
  },
  {
    image: "/pub/2.jpg",
    title: "Round Table to Discuss Issues",
    author: "IPPAI",
    date: "17 Jan 2025",
    desc: "Stakeholder discussions on critical power sector challenges, regulatory frameworks, and collaborative solutions for industry growth.",
  },
  {
    image: "/pub/3.jpg",
    title: "ECONOMIC IMPACT OF JUDICIAL DecISIoNs",
    author: "IPPAI",
    date: "17 Jan 2025",
    desc: "Detailed study examining how judicial rulings shape power sector economics, investment decisions, and regulatory compliance costs.",
  },
  {
    image: "/pub/4.jpg",
    title: "The Great Game of Energy",
    author: "IPPAI",
    date: "17 Jan 2025",
    desc: "Strategic insights into global energy geopolitics, market dynamics, and India's position in the evolving energy landscape.",
  },
  {
    image: "/pub/5.jpg",
    title: "Captive Power Series 2009",
    author: "IPPAI",
    date: "17 Jan 2025",
    desc: "In-depth exploration of captive power generation trends, regulatory frameworks, and industrial energy self-sufficiency strategies.",
  },
];

export default function PublicationsSection() {
  return (
    <section className="w-full py-10 sm:py-14 px-2 sm:px-6 bg-white">
      <div className="mx-auto w-full max-w-[1100px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-red-hat-display font-bold text-4xl leading-[48px] text-center capitalize text-[#141414] mb-2">
          Our Publications
        </h2>
        <p className="font-poppins font-normal text-base leading-6 text-center text-[#4D5756] mb-8 max-w-2xl">
          A repository of knowledge, analysis, and thought leadership from
          IPPAI.
        </p>
        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center ">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className={`
                bg-white rounded-[10px] cursor-pointer
                shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09),0px_12px_16px_-4px_rgba(16,24,40,0.08)]
                w-full max-w-[560px] min-h-[313px]
                flex flex-row p-6 gap-6
                transition hover:shadow-[0px_8px_28px_0px_rgba(16,24,40,0.13)]
                opacity-100
              `}
            >
              {/* Image */}
              <div
                className="relative flex-shrink-0 rounded-[10px] overflow-hidden"
                style={{
                  width: "171.77px",
                  height: "262.52px",
                  boxShadow: "0px 11.65px 46.6px 0px #00000055",
                  opacity: 1,
                }}
              >
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 700px) 48vw, (max-width: 1100px) 30vw, 172px"
                  priority={idx < 2}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col p-5 h-full justify-between flex-1 min-w-0">
                <div className="flex flex-col justify-between gap-8">
                  <h3 className="font-red-hat-display font-bold text-2xl leading-[150%] capitalize text-[#101828] mb-1 line-clamp-2">
                    {pub.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <span className="font-rubik font-normal text-[18.64px] leading-none capitalize text-black text-opacity-60">
                      By {pub.author}
                    </span>
                    <span className="ml-3 font-inter font-normal text-sm leading-5 text-[#667085]">
                      {pub.date}
                    </span>
                  </div>
                  <div className="font-poppins font-normal text-base leading-[29px] tracking-[0.3%] text-[#6D6D6D] mb-2 line-clamp-2">
                    {pub.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          .card-custom {
            max-width: 100vw;
            width: 100%;
          }
        }
        @media (max-width: 700px) {
          .card-custom {
            flex-direction: column !important;
            align-items: center !important;
            min-height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
