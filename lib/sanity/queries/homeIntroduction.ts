import { client, CACHE_CONFIG } from '../client'

/**
 * Homepage Introduction Queries
 * 
 * Fetches introduction section data for homepage
 * Including main title, featured events, featured courses, testimonials, and leadership team
 * 
 * @module lib/sanity/queries/homeIntroduction
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface FeaturedEvent {
  title: string
  description: string
  image: string
  date: string
  location: string
  link: string
  status: 'published' | 'draft'
}

export interface FeaturedCourse {
  title: string
  description: string
  image: string
  date: string
  location: string
  link: string
  status: 'published' | 'draft'
}

export interface Testimonial {
  name: string
  position: string
  quote: string
  image: string
  order: number
}

export interface LeadershipMember {
  name: string
  role: string
  image: string
  order: number
}

export interface HomeIntroductionData {
  mainTitle: string
  featuredEvents: FeaturedEvent[]
  featuredCourses: FeaturedCourse[]
  testimonials: Testimonial[]
  leadershipTeam: LeadershipMember[]
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get introduction data
  homeIntroduction: `*[_type == "homeIntroduction"][0] {
    mainTitle,
    "featuredEvents": featuredEvents[status == "published"] {
      title,
      description,
      "image": image.asset->url,
      date,
      location,
      link,
      status
    },
    "featuredCourses": featuredCourses[status == "published"] {
      title,
      description,
      "image": image.asset->url,
      date,
      location,
      link,
      status
    },
    "testimonials": testimonials[] | order(order asc) {
      name,
      position,
      quote,
      "image": image.asset->url,
      order
    },
    "leadershipTeam": leadershipTeam[] | order(order asc) {
      name,
      role,
      "image": image.asset->url,
      order
    }
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getHomeIntroduction(): Promise<HomeIntroductionData> {
  const data = await client.fetch(
    queries.homeIntroduction,
    {},
    {
      next: { 
        tags: ['home-introduction'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return {
    mainTitle: data?.mainTitle || 'Independent Power Producers Association of India',
    featuredEvents: data?.featuredEvents || [],
    featuredCourses: data?.featuredCourses || [],
    testimonials: data?.testimonials || [],
    leadershipTeam: data?.leadershipTeam || []
  }
}