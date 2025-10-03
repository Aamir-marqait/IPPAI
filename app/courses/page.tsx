import React from "react";
import IntensiveCourseHero from "./hero-section";
import AboutIrpriSection from "./about-irrpai";
import CurriculumCourses from "./our-courses";
import MentorsSection from "./MentorsSection";

function page() {
  return (
    <div>
      <IntensiveCourseHero />
      <AboutIrpriSection />
      <CurriculumCourses />
      <MentorsSection />
    </div>
  );
}

export default page;
