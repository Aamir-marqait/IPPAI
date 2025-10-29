import React from "react";
import SpecialCoursesHero from "./hero-section";
import FocusAreas from "./FocusAreas";
import PastSpecialCourses from "./PastSpecialCourses";
import AboutWorkshop from "./AboutWorkshop";
import KeyTopicsCovered from "./KeyTopicsCovered";
import CampusGallery from "./our-gallery";
import RegisterNowSection from "../courses/RegisterNowSection";

function page() {
  return (
    <div>
      <SpecialCoursesHero />
      <FocusAreas />
      <PastSpecialCourses />
      <AboutWorkshop />
      <KeyTopicsCovered />
      <CampusGallery />
      <RegisterNowSection />
    </div>
  );
}

export default page;
