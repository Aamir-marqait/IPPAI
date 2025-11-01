import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for Homepage Introduction
 * 
 * Handles revalidation when:
 * - Main title is updated
 * - Featured events are added/removed/modified
 * - Featured courses are added/removed/modified
 */

export function handleHomeIntroductionRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating homepage introduction:', body._id)

    const paths: string[] = []

    // Revalidate homepage introduction
    console.log('🏠 Revalidating introduction section')
    revalidateTag('home-introduction')
    revalidatePath('/')
    paths.push('/')

    console.log('✅ Homepage introduction revalidation completed')
    return {
      success: true,
      contentType: 'homeIntroduction',
      paths,
      message: 'Homepage introduction revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating homepage introduction:', error)
    return {
      success: false,
      contentType: 'homeIntroduction',
      paths: [],
      message: 'Failed to revalidate homepage introduction',
    }
  }
}