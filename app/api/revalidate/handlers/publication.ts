import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for Publications
 * 
 * Handles revalidation when:
 * - Publication is created/updated/deleted
 * - Hero section is updated (isHeroSection = true)
 * - Publication status changes
 * - Categories are modified
 */

// Extend WebhookPayload to include publication-specific fields
interface PublicationPayload extends WebhookPayload {
  isHeroSection?: boolean
}

export function handlePublicationRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating publications:', body._id)

    const paths: string[] = []

    // Check if this is the hero section
    const publicationBody = body as PublicationPayload
    const isHeroSection = publicationBody.isHeroSection === true

    if (isHeroSection) {
      // Revalidate hero section
      console.log('🎯 Revalidating publications hero section')
      revalidateTag('publications-hero')
      revalidatePath('/publications')
      paths.push('/publications')
    } else {
      // Revalidate publications list
      console.log('📚 Revalidating publication:', body._id)
      
      // Revalidate the publications tag
      revalidateTag('publications')
      
      // Revalidate categories if they changed
      revalidateTag('categories')
      
      // Revalidate the publications page
      revalidatePath('/publications')
      paths.push('/publications')
      
      // If publication has a slug, revalidate its specific tag
      if (body.slug?.current) {
        revalidateTag(`publication-${body.slug.current}`)
        console.log(`📄 Revalidated publication: ${body.slug.current}`)
      }
    }

    console.log('✅ Publications revalidation completed')
    return {
      success: true,
      contentType: 'publication',
      paths,
      message: isHeroSection 
        ? 'Publications hero section revalidated'
        : 'Publication revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating publications:', error)
    return {
      success: false,
      contentType: 'publication',
      paths: [],
      message: 'Failed to revalidate publications',
    }
  }
}

/**
 * Revalidate all publications
 * Use this for bulk operations or complete cache refresh
 */
export function revalidateAllPublications(): RevalidationResult {
  try {
    console.log('🔄 Revalidating all publications')
    
    revalidateTag('publications')
    revalidateTag('publications-hero')
    revalidateTag('categories')
    revalidatePath('/publications')
    
    console.log('✅ All publications revalidated')
    return {
      success: true,
      contentType: 'publication',
      paths: ['/publications'],
      message: 'All publications revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating all publications:', error)
    return {
      success: false,
      contentType: 'publication',
      paths: [],
      message: 'Failed to revalidate all publications',
    }
  }
}