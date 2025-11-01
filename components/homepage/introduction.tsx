import { getHomeIntroduction } from "@/lib/sanity/queries/homeIntroduction";
import IntroductionClient from "./introduction-client";

export const revalidate = 3600; // Revalidate every hour

export default async function Introduction() {
  const data = await getHomeIntroduction();

  return (
    <IntroductionClient
      mainTitle={data.mainTitle}
      featuredEvents={data.featuredEvents}
      featuredCourses={data.featuredCourses}
    />
  );
}