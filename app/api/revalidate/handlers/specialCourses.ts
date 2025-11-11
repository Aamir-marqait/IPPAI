import { revalidatePath, revalidateTag } from 'next/cache'
import type { WebhookPayload, RevalidationResult } from './events'

/**
 * Revalidate handler for Special Courses Page Settings
 */
export function handleSpecialCoursesPageRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating special courses page settings:', body._id)

    const paths: string[] = []

    console.log('📚 Revalidating special courses page')
    revalidateTag('special-courses-page')
    revalidatePath('/special-courses')
    paths.push('/special-courses')

    console.log('✅ Special courses page revalidation completed')
    return {
      success: true,
      contentType: 'specialCoursesPage',
      paths,
      message: 'Special courses page revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating special courses page:', error)
    return {
      success: false,
      contentType: 'specialCoursesPage',
      paths: [],
      message: 'Failed to revalidate special courses page',
    }
  }
}

/**
 * Revalidate handler for Individual Special Courses
 */
export function handleSpecialCourseRevalidation(body: WebhookPayload): RevalidationResult {
  try {
    console.log('🔄 Revalidating special course:', body._id)

    const paths: string[] = []

    // Revalidate main special courses page
    console.log('📚 Revalidating special courses list')
    revalidateTag('special-courses')
    revalidatePath('/special-courses')
    paths.push('/special-courses')

    // Revalidate specific course if slug exists
    if (body.slug?.current) {
      console.log(`📖 Revalidating special course: ${body.slug.current}`)
      revalidateTag(`special-course-${body.slug.current}`)
    }

    console.log('✅ Special course revalidation completed')
    return {
      success: true,
      contentType: 'specialCourse',
      paths,
      message: 'Special course revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating special course:', error)
    return {
      success: false,
      contentType: 'specialCourse',
      paths: [],
      message: 'Failed to revalidate special course',
    }
  }
}

/**
 * Revalidate all special courses
 */
export function revalidateAllSpecialCourses(): RevalidationResult {
  try {
    console.log('🔄 Revalidating all special courses content')
    
    revalidateTag('special-courses-page')
    revalidateTag('special-courses')
    revalidatePath('/special-courses')
    
    console.log('✅ All special courses content revalidated')
    return {
      success: true,
      contentType: 'specialCourse',
      paths: ['/special-courses'],
      message: 'All special courses content revalidated',
    }
  } catch (error) {
    console.error('❌ Error revalidating all special courses:', error)
    return {
      success: false,
      contentType: 'specialCourse',
      paths: [],
      message: 'Failed to revalidate all special courses',
    }
  }
}




