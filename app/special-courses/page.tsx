import React from "react";
import SpecialCoursesHero from "./hero-section";
import FocusAreas from "./FocusAreas";
import PastSpecialCourses from "./PastSpecialCourses";

function page() {
  return (
    <div>
      <SpecialCoursesHero />
      <FocusAreas />
      <PastSpecialCourses />
    </div>
  );
}

export default page;
