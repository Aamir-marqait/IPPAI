"use client";

import React, { useState } from "react";
import SpecialCoursesClient from "./SpecialCoursesClient";
import RegisterNowSection from "./RegisterNowSection";
import type { SpecialCourseDetail } from "@/lib/sanity/queries/specialCourses";

interface SpecialCoursesWrapperProps {
  courses: SpecialCourseDetail[];
}

export default function SpecialCoursesWrapper({ courses }: SpecialCoursesWrapperProps) {
  // ⭐ State to track which course user is viewing
  const [selectedCourse, setSelectedCourse] = useState<SpecialCourseDetail | null>(
    courses.length > 0 ? courses[0] : null
  );

  return (
    <>
      {/* Pass courses AND setSelectedCourse callback */}
      <SpecialCoursesClient 
        courses={courses} 
        onCourseChange={setSelectedCourse}
      />
      
      {/* Pass selectedCourse to registration form */}
      <RegisterNowSection selectedCourse={selectedCourse} />
    </>
  );
}