import React from "react";
import HeroSection from "./hero-section";
import PhotoGallery from "./gallery";
import { getPhotoGalleryPageData } from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function PhotoGalleryPage() {
  const pageData = await getPhotoGalleryPageData();

  return (
    <div>
      <HeroSection 
        title={pageData.heroTitle}
        subtitle={pageData.heroSubtitle}
        backgroundImage={pageData.heroBackgroundImage}
      />
      <PhotoGallery 
        images={pageData.images}
        events={pageData.events}
        years={pageData.years}
      />
    </div>
  );
}