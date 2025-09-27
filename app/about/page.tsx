import React from "react";
import HeroSection from "./hero-section";
import ThreeDecadesSection from "./ThreeDecadesSection";
import MilestonesTimeline from "./MilestonesTimeline";
import LeadershipCircle from "./LeadershipCircle";
import OurPurpose from "./our-purpose";

function page() {
  return (
    <div>
      <HeroSection />
      <ThreeDecadesSection />
      <OurPurpose />
      <LeadershipCircle />
      <MilestonesTimeline />
    </div>
  );
}

export default page;
