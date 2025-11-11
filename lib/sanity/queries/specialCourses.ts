import { client, CACHE_CONFIG } from '../client'

/**
 * Special Courses Queries
 * 
 * Fetches special courses page data and featured courses
 * 
 * @module lib/sanity/queries/specialCourses
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface SpecialCoursesHero {
  logo?: string
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  ctaButtonText: string
  ctaButtonLink: string
}

export interface FocusAreaCard {
  icon: string
  title: string
}

export interface SpecialCoursesFocusAreas {
  card1: FocusAreaCard
  card2: FocusAreaCard
  card3: FocusAreaCard
}

export interface SpecialCoursesPageData {
  hero: SpecialCoursesHero
  focusAreas: SpecialCoursesFocusAreas
}

export interface FacultyMember {
  photo: string
  name: string
  title: string
  organization: string
}

export interface GalleryImage {
  image: string
  altText: string
}

export interface SpecialCourseCard {
  _id: string
  title: string
  slug: string
  shortDescription: string
  courseImage: string
  organizerInfo: string
  location: string
  date: string
  duration?: string
  registrationLink?: string
}

export interface SpecialCourseDetail extends SpecialCourseCard {
  aboutSection: {
    backgroundImage: string
    sectionLabel: string
    sectionTitle: string
    description: string
  }
  keyTopicsSection: {
    sectionLabel: string
    sectionTitle: string
    topicsImage: string
    topics: string[]
  }
  facultySection: {
    sectionLabel: string
    sectionTitle: string
    sectionDescription: string
    facultyMembers: FacultyMember[]
  }
  gallerySection: {
    sectionLabel: string
    sectionTitle: string
    images: GalleryImage[]
  }
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get page settings
  specialCoursesPage: `*[_type == "specialCoursesPage"][0] {
    "hero": {
      "logo": heroSection.logo.asset->url,
      "title": heroSection.title,
      "subtitle": heroSection.subtitle,
      "description": heroSection.description,
      "backgroundImage": heroSection.backgroundImage.asset->url,
      "ctaButtonText": heroSection.ctaButtonText,
      "ctaButtonLink": heroSection.ctaButtonLink
    },
    "focusAreas": {
      "card1": {
        "icon": focusAreas.card1.icon.asset->url,
        "title": focusAreas.card1.title
      },
      "card2": {
        "icon": focusAreas.card2.icon.asset->url,
        "title": focusAreas.card2.title
      },
      "card3": {
        "icon": focusAreas.card3.icon.asset->url,
        "title": focusAreas.card3.title
      }
    }
  }`,

  // Get featured courses (cards only)
  featuredCourses: `*[_type == "specialCourse" && status == "published" && featured == true] | order(coalesce(order, 999999) asc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    "courseImage": courseImage.asset->url,
    organizerInfo,
    location,
    date,
    duration,
    registrationLink
  }`,

  // Get full course details by slug
  courseBySlug: (slug: string) => `*[_type == "specialCourse" && slug.current == "${slug}" && status == "published"][0] {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    "courseImage": courseImage.asset->url,
    organizerInfo,
    location,
    date,
    duration,
    registrationLink,
    "aboutSection": {
      "backgroundImage": aboutSection.backgroundImage.asset->url,
      "sectionLabel": aboutSection.sectionLabel,
      "sectionTitle": aboutSection.sectionTitle,
      "description": aboutSection.description
    },
    "keyTopicsSection": {
      "sectionLabel": keyTopicsSection.sectionLabel,
      "sectionTitle": keyTopicsSection.sectionTitle,
      "topicsImage": keyTopicsSection.topicsImage.asset->url,
      "topics": keyTopicsSection.topics
    },
    "facultySection": {
      "sectionLabel": facultySection.sectionLabel,
      "sectionTitle": facultySection.sectionTitle,
      "sectionDescription": facultySection.sectionDescription,
      "facultyMembers": facultySection.facultyMembers[] {
        "photo": photo.asset->url,
        name,
        title,
        organization
      }
    },
    "gallerySection": {
      "sectionLabel": gallerySection.sectionLabel,
      "sectionTitle": gallerySection.sectionTitle,
      "images": gallerySection.images[] {
        "image": image.asset->url,
        "altText": altText
      }
    }
  }`,

  // Get all featured courses with full details
  featuredCoursesWithDetails: `*[_type == "specialCourse" && status == "published" && featured == true] | order(coalesce(order, 999999) asc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    "courseImage": courseImage.asset->url,
    organizerInfo,
    location,
    date,
    duration,
    registrationLink,
    "aboutSection": {
      "backgroundImage": aboutSection.backgroundImage.asset->url,
      "sectionLabel": aboutSection.sectionLabel,
      "sectionTitle": aboutSection.sectionTitle,
      "description": aboutSection.description
    },
    "keyTopicsSection": {
      "sectionLabel": keyTopicsSection.sectionLabel,
      "sectionTitle": keyTopicsSection.sectionTitle,
      "topicsImage": keyTopicsSection.topicsImage.asset->url,
      "topics": keyTopicsSection.topics
    },
    "facultySection": {
      "sectionLabel": facultySection.sectionLabel,
      "sectionTitle": facultySection.sectionTitle,
      "sectionDescription": facultySection.sectionDescription,
      "facultyMembers": facultySection.facultyMembers[] {
        "photo": photo.asset->url,
        name,
        title,
        organization
      }
    },
    "gallerySection": {
      "sectionLabel": gallerySection.sectionLabel,
      "sectionTitle": gallerySection.sectionTitle,
      "images": gallerySection.images[] {
        "image": image.asset->url,
        "altText": altText
      }
    }
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

/**
 * Get special courses page settings
 */
export async function getSpecialCoursesPageData(): Promise<SpecialCoursesPageData> {
  const data = await client.fetch(
    queries.specialCoursesPage,
    {},
    {
      next: { 
        tags: ['special-courses-page'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return {
    hero: {
      logo: data?.hero?.logo,
      title: data?.hero?.title || 'IRPRI — IPPAI Regulatory and Policy Research Institute',
      subtitle: data?.hero?.subtitle || 'Building Capacity, Sharing Knowledge, and Empowering India\'s Power Sector',
      description: data?.hero?.description || '',
      backgroundImage: data?.hero?.backgroundImage || '/schero.png',
      ctaButtonText: data?.hero?.ctaButtonText || 'Learn More About IRPRI',
      ctaButtonLink: data?.hero?.ctaButtonLink || '#about',
    },
    focusAreas: {
      card1: {
        icon: data?.focusAreas?.card1?.icon || '/pr.png',
        title: data?.focusAreas?.card1?.title || 'Policy Research',
      },
      card2: {
        icon: data?.focusAreas?.card2?.icon || '/cb.png',
        title: data?.focusAreas?.card2?.title || 'Capacity Building',
      },
      card3: {
        icon: data?.focusAreas?.card3?.icon || '/it.png',
        title: data?.focusAreas?.card3?.title || 'Industry Training',
      },
    },
  }
}

/**
 * Get featured courses (basic info only)
 */
export async function getFeaturedCourses(): Promise<SpecialCourseCard[]> {
  const data = await client.fetch(
    queries.featuredCourses,
    {},
    {
      next: { 
        tags: ['special-courses'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return data || []
}

/**
 * Get featured courses with full details
 */
export async function getFeaturedCoursesWithDetails(): Promise<SpecialCourseDetail[]> {
  const data = await client.fetch(
    queries.featuredCoursesWithDetails,
    {},
    {
      next: { 
        tags: ['special-courses'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return data || []
}

/**
 * Get single special course by slug
 */
export async function getSpecialCourseBySlug(slug: string): Promise<SpecialCourseDetail | null> {
  const data = await client.fetch(
    queries.courseBySlug(slug),
    {},
    {
      next: { 
        tags: [`special-course-${slug}`],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return data || null
}