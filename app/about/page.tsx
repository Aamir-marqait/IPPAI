import React from "react";
import HeroSection from "./hero-section";
import ThreeDecadesSection from "./ThreeDecadesSection";
import MilestonesTimeline from "./MilestonesTimeline";
import LeadershipCircle from "./LeadershipCircle";

function page() {
  return (
    <div>
      <HeroSection />
      <ThreeDecadesSection />
      <LeadershipCircle />
      <MilestonesTimeline />
    </div>
  );
}

export default page;
