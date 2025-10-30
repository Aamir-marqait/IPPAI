/**
 * Sanity Queries Index
 * 
 * Central export point for all Sanity queries
 * 
 * @module lib/sanity/queries
 * 
 * @example
 * // Import specific queries
 * import { getAllEvents, getAllArticles } from '@/lib/sanity/queries'
 * 
 * @example
 * // Import all event queries
 * import * as eventQueries from '@/lib/sanity/queries/events'
 * 
 * @example
 * // Import all article queries
 * import * as articleQueries from '@/lib/sanity/queries/articles'
 */

// ============================================
// EVENT QUERIES
// ============================================
export {
  // Types
  type Event,
  type EventHero,
  type WhyJoinEvents,
  type EventGallery,
  // Functions
  getAllEvents,
  getEventBySlug,
  getEventHero,
  getWhyJoinEvents,
  getEventGallery,
  // Legacy exports
  getHeroSection,
  getGalleryImages,
} from './events'

// ============================================
// ARTICLE QUERIES
// ============================================
export {
  // Types
  type Article,
  type ArticlesHero,
  // Functions
  getAllArticles,
  getArticleBySlug,
  getFeaturedArticles,
  getArticlesByCategory,
  getAllCategories,
  getArticlesHero,
} from './articles'

// ============================================
// FUTURE EXPORTS (Add as you create them)
// ============================================

// Home Page (example for future)
// export {
//   type HomeHero,
//   type Testimonial,
//   getHomeHero,
//   getTestimonials,
//   getPartners,
// } from './home'

// About Page (example for future)
// export {
//   type AboutContent,
//   type TeamMember,
//   getAboutContent,
//   getTeamMembers,
// } from './about'

// Publications (example for future)
// export {
//   type Publication,
//   getAllPublications,
//   getPublicationBySlug,
// } from './publications'