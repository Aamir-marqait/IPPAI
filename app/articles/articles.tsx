"use client";
import Image from "next/image";
import { useState } from "react";
import { JoinUsModal } from "@/components/JoinMembershipModal";

const articles = [
  {
    image: "/article/1.png",
    title: "Hydropower development in India",
    summary:
      "Exploring India's vast hydroelectric potential and the strategic role of IPPs in developing sustainable renewable energy infrastructure across the nation...",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
    pdfFile: "/article/1.pdf",
  },
  {
    image: "/article/2.png",
    title:
      "Biomass Based Power Generation Opportunities and the Role of Independent Power Producers in India",
    summary:
      "Analyzing biomass energy's transformative potential in India's power sector and how IPPs can leverage agricultural waste for clean electricity generation...",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
    pdfFile: "/article/2.pdf",
  },
  {
    image: "/article/3.png",
    title: "24x7 power supply critical to maintaining high growth: IPPAI",
    summary:
      "Understanding the vital importance of uninterrupted power supply for India's economic growth and the policy framework needed to achieve energy security...",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
    pdfFile: "/article/3.pdf",
  },
  {
    image: "/article/4.png",
    title: "The Indian Power Sector: Need of Sustainable Energy Access",
    summary:
      "Examining India's transition towards sustainable energy solutions and the critical role of renewable technologies in ensuring universal power access...",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
    pdfFile: "/article/4.pdf",
  },
  {
    image: "/article/5.png",
    title: "Breaking the Myth Behind Coastal Thermal Power Plants",
    summary:
      "Debunking misconceptions about coastal thermal power facilities and highlighting their strategic importance in India's diversified energy portfolio...",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
    pdfFile: "/article/5.pdf",
  },
  {
    image: "/article/6.png",
    title:
      "Discussion Paper on Competitive Bidding in the Indian power sector: Past, Present and the Future",
    summary:
      "Comprehensive analysis of competitive bidding evolution in India's power sector, examining historical trends and future market opportunities...",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
    pdfFile: "/article/6.pdf",
  },
];

export default function ExpertArticles() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof articles)[0] | null
  >(null);

  return (
    <section className="w-full py-10 sm:py-14 px-2 sm:px-6 bg-white">
      <div className="mx-auto w-full max-w-[1100px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-red-hat-display font-bold text-4xl leading-[48px] text-center capitalize text-[#141414] mb-2">
          Expert Articles
        </h2>
        <p className="font-poppins font-normal text-base leading-6 text-center text-[#4D5756] mb-8 max-w-2xl">
          In-depth viewpoints shaping the future of energy and policy.
        </p>
        {/* Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 justify-items-center">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className={`
                bg-white rounded-2xl
                shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]
                w-full max-w-[325px] min-h-[480px]
                flex flex-col
                transition hover:shadow-[0px_8px_28px_0px_rgba(16,24,40,0.13)]
                cursor-pointer
              `}
              style={{
                opacity: 1,
              }}
              onClick={() => {
                setSelectedArticle(article);
                setIsModalOpen(true);
              }}
            >
              {/* Image */}
              <div
                className="relative mt-6 ml-6 rounded-xl overflow-hidden"
                style={{
                  width: "297.33px",
                  height: "240px",
                  minWidth: "277.33px",
                  minHeight: "240px",
                  maxWidth: "277.33px",
                  maxHeight: "240px",
                }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 700px) 90vw, (max-width: 1200px) 45vw, 297px"
                  priority={idx < 2}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col px-6 pt-5 pb-6 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-red-hat-display font-bold text-2xl leading-tight capitalize text-[#101828] mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <span className="text-[#D3363B] mt-1 ml-1">
                    <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M8 16L16 8M16 8H9M16 8V15"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="font-poppins font-normal text-base leading-[29px] tracking-[0.3%] text-[#6D6D6D] mb-4 line-clamp-3">
                  {article.summary}
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-rubik font-normal text-[18.64px] leading-none capitalize text-black text-opacity-60">
                      {article.author.name}
                    </div>
                    <div className="font-inter font-normal text-sm leading-5 text-[#667085]">
                      {article.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JoinUsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        article={selectedArticle}
      />
      <style jsx>{`
        @media (max-width: 1100px) {
          .card-custom {
            max-width: 100vw;
            width: 100%;
          }
        }
        @media (max-width: 700px) {
          .card-custom {
            min-height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
