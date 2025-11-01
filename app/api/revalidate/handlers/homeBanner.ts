import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for Homepage Banner
 * 
 * Handles revalidation when:
 * - Banner image is updated
 * - Alt text is changed
 */

export function handleHomeBannerRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating homepage banner:', body._id)

    const paths: string[] = []

    // Revalidate homepage banner
    console.log('🖼️ Revalidating banner image')
    revalidateTag('home-banner')
    revalidatePath('/')
    paths.push('/')

    console.log('✅ Homepage banner revalidation completed')
    return {
      success: true,
      contentType: 'homeBanner',
      paths,
      message: 'Homepage banner revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating homepage banner:', error)
    return {
      success: false,
      contentType: 'homeBanner',
      paths: [],
      message: 'Failed to revalidate homepage banner',
    }
  }
}