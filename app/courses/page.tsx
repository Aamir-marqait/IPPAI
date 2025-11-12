import React from "react";
import IntensiveCourseHero from "./hero-section";
import AboutIrpriSection from "./about-irrpai";
import CurriculumCourses from "./our-courses";

import CampusSection from "./IRPRI-campus";
import CampusGallery from "./gallery";
import RegisterNowSection from "./RegisterNowSection";
import MentorsSectionServer from "./MentorsSectionServer";
import OurAlumniServer from "./OurAlumniServer";

export default function CoursesPage() {
  return (
    <div>
      <IntensiveCourseHero />
      <AboutIrpriSection />
      <CurriculumCourses />
      <MentorsSectionServer />
      
      <CampusSection />
      <OurAlumniServer />
      <CampusGallery />
      <RegisterNowSection />
    </div>
  );
}