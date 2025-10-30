import { revalidatePath } from 'next/cache'

/**
 * Event Revalidation Handler
 * 
 * Handles cache revalidation for event-related content
 * 
 * @module app/api/revalidate/handlers/events
 */

export interface WebhookPayload {
  _type: string
  _id: string
  slug?: {
    current: string
  }
  [key: string]: unknown
}

export interface RevalidationResult {
  success: boolean
  contentType: string
  paths: string[]
  message?: string
}

/**
 * Handle event revalidation
 * 
 * Revalidates:
 * - /events (events list page)
 * - /events/[slug] (specific event page if slug provided)
 * - / (home page if events shown there)
 * 
 * @param body - Webhook payload from Sanity
 * @returns Object with revalidated paths
 */
export function handleEventRevalidation(body: WebhookPayload): RevalidationResult {
  const paths: string[] = []

  // Always revalidate events list page
  revalidatePath('/events')
  paths.push('/events')
  
  // If specific event, revalidate that page
  if (body.slug?.current) {
    const eventPath = `/events/${body.slug.current}`
    revalidatePath(eventPath)
    paths.push(eventPath)
  }
  
  // Revalidate home if events shown there
  revalidatePath('/')
  paths.push('/')
  
  return {
    success: true,
    contentType: 'event',
    paths,
  }
}

/**
 * Handle event hero section revalidation
 * 
 * Revalidates:
 * - / (home page)
 * - /events (events page)
 * 
 * @returns Object with revalidated paths
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function handleEventHeroRevalidation(_body: WebhookPayload): RevalidationResult {
  const paths: string[] = []

  revalidatePath('/')
  paths.push('/')
  
  revalidatePath('/events')
  paths.push('/events')
  
  return {
    success: true,
    contentType: 'eventHeroSection',
    paths,
  }
}

/**
 * Handle Why Join Events revalidation
 * 
 * @returns Object with revalidated paths
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function handleWhyJoinEventsRevalidation(_body: WebhookPayload): RevalidationResult {
  const paths: string[] = []

  revalidatePath('/events')
  paths.push('/events')
  
  return {
    success: true,
    contentType: 'whyJoinEvents',
    paths,
  }
}

/**
 * Handle event gallery revalidation
 * 
 * @returns Object with revalidated paths
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function handleEventGalleryRevalidation(_body: WebhookPayload): RevalidationResult {
  const paths: string[] = []

  revalidatePath('/events')
  paths.push('/events')
  
  return {
    success: true,
    contentType: 'eventGallery',
    paths,
  }
}