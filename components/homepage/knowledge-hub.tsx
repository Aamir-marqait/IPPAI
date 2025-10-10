"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { JoinUsModal } from "@/components/JoinMembershipModal";

const knowledgeHubArticles = [
  {
    title: "HYDROPOWER DEVELOPMENT IN INDIA",
    summary: "Exploring India's vast hydroelectric potential and the strategic role of IPPs in developing sustainable renewable energy infrastructure across the nation",
    pdfFile: "/article/1.pdf",
    image: "/article/1.png",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
  },
  {
    title: "BIOMASS BASED POWER GENERATION OPPORTUNITIES",
    summary: "Analyzing biomass energy's transformative potential in India's power sector and how IPPs can leverage agricultural waste",
    pdfFile: "/article/2.pdf",
    image: "/article/2.png",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
  },
  {
    title: "24x7 POWER SUPPLY",
    summary: "Understanding the vital importance of uninterrupted power supply for India's economic growth",
    pdfFile: "/article/3.pdf",
    image: "/article/3.png",
    author: {
      name: "IPPAI",
      avatar: "/header/logo.png",
    },
    date: "17 Jan 2025",
  },
];

export default function KnowledgeHubSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof knowledgeHubArticles)[0] | null
  >(null);

  const handleArticleClick = (article: typeof knowledgeHubArticles[0]) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  return (
    <section
      className="w-full flex flex-col items-center py-8 px-4 md:px-6 lg:px-8 md:-mt-20"
      style={{
        backgroundImage: "url('/optimized/khbg.webp')",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#1B1B1B] mt-2 mb-2 text-center">
          Knowledge Hub
        </h2>
        <p className="text-[#8C8C8C] font-poppins text-sm md:text-base text-center mb-6 md:mb-8 px-4">
          Your gateway to energy intelligence and thought leadership.
        </p>

        {/* Main Card */}
        <div className="w-full max-w-[700px] mt-2 bg-white rounded-[18px] shadow-lg flex flex-col lg:flex-row px-0 py-6 md:py-8 lg:py-12 mx-auto items-stretch relative gap-4 md:gap-6 lg:gap-8">
          {/* Articles/Insights */}
          <div className="flex flex-1 flex-col px-4 md:px-6 lg:px-7 pt-2 pb-2 justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/optimized/kh1.webp"
                alt="Articles Icon"
                width={38}
                height={38}
                className="w-[38px] h-[38px]"
                loading="lazy"
              />
              <span className="font-red-hat-display font-bold text-[#BC3C33] text-xl">
                {/* Just icon, no label here */}
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl leading-[135%] text-[#243C4B] mb-4 md:mb-5 align-middle">
              Articles <br className="sm:hidden md:block" /> and Insights
            </h3>
            <div className="mb-3">
              {knowledgeHubArticles.map((article, index) => (
                <div
                  key={index}
                  className="mb-3 cursor-pointer group transition-all hover:bg-gray-50 p-2 rounded-lg -ml-2 -mr-2"
                  onClick={() => handleArticleClick(article)}
                >
                  <div className="font-serif font-bold text-sm md:text-base leading-[135%] text-[#243C4B] mb-2 align-middle group-hover:text-[#D3363B] transition-colors">
                    {article.title}
                  </div>
                  <div className="font-sans font-normal text-sm md:text-[15px] leading-[150%] text-[#6D6D6D] align-middle">
                    {article.summary}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/articles"
              className="flex items-center gap-2 mt-auto group text-[#D3363B] font-semibold text-[13px]"
            >
              VIEW ALL
              <span className="transition-all group-hover:translate-x-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#D3363B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* CENTER LINE */}
          <div className="hidden lg:flex items-stretch justify-center px-0">
            <div className="h-full flex items-center">
              <Image
                src="/optimized/line-main.webp"
                alt="Divider"
                width={6}
                height={600}
                className="w-[6px] min-h-[340px] mx-0"
                style={{ minHeight: "280px", maxHeight: "1420px" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Policy Recommendations */}
          <div className="flex flex-1 flex-col px-4 md:px-6 lg:px-7 pt-2 pb-2 justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/optimized/kh2.webp"
                alt="Policy Icon"
                width={38}
                height={38}
                className="w-[38px] h-[38px]"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif font-bold text-xl md:text-2xl leading-[135%] text-[#243C4B] mb-4 md:mb-5 align-middle">
              Policy <br className="sm:hidden" /> Recommendations
            </h3>
            <div className="font-sans font-normal text-sm md:text-[15px] leading-[150%] text-[#6D6D6D] mb-3 align-middle">
              Details of the Concessions/Exemptions under NET Metering
              Arrangement Technologies and New Paradigms in Renewable Energy
              Sphere
              <br />
              <br />
              Current Ecological Concerns in the Power Sector: Options to Avoid
              or Minimise Impacts.The Neo-liberal Era - Sustainable Futures or
              Corporate Colonization&apos;s?
              <br />
              <br />
              Current Ecological Concerns in the Power Sector: Options to Avoid
              or Minimise Impacts.The Neo-liberal Era - Sustainable Futures or
              Corporate Colonization&apos;s?
            </div>
            <Link
              href="/policies"
              className="flex items-center gap-2 mt-auto group text-[#D3363B] font-semibold text-[13px]"
            >
              VIEW ALL
              <span className="transition-all group-hover:translate-x-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#D3363B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <JoinUsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        article={selectedArticle}
      />
    </section>
  );
}
