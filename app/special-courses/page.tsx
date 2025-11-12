import React from "react";
import SpecialCoursesHero from "./hero-section";
import FocusAreas from "./FocusAreas";
import SpecialCoursesWrapper from "./SpecialCoursesWrapper";
import { getFeaturedCoursesWithDetails } from "@/lib/sanity/queries";

export const revalidate = 3600; // Revalidate every hour

export default async function SpecialCoursesPage() {
  // Fetch all featured courses with full details
  const courses = await getFeaturedCoursesWithDetails();
  console.log('Fetched special courses:', courses.length);
  
// Should output: "/special-courses"

  return (
    <div>
      <SpecialCoursesHero />
      <FocusAreas />
      {/* ⭐ NEW: Use wrapper that manages state between courses and form */}
      <SpecialCoursesWrapper courses={courses} />
    </div>
  );
}