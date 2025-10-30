import { revalidatePath } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Article Revalidation Handler
 * 
 * Handles cache revalidation for article-related content
 * 
 * @module app/api/revalidate/handlers/articles
 */

/**
 * Handle article revalidation
 * 
 * Revalidates:
 * - /articles (articles list page)
 * - /articles/[slug] (specific article page if slug provided)
 * - / (home page if articles shown there)
 * 
 * @param body - Webhook payload from Sanity
 * @returns Object with revalidated paths
 */
export function handleArticleRevalidation(body: WebhookPayload): RevalidationResult {
  const paths: string[] = []

  // Always revalidate articles list page
  revalidatePath('/articles')
  paths.push('/articles')
  
  // If specific article, revalidate that page
  if (body.slug?.current) {
    const articlePath = `/articles/${body.slug.current}`
    revalidatePath(articlePath)
    paths.push(articlePath)
  }
  
  // Revalidate home if articles shown there
  revalidatePath('/')
  paths.push('/')
  
  return {
    success: true,
    contentType: 'article',
    paths,
  }
}

/**
 * Handle articles hero section revalidation
 * 
 * Revalidates:
 * - /articles (articles page)
 * 
 * @returns Object with revalidated paths
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function handleArticlesHeroRevalidation(_body: WebhookPayload): RevalidationResult {
  const paths: string[] = []

  revalidatePath('/articles')
  paths.push('/articles')
  
  return {
    success: true,
    contentType: 'articlesHero',
    paths,
  }
}