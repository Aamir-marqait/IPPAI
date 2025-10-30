/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck, MapPin } from "lucide-react";
import eventsData from "@/data/events.json";
import coursesData from "@/data/courses.json";

export default function Introduction() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  // Get upcoming events only
  const upcomingEvents = eventsData.events.filter(
    (event) => event.status === "upcoming"
  );
  const courses = coursesData.courses;

  // Auto-slide for events every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [upcomingEvents.length]);

  const currentEvent = upcomingEvents[currentEventIndex];
  const currentCourse = courses[currentCourseIndex];

  return (
    <div className="w-screen min-h-screen bg-white">
      <div className="w-full max-w-[1100px] mx-auto px-6 py-16 lg:py-[5.5rem]">
        <div className="text-center mb-16 lg:mb-14">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-red-hat-display leading-none text-center text-[#141414] mb-6 lg:mb-8">
            Independent{" "}
            <span className="text-[#D3363B]">
              {" "}
              Power Producers Association{" "}
            </span>
            of India
          </h1>
          <p className="text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-none text-center text-[#141414]/60 max-w-6xl mx-auto">
            IPPAI was set up as a not-for-pro­fit association shortly after the
            Government of India opened the power sector to private industry.
            Since its inception as an independent body in 1994, IPPAI&apos;s aim
            has been to provide a neutral platform for the examination of issues
            critical to the development of the power sector in India, to discuss
            energy policy and to focus on strategic, financial, legal,
            regulatory and technical issues in the power, oil, gas and allied
            sectors with a prime focus on independent power producers.
          </p>
        </div>

        <div className="flex gap-10 max-w-[1000px] mx-auto justify-center items-start flex-wrap">
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
            <div className="text-[36px] font-bold font-red-hat-display leading-[100%] tracking-[0%] mb-7 mt-3">
              {currentEvent?.title}
            </div>
            <div className="text-[#555] mb-[18px] line-clamp-1">
              {currentEvent?.description}
            </div>
            <div className="bg-[#F5F5F5] p-2  rounded-[24px] border border-[#D3363B] shadow-sm pb-[15px] mb-[15px] max-w-[494px] ">
              <div className="relative w-full h-[240px]">
                <Image
                  src={currentEvent?.image || "/event/bg.png"}
                  alt={currentEvent?.title || "Event"}
                  fill
                  className="object-cover rounded-[24px]"
                />
              </div>
              <div className="pt-[16px]">
                <div className="bg-white flex flex-col gap-5 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarCheck className="w-5 h-5 text-[#d43838]" />
                    <span className="font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                      {currentEvent?.date}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-[#d43838]" />
                    <span className="max-w-60 line-clamp-3 font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                      {currentEvent?.location}
                    </span>
                  </div>
                  <Link href={`/events/${currentEvent?.slug}`}>
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

            {/* <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={() =>
                  setCurrentEventIndex(
                    (prev) =>
                      (prev - 1 + upcomingEvents.length) % upcomingEvents.length
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
                {upcomingEvents.map((_, index) => (
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
                    (prev) => (prev + 1) % upcomingEvents.length
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
            </div> */}
          </div>

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
            <div className="text-[36px] font-bold font-red-hat-display leading-[100%] tracking-[0%] mb-7 mt-3 line-clamp-2">
              Intensive Course on Regulatory & Policy Framework in the Power
              Sector
            </div>
            <div className="text-[#555] mb-[18px] line-clamp-1">
              This intensive course provides a comprehensive exploration of the
              regulatory and policy frameworks governing the power sector.
              Participants will gain in-depth knowledge of the legal,
              institutional, and economic structures that shape electricity
              markets and power generation, transmission, and distribution
              systems.
            </div>
            <div className="bg-[#F5F5F5] p-2 rounded-[24px] border border-[#D3363B] shadow-sm pb-[15px] mb-[15px] max-w-[494px]">
              <div className="relative w-full h-[240px]">
                <Image
                  src="/chero.png"
                  alt={currentCourse?.title || "Course"}
                  fill
                  className="object-cover rounded-[24px]"
                />
              </div>
              <div className="pt-[16px]">
                <div className="bg-white flex flex-col gap-5 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarCheck className="w-5 h-5 text-[#d43838]" />
                    <span className="font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                      29th - 31st October, 2025
                    </span>
                  </div>
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-[#d43838]" />
                    <span className="max-w-60 line-clamp-3 font-work-sans font-medium text-[20px] leading-[100%] tracking-[0%] text-[#222222]">
                      Bangalore International Centre (BIC), 4th Main Rd, 2
                      Stage, Domlur, Bengaluru, Karnataka
                    </span>
                  </div>
                  <Link href="/courses#register-now">
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

            {/* <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={() =>
                  setCurrentCourseIndex(
                    (prev) => (prev - 1 + courses.length) % courses.length
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
                {courses.map((_, index) => (
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
                  setCurrentCourseIndex((prev) => (prev + 1) % courses.length)
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
            </div> */}

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
