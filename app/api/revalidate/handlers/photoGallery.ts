import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for Photo Gallery
 * 
 * Handles revalidation when:
 * - Gallery image is created/updated/deleted
 * - Hero section is updated (isHeroSection = true)
 * - Image status changes
 * - Events or years are modified
 */

export function handlePhotoGalleryRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating photo gallery:', body._id)

    const paths: string[] = []

    // Check if this is the hero section
    const photoGalleryBody = body as { isHeroSection?: boolean }
    const isHeroSection = photoGalleryBody.isHeroSection === true

    if (isHeroSection) {
      // Revalidate hero section
      console.log('🎯 Revalidating photo gallery hero section')
      revalidateTag('photo-gallery-hero')
      revalidatePath('/photo-gallery')
      paths.push('/photo-gallery')
    } else {
      // Revalidate gallery images
      console.log('📸 Revalidating gallery image:', body._id)
      
      // Revalidate the photo-gallery tag
      revalidateTag('photo-gallery')
      
      // Revalidate events and years if they changed
      revalidateTag('events')
      revalidateTag('years')
      
      // Revalidate the photo gallery page
      revalidatePath('/photo-gallery')
      paths.push('/photo-gallery')
    }

    console.log('✅ Photo gallery revalidation completed')
    return {
      success: true,
      contentType: 'photoGallery',
      paths,
      message: isHeroSection 
        ? 'Photo gallery hero section revalidated'
        : 'Gallery image revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating photo gallery:', error)
    return {
      success: false,
      contentType: 'photoGallery',
      paths: [],
      message: 'Failed to revalidate photo gallery',
    }
  }
}

/**
 * Revalidate all photo gallery content
 * Use this for bulk operations or complete cache refresh
 */
export function revalidateAllPhotoGallery(): RevalidationResult {
  try {
    console.log('🔄 Revalidating all photo gallery content')
    
    revalidateTag('photo-gallery')
    revalidateTag('photo-gallery-hero')
    revalidateTag('events')
    revalidateTag('years')
    revalidatePath('/photo-gallery')
    
    console.log('✅ All photo gallery content revalidated')
    return {
      success: true,
      contentType: 'photoGallery',
      paths: ['/photo-gallery'],
      message: 'All photo gallery content revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating all photo gallery:', error)
    return {
      success: false,
      contentType: 'photoGallery',
      paths: [],
      message: 'Failed to revalidate all photo gallery',
    }
  }
}