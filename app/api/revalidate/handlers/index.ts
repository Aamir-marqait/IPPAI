/**
 * Revalidation Handlers Index
 * 
 * Central export point for all revalidation handlers
 * 
 * @module app/api/revalidate/handlers
 */

export type { WebhookPayload, RevalidationResult } from './events'

export {
  handleEventRevalidation,
  handleEventHeroRevalidation,
  handleWhyJoinEventsRevalidation,
  handleEventGalleryRevalidation,
} from './events'

export {
  handleArticleRevalidation,
  handleArticlesHeroRevalidation,
} from './articles'

export {
  handlePublicationRevalidation,
  revalidateAllPublications,
} from './publication'

// ============================================
// FUTURE EXPORTS (Add as you create them)
// ============================================

// Home Page (example for future)
// export {
//   handleHomeHeroRevalidation,
//   handleTestimonialRevalidation,
// } from './home'

// About Page (example for future)
// export {
//   handleAboutRevalidation,
// } from './about'

// Publications (example for future)
// export {
//   handlePublicationRevalidation,
// } from './publications'