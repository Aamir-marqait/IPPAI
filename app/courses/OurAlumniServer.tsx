import { getCoursesPageData } from "@/lib/sanity/queries/courses";
import OurAlumniClient from "./our-alumni";

export const revalidate = 3600; // Revalidate every hour

export default async function OurAlumniServer() {
  const pageData = await getCoursesPageData();
  const { alumniSection } = pageData;

  return <OurAlumniClient alumni={alumniSection} />;
}