import React from "react";
import SpecialCoursesHero from "./hero-section";
import FocusAreas from "./FocusAreas";
import PastSpecialCourses from "./PastSpecialCourses";
import AboutWorkshop from "./AboutWorkshop";

function page() {
  return (
    <div>
      <SpecialCoursesHero />
      <FocusAreas />
      <PastSpecialCourses />
      <AboutWorkshop/>
    </div>
  );
}

export default page;
