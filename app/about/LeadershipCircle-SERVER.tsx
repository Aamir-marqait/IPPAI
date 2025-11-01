import React from "react";
import { getAboutLeadership } from "@/lib/sanity/queries/aboutLeadership";
import LeadershipCircleClient from "./LeadershipCircle-CLIENT";

export const revalidate = 3600; // Revalidate every hour

export default async function LeadershipCircle() {
  const data = await getAboutLeadership();

  return (
    <LeadershipCircleClient
      smallTitle={data.smallTitle}
      mainTitle={data.mainTitle}
      description={data.description}
      teamMembers={data.teamMembers}
      featuredMember={data.featuredMember}
    />
  );
}