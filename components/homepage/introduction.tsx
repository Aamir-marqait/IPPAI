import { getHomeIntroduction } from "@/lib/sanity/queries/homeIntroduction";
import IntroductionClient from "./introduction-client";

export const revalidate = 3600; // Revalidate every hour

export default async function Introduction() {
  const data = await getHomeIntroduction();

  return (
    <IntroductionClient
      mainTitle={data.mainTitle}
      eventsTitle={data.eventsTitle}
      featuredEvents={data.featuredEvents}
      coursesTitle={data.coursesTitle}
      featuredCourses={data.featuredCourses}
    />
  );
}