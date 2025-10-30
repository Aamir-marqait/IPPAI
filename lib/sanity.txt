import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'r4mgvxxq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Keep CDN enabled for fast global delivery
  apiVersion: '2025-01-28',
})

// Helper function to generate image URLs from Sanity images
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Reusable query functions
export const sanityQueries = {
  // Get all events
  getAllEvents: `*[_type == "event"] | order(dateTime desc) {
    _id,
    title,
    slug,
    clickable,
    description,
    location,
    date,
    dateTime,
    time,
    capacity,
    "image": image.asset->url,
    status,
    statusLabel,
    organizer,
    registrationLink,
    redirectTo,
    breadcrumb,
    eventDuration,
    fullDescription,
    theme,
    conceptNote,
    aboutEvent {
      mainDescription,
      details[] {
        icon,
        text
      },
      venue {
        title,
        description
      }
    },
    highlights {
      title,
      items[] {
        emoji,
        title,
        description,
        color
      }
    },
    criticalIssues {
      title,
      items[]
    },
    whyAttend {
      title,
      description
    },
    whoShouldAttend[],
    delegateFees {
      privateEntities,
      governmentEntities,
      sercChairmenMembers
    },
    awards {
      title,
      description,
      date,
      categories[]
    },
    prizes {
      title,
      items[]
    },
    contacts[] {
      name,
      email,
      phone
    },
    conclusion,
    gallery[] {
      "url": asset->url,
      alt,
      caption
    }
  }`,

  // Get single event by slug
  getEventBySlug: (slug: string) => `*[_type == "event" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    clickable,
    description,
    location,
    date,
    dateTime,
    time,
    capacity,
    "image": image.asset->url,
    status,
    statusLabel,
    organizer,
    registrationLink,
    redirectTo,
    breadcrumb,
    eventDuration,
    fullDescription,
    theme,
    conceptNote,
    aboutEvent {
      mainDescription,
      details[] {
        icon,
        text
      },
      venue {
        title,
        description
      }
    },
    highlights {
      title,
      items[] {
        emoji,
        title,
        description,
        color
      }
    },
    criticalIssues {
      title,
      items[]
    },
    whyAttend {
      title,
      description
    },
    whoShouldAttend[],
    delegateFees {
      privateEntities,
      governmentEntities,
      sercChairmenMembers
    },
    awards {
      title,
      description,
      date,
      categories[]
    },
    prizes {
      title,
      items[]
    },
    contacts[] {
      name,
      email,
      phone
    },
    conclusion,
    gallery[] {
      "url": asset->url,
      alt,
      caption
    }
  }`,

  // Get hero section data
  getHeroSection: `*[_type == "eventHeroSection"][0] {
    _id,
    title,
    subtitle,
    highlightText,
    eventDate,
    eventLocation,
    registrationLink,
    knowMoreLink,
    countdownTargetDate,
    "backgroundImage": backgroundImage.asset->url,
    "frameImage": frameImage.asset->url,
    "heroImage": heroImage.asset->url
  }`,

  // Get Why Join Events data
  getWhyJoinEvents: `*[_type == "whyJoinEvents"][0] {
    _id,
    sectionTitle,
    mainHeading,
    description,
    features[] {
      iconType,
      iconName,
      "iconImage": iconImage.asset->url,
      title,
      description,
      number
    }
  }`,

  // Get Gallery Images
  getGalleryImages: `*[_type == "eventGallery"][0] {
    _id,
    sectionTitle,
    mainHeading,
    description,
    images[] {
      "url": asset->url,
      alt
    }
  }`,

    // Get all articles (published only)
  getAllArticles: `*[_type == "article" && status == "published"] | order(coalesce(order, 999999) asc, publishedAt desc) {
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

  // Get single article by slug
  getArticleBySlug: (slug: string) => `*[_type == "article" && slug.current == "${slug}"][0] {
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

  // Get articles hero section
  getArticlesHero: `*[_type == "articlesHero"][0] {
    _id,
    title,
    subtitle,
    "backgroundImage": backgroundImage.asset->url
  }`,

}

// Export fetch functions with Next.js cache options
export async function getAllEvents() {
  return await client.fetch(
    sanityQueries.getAllEvents,
    {},
    {
      next: { 
        tags: ['events'], // Tag for revalidation
        revalidate: 60 // Fallback: revalidate every 60 seconds
      }
    }
  )
}

export async function getEventBySlug(slug: string) {
  return await client.fetch(
    sanityQueries.getEventBySlug(slug),
    {},
    {
      next: { 
        tags: [`event-${slug}`], // Tag for specific event revalidation
        revalidate: 60 // Fallback: revalidate every 60 seconds
      }
    }
  )
}

export async function getHeroSection() {
  return await client.fetch(
    sanityQueries.getHeroSection,
    {},
    {
      next: { 
        tags: ['hero'],
        revalidate: 300 // Revalidate every 5 minutes
      }
    }
  )
}

export async function getWhyJoinEvents() {
  return await client.fetch(
    sanityQueries.getWhyJoinEvents,
    {},
    {
      next: { 
        tags: ['why-join'],
        revalidate: 300
      }
    }
  )
}

export async function getGalleryImages() {
  return await client.fetch(
    sanityQueries.getGalleryImages,
    {},
    {
      next: { 
        tags: ['gallery'],
        revalidate: 300
      }
    }
  )
}

// Get all articles (published only)
export async function getAllArticles() {
  return await client.fetch(
    sanityQueries.getAllArticles,
    {},
    {
      next: { 
        tags: ['articles'],
        revalidate: 60
      }
    }
  )
}

// Get single article by slug
export async function getArticleBySlug(slug: string) {
  return await client.fetch(
    sanityQueries.getArticleBySlug(slug),
    {},
    {
      next: { 
        tags: [`article-${slug}`],
        revalidate: 60
      }
    }
  )
}

// Get articles hero section
export async function getArticlesHero() {
  return await client.fetch(
    sanityQueries.getArticlesHero,
    {},
    {
      next: { 
        tags: ['articles-hero'],
        revalidate: 300
      }
    }
  )
}


