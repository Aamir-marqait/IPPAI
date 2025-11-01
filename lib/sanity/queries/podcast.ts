import { client, CACHE_CONFIG } from '../client'

/**
 * Podcast & Media Queries
 * 
 * All podcast and media-related queries including:
 * - Hero video
 * - Video gallery
 * - Podcast/audio content
 * - Categories
 * 
 * Uses unified podcastMedia schema with isHeroSection and mediaType flags
 * 
 * @module lib/sanity/queries/podcast
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface HeroVideo {
  _id: string
  heroVideoFile: string
  heroThumbnail: string
  heroTitle: string
  heroDescription?: string
  heroDuration?: string
}

export interface Video {
  _id: string
  videoFile: string
  videoThumbnail: string
  videoTitle: string
  videoDescription?: string
  videoDuration?: string
  videoDatePublished?: string
  videoCategory?: string
  featured?: boolean
  order?: number
  status?: 'draft' | 'published' | 'archived'
}

export interface Podcast {
  _id: string
  audioFile: string
  podcastCoverArt: string
  podcastTitle: string
  podcastDescription?: string
  podcastDuration?: string
  episodeNumber?: number
  host?: string
  podcastDatePublished?: string
  podcastCategory?: string
  featured?: boolean
  order?: number
  status?: 'draft' | 'published' | 'archived'
}

export interface PodcastPageData {
  // Hero Video
  heroVideo: HeroVideo | null
  
  // Videos
  videos: Video[]
  videoCategories: string[]
  
  // Podcasts
  podcasts: Podcast[]
  podcastCategories: string[]
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get hero video
  heroVideo: `*[_type == "podcastMedia" && isHeroSection == true][0] {
    _id,
    "heroVideoFile": heroVideoFile.asset->url,
    "heroThumbnail": heroThumbnail.asset->url,
    heroTitle,
    heroDescription,
    heroDuration
  }`,

  // Get all published videos
  allVideos: `*[_type == "podcastMedia" && isHeroSection != true && mediaType == "video" && status == "published"] | order(coalesce(order, 999999) asc, videoDatePublished desc) {
    _id,
    "videoFile": videoFile.asset->url,
    "videoThumbnail": videoThumbnail.asset->url,
    videoTitle,
    videoDescription,
    videoDuration,
    videoDatePublished,
    videoCategory,
    featured,
    order,
    status
  }`,

  // Get all published podcasts
  allPodcasts: `*[_type == "podcastMedia" && isHeroSection != true && mediaType == "podcast" && status == "published"] | order(coalesce(order, 999999) asc, episodeNumber desc, podcastDatePublished desc) {
    _id,
    "audioFile": audioFile.asset->url,
    "podcastCoverArt": podcastCoverArt.asset->url,
    podcastTitle,
    podcastDescription,
    podcastDuration,
    episodeNumber,
    host,
    podcastDatePublished,
    podcastCategory,
    featured,
    order,
    status
  }`,

  // Get all video categories
  videoCategories: `array::unique(*[_type == "podcastMedia" && isHeroSection != true && mediaType == "video" && status == "published" && defined(videoCategory)].videoCategory)`,

  // Get all podcast categories
  podcastCategories: `array::unique(*[_type == "podcastMedia" && isHeroSection != true && mediaType == "podcast" && status == "published" && defined(podcastCategory)].podcastCategory)`,

  // Get complete page data
  podcastPageData: `{
    "heroVideo": *[_type == "podcastMedia" && isHeroSection == true][0] {
      _id,
      "heroVideoFile": heroVideoFile.asset->url,
      "heroThumbnail": heroThumbnail.asset->url,
      heroTitle,
      heroDescription,
      heroDuration
    },
    "videos": *[_type == "podcastMedia" && isHeroSection != true && mediaType == "video" && status == "published"] | order(coalesce(order, 999999) asc, videoDatePublished desc) {
      _id,
      "videoFile": videoFile.asset->url,
      "videoThumbnail": videoThumbnail.asset->url,
      videoTitle,
      videoDescription,
      videoDuration,
      videoDatePublished,
      videoCategory,
      featured,
      order,
      status
    },
    "podcasts": *[_type == "podcastMedia" && isHeroSection != true && mediaType == "podcast" && status == "published"] | order(coalesce(order, 999999) asc, episodeNumber desc, podcastDatePublished desc) {
      _id,
      "audioFile": audioFile.asset->url,
      "podcastCoverArt": podcastCoverArt.asset->url,
      podcastTitle,
      podcastDescription,
      podcastDuration,
      episodeNumber,
      host,
      podcastDatePublished,
      podcastCategory,
      featured,
      order,
      status
    },
    "videoCategories": array::unique(*[_type == "podcastMedia" && isHeroSection != true && mediaType == "video" && status == "published" && defined(videoCategory)].videoCategory),
    "podcastCategories": array::unique(*[_type == "podcastMedia" && isHeroSection != true && mediaType == "podcast" && status == "published" && defined(podcastCategory)].podcastCategory)
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getHeroVideo(): Promise<HeroVideo | null> {
  return await client.fetch(
    queries.heroVideo,
    {},
    {
      next: { 
        tags: ['podcast-media', 'podcast-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

export async function getAllVideos(): Promise<Video[]> {
  return await client.fetch(
    queries.allVideos,
    {},
    {
      next: { 
        tags: ['podcast-media', 'videos'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getAllPodcasts(): Promise<Podcast[]> {
  return await client.fetch(
    queries.allPodcasts,
    {},
    {
      next: { 
        tags: ['podcast-media', 'podcasts'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getVideoCategories(): Promise<string[]> {
  return await client.fetch(
    queries.videoCategories,
    {},
    {
      next: { 
        tags: ['podcast-media', 'video-categories'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getPodcastCategories(): Promise<string[]> {
  return await client.fetch(
    queries.podcastCategories,
    {},
    {
      next: { 
        tags: ['podcast-media', 'podcast-categories'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getPodcastPageData(): Promise<PodcastPageData> {
  const data = await client.fetch(
    queries.podcastPageData,
    {},
    {
      next: { 
        tags: ['podcast-media', 'podcast-hero'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )

  return {
    heroVideo: data.heroVideo || null,
    videos: data.videos || [],
    podcasts: data.podcasts || [],
    videoCategories: data.videoCategories || [],
    podcastCategories: data.podcastCategories || []
  }
}