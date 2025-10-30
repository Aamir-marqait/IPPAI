import { client, CACHE_CONFIG } from '../client'

/**
 * Article Queries
 * 
 * All article-related queries including:
 * - Articles list and details
 * - Articles hero section
 * - Categories
 * 
 * @module lib/sanity/queries/articles
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  summary: string
  image: string
  pdfFile: string
  categories?: string[]
  customCategories?: string[]
  author: {
    name: string
    avatar: string | null
  }
  publishedAt: string
  featured?: boolean
  order?: number
  status?: 'draft' | 'published' | 'archived'
}

export interface ArticlesHero {
  _id: string
  title: string
  subtitle?: string
  backgroundImage: string
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  allArticles: `*[_type == "article" && status == "published"] | order(coalesce(order, 999999) asc, publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    "image": image.asset->url,
    "pdfFile": pdfFile.asset->url,
    categories,
    customCategories,
    author {
      name,
      "avatar": avatar.asset->url
    },
    publishedAt,
    featured,
    order
  }`,

  articleBySlug: (slug: string) => `*[_type == "article" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    summary,
    "image": image.asset->url,
    "pdfFile": pdfFile.asset->url,
    categories,
    customCategories,
    author {
      name,
      "avatar": avatar.asset->url
    },
    publishedAt,
    featured,
    status
  }`,

  featuredArticles: `*[_type == "article" && status == "published" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    summary,
    "image": image.asset->url,
    author {
      name,
      "avatar": avatar.asset->url
    },
    publishedAt
  }`,

  articlesByCategory: (category: string) => `*[_type == "article" && status == "published" && (
    "${category}" in categories || 
    "${category}" in customCategories
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    "image": image.asset->url,
    publishedAt
  }`,

  allCategories: `array::unique(*[_type == "article" && status == "published"].categories[] + *[_type == "article" && status == "published"].customCategories[])`,

  articlesHero: `*[_type == "articlesHero"][0] {
    _id,
    title,
    subtitle,
    "backgroundImage": backgroundImage.asset->url
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getAllArticles(): Promise<Article[]> {
  return await client.fetch(
    queries.allArticles,
    {},
    {
      next: { 
        tags: ['articles'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return await client.fetch(
    queries.articleBySlug(slug),
    {},
    {
      next: { 
        tags: [`article-${slug}`],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getFeaturedArticles(): Promise<Article[]> {
  return await client.fetch(
    queries.featuredArticles,
    {},
    {
      next: { 
        tags: ['articles', 'featured-articles'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  return await client.fetch(
    queries.articlesByCategory(category),
    {},
    {
      next: { 
        tags: ['articles', `articles-${category}`],
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
        tags: ['articles', 'categories'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getArticlesHero(): Promise<ArticlesHero | null> {
  return await client.fetch(
    queries.articlesHero,
    {},
    {
      next: { 
        tags: ['articles', 'articles-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}