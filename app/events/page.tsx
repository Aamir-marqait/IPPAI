import React from "react";
import HeroSection from "./hero-section";
import EventsPage from "./our-event";
import WhyJoinEvents from "./WhyJoinEvents";

function page() {
  return (
    <div>
      <HeroSection />
      <EventsPage />
      <WhyJoinEvents />
    </div>
  );
}

export default page;
