import { client, CACHE_CONFIG } from '../client'

/**
 * Publications Queries
 * 
 * All publications-related queries including:
 * - Publications list
 * - Publications page data (hero + publications)
 * - Categories
 * 
 * Uses unified publication schema with isHeroSection flag
 * 
 * @module lib/sanity/queries/publications
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Publication {
  _id: string
  title: string
  slug?: { current: string }
  image: string
  author: string
  publishedAt: string
  description: string
  pdfFile?: string
  externalLink?: string
  categories?: string[]
  customCategories?: string[]
  featured?: boolean
  order?: number
  status?: 'draft' | 'published' | 'archived'
}

export interface PublicationsPageData {
  // Hero Section Data (from publication where isHeroSection = true)
  heroTitle: string
  heroSubtitle?: string
  heroBackgroundImage: string
  
  // Publications (from publications where isHeroSection = false/null)
  publications: Publication[]
  
  // Categories (derived from publications)
  categories: string[]
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  // Get all published publications (excluding hero)
  allPublications: `*[_type == "publication" && isHeroSection != true && status == "published"] | order(coalesce(order, 999999) asc, publishedAt desc) {
    _id,
    title,
    slug,
    "image": image.asset->url,
    author,
    publishedAt,
    description,
    "pdfFile": pdfFile.asset->url,
    externalLink,
    categories,
    customCategories,
    featured,
    order,
    status
  }`,

  // Get publication by slug
  publicationBySlug: (slug: string) => `*[_type == "publication" && slug.current == "${slug}" && isHeroSection != true][0] {
    _id,
    title,
    slug,
    "image": image.asset->url,
    author,
    publishedAt,
    description,
    "pdfFile": pdfFile.asset->url,
    externalLink,
    categories,
    customCategories,
    featured,
    status
  }`,

  // Get all categories (from published publications only)
  allCategories: `array::unique(*[_type == "publication" && isHeroSection != true && status == "published"].categories[] + *[_type == "publication" && isHeroSection != true && status == "published"].customCategories[])`,

  // Get hero section data (from publication where isHeroSection = true)
  publicationsHero: `*[_type == "publication" && isHeroSection == true][0] {
    _id,
    heroTitle,
    heroSubtitle,
    "heroBackgroundImage": heroBackgroundImage.asset->url
  }`,

  // Get complete page data (hero + publications + categories)
  publicationsPageData: `{
    "hero": *[_type == "publication" && isHeroSection == true][0] {
      "heroTitle": heroTitle,
      "heroSubtitle": heroSubtitle,
      "heroBackgroundImage": heroBackgroundImage.asset->url
    },
    "publications": *[_type == "publication" && isHeroSection != true && status == "published"] | order(coalesce(order, 999999) asc, publishedAt desc) {
      _id,
      title,
      slug,
      "image": image.asset->url,
      author,
      publishedAt,
      description,
      "pdfFile": pdfFile.asset->url,
      externalLink,
      categories,
      customCategories,
      featured,
      order,
      status
    },
    "categories": array::unique(*[_type == "publication" && isHeroSection != true && status == "published"].categories[] + *[_type == "publication" && isHeroSection != true && status == "published"].customCategories[])
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getAllPublications(): Promise<Publication[]> {
  return await client.fetch(
    queries.allPublications,
    {},
    {
      next: { 
        tags: ['publications'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getPublicationBySlug(slug: string): Promise<Publication | null> {
  return await client.fetch(
    queries.publicationBySlug(slug),
    {},
    {
      next: { 
        tags: [`publication-${slug}`],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getAllCategories(): Promise<string[]> {
  return await client.fetch(
    queries.allCategories,
    {},
    {
      next: { 
        tags: ['publications', 'categories'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getPublicationsHero() {
  return await client.fetch(
    queries.publicationsHero,
    {},
    {
      next: { 
        tags: ['publications', 'publications-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

export async function getPublicationsPageData(): Promise<PublicationsPageData> {
  const data = await client.fetch(
    queries.publicationsPageData,
    {},
    {
      next: { 
        tags: ['publications', 'publications-hero'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )

  return {
    heroTitle: data.hero?.heroTitle || 'Publications',
    heroSubtitle: data.hero?.heroSubtitle,
    heroBackgroundImage: data.hero?.heroBackgroundImage || '/article/hero.png',
    publications: data.publications || [],
    categories: data.categories || []
  }
}