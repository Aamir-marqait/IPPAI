import React from "react";
import HeroSection from "./home-section";
import PolicyRecommendations from "./policy-recommendation";
import ContactUsSection from "./contact-form";

function page() {
  return (
    <div>
      <HeroSection />
      <PolicyRecommendations />
      <ContactUsSection />
    </div>
  );
}

export default page;
