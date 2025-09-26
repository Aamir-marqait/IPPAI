import React from "react";
import HeroSection from "./hero-section";
import ThreeDecadesSection from "./ThreeDecadesSection";
import MilestonesTimeline from "./MilestonesTimeline";

function page() {
  return (
    <div>
      <HeroSection />
      <ThreeDecadesSection />
      <MilestonesTimeline />
    </div>
  );
}

export default page;
