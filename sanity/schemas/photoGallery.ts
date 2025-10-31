import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'photoGallery',
  title: 'Photo Gallery',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
    },
  ],
  fields: [
    // ============================================
    // HERO SECTION FIELDS
    // ============================================
    defineField({
      name: 'isHeroSection',
      title: 'Is Hero Section?',
      type: 'boolean',
      description: 'Enable this for the hero section document (only one should exist)',
      group: 'hero',
      initialValue: false,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title for Photo Gallery hero section',
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'Optional subtitle for hero section',
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),

    // ============================================
    // GALLERY IMAGE FIELDS
    // ============================================
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption/title for the image',
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'dateTaken',
      title: 'Date Taken',
      type: 'date',
      description: 'Date when the photo was taken',
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'event',
      title: 'Event',
      type: 'string',
      description: 'Event or occasion name',
      options: {
        list: [
          { title: 'Annual Meeting 2024', value: 'Annual Meeting 2024' },
          { title: 'Annual Meeting 2023', value: 'Annual Meeting 2023' },
          { title: 'Workshop 2024', value: 'Workshop 2024' },
          { title: 'Conference 2024', value: 'Conference 2024' },
          { title: 'Community Event', value: 'Community Event' },
          { title: 'Training Session', value: 'Training Session' },
          { title: 'Seminar', value: 'Seminar' },
          { title: 'Other', value: 'Other' },
        ],
      },
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'customEvent',
      title: 'Custom Event Name',
      type: 'string',
      description: 'If "Other" is selected, specify custom event name',
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true || document?.event !== 'Other',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where the photo was taken',
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      options: {
        list: [
          { title: '2025', value: '2025' },
          { title: '2024', value: '2024' },
          { title: '2023', value: '2023' },
          { title: '2022', value: '2022' },
          { title: '2021', value: '2021' },
        ],
      },
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)',
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'published',
      group: 'gallery',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      heroTitle: 'heroTitle',
      isHero: 'isHeroSection',
      media: 'image',
      heroMedia: 'heroBackgroundImage',
      event: 'event',
      year: 'year',
      status: 'status',
    },
    prepare(selection) {
      const { title, heroTitle, isHero, media, heroMedia, event, year, status } = selection
      
      if (isHero) {
        return {
          title: '🎯 Hero Section',
          subtitle: heroTitle || 'Photo Gallery Hero',
          media: heroMedia,
        }
      }
      
      const displayTitle = title || 'Untitled Image'
      const eventYear = year ? ` (${year})` : ''
      const eventInfo = event ? `${event}${eventYear}` : year || 'No event'
      
      return {
        title: displayTitle,
        subtitle: `${eventInfo} • ${status || 'draft'}`,
        media: media,
      }
    },
  },
})