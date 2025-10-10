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
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "Industry Perspective",
    "Narratives", 
    "Socio-Ecological",
    "Energy Security"
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if (isDropdownOpen && !(e.target as Element).closest('.dropdown-container')) {
      setIsDropdownOpen(false);
    }
  };

  // Filter articles based on search term and selected categories
  const filteredArticles = articles.filter(article => {
    // Search filter
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());

    // Category filter - if no categories selected, show all
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.some(category => 
        article.title.toLowerCase().includes(category.toLowerCase()) ||
        article.summary.toLowerCase().includes(category.toLowerCase())
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="w-full py-10 sm:py-14 px-2 sm:px-6 bg-white" onClick={handleClickOutside}>
      <div className="mx-auto w-full max-w-[1100px]">
        {/* Header with heading on left and search/sort on right */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8">
          {/* Left side - Heading */}
          <div className="flex flex-col">
            <h2 className="font-red-hat-display font-bold text-4xl leading-[48px] capitalize text-[#141414] mb-2">
              Expert Articles
            </h2>
            <p className="font-poppins font-normal text-base leading-6 text-[#4D5756] max-w-2xl">
              In-depth viewpoints shaping the future of energy and policy.
            </p>
          </div>

          {/* Right side - Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 lg:min-w-[400px]">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[265px] h-10 pl-9 pr-3 pt-[14px] pb-[14px] rounded-[5px] border border-[#EBEBEB] bg-[#FBFBFB] font-work-sans text-base font-normal leading-[100%] focus:ring-2 focus:ring-[#D3363B] focus:border-transparent outline-none"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-[115px] h-10 flex items-center justify-center gap-3 p-[9.48px] rounded-[4.74px] border border-[#EBEBEB] bg-[#FBFBFB] font-work-sans font-medium text-[15.8px] leading-[100%] text-[#6C757D] hover:bg-gray-50 focus:ring-2 focus:ring-[#D3363B] focus:border-transparent outline-none"
              >
                <span>Sort by</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg border border-gray-200 z-10" style={{ boxShadow: '0px 0px 7.2px 0px #00000026' }}>
                  <div className="p-3">
                    <h3 className="font-work-sans font-normal text-base leading-[100%] text-gray-900 mb-2">Categories</h3>
                    {categories.map((category) => (
                      <label key={category} className="flex items-center py-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 text-[#D3363B] focus:ring-[#D3363B] border-gray-300 rounded"
                        />
                        <span className="ml-3 font-work-sans font-normal text-base leading-[100%] text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Grid */}
        {filteredArticles.length > 0 ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 justify-items-center">
            {filteredArticles.map((article, idx) => (
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
        ) : (
          <div className="w-full text-center py-16">
            <div className="mx-auto max-w-md">
              <div className="mb-4">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-red-hat-display text-lg font-medium text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="font-poppins text-gray-500">
                Try adjusting your search terms or filter categories to find more articles.
              </p>
            </div>
          </div>
        )}
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
