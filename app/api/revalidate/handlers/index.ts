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

export {
  handlePhotoGalleryRevalidation,
  revalidateAllPhotoGallery,
} from './photoGallery'

export {
  handlePodcastMediaRevalidation,
} from './podcastMedia'

export {
  handleAboutMilestonesRevalidation,
  revalidateAllAbout,
} from './aboutMilestones'

export {
  handleAboutLeadershipRevalidation,
  revalidateAllAboutLeadership
} from './aboutLeadership'

export {
  handleHomeBannerRevalidation
} from './homeBanner'

export {
  handleHomeIntroductionRevalidation
} from './homeIntroduction'

export {
  handleCoursesPageRevalidation,
  handleCourseRevalidation
} from './courses'

export {
  handleSpecialCoursesPageRevalidation,
  handleSpecialCourseRevalidation,
} from './specialCourses'

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