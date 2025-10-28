import React from "react";
import HeroSection from "./hero-section";
import EventsPage from "./our-event";
import WhyJoinEvents from "./WhyJoinEvents";
import EventsGallery from "./event-gallary";
import { getHeroSection, getWhyJoinEvents, getGalleryImages } from "@/lib/sanity";

export default async function Page() {
  // Fetch all data from Sanity
  const [heroData, whyJoinData, galleryData] = await Promise.all([
    getHeroSection(),
    getWhyJoinEvents(),
    getGalleryImages(),
  ]);

  return (
    <div>
      <HeroSection data={heroData} />
      <EventsPage />
      <WhyJoinEvents data={whyJoinData} />
      <EventsGallery data={galleryData} />
    </div>
  );
}