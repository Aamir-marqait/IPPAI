import { client, CACHE_CONFIG } from '../client'

/**
 * About Milestones Queries
 * 
 * Fetches timeline milestones for the About page
 * 
 * @module lib/sanity/queries/aboutMilestones
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Milestone {
  year: string
  icon: string
  description: string
  status: 'published' | 'draft'
}

export interface AboutMilestonesData {
  sectionTitle: string
  sectionSubtitle?: string
  milestones: Milestone[]
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get milestones data
  aboutMilestones: `*[_type == "aboutMilestones"][0] {
    sectionTitle,
    sectionSubtitle,
    "milestones": milestones[status == "published"] {
      year,
      "icon": icon.asset->url,
      description,
      status
    }
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getAboutMilestones(): Promise<AboutMilestonesData> {
  const data = await client.fetch(
    queries.aboutMilestones,
    {},
    {
      next: { 
        tags: ['about-milestones'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return {
    sectionTitle: data?.sectionTitle || 'Milestones That Matter',
    sectionSubtitle: data?.sectionSubtitle || 'Three decades of transformative achievements in India\'s power sector',
    milestones: data?.milestones || []
  }
}