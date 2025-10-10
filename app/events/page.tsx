import React from "react";
import HeroSection from "./hero-section";
import EventsPage from "./our-event";
import WhyJoinEvents from "./WhyJoinEvents";
import EventsGallery from "./event-gallary";

// import OurPartners from "./our-partners";
import TestimonialsSection from "./TestimonialsSection";
import ContactUsSection from "./contact-event";

function page() {
  return (
    <div>
      <HeroSection />
      <EventsPage />
      <WhyJoinEvents />
      <EventsGallery />
      <TestimonialsSection />
      {/* <OurPartners /> */}
      <ContactUsSection />
    </div>
  );
}

export default page;
