import React from "react";
import HeroSection from "./hero-section";
import ThreeDecadesSection from "./ThreeDecadesSection";
import MilestonesTimeline from "./MilestonesTimeline";
import LeadershipCircle from "./LeadershipCircle";
// import OurPurpose from "./our-purpose";
import RecognizedCatalystSection from "./RecognizedCatalystSection";

function page() {
  return (
    <div>
      <HeroSection />
      <MilestonesTimeline />
      <ThreeDecadesSection />
      {/* <OurPurpose /> */}
      <LeadershipCircle />

      <RecognizedCatalystSection />
    </div>
  );
}

export default page;
