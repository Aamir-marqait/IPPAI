import React from "react";
import HeroPage from "./hero-section";
import VideoGallerySection from "./VideoGallerySection";
import { getPodcastPageData } from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function PodcastPage() {
  const pageData = await getPodcastPageData();

  return (
    <div>
      <HeroPage heroVideo={pageData.heroVideo} />
      <VideoGallerySection 
        videos={pageData.videos}
        podcasts={pageData.podcasts}
        videoCategories={pageData.videoCategories}
        podcastCategories={pageData.podcastCategories}
      />
    </div>
  );
}