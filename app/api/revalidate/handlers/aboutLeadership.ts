import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for About Leadership
 * 
 * Handles revalidation when:
 * - Leadership section is updated
 * - Team members are added/removed/modified
 * - Section header changes
 */

export function handleAboutLeadershipRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating about leadership:', body._id)

    const paths: string[] = []

    // Revalidate leadership section
    console.log('👥 Revalidating leadership team')
    revalidateTag('about-leadership')
    revalidatePath('/about')
    paths.push('/about')

    console.log('✅ About leadership revalidation completed')
    return {
      success: true,
      contentType: 'aboutLeadership',
      paths,
      message: 'About leadership revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating about leadership:', error)
    return {
      success: false,
      contentType: 'aboutLeadership',
      paths: [],
      message: 'Failed to revalidate about leadership',
    }
  }
}

/**
 * Revalidate all about content
 * Use this for bulk operations or complete cache refresh
 */
export function revalidateAllAboutLeadership(): RevalidationResult {
  try {
    console.log('🔄 Revalidating all about leadership content')
    
    revalidateTag('about-leadership')
    revalidatePath('/about')
    
    console.log('✅ All about leadership content revalidated')
    return {
      success: true,
      contentType: 'aboutLeadership',
      paths: ['/about'],
      message: 'All about leadership content revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating all about leadership:', error)
    return {
      success: false,
      contentType: 'aboutLeadership',
      paths: [],
      message: 'Failed to revalidate all about leadership',
    }
  }
}