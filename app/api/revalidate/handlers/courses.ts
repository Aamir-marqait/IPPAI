import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for Courses Page Settings
 * 
 * Handles revalidation when:
 * - Hero section is updated
 * - Courses section settings are updated
 * - Gallery section is updated
 */

export function handleCoursesPageRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating courses page settings:', body._id)

    const paths: string[] = []

    // Revalidate courses page
    console.log('📚 Revalidating courses page')
    revalidateTag('courses-page')
    revalidatePath('/courses')
    paths.push('/courses')

    console.log('✅ Courses page revalidation completed')
    return {
      success: true,
      contentType: 'coursesPage',
      paths,
      message: 'Courses page revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating courses page:', error)
    return {
      success: false,
      contentType: 'coursesPage',
      paths: [],
      message: 'Failed to revalidate courses page',
    }
  }
}

/**
 * Revalidate handler for Individual Courses
 * 
 * Handles revalidation when:
 * - Course is created/updated/deleted
 * - Course status changes
 * - Course content is modified
 */

export function handleCourseRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating course:', body._id)

    const paths: string[] = []

    // Revalidate courses list
    console.log('📚 Revalidating courses list')
    revalidateTag('courses')
    revalidatePath('/courses')
    paths.push('/courses')

    // Revalidate specific course detail page if slug exists
    if (body.slug?.current) {
      console.log(`📖 Revalidating course detail: ${body.slug.current}`)
      revalidateTag(`course-${body.slug.current}`)
      revalidatePath(`/courses/${body.slug.current}`)
      paths.push(`/courses/${body.slug.current}`)
    }

    console.log('✅ Course revalidation completed')
    return {
      success: true,
      contentType: 'course',
      paths,
      message: 'Course revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating course:', error)
    return {
      success: false,
      contentType: 'course',
      paths: [],
      message: 'Failed to revalidate course',
    }
  }
}

/**
 * Revalidate all courses
 * Use this for bulk operations or complete cache refresh
 */
export function revalidateAllCourses(): RevalidationResult {
  try {
    console.log('🔄 Revalidating all courses content')
    
    revalidateTag('courses-page')
    revalidateTag('courses')
    revalidatePath('/courses')
    
    console.log('✅ All courses content revalidated')
    return {
      success: true,
      contentType: 'course',
      paths: ['/courses'],
      message: 'All courses content revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating all courses:', error)
    return {
      success: false,
      contentType: 'course',
      paths: [],
      message: 'Failed to revalidate all courses',
    }
  }
}