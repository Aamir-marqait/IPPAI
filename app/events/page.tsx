import React from "react";
import HeroSection from "./hero-section";
import EventsPage from "./our-event";
import WhyJoinEvents from "./WhyJoinEvents";
import EventsGallery from "./event-gallary";
import { getEventHero, getWhyJoinEvents, getEventGallery } from "@/lib/sanity/queries";

export default async function Page() {
  // Fetch all data from Sanity
  const [heroData, whyJoinData, galleryData] = await Promise.all([
    getEventHero(),
    getWhyJoinEvents(),
    getEventGallery(),
  ]);

  // Provide fallback values for null data
  const hero = heroData || {
    _id: 'default',
    title: 'Our Events',
    subtitle: 'Discover our upcoming events',
    backgroundImage: '/default-hero.jpg',
  };

  const whyJoin = whyJoinData || {
    _id: 'default',
    mainHeading: 'Why Join Our Events',
    description: 'Join us for amazing experiences',
    features: [],
  };

  const gallery = galleryData || {
    _id: 'default',
    mainHeading: 'Event Gallery',
    description: 'Explore our past events',
    images: [],
  };

  return (
    <div>
      <HeroSection data={hero} />
      <EventsPage />
      <WhyJoinEvents data={whyJoin} />
      <EventsGallery data={gallery} />
    </div>
  );
}