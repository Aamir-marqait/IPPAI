import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for About Milestones
 * 
 * Handles revalidation when:
 * - Milestone section is updated
 * - Timeline items are added/removed/modified
 * - Section title or subtitle changes
 */

export function handleAboutMilestonesRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating about milestones:', body._id)

    const paths: string[] = []

    // Revalidate milestones section
    console.log('📅 Revalidating milestones timeline')
    revalidateTag('about-milestones')
    revalidatePath('/about')
    paths.push('/about')

    console.log('✅ About milestones revalidation completed')
    return {
      success: true,
      contentType: 'aboutMilestones',
      paths,
      message: 'About milestones revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating about milestones:', error)
    return {
      success: false,
      contentType: 'aboutMilestones',
      paths: [],
      message: 'Failed to revalidate about milestones',
    }
  }
}

/**
 * Revalidate all about content
 * Use this for bulk operations or complete cache refresh
 */
export function revalidateAllAbout(): RevalidationResult {
  try {
    console.log('🔄 Revalidating all about content')
    
    revalidateTag('about-milestones')
    revalidatePath('/about')
    
    console.log('✅ All about content revalidated')
    return {
      success: true,
      contentType: 'aboutMilestones',
      paths: ['/about'],
      message: 'All about content revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating all about:', error)
    return {
      success: false,
      contentType: 'aboutMilestones',
      paths: [],
      message: 'Failed to revalidate all about',
    }
  }
}