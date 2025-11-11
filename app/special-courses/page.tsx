// import React from "react";
// import SpecialCoursesHero from "./hero-section";
// import FocusAreas from "./FocusAreas";
// import PastSpecialCourses from "./PastSpecialCourses";
// import AboutWorkshop from "./AboutWorkshop";
// import KeyTopicsCovered from "./KeyTopicsCovered";
// import CampusGallery from "./our-gallery";
// import RegisterNowSection from "../courses/RegisterNowSection";
// import FacultyMembers from "./FacultyMembers";

// function page() {
//   return (
//     <div>
//       <SpecialCoursesHero />
//       <FocusAreas />
//       <PastSpecialCourses />
//       <AboutWorkshop />
//       <KeyTopicsCovered />
//       <FacultyMembers />
//       <CampusGallery />
//       <RegisterNowSection />
//     </div>
//   );
// }

// export default page;








import React from "react";
import SpecialCoursesHero from "./hero-section";
import FocusAreas from "./FocusAreas";
import SpecialCoursesClient from "./SpecialCoursesClient";
import RegisterNowSection from "../courses/RegisterNowSection";
import { getFeaturedCoursesWithDetails } from "@/lib/sanity/queries";

export const revalidate = 3600; // Revalidate every hour

export default async function SpecialCoursesPage() {
  // Fetch all featured courses with full details
  const courses = await getFeaturedCoursesWithDetails();
  console.log('Fetched special courses:', courses);
  console.log('Number of special courses fetched:', courses);

  return (
    <div>
      <SpecialCoursesHero />
      <FocusAreas />
      <SpecialCoursesClient courses={courses} />
      <RegisterNowSection />
    </div>
  );
}






