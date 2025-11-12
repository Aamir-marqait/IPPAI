import { getHomeIntroduction } from "@/lib/sanity/queries/homeIntroduction";
import Testimonials from "./testimonials";
import LeadershipSection from "./LeadershipSection";


export const revalidate = 3600; // Revalidate every hour

export default async function TestimonialsLeadership() {
  const data = await getHomeIntroduction();

  return (
    <>
 <Testimonials testimonials={data.testimonials} />
      <LeadershipSection leaders={data.leadershipTeam} />
    </>
  );
}