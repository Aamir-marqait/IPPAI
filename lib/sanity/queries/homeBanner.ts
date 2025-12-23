import { client, CACHE_CONFIG } from "../client";

/**
 * Homepage Banner Queries
 *
 * Fetches banner image for the homepage
 *
 * @module lib/sanity/queries/homeBanner
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface HomeBannerData {
  bannerImage: string | null;
  altText: string;
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get banner data
  homeBanner: `*[_type == "homeBanner"][0] {
    "bannerImage": bannerImage.asset->url,
    altText
  }`,
} as const;

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getHomeBanner(): Promise<HomeBannerData> {
  const data = await client.fetch(
    queries.homeBanner,
    {},
    {
      next: {
        tags: ["home-banner"],
        revalidate: CACHE_CONFIG.STATIC.revalidate,
      },
    }
  );

  return {
    bannerImage: data?.bannerImage ?? null,
    altText: data?.altText || "Energy Infrastructure",
  };
}
