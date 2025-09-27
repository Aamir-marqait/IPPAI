import React from "react";
import HeroSection from "./hero-section";
import EventsPage from "./our-event";
import WhyJoinEvents from "./WhyJoinEvents";
import EventsGallery from "./event-gallary";

function page() {
  return (
    <div>
      <HeroSection />
      <EventsPage />
      <WhyJoinEvents />
      <EventsGallery />
    </div>
  );
}

export default page;
