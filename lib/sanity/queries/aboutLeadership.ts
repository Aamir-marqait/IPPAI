import { client, CACHE_CONFIG } from '../client'

/**
 * About Leadership Queries
 * 
 * Fetches leadership team data for the About page
 * 
 * @module lib/sanity/queries/aboutLeadership
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface TeamMember {
  image: string
  altText: string
  name: string
  position: string
  bio: string
  featured: boolean
  order?: number
  status: 'published' | 'draft'
}

export interface AboutLeadershipData {
  smallTitle: string
  mainTitle: string
  description?: string
  teamMembers: TeamMember[]
  featuredMember: TeamMember | null
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get leadership data
  aboutLeadership: `*[_type == "aboutLeadership"][0] {
    smallTitle,
    mainTitle,
    description,
    "teamMembers": teamMembers[status == "published"] | order(coalesce(order, 999999) asc) {
      "image": image.asset->url,
      altText,
      name,
      position,
      bio,
      featured,
      order,
      status
    }
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getAboutLeadership(): Promise<AboutLeadershipData> {
  const data = await client.fetch(
    queries.aboutLeadership,
    {},
    {
      next: { 
        tags: ['about-leadership'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  const teamMembers = data?.teamMembers || []
  
  // Find featured member or use first member as default
  const featuredMember = teamMembers.find((member: TeamMember) => member.featured) || teamMembers[0] || null

  return {
    smallTitle: data?.smallTitle || 'Meet Our Leadership Team',
    mainTitle: data?.mainTitle || 'The Driving Force of IPPAI',
    description: data?.description || 'Our dedicated leadership team brings together decades of expertise and vision.',
    teamMembers,
    featuredMember
  }
}