import { client, CACHE_CONFIG } from '../client'
import { PortableTextBlock } from 'sanity'

/**
 * Event Queries
 * 
 * All event-related queries including:
 * - Events list and details
 * - Event hero section
 * - Why Join Events section
 * - Event gallery
 * 
 * @module lib/sanity/queries/events
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  clickable?: boolean
  description: string
  location: string
  date: string
  dateTime: string
  time: string
  capacity?: number
  image: string
  status?: string
  statusLabel?: string
  organizer?: string
  registrationLink?: string
  redirectTo?: string
  breadcrumb?: string | {
  category?: string
  eventTitle?: string
  }
  eventDuration?: string
  fullDescription?: string
  theme?: string
  conceptNote?: string
  aboutEvent?: {
    mainDescription?: string
    details?: Array<{
      icon?: string
      text?: string
    }>
    venue?: {
      title?: string
      description?: string
    }
  }
  highlights?: {
    title?: string
    items?: Array<{
      emoji?: string
      title?: string
      description?: string
      color?: string
    }>
  }
  criticalIssues?: {
    title?: string
    items?: string[]
  }
  whyAttend?: {
    title?: string
    description?: string
  }
  whoShouldAttend?: string[]
  delegateFees?: {
    privateEntities?: string
    governmentEntities?: string
    sercChairmenMembers?: string
  }
  awards?: {
    title?: string
    description?: string
    date?: string
    categories?: string[]
  }
  prizes?: {
    title?: string
    items?: string[]
  }
  contacts?: Array<{
    name?: string
    email?: string
    phone?: string
  }>
  conclusion?: string
  content?: PortableTextBlock[] // Portable Text / Rich Text content
  gallery?: Array<{
    url: string
    alt?: string
    caption?: string
  }>
  brochure?: {
    url: string
    title?: string
  }
}

export interface EventHero {
  _id: string
  title: string
  subtitle?: string
  highlightText?: string
  eventDate?: string
  eventLocation?: string
  registrationLink?: string
  knowMoreLink?: string
  countdownTargetDate?: string
  backgroundImage: string
  frameImage?: string
  heroImage?: string
}

export interface WhyJoinEvents {
  _id: string
  sectionTitle?: string
  mainHeading: string
  description?: string
  features: Array<{
    iconType?: string
    iconName?: string
    iconImage?: string
    title: string
    description: string
    number?: number
  }>
}

export interface EventGallery {
  _id: string
  sectionTitle?: string
  mainHeading: string
  description?: string
  images: Array<{
    url: string
    alt?: string
  }>
}

// ============================================
// GROQ QUERIES
// ============================================

const queries = {
  allEvents: `*[_type == "event"] | order(dateTime desc) {
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
    content,
    gallery[] {
      "url": asset->url,
      alt,
      caption
    },
    brochure {
      "url": asset->url,
      title
    }
  }`,

  eventBySlug: (slug: string) => `*[_type == "event" && slug.current == "${slug}"][0] {
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
    content,
    gallery[] {
      "url": asset->url,
      alt,
      caption
    },
    brochure {
      "url": asset->url,
      title
    }
  }`,

  eventHero: `*[_type == "eventHeroSection"][0] {
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

  whyJoinEvents: `*[_type == "whyJoinEvents"][0] {
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

  eventGallery: `*[_type == "eventGallery"][0] {
    _id,
    sectionTitle,
    mainHeading,
    description,
    images[] {
      "url": asset->url,
      alt
    }
  }`,
} as const

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getAllEvents(): Promise<Event[]> {
  return await client.fetch(
    queries.allEvents,
    {},
    {
      next: { 
        tags: ['events'],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  return await client.fetch(
    queries.eventBySlug(slug),
    {},
    {
      next: { 
        tags: [`event-${slug}`],
        revalidate: CACHE_CONFIG.DYNAMIC.revalidate
      }
    }
  )
}

export async function getEventHero(): Promise<EventHero | null> {
  return await client.fetch(
    queries.eventHero,
    {},
    {
      next: { 
        tags: ['events', 'event-hero'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

export async function getWhyJoinEvents(): Promise<WhyJoinEvents | null> {
  return await client.fetch(
    queries.whyJoinEvents,
    {},
    {
      next: { 
        tags: ['events', 'why-join'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

export async function getEventGallery(): Promise<EventGallery | null> {
  return await client.fetch(
    queries.eventGallery,
    {},
    {
      next: { 
        tags: ['events', 'gallery'],
        revalidate: CACHE_CONFIG.STATIC.revalidate
      }
    }
  )
}

// Legacy compatibility exports
export const getHeroSection = getEventHero
export const getGalleryImages = getEventGallery