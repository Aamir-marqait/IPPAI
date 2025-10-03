import React from "react";
import IntensiveCourseHero from "./hero-section";
import AboutIrpriSection from "./about-irrpai";
import CurriculumCourses from "./our-courses";
import MentorsSection from "./MentorsSection";
import OurAlumni from "./our-alumni";

function page() {
  return (
    <div>
      <IntensiveCourseHero />
      <AboutIrpriSection />
      <CurriculumCourses />
      <MentorsSection />
      <OurAlumni />
    </div>
  );
}

export default page;
