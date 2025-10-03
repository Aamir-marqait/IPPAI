"use client";
import { useParams, notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import coursesData from "../../../data/courses.json";

export default function CourseDetailPage() {
  const params = useParams();
  const courseName = params.courseName as string;
  const course = coursesData.courses.find((c) => c.slug === courseName);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-[1100px] mx-auto pt-20 sm:pt-32 pb-10 px-2 sm:px-4 w-full">
      {/* Breadcrumb */}
      <nav className="mb-8 sm:mb-[40px] flex flex-wrap items-center text-sm">
        <span className="font-inter font-semibold text-[#4B5563]">Courses</span>
        <span className="mx-2">{">"}</span>
        <span className="font-inter font-semibold text-[#4B5563]">
          {course.category}
        </span>
        <span className="mx-2">{">"}</span>
        <span className="font-inter font-semibold text-[#757575]">
          {course.title}
        </span>
      </nav>

      {/* Course Image */}
      <div className="rounded-xl overflow-hidden w-full">
        <Image
          src={course.img}
          alt="Course cover"
          width={1100}
          height={400}
          className="w-full object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="mt-10 lg:mt-[38px]">
        {/* Course Title */}
        <h1 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-[32px] leading-[140%] text-[#141414] m-0">
          {course.title}
        </h1>

        {/* Course Meta Information */}
        <div className="flex items-center gap-4 font-sora font-normal xl:text-[11.67px] xl:leading-[26.67px] xl:tracking-[0%] text-[#4D5756] text-[13px] mb-6 mt-4 capitalize">
          <span className="flex items-center gap-1">
            <Image
              src="/course/lesson.svg"
              alt="Lessons"
              width={16}
              height={16}
              className="mr-1"
            />
            {course.lessons}
          </span>
          <span className="flex items-center gap-1">
            <Image
              src="/course/duration.svg"
              alt="Duration"
              width={16}
              height={16}
              className="mr-1"
            />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Image
              src="/course/students.svg"
              alt="Students"
              width={16}
              height={16}
              className="mr-1"
            />
            {course.students}
          </span>
        </div>

        {/* Overview Section */}
        <div className="mb-3">
          <h2 className="font-red-hat-display w-full font-bold text-[20px] leading-[18.26px] text-[#D3363B] mb-4 uppercase tracking-[0%] align-middle">
            {course.overview.title}
          </h2>
          <div className="flex items-center w-[30%] justify-end gap-3 text-xs sm:text-[13.5px] font-semibold">
            <Image
              src={course.authorImg}
              alt={course.author}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div className="flex flex-row items-center gap-2">
              <span className="text-[#0E2A46] font-semibold">
                {course.author}
              </span>
              <span className="text-[#4D5756] font-normal">
                {course.authorRole}
              </span>
            </div>
          </div>
          {/* <p className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px] mb-4">
            {course.overview.description}
          </p> */}
        </div>

        {/* Course Sections */}
        <div className="space-y-8">
          {/* Legislation Section */}
          <div>
            <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
              LEGISLATION:
            </h3>
            <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
              {course.sections?.legislation?.items ? (
                course.sections.legislation.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>No legislation data found</li>
              )}
            </ul>
          </div>

          {/* Institutional Structure Section */}
          <div>
            <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
              INSTITUTIONAL STRUCTURE – ROLES & RESPONSIBILITY, JURISDICTIONS &
              INDEPENDENCE:
            </h3>
            <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
              {course.sections?.institutionalStructure?.items?.map(
                (item, index) => <li key={index}>{item}</li>
              ) || (
                <li>
                  o Ministry of Power, Ministry of New and Renewable Energy
                </li>
              )}
            </ul>
          </div>

          {/* Policy Framework Section */}
          <div>
            <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
              POLICY & REGULATORY FRAMEWORK:
            </h3>
            <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
              {course.sections?.policyFramework?.items?.map((item, index) => (
                <li key={index}>{item}</li>
              )) || (
                <li>
                  o Rules and Regulations, National Electricity Policy, National
                  Tariff Policy
                </li>
              )}
            </ul>
          </div>

          {/* Classroom Simulation Section */}
          <div>
            <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
              CLASSROOM SIMULATION:
            </h3>
            <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
              {course.sections?.classroomSimulation?.items?.map(
                (item, index) => <li key={index}>{item}</li>
              ) || (
                <li>
                  o Drafting a Regulation /Order/Speaking Orders Determining
                  tariff
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mt-8">
          <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
            Learning Outcomes:
          </h3>
          <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
            {course.learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#18B76A] mr-2">✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Prerequisites */}
        <div className="mt-8">
          <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
            Prerequisites:
          </h3>
          <p className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px]">
            {course.prerequisites}
          </p>
        </div>

        {/* Certification */}
        <div className="mt-8">
          <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
            Certification:
          </h3>
          <p className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px]">
            {course.certification}
          </p>
        </div>
      </div>
    </div>
  );
}
