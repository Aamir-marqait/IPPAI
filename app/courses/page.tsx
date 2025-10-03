import React from "react";
import IntensiveCourseHero from "./hero-section";
import AboutIrpriSection from "./about-irrpai";
import CurriculumCourses from "./our-courses";
import MentorsSection from "./MentorsSection";
import OurAlumni from "./our-alumni";
import CampusSection from "./IRPRI-campus";
import CampusGallery from "./gallery";
import RegisterNowSection from "./RegisterNowSection";

function page() {
  return (
    <div>
      <IntensiveCourseHero />
      <AboutIrpriSection />
      <CurriculumCourses />
      <MentorsSection />
      <OurAlumni />
      <CampusSection />
      <CampusGallery />
      <RegisterNowSection />
    </div>
  );
}

export default page;
