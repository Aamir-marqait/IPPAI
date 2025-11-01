import { getPodcastPageData } from "@/lib/sanity/queries";
import { LatestVideosClient } from "./latest-videos-client";

export const revalidate = 60;

export async function LatestVideos() {
  const pageData = await getPodcastPageData();
  
  // Get only the latest 8 videos for homepage
  const latestVideos = pageData.videos.slice(0, 8);

  return <LatestVideosClient videos={latestVideos} />;
}