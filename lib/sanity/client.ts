import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * Sanity Client Configuration
 * 
 * Single source of truth for Sanity client instance
 * Used by all query files in lib/sanity/queries/
 */

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'r4mgvxxq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Enable CDN for faster global delivery
  apiVersion: '2025-01-28', // Use current date or latest API version
})

/**
 * Image URL Builder
 * 
 * Helper to generate optimized image URLs from Sanity images
 * Usage: urlFor(image).width(800).height(600).url()
 */
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Cache Configuration
 * 
 * Default cache settings for different content types
 */
export const CACHE_CONFIG = {
  // Fast-changing content (events, articles)
  DYNAMIC: {
    revalidate: 60, // 1 minute
  },
  
  // Slow-changing content (hero sections, settings)
  STATIC: {
    revalidate: 300, // 5 minutes
  },
  
  // Very slow-changing content (about page, legal)
  STABLE: {
    revalidate: 3600, // 1 hour
  },
} as const