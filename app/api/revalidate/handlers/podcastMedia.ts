import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for Podcast Media
 * 
 * Handles revalidation when:
 * - Hero video is updated (isHeroSection = true)
 * - Video is created/updated/deleted (mediaType = video)
 * - Podcast is created/updated/deleted (mediaType = podcast)
 * - Media status changes
 * - Categories are modified
 */

export function handlePodcastMediaRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating podcast media:', body._id)

    const paths: string[] = []

    // Check if this is the hero section or media item
    const podcastBody = body as { 
      isHeroSection?: boolean
      mediaType?: 'video' | 'podcast'
    }
    const isHeroSection = podcastBody.isHeroSection === true
    const mediaType = podcastBody.mediaType

    if (isHeroSection) {
      // Revalidate hero section
      console.log('🎯 Revalidating podcast hero video')
      revalidateTag('podcast-hero')
      revalidatePath('/podcast')
      paths.push('/podcast')
    } else if (mediaType === 'video') {
      // Revalidate video gallery
      console.log('📹 Revalidating video:', body._id)
      revalidateTag('podcast-media')
      revalidateTag('videos')
      revalidateTag('video-categories')
      revalidatePath('/podcast')
      paths.push('/podcast')
    } else if (mediaType === 'podcast') {
      // Revalidate podcast/audio
      console.log('🎙️ Revalidating podcast:', body._id)
      revalidateTag('podcast-media')
      revalidateTag('podcasts')
      revalidateTag('podcast-categories')
      revalidatePath('/podcast')
      paths.push('/podcast')
    }

    console.log('✅ Podcast media revalidation completed')
    return {
      success: true,
      contentType: 'podcastMedia',
      paths,
      message: isHeroSection 
        ? 'Podcast hero video revalidated'
        : `${mediaType} revalidated`,
    }
  } catch (error) {
    console.error('❌ Error revalidating podcast media:', error)
    return {
      success: false,
      contentType: 'podcastMedia',
      paths: [],
      message: 'Failed to revalidate podcast media',
    }
  }
}

/**
 * Revalidate all podcast media content
 * Use this for bulk operations or complete cache refresh
 */
export function revalidateAllPodcastMedia(): RevalidationResult {
  try {
    console.log('🔄 Revalidating all podcast media content')
    
    revalidateTag('podcast-media')
    revalidateTag('podcast-hero')
    revalidateTag('videos')
    revalidateTag('podcasts')
    revalidateTag('video-categories')
    revalidateTag('podcast-categories')
    revalidatePath('/podcast')
    
    console.log('✅ All podcast media content revalidated')
    return {
      success: true,
      contentType: 'podcastMedia',
      paths: ['/podcast'],
      message: 'All podcast media content revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating all podcast media:', error)
    return {
      success: false,
      contentType: 'podcastMedia',
      paths: [],
      message: 'Failed to revalidate all podcast media',
    }
  }
}