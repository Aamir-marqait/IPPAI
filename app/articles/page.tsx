import React from "react";
import HeroSection from "./hero-section";
import ExpertArticles from "./articles";
import ContactUsSection from "./contact-section";

function page() {
  return (
    <div>
      <HeroSection />
      <ExpertArticles />
      <ContactUsSection />
    </div>
  );
}

export default page;
