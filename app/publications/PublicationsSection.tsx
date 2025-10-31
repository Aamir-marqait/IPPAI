// "use client";

// import Image from "next/image";

// const publications = [
//   {
//     image: "/pub/1.jpg",
//     title: "Powering Andhra",
//     author: "IPPAI",
//     date: "17 Jan 2025",
//     desc: "Comprehensive analysis of Andhra Pradesh's power sector transformation, policy reforms, and energy infrastructure development strategies.",
//   },
//   {
//     image: "/pub/2.jpg",
//     title: "Round Table to Discuss Issues",
//     author: "IPPAI",
//     date: "17 Jan 2025",
//     desc: "Stakeholder discussions on critical power sector challenges, regulatory frameworks, and collaborative solutions for industry growth.",
//   },
//   {
//     image: "/pub/3.jpg",
//     title: "ECONOMIC IMPACT OF JUDICIAL DecISIoNs",
//     author: "IPPAI",
//     date: "17 Jan 2025",
//     desc: "Detailed study examining how judicial rulings shape power sector economics, investment decisions, and regulatory compliance costs.",
//   },
//   {
//     image: "/pub/4.jpg",
//     title: "The Great Game of Energy",
//     author: "IPPAI",
//     date: "17 Jan 2025",
//     desc: "Strategic insights into global energy geopolitics, market dynamics, and India's position in the evolving energy landscape.",
//   },
//   {
//     image: "/pub/5.jpg",
//     title: "Captive Power Series 2009",
//     author: "IPPAI",
//     date: "17 Jan 2025",
//     desc: "In-depth exploration of captive power generation trends, regulatory frameworks, and industrial energy self-sufficiency strategies.",
//   },
// ];

// export default function PublicationsSection() {
//   return (
//     <section className="w-full py-10 sm:py-14 px-2 sm:px-6 bg-white">
//       <div className="mx-auto w-full max-w-[1100px] flex flex-col items-center">
//         {/* Heading */}
//         <h2 className="font-red-hat-display font-bold text-4xl leading-[48px] text-center capitalize text-[#141414] mb-2">
//           Our Publications
//         </h2>
//         <p className="font-poppins font-normal text-base leading-6 text-center text-[#4D5756] mb-8 max-w-2xl">
//           A repository of knowledge, analysis, and thought leadership from
//           IPPAI.
//         </p>
//         {/* Grid */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center ">
//           {publications.map((pub, idx) => (
//             <div
//               key={idx}
//               className={`
//                 bg-white rounded-[10px] cursor-pointer
//                 shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09),0px_12px_16px_-4px_rgba(16,24,40,0.08)]
//                 w-full max-w-[560px] min-h-[313px]
//                 flex flex-row p-6 gap-6
//                 transition hover:shadow-[0px_8px_28px_0px_rgba(16,24,40,0.13)]
//                 opacity-100
//               `}
//             >
//               {/* Image */}
//               <div
//                 className="relative flex-shrink-0 rounded-[10px] overflow-hidden"
//                 style={{
//                   width: "171.77px",
//                   height: "262.52px",
//                   boxShadow: "0px 11.65px 46.6px 0px #00000055",
//                   opacity: 1,
//                 }}
//               >
//                 <Image
//                   src={pub.image}
//                   alt={pub.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 700px) 48vw, (max-width: 1100px) 30vw, 172px"
//                   priority={idx < 2}
//                 />
//               </div>
//               {/* Content */}
//               <div className="flex flex-col p-5 h-full justify-between flex-1 min-w-0">
//                 <div className="flex flex-col justify-between gap-8">
//                   <h3 className="font-red-hat-display font-bold text-2xl leading-[150%] capitalize text-[#101828] mb-1 line-clamp-2">
//                     {pub.title}
//                   </h3>
//                   <div className="flex items-center mb-2">
//                     <span className="font-rubik font-normal text-[18.64px] leading-none capitalize text-black text-opacity-60">
//                       By {pub.author}
//                     </span>
//                     <span className="ml-3 font-inter font-normal text-sm leading-5 text-[#667085]">
//                       {pub.date}
//                     </span>
//                   </div>
//                   <div className="font-poppins font-normal text-base leading-[29px] tracking-[0.3%] text-[#6D6D6D] mb-2 line-clamp-2">
//                     {pub.desc}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @media (max-width: 1200px) {
//           .card-custom {
//             max-width: 100vw;
//             width: 100%;
//           }
//         }
//         @media (max-width: 700px) {
//           .card-custom {
//             flex-direction: column !important;
//             align-items: center !important;
//             min-height: 320px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Publication {
  _id: string;
  title: string;
  image: string;
  author: string;
  publishedAt: string;
  description: string;
  pdfFile?: string;
  externalLink?: string;
  categories?: string[];
  customCategories?: string[];
  featured?: boolean;
}

interface PublicationsSectionProps {
  publications: Publication[];
  categories: string[];
}

export default function PublicationsSection({ 
  publications, 
  categories 
}: PublicationsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("date-newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const publicationsPerPage = 6;

  const filteredAndSortedPublications = useMemo(() => {
    let filtered = [...publications];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((pub) => {
        const allCategories = [
          ...(pub.categories || []),
          ...(pub.customCategories || []),
        ];
        return allCategories.includes(selectedCategory);
      });
    }

    switch (sortBy) {
      case "date-newest":
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case "date-oldest":
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "featured":
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [publications, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedPublications.length / publicationsPerPage);
  const startIndex = (currentPage - 1) * publicationsPerPage;
  const endIndex = startIndex + publicationsPerPage;
  const currentPublications = filteredAndSortedPublications.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-10 sm:py-14 px-2 sm:px-6 bg-white">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-red-hat-display font-bold text-4xl leading-[48px] text-center capitalize text-[#141414] mb-2">
            Our Publications
          </h2>
          <p className="font-poppins font-normal text-base leading-6 text-center text-[#4D5756] mb-8 max-w-2xl">
            A repository of knowledge, analysis, and thought leadership from IPPAI.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange("all")}
              className={selectedCategory === "all" ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : "hover:bg-gray-100"}
            >
              All Publications
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className={selectedCategory === category ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : "hover:bg-gray-100"}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-newest">Newest First</SelectItem>
                <SelectItem value="date-oldest">Oldest First</SelectItem>
                <SelectItem value="title-asc">Title: A-Z</SelectItem>
                <SelectItem value="title-desc">Title: Z-A</SelectItem>
                <SelectItem value="featured">Featured First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedPublications.length)} of {filteredAndSortedPublications.length} publications
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center mb-8">
          {currentPublications.map((pub) => {
            const isHovered = hoveredCard === pub._id;
            
            return (
              <div
                key={pub._id}
                className="relative bg-white rounded-[10px] cursor-pointer shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09),0px_12px_16px_-4px_rgba(16,24,40,0.08)] w-full max-w-[560px] min-h-[313px] flex flex-row p-6 gap-6 transition-all duration-300 ease-in-out hover:shadow-[0px_8px_28px_0px_rgba(16,24,40,0.13)] overflow-hidden"
                onMouseEnter={() => setHoveredCard(pub._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {pub.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-yellow-400 text-yellow-900 rounded-full p-1.5">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                )}

                <div
                  className="relative flex-shrink-0 rounded-[10px] overflow-hidden"
                  style={{
                    width: "171.77px",
                    height: "262.52px",
                    boxShadow: "0px 11.65px 46.6px 0px #00000055",
                  }}
                >
                  <Image
                    src={pub.image || "/placeholder.svg"}
                    alt={pub.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 700px) 48vw, (max-width: 1100px) 30vw, 172px"
                  />
                </div>

                <div className="flex flex-col flex-1 min-w-0 relative">
                  <div className={isHovered ? "opacity-0 pointer-events-none transition-opacity duration-300" : "opacity-100 transition-opacity duration-300"}>
                    <h3 className="font-red-hat-display font-bold text-2xl leading-[150%] capitalize text-[#101828] mb-3 line-clamp-2">
                      {pub.title}
                    </h3>
                    <div className="flex items-center mb-3">
                      <span className="font-rubik font-normal text-[18.64px] leading-none capitalize text-black text-opacity-60">
                        By {pub.author}
                      </span>
                      <span className="ml-3 font-inter font-normal text-sm leading-5 text-[#667085]">
                        {formatDate(pub.publishedAt)}
                      </span>
                    </div>
                    <p className="font-poppins font-normal text-base leading-[29px] text-[#6D6D6D] line-clamp-3">
                      {pub.description}
                    </p>
                  </div>

                  <div className={isHovered ? "absolute inset-0 transition-opacity duration-300 flex flex-col opacity-100" : "absolute inset-0 transition-opacity duration-300 flex flex-col opacity-0 pointer-events-none"}>
                    <h3 className="font-red-hat-display font-bold text-xl leading-tight text-[#101828] mb-2">
                      {pub.title}
                    </h3>
                    <div className="flex items-center mb-3 text-sm">
                      <span className="font-rubik font-medium text-black text-opacity-60">
                        By {pub.author}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="font-inter text-[#667085]">
                        {formatDate(pub.publishedAt)}
                      </span>
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                      <p className="font-poppins font-normal text-sm leading-relaxed text-[#6D6D6D]">
                        {pub.description}
                      </p>
                    </div>
                    
                    {(pub.categories || pub.customCategories) && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {[...(pub.categories || []), ...(pub.customCategories || [])].slice(0, 3).map((cat, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {currentPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No publications found.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("all");
                setSortBy("date-newest");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const showPage = page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1);
                const showEllipsis = (page === currentPage - 2 && currentPage > 3) || (page === currentPage + 2 && currentPage < totalPages - 2);

                if (showEllipsis) {
                  return <span key={page} className="px-2 text-gray-400">...</span>;
                }

                if (!showPage) return null;

                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className={currentPage === page ? "min-w-[40px] bg-[#D3363B] hover:bg-[#B8303A] text-white" : "min-w-[40px]"}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
}

