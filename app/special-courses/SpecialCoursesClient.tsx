"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import type { SpecialCourseDetail } from "@/lib/sanity/queries/specialCourses";

interface SpecialCoursesClientProps {
  courses: SpecialCourseDetail[];
  onCourseChange?: (course: SpecialCourseDetail) => void; // ⭐ NEW: Callback to notify parent
}

export default function SpecialCoursesClient({ courses, onCourseChange }: SpecialCoursesClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⭐ Notify parent whenever current course changes
  useEffect(() => {
    if (courses[currentIndex] && onCourseChange) {
      onCourseChange(courses[currentIndex]);
    }
  }, [currentIndex, courses, onCourseChange]);

  if (!courses || courses.length === 0) {
    return (
      <section className="bg-white px-4 py-12 flex flex-col items-center w-full">
        <div className="text-center text-gray-500">
          No special courses available at the moment.
        </div>
      </section>
    );
  }

  const currentCourse = courses[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const handleSelectCourse = (index: number) => {
    setCurrentIndex(index);
  };

  // Desktop custom positions for gallery
  const galleryPositions = [
    { width: "273.75px", height: "196.94px", top: "0px", left: "0px" },
    { width: "273.75px", height: "246.17px", top: "0px", left: "288.75px" },
    { width: "273.75px", height: "295.41px", top: "0px", left: "577.5px" },
    { width: "231px", height: "246px", top: "0px", left: "866px" },
    { width: "273.75px", height: "295.41px", top: "211.94px", left: "0px" },
    { width: "273.75px", height: "246.17px", top: "261.17px", left: "288.75px" },
    { width: "273.75px", height: "196.94px", top: "310.41px", left: "577.5px" },
    { width: "231px", height: "246px", top: "261px", left: "866px" },
  ];

  return (
    <div className="w-full">
      {/* Course Navigation */}
      <section className="bg-gray-50 px-4 py-8 flex flex-col items-center w-full">
        <div className="max-w-[1100px] w-full">
          <div className="mb-6 text-center">
            <span className="font-red-hat-display font-bold text-sm sm:text-base leading-none text-center uppercase text-[#D3363B]">
              SPECIAL COURSE
            </span>
            <h2 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-4xl leading-[120%] text-center text-[#141414] mb-2 mt-4">
              Past Special Courses
            </h2>
            <p className="font-poppins font-normal text-sm sm:text-base leading-6 sm:leading-7 text-center text-[#141414] max-w-2xl mb-6 sm:mb-8 mt-3 mx-auto">
              Explore some of our recently conducted capacity-building programs across India.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            {/* Arrow Buttons & Dot Indicators */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="Previous course"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Dot Indicators */}
              <div className="flex items-center gap-2 px-2">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectCourse(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#D3363B] w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to course ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors shadow-sm"
                aria-label="Next course"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Course Counter - Below arrows */}
            <div className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {courses.length}
            </div>
          </div>
        </div>
      </section>

      {/* Current Course Display */}
      <div key={currentCourse._id} className="w-full">
        {/* Course Info Section */}
        <section className="bg-white px-4 py-12 flex flex-col items-center w-full">
          <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-start mt-4 sm:mt-7 max-w-5xl px-4">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center items-start w-full">
              <div className="font-poppins font-semibold text-xl sm:text-2xl md:text-[28px] leading-[120%] text-black mb-4 sm:mb-5">
                {currentCourse.title}
              </div>
              <div className="font-poppins font-normal text-sm sm:text-base leading-[140%] text-[#4D5756] mb-4 sm:mb-5">
                {currentCourse.organizerInfo}
              </div>
              <div className="flex flex-col gap-3 mb-5 sm:mb-6">
                <div className="flex items-start gap-2 font-poppins font-normal text-sm sm:text-base leading-[140%] text-[#4D5756]">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{currentCourse.location}</span>
                </div>
                <div className="flex items-center gap-2 font-poppins font-normal text-sm sm:text-base leading-[140%] text-[#4D5756]">
                  <CalendarCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{currentCourse.date}</span>
                </div>
              </div>
              {currentCourse.registrationLink && (
                <button
                  onClick={() => {
                    if (currentCourse.registrationLink?.startsWith('#')) {
                      document
                        .getElementById(currentCourse.registrationLink.substring(1))
                        ?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.open(currentCourse.registrationLink, '_blank');
                    }
                  }}
                  className="hidden md:flex cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-sm sm:text-base leading-none tracking-normal text-center uppercase text-white px-5 sm:px-6 py-2 rounded-full transition-colors"
                >
                  Enquire Now
                </button>
              )}
            </div>
            {/* Right Image */}
            <div className="flex-1 flex justify-center items-center w-full">
              <Image
                src={currentCourse.courseImage}
                alt={currentCourse.title}
                width={430}
                height={280}
                className="rounded-2xl object-cover w-full max-w-[350px] h-auto aspect-[430/280] md:max-w-[430px] bg-gray-200"
              />
            </div>
          </div>
        </section>

        {/* About Workshop Section */}
        <section className="flex justify-center items-center py-8 sm:py-12 px-4 bg-white w-full">
          <div className="w-full max-w-[1100px]">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src={currentCourse.aboutSection.backgroundImage}
                alt="Workshop Background"
                width={1200}
                height={340}
                className="w-full h-[280px] sm:h-[340px] object-cover"
              />
              <div className="absolute inset-0 flex gap-2 sm:gap-3 flex-col justify-center items-center px-4 sm:px-6 py-8 sm:py-10 bg-black/30">
                <span className="font-red-hat-display font-bold text-xs sm:text-sm md:text-base leading-[100%] uppercase text-white mb-2 sm:mb-4">
                  {currentCourse.aboutSection.sectionLabel}
                </span>
                <h2 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-[36px] leading-[120%] text-center capitalize text-white mb-2 sm:mb-4">
                  {currentCourse.aboutSection.sectionTitle}
                </h2>
                <p className="font-poppins font-normal text-sm sm:text-base md:text-[16px] leading-[150%] sm:leading-[160%] text-center text-white max-w-4xl px-2">
                  {currentCourse.aboutSection.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Topics Section */}
        <section className="bg-white px-4 py-12 w-full flex flex-col items-center">
          <div className="mb-3 max-w-[1100px] w-full">
            <div className="flex flex-row items-center gap-2 mb-4">
              <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
              <span className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-[#D3363B] uppercase">
                {currentCourse.keyTopicsSection.sectionLabel}
              </span>
            </div>
            <h2 className="font-red-hat-display font-bold text-xl sm:text-[36px] leading-none text-[#141414] mb-4 sm:mb-6">
              {currentCourse.keyTopicsSection.sectionTitle}
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
              <div className="flex-shrink-0">
                <Image
                  src={currentCourse.keyTopicsSection.topicsImage}
                  alt="Grid system illustration"
                  width={500}
                  height={350}
                  className="rounded-2xl object-cover w-[350px] h-[350px] md:w-[500px] md:h-[350px] bg-gray-200"
                />
              </div>
              <ul className="flex-1 flex flex-col gap-2 w-full max-w-2xl">
                {currentCourse.keyTopicsSection.topics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle text-[#4D5756]"
                  >
                    <Image
                      src="/tick.png"
                      alt="Check mark"
                      width={24}
                      height={24}
                      className="w-6 h-6 flex-shrink-0"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Faculty Members Section */}
        <section className="bg-white w-full px-4 py-8 sm:py-12 flex flex-col items-center">
          <div className="mb-3 text-center">
            <span className="font-red-hat-display font-bold text-sm sm:text-base leading-none text-center uppercase text-[#D3363B]">
              {currentCourse.facultySection.sectionLabel}
            </span>
            <h2 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-4xl leading-[120%] text-center text-[#141414] mb-2 mt-3 sm:mt-4">
              {currentCourse.facultySection.sectionTitle}
            </h2>
            <p className="font-poppins font-normal text-sm sm:text-base leading-6 sm:leading-7 text-center text-[#141414] max-w-2xl mb-6 sm:mb-10 mt-3 px-4">
              {currentCourse.facultySection.sectionDescription}
            </p>
          </div>

          <div className="w-full max-w-6xl">
            {/* Mobile/Tablet: grid */}
           
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-y-8 sm:gap-y-10 gap-x-6 sm:gap-x-8 w-full justify-items-center px-2">
              {currentCourse.facultySection.facultyMembers.map((person, idx) => (
                <div key={idx} className="flex flex-col items-center w-full max-w-[160px]">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-2 border-red-600 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="font-poppins font-medium text-xs sm:text-sm leading-[130%] text-center text-[#D3363B] mb-1.5">
                    {person.name}
                  </div>
                  <div className="font-poppins font-normal text-[11px] sm:text-xs leading-[130%] text-center text-[#4D5756] mb-0.5">
                    {person.title}
                  </div>
                  <div className="font-poppins font-normal text-[11px] sm:text-xs leading-[130%] text-center text-[#4D5756]">
                    {person.organization}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop view */}
            <div className="hidden lg:flex flex-col items-center gap-10 w-full">
              {/* First row - 5 members */}
              <div className="grid grid-cols-5 gap-x-8 w-full justify-items-center">
                {currentCourse.facultySection.facultyMembers.slice(0, 5).map((person, idx) => (
                  <div key={idx} className="flex flex-col items-center w-full max-w-[160px]">
                    <div className="w-40 h-40 border-2 border-red-600 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
                      <Image
                        src={person.photo}
                        alt={person.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="font-poppins font-medium text-sm leading-[130%] text-center text-[#D3363B] mb-1.5">
                      {person.name}
                    </div>
                    <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756] mb-0.5">
                      {person.title}
                    </div>
                    <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756]">
                      {person.organization}
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row - remaining members centered */}
              {currentCourse.facultySection.facultyMembers.length > 5 && (
                <div className="flex justify-center gap-x-8 w-full">
                  {currentCourse.facultySection.facultyMembers.slice(5).map((person, idx) => (
                    <div key={idx + 5} className="flex flex-col items-center w-full max-w-[160px]">
                      <div className="w-40 h-40 border-2 border-red-600 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
                        <Image
                          src={person.photo}
                          alt={person.name}
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="font-poppins font-medium text-sm leading-[130%] text-center text-[#D3363B] mb-1.5">
                        {person.name}
                      </div>
                      <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756] mb-0.5">
                        {person.title}
                      </div>
                      <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756]">
                        {person.organization}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

       {/* Gallery Section */}
<section className="w-full py-10 sm:py-14 px-2 sm:px-4 bg-gray-50">
  <div className="mx-auto max-w-[1100px]">
    <div className="mb-3 text-center">
      <span className="font-red-hat-display font-bold text-base leading-none text-center uppercase text-[#D3363B]">
        {currentCourse.gallerySection.sectionLabel}
      </span>
      <h2 className="font-red-hat-display font-bold text-4xl leading-none text-center text-[#141414] mb-7 mt-4">
        {currentCourse.gallerySection.sectionTitle}
      </h2>
    </div>

    {currentCourse.gallerySection.images && currentCourse.gallerySection.images.length > 0 ? (
      <div>
        {/* MOBILE/TABLET GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 lg:hidden">
          {currentCourse.gallerySection.images.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden rounded-[18px] bg-gray-200 group"
            >
              <Image
                src={image.image}
                alt={image.altText}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 260px"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* DESKTOP Custom Absolute Grid */}
        <div className="hidden lg:block relative w-full h-[520px]">
          {currentCourse.gallerySection.images.slice(0, 8).map((image, index) => {
            const pos = galleryPositions[index];
            return (
              <div
                key={index}
                className="absolute overflow-hidden bg-gray-200 group cursor-pointer"
                style={{
                  width: pos.width,
                  height: pos.height,
                  top: pos.top,
                  left: pos.left,
                  borderRadius: "25px",
                }}
              >
                <Image
                  src={image.image}
                  alt={image.altText}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="270px"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="text-center py-12 text-gray-500">
        No gallery images available.
      </div>
    )}
  </div>
</section>
      </div>
    </div>
  );
}