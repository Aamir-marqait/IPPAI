"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck, MapPin } from "lucide-react";

interface FeaturedEvent {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  link: string;
}

interface FeaturedCourse {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  link: string;
}

interface IntroductionClientProps {
  mainTitle: string;
  featuredEvents: FeaturedEvent[];
  featuredCourses: FeaturedCourse[];
}

export default function IntroductionClient({
  mainTitle,
  featuredEvents,
  featuredCourses,
}: IntroductionClientProps) {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  // Auto-slide for events every 10 seconds
  useEffect(() => {
    if (featuredEvents.length > 1) {
      const interval = setInterval(() => {
        setCurrentEventIndex((prev) => (prev + 1) % featuredEvents.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [featuredEvents.length]);

  // Parse main title to highlight specific parts
  // Example: "Independent Power Producers Association of India"
  // Highlight: "Power Producers Association"
  const parseTitle = (title: string) => {
    const parts = title.split('Power Producers Association');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="text-[#D3363B]">Power Producers Association</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  const currentEvent = featuredEvents[currentEventIndex];
  const currentCourse = featuredCourses[currentCourseIndex];

  return (
    <div className="w-screen min-h-screen bg-white">
      <div className="w-full max-w-[1100px] mx-auto px-6 py-16 lg:py-[2.5rem]">
        {/* Main Title */}
        <div className="text-center mb-16 lg:mb-14">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-center text-[#141414] mb-6 lg:mb-8">
            {parseTitle(mainTitle)}
          </h1>
        </div>

        <div className="flex gap-10 max-w-[1000px] mx-auto justify-center items-start flex-wrap">
          {/* EVENTS SECTION (Left) */}
          <div className="flex-1 min-w-[340px]">
            <div className="flex items-center gap-3 mb-7">
              <span
                className="h-4 w-[4px] rounded-full bg-[#D3363B]"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm md:text-base xl:text-base font-bold font-red-hat-display leading-none uppercase text-[#D3363B]">
                Latest Events
              </span>
            </div>

            {featuredEvents.length > 0 ? (
              <>
                <div className="text-[36px] font-bold font-red-hat-display leading-[120%] tracking-[0%] mb-7 mt-1 line-clamp-2">
                  {currentEvent.title}
                </div>
                <div className="text-[#555] mb-[18px] line-clamp-1">
                  {currentEvent.description}
                </div>
                <div className="bg-[#F5F5F5] p-2 rounded-[24px] border border-[#D3363B] shadow-sm pb-[15px] mb-[15px] max-w-[494px]">
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={currentEvent.image}
                      alt={currentEvent.title}
                      fill
                      className="object-cover rounded-[24px]"
                    />
                  </div>
                  <div className="pt-[16px]">
                    <div className="bg-white flex flex-col gap-5 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <CalendarCheck className="w-5 h-5 text-[#d43838]" />
                        <span className="font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                          {currentEvent.date}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-[#d43838]" />
                        <span className="max-w-60 line-clamp-3 font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                          {currentEvent.location}
                        </span>
                      </div>
                      <Link href={currentEvent.link}>
                        <Button
                          className="bg-[#D3363B] hover:bg-[#b82e2e] text-white border-none rounded-lg px-6 py-2 font-work-sans font-medium text-[16px] leading-[100%] tracking-[0%] text-center cursor-pointer"
                          style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
                        >
                          Register Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Event Navigation */}
                {featuredEvents.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <button
                      onClick={() =>
                        setCurrentEventIndex(
                          (prev) =>
                            (prev - 1 + featuredEvents.length) %
                            featuredEvents.length
                        )
                      }
                      className="text-[#d43838] hover:text-[#b82e2e] transition-colors cursor-pointer"
                      aria-label="Previous event"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>

                    <div className="flex items-center">
                      {featuredEvents.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentEventIndex(index)}
                          className={`inline-block h-1 rounded-sm mx-[5px] transition-all ${
                            index === currentEventIndex
                              ? "w-[22px] bg-[#d43838]"
                              : "w-[10px] border border-[#d43838] bg-transparent"
                          }`}
                          aria-label={`Go to event ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentEventIndex(
                          (prev) => (prev + 1) % featuredEvents.length
                        )
                      }
                      className="text-[#d43838] hover:text-[#b82e2e] transition-colors cursor-pointer"
                      aria-label="Next event"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No events available at the moment.
              </div>
            )}
          </div>

          {/* COURSES SECTION (Right) */}
          <div className="flex-1 min-w-[340px] relative">
            <div className="flex items-center gap-3 mb-7">
              <span
                className="h-4 w-[4px] rounded-full bg-[#D3363B]"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm md:text-base xl:text-base font-bold font-red-hat-display leading-none uppercase text-[#D3363B]">
                OUR COURSES
              </span>
            </div>

            {featuredCourses.length > 0 ? (
              <>
                <div className="text-[36px] font-bold font-red-hat-display leading-[120%] tracking-[0%] mb-7 mt-1 line-clamp-2">
                  {currentCourse.title}
                </div>
                <div className="text-[#555] mb-[18px] line-clamp-1">
                  {currentCourse.description}
                </div>
                <div className="bg-[#F5F5F5] p-2 rounded-[24px] border border-[#D3363B] shadow-sm pb-[15px] mb-[15px] max-w-[494px]">
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={currentCourse.image}
                      alt={currentCourse.title}
                      fill
                      className="object-cover rounded-[24px]"
                    />
                  </div>
                  <div className="pt-[16px]">
                    <div className="bg-white flex flex-col gap-5 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <CalendarCheck className="w-5 h-5 text-[#d43838]" />
                        <span className="font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                          {currentCourse.date}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-[#d43838]" />
                        <span className="max-w-60 line-clamp-3 font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                          {currentCourse.location}
                        </span>
                      </div>
                      <Link href={currentCourse.link}>
                        <Button
                          className="bg-[#D3363B] hover:bg-[#b82e2e] text-white border-none rounded-lg px-6 py-2 font-work-sans font-medium text-[16px] leading-[100%] tracking-[0%] text-center cursor-pointer"
                          style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
                        >
                          Register Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Course Navigation */}
                {featuredCourses.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <button
                      onClick={() =>
                        setCurrentCourseIndex(
                          (prev) =>
                            (prev - 1 + featuredCourses.length) %
                            featuredCourses.length
                        )
                      }
                      className="text-[#d43838] hover:text-[#b82e2e] transition-colors cursor-pointer"
                      aria-label="Previous course"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>

                    <div className="flex items-center">
                      {featuredCourses.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentCourseIndex(index)}
                          className={`inline-block h-1 rounded-sm mx-[5px] transition-all ${
                            index === currentCourseIndex
                              ? "w-[22px] bg-[#d43838]"
                              : "w-[10px] border border-[#d43838] bg-transparent"
                          }`}
                          aria-label={`Go to course ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentCourseIndex(
                          (prev) => (prev + 1) % featuredCourses.length
                        )
                      }
                      className="text-[#d43838] hover:text-[#b82e2e] transition-colors cursor-pointer"
                      aria-label="Next course"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No courses available at the moment.
              </div>
            )}

            {/* Divider Line */}
            <div className="absolute left-[-20px] top-0 h-full flex items-center">
              <Image
                src="/optimized/line-main.webp"
                alt="Divider"
                width={6}
                height={200}
                className="w-[6px] min-h-[240px]"
                style={{ minHeight: "730px", maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}