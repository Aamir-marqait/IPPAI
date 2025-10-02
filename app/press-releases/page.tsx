import React from "react";
import HeroSection from "./hero-section";
import ContactUsSection from "./contact-form";
import News from "./news-press";

function page() {
  return (
    <div>
      <HeroSection />
      <News />
      <ContactUsSection />
    </div>
  );
}

export default page;
