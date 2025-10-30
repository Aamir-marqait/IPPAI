import { client, CACHE_CONFIG } from '../client'

/**
 * Hero Section Queries
 * 
 * All hero section GROQ queries and fetch functions
 * 
 * @module lib/sanity/queries/hero
 */

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  /**
   * Get events hero section
   */
  eventHero: `*[_type == "eventHeroSection"][0] {
    _id,
    title,
    subtitle,
    highlightText,
    eventDate,
    eventLocation,
    registrationLink,
    knowMoreLink,
    countdownTargetDate,
    "backgroundImage": backgroundImage.asset->url,
    "frameImage": frameImage.asset->url,
    "heroImage": heroImage.asset->url
  }`,

  /**
   * Get articles hero section
   */
  articlesHero: `*[_type == "articlesHero"][0] {
    _id,
    title,
    subtitle,
    "backgroundImage": backgroundImage.asset->url
  }`,

  /**
   * Get home hero section (future)
   */
  homeHero: `*[_type == "homeHero"][0] {
    _id,
    title,
    subtitle,
    ctaText,
    ctaLink,
    "backgroundImage": backgroundImage.asset->url
  }`,

  /**
   * Get about hero section (future)
   */
  aboutHero: `*[_type == "aboutHero"][0] {
    _id,
    title,
    subtitle,
    "backgroundImage": backgroundImage.asset->url
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

/**
 * Get event hero section
 * 
 * @returns Promise<EventHero | null> - Event hero section or null
 * @cache 5 minutes
 * @tags ['hero', 'event-hero']
 */
export async function getEventHero() {
  return await client.fetch(
    queries.eventHero,
    {},
    {
      next: { 
        tags: ['hero', 'event-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

/**
 * Get articles hero section
 * 
 * @returns Promise<ArticlesHero | null> - Articles hero section or null
 * @cache 5 minutes
 * @tags ['hero', 'articles-hero']
 */
export async function getArticlesHero() {
  return await client.fetch(
    queries.articlesHero,
    {},
    {
      next: { 
        tags: ['hero', 'articles-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

/**
 * Get home hero section (future)
 * 
 * @returns Promise<HomeHero | null> - Home hero section or null
 * @cache 5 minutes
 * @tags ['hero', 'home-hero']
 */
export async function getHomeHero() {
  return await client.fetch(
    queries.homeHero,
    {},
    {
      next: { 
        tags: ['hero', 'home-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

/**
 * Get about hero section (future)
 * 
 * @returns Promise<AboutHero | null> - About hero section or null
 * @cache 5 minutes
 * @tags ['hero', 'about-hero']
 */
export async function getAboutHero() {
  return await client.fetch(
    queries.aboutHero,
    {},
    {
      next: { 
        tags: ['hero', 'about-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

// Legacy compatibility exports (keep for backward compatibility)
export const getHeroSection = getEventHero