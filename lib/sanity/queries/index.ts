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


export {  // Types
  type Publication,
  type PublicationsPageData,
// Functions

  getAllPublications,
  getPublicationBySlug,
  getPublicationsPageData,

}
  from './publications'


export {
  // Types
  type GalleryImage,
  type PhotoGalleryPageData,
  // Functions
  getAllGalleryImages,
  getPhotoGalleryHero,
  getAllYears,
  getPhotoGalleryPageData,
} from './photoGallery'

export {
  // Types
  type HeroVideo,
  type Video,
  type Podcast,
  type PodcastPageData,
  // Functions
  getHeroVideo,
  getAllVideos,
  getAllPodcasts,
  getVideoCategories,
  getPodcastCategories,
  getPodcastPageData,
} from './podcast'


export {
  // Types
  type Milestone,
  type AboutMilestonesData,
  // Functions
  getAboutMilestones,
} from './aboutMilestones'


export {
  // Types
type TeamMember,
  type AboutLeadershipData,
  // Functions
  getAboutLeadership,
} from './aboutLeadership'

export {
  // Types
  type HomeBannerData,
  // Functions
  getHomeBanner,
} from './homeBanner'

export {
  type FeaturedEvent,
  type FeaturedCourse,
  type HomeIntroductionData,
  type Testimonial,
  type LeadershipMember,
  // Functions
  getHomeIntroduction,
} from './homeIntroduction'

export {
  // Types
  type CourseInstructor,
  type CourseCard,
  type CourseDetail,
  type CoursesHero,
  type CoursesSection,
  type GalleryImage as CoursesGalleryImage,
  type CoursesGallery,
  type CoursesPageData,
  type PaginatedCoursesResult,
  type CoursesFilterOptions,

  // Functions
  getCoursesPageData,
  getAllCourses,
  getAllCourseSlugs,
  getPaginatedCourses,
  getCoursesFilterOptions,
  getCourseBySlug


} from './courses'


export {
  // Types
  type SpecialCourseCard,
  type FocusAreaCard,
  type SpecialCoursesFocusAreas,
  type SpecialCoursesHero,
  type SpecialCoursesPageData,
  type FacultyMember,
  type GalleryImage as SpecialCoursesGalleryImage,
  type SpecialCourseDetail,
  // Functions
  getSpecialCoursesPageData,
  getFeaturedCourses,
  getFeaturedCoursesWithDetails,
  getSpecialCourseBySlug



} from './specialCourses'

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