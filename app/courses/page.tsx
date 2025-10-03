import React from "react";
import IntensiveCourseHero from "./hero-section";
import AboutIrpriSection from "./about-irrpai";
import CurriculumCourses from "./our-courses";
import MentorsSection from "./MentorsSection";
import OurAlumni from "./our-alumni";
import CampusSection from "./IRPRI-campus";

function page() {
  return (
    <div>
      <IntensiveCourseHero />
      <AboutIrpriSection />
      <CurriculumCourses />
      <MentorsSection />
      <OurAlumni />
      <CampusSection />
    </div>
  );
}

export default page;
