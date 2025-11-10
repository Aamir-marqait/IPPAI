import { client, CACHE_CONFIG } from '../client'
import { PortableTextBlock } from 'sanity'

/**
 * Courses Queries
 * 
 * Fetches courses page data, individual courses, with pagination and filtering
 * 
 * @module lib/sanity/queries/courses
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface CourseInstructor {
  name?: string
  role?: string
  image?: string
}

export interface CourseCard {
  _id: string
  title: string
  slug: string
  category: string
  coverImage: string
  shortDescription: string
  highlights: string[]
  lessons?: string
  duration?: string
  students?: string
  price?: string
  level?: string
  certificationType?: string
  language?: string
  featured: boolean
  order?: number
}

export interface CourseDetail extends CourseCard {
  instructor?: CourseInstructor
  courseContent: PortableTextBlock[]
}

export interface CoursesHero {
  logo?: string
  title: string
  subtitle: string
  backgroundImage: string
  ctaButtonText: string
  ctaButtonLink: string
}

export interface CoursesSection {
  sectionLabel: string
  mainHeading: string
  backgroundImage?: string
}

export interface GalleryImage {
  image: string
  altText: string
}

export interface CoursesGallery {
  sectionLabel: string
  title: string
  description?: string
  images: GalleryImage[]
}

export interface CoursesPageData {
  hero: CoursesHero
  coursesSection: CoursesSection
  gallery: CoursesGallery
}

export interface PaginatedCoursesResult {
  courses: CourseCard[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface CoursesFilterOptions {
  categories: string[]
  levels: string[]
  languages: string[]
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get page settings
  coursesPage: `*[_type == "coursesPage"][0] {
    "hero": {
      "logo": heroSection.logo.asset->url,
      "title": heroSection.title,
      "subtitle": heroSection.subtitle,
      "backgroundImage": heroSection.backgroundImage.asset->url,
      "ctaButtonText": heroSection.ctaButtonText,
      "ctaButtonLink": heroSection.ctaButtonLink
    },
    "coursesSection": {
      "sectionLabel": coursesSection.sectionLabel,
      "mainHeading": coursesSection.mainHeading,
      "backgroundImage": coursesSection.backgroundImage.asset->url
    },
    "gallery": {
      "sectionLabel": gallerySection.sectionLabel,
      "title": gallerySection.title,
      "description": gallerySection.description,
      "images": gallerySection.images[] {
        "image": image.asset->url,
        "altText": altText
      }
    }
  }`,

  // Get all courses (for cards)
  allCourses: `*[_type == "course" && status == "published"] | order(featured desc, coalesce(order, 999999) asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    "coverImage": coverImage.asset->url,
    shortDescription,
    highlights,
    lessons,
    duration,
    students,
    price,
    level,
    certificationType,
    language,
    featured,
    order
  }`,

  // Get paginated courses
  paginatedCourses: (start: number, end: number, filters?: string) => `{
    "courses": *[_type == "course" && status == "published"${filters ? ` && ${filters}` : ''}] | order(featured desc, coalesce(order, 999999) asc) [${start}...${end}] {
      _id,
      title,
      "slug": slug.current,
      category,
      "coverImage": coverImage.asset->url,
      shortDescription,
      highlights,
      lessons,
      duration,
      students,
      price,
      level,
      certificationType,
      language,
      featured,
      order
    },
    "total": count(*[_type == "course" && status == "published"${filters ? ` && ${filters}` : ''}])
  }`,

  // Get single course by slug
  courseBySlug: (slug: string) => `*[_type == "course" && slug.current == "${slug}"][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    "coverImage": coverImage.asset->url,
    shortDescription,
    highlights,
    lessons,
    duration,
    students,
    price,
    level,
    certificationType,
    language,
    "instructor": instructor {
      name,
      role,
      "image": image.asset->url
    },
    courseContent,
    featured,
    order
  }`,

  // Get filter options
  filterOptions: `{
    "categories": array::unique(*[_type == "course" && status == "published"].category),
    "levels": array::unique(*[_type == "course" && status == "published"].level),
    "languages": array::unique(*[_type == "course" && status == "published"].language)
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

/**
 * Get courses page settings
 */
export async function getCoursesPageData(): Promise<CoursesPageData> {
  const data = await client.fetch(
    queries.coursesPage,
    {},
    {
      next: { 
        tags: ['courses-page'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return {
    hero: {
      logo: data?.hero?.logo,
      title: data?.hero?.title || 'Intensive Course on Regulatory & Policy Framework in the Power Sector',
      subtitle: data?.hero?.subtitle || '3 day Residential course conducted by IPPAI',
      backgroundImage: data?.hero?.backgroundImage || '/chero.png',
      ctaButtonText: data?.hero?.ctaButtonText || 'Register Now',
      ctaButtonLink: data?.hero?.ctaButtonLink || '#register-now',
    },
    coursesSection: {
      sectionLabel: data?.coursesSection?.sectionLabel || 'OUR COURSE',
      mainHeading: data?.coursesSection?.mainHeading || 'Comprehensive Curriculum On Energy, Policy & Regulation',
      backgroundImage: data?.coursesSection?.backgroundImage,
    },
    gallery: {
      sectionLabel: data?.gallery?.sectionLabel || 'OUR GALLERY',
      title: data?.gallery?.title || 'RPRI Batch 1',
      description: data?.gallery?.description,
      images: data?.gallery?.images || [],
    },
  }
}

/**
 * Get all published courses
 */
export async function getAllCourses(): Promise<CourseCard[]> {
  const data = await client.fetch(
    queries.allCourses,
    {},
    {
      next: { 
        tags: ['courses'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return data || []
}

/**
 * Get paginated courses with optional filters
 */
export async function getPaginatedCourses(
  page: number = 1,
  pageSize: number = 6,
  filters?: {
    category?: string
    level?: string
    language?: string
  }
): Promise<PaginatedCoursesResult> {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  // Build filter string
  let filterString = ''
  if (filters?.category) {
    filterString += ` category == "${filters.category}"`
  }
  if (filters?.level) {
    filterString += `${filterString ? ' && ' : ''}level == "${filters.level}"`
  }
  if (filters?.language) {
    filterString += `${filterString ? ' && ' : ''}language == "${filters.language}"`
  }

  const data = await client.fetch(
    queries.paginatedCourses(start, end, filterString),
    {},
    {
      next: { 
        tags: ['courses'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  const total = data?.total || 0
  const totalPages = Math.ceil(total / pageSize)

  return {
    courses: data?.courses || [],
    total,
    page,
    pageSize,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  }
}

/**
 * Get filter options for courses
 */
export async function getCoursesFilterOptions(): Promise<CoursesFilterOptions> {
  const data = await client.fetch(
    queries.filterOptions,
    {},
    {
      next: { 
        tags: ['courses'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return {
    categories: data?.categories?.filter(Boolean) || [],
    levels: data?.levels?.filter(Boolean) || [],
    languages: data?.languages?.filter(Boolean) || [],
  }
}

/**
 * Get single course by slug
 */
export async function getCourseBySlug(slug: string): Promise<CourseDetail | null> {
  const data = await client.fetch(
    queries.courseBySlug(slug),
    {},
    {
      next: { 
        tags: [`course-${slug}`],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return data || null
}

/**
 * Get all course slugs for static generation
 */
export async function getAllCourseSlugs(): Promise<string[]> {
  const slugs = await client.fetch(
    `*[_type == "course" && status == "published"].slug.current`,
    {},
    {
      next: { 
        tags: ['courses'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )

  return slugs || []
}