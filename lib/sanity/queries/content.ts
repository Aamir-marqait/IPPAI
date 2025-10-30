import { client, CACHE_CONFIG } from '../client'

/**
 * Additional Content Queries
 * 
 * Queries for gallery, features, and other content sections
 * 
 * @module lib/sanity/queries/content
 */

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  /**
   * Get gallery images
   */
  gallery: `*[_type == "eventGallery"][0] {
    _id,
    sectionTitle,
    mainHeading,
    description,
    images[] {
      "url": asset->url,
      alt
    }
  }`,

  /**
   * Get "Why Join Events" section
   */
  whyJoinEvents: `*[_type == "whyJoinEvents"][0] {
    _id,
    sectionTitle,
    mainHeading,
    description,
    features[] {
      iconType,
      iconName,
      "iconImage": iconImage.asset->url,
      title,
      description,
      number
    }
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

/**
 * Get gallery images
 * 
 * @returns Promise<Gallery | null> - Gallery section or null
 * @cache 5 minutes
 * @tags ['gallery']
 */
export async function getGalleryImages() {
  return await client.fetch(
    queries.gallery,
    {},
    {
      next: { 
        tags: ['gallery'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

/**
 * Get "Why Join Events" section
 * 
 * @returns Promise<WhyJoinEvents | null> - Why Join Events section or null
 * @cache 5 minutes
 * @tags ['why-join']
 */
export async function getWhyJoinEvents() {
  return await client.fetch(
    queries.whyJoinEvents,
    {},
    {
      next: { 
        tags: ['why-join'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}