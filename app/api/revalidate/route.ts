import { NextRequest, NextResponse } from 'next/server'
import {
  handleEventRevalidation,
  handleEventHeroRevalidation,
  handleWhyJoinEventsRevalidation,
  handleEventGalleryRevalidation,
  handleArticleRevalidation,
  handleArticlesHeroRevalidation,
  handlePublicationRevalidation,
  type WebhookPayload,
  type RevalidationResult,
} from './handlers'

/**
 * Webhook Route for Sanity Content Revalidation
 * 
 * @route POST /api/revalidate?secret=YOUR_SECRET
 */

function validateSecret(secret: string | null): boolean {
  if (!secret) return false
  return secret === process.env.REVALIDATE_SECRET
}

function routeToHandler(body: WebhookPayload): RevalidationResult {
  const type = body._type

  switch (type) {
    // EVENTS
    case 'event':
      return handleEventRevalidation(body)
    case 'eventHeroSection':
      return handleEventHeroRevalidation(body)
    case 'whyJoinEvents':
      return handleWhyJoinEventsRevalidation(body)
    case 'eventGallery':
      return handleEventGalleryRevalidation(body)
    
    // ARTICLES
    case 'article':
      return handleArticleRevalidation(body)
    case 'articlesHero':
      return handleArticlesHeroRevalidation(body)

      // PUBLICATIONS
    case 'publication':
      return handlePublicationRevalidation(body)

    
    // DEFAULT
    default:
      return {
        success: false,
        contentType: type,
        paths: [],
        message: `Unknown content type: ${type}`,
      }
  }
}

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (!validateSecret(secret)) {
      return NextResponse.json(
        { message: 'Invalid token' }, 
        { status: 401 }
      )
    }

    const body: WebhookPayload = await request.json()
    
    console.log('🔔 Webhook received:', {
      type: body._type,
      id: body._id,
      slug: body.slug?.current,
      timestamp: new Date().toISOString(),
    })

    const result = routeToHandler(body)

    if (result.success) {
      console.log('✅ Revalidation successful:', {
        contentType: result.contentType,
        paths: result.paths,
      })
    } else {
      console.warn('⚠️ Revalidation skipped:', {
        contentType: result.contentType,
        message: result.message,
      })
    }

    return NextResponse.json({ 
      revalidated: result.success,
      contentType: result.contentType,
      paths: result.paths,
      timestamp: Date.now(),
      message: result.success 
        ? 'Successfully revalidated'
        : result.message || 'Revalidation skipped',
    })
    
  } catch (err) {
    console.error('❌ Revalidation error:', err)
    
    return NextResponse.json(
      { 
        message: 'Error revalidating', 
        error: err instanceof Error ? err.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}