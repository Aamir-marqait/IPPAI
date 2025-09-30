import React from "react";
import HeroSection from "./hero-section";
import ContactUsSection from "./contact-form";
import PublicationsSection from "./PublicationsSection";

function page() {
  return (
    <div>
      <HeroSection />
      <PublicationsSection />
      <ContactUsSection />
    </div>
  );
}

export default page;
