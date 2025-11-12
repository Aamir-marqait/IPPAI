import { getCoursesPageData } from "@/lib/sanity/queries/courses";
import MentorsSectionClient from "./MentorsSection";

export const revalidate = 3600; // Revalidate every hour

export default async function MentorsSectionServer() {
  const pageData = await getCoursesPageData();
  const { mentorSection } = pageData;

  return <MentorsSectionClient mentors={mentorSection} />;
}