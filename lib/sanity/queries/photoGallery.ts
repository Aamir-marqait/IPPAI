import { client, CACHE_CONFIG } from '../client'

/**
 * Photo Gallery Queries
 * 
 * All photo gallery-related queries including:
 * - Gallery images with filters
 * - Hero section
 * - Events and years lists
 * 
 * Uses unified photoGallery schema with isHeroSection flag
 * 
 * @module lib/sanity/queries/photoGallery
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface GalleryImage {
  _id: string
  image: string
  caption?: string
  dateTaken?: string
  event?: string
  customEvent?: string
  location?: string
  year?: string
  order?: number
  status?: 'draft' | 'published' | 'archived'
}

export interface PhotoGalleryPageData {
  // Hero Section Data (from photoGallery where isHeroSection = true)
  heroTitle: string
  heroSubtitle?: string
  heroBackgroundImage: string
  
  // Gallery Images (from photoGallery where isHeroSection = false/null)
  images: GalleryImage[]
  
  // Available filters
  events: string[]
  years: string[]
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get all published gallery images (excluding hero)
  allGalleryImages: `*[_type == "photoGallery" && isHeroSection != true && status == "published"] | order(coalesce(order, 999999) asc, dateTaken desc) {
    _id,
    "image": image.asset->url,
    caption,
    dateTaken,
    event,
    customEvent,
    location,
    year,
    order,
    status
  }`,

  // Get hero section data (from photoGallery where isHeroSection = true)
  photoGalleryHero: `*[_type == "photoGallery" && isHeroSection == true][0] {
    _id,
    heroTitle,
    heroSubtitle,
    "heroBackgroundImage": heroBackgroundImage.asset->url
  }`,

  // Get all unique events (excluding "Other")
  allEvents: `array::unique(*[_type == "photoGallery" && isHeroSection != true && status == "published" && event != "Other" && defined(event)].event)`,

  // Get all unique years
  allYears: `array::unique(*[_type == "photoGallery" && isHeroSection != true && status == "published" && defined(year)].year) | order(@desc)`,

  // Get complete page data (hero + images + filters)
  photoGalleryPageData: `{
    "hero": *[_type == "photoGallery" && isHeroSection == true][0] {
      "heroTitle": heroTitle,
      "heroSubtitle": heroSubtitle,
      "heroBackgroundImage": heroBackgroundImage.asset->url
    },
    "images": *[_type == "photoGallery" && isHeroSection != true && status == "published"] | order(coalesce(order, 999999) asc, dateTaken desc) {
      _id,
      "image": image.asset->url,
      caption,
      dateTaken,
      event,
      customEvent,
      location,
      year,
      order,
      status
    },
    "events": array::unique(*[_type == "photoGallery" && isHeroSection != true && status == "published" && event != "Other" && defined(event)].event),
    "years": array::unique(*[_type == "photoGallery" && isHeroSection != true && status == "published" && defined(year)].year) | order(@desc)
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  return await client.fetch(
    queries.allGalleryImages,
    {},
    {
      next: { 
        tags: ['photo-gallery'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getPhotoGalleryHero() {
  return await client.fetch(
    queries.photoGalleryHero,
    {},
    {
      next: { 
        tags: ['photo-gallery', 'photo-gallery-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

export async function getAllEvents(): Promise<string[]> {
  return await client.fetch(
    queries.allEvents,
    {},
    {
      next: { 
        tags: ['photo-gallery', 'events'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getAllYears(): Promise<string[]> {
  return await client.fetch(
    queries.allYears,
    {},
    {
      next: { 
        tags: ['photo-gallery', 'years'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getPhotoGalleryPageData(): Promise<PhotoGalleryPageData> {
  const data = await client.fetch(
    queries.photoGalleryPageData,
    {},
    {
      next: { 
        tags: ['photo-gallery', 'photo-gallery-hero'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )

  return {
    heroTitle: data.hero?.heroTitle || 'Capturing The Smiles',
    heroSubtitle: data.hero?.heroSubtitle,
    heroBackgroundImage: data.hero?.heroBackgroundImage || '/membership/hero.png',
    images: data.images || [],
    events: data.events || [],
    years: data.years || []
  }
}