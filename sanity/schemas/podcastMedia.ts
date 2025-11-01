import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'podcastMedia',
  title: 'Podcast & Media',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
    },
    {
      name: 'video',
      title: 'Video Gallery',
    },
    {
      name: 'podcast',
      title: 'Podcasts',
    },
  ],
  fields: [
    // ============================================
    // DOCUMENT TYPE SELECTOR
    // ============================================
    defineField({
      name: 'isHeroSection',
      title: 'Is Hero Section?',
      type: 'boolean',
      description: 'Enable this for the hero video (only one should exist)',
      initialValue: false,
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Podcast (Audio)', value: 'podcast' },
        ],
      },
      hidden: ({ document }) => document?.isHeroSection === true,
      validation: (Rule) => Rule.custom((mediaType, context) => {
        const doc = context.document as { isHeroSection?: boolean }
        if (doc?.isHeroSection) return true
        return mediaType ? true : 'Media type is required for non-hero items'
      }),
    }),

    // ============================================
    // HERO SECTION FIELDS
    // ============================================
    defineField({
      name: 'heroVideoFile',
      title: 'Hero Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),
    defineField({
      name: 'heroThumbnail',
      title: 'Hero Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),
    defineField({
      name: 'heroDuration',
      title: 'Hero Video Duration',
      type: 'string',
      description: 'e.g., "5:30" or "1:15:45"',
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),

    // ============================================
    // VIDEO GALLERY FIELDS
    // ============================================
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      group: 'video',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'video',
    }),
    defineField({
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'video',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'video',
    }),
    defineField({
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
      group: 'video',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'video',
    }),
    defineField({
      name: 'videoDescription',
      title: 'Video Description',
      type: 'text',
      rows: 3,
      group: 'video',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'video',
    }),
    defineField({
      name: 'videoDuration',
      title: 'Video Duration',
      type: 'string',
      description: 'e.g., "5:30" or "1:15:45"',
      group: 'video',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'video',
    }),
    defineField({
      name: 'videoDatePublished',
      title: 'Date Published',
      type: 'date',
      group: 'video',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'video',
    }),
    defineField({
      name: 'videoCategory',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Energy Policy', value: 'Energy Policy' },
          { title: 'Industry Insights', value: 'Industry Insights' },
          { title: 'Interviews', value: 'Interviews' },
          { title: 'Analysis', value: 'Analysis' },
          { title: 'Tutorials', value: 'Tutorials' },
          { title: 'Other', value: 'Other' },
        ],
      },
      group: 'video',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'video',
    }),

    // ============================================
    // PODCAST FIELDS
    // ============================================
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'podcastCoverArt',
      title: 'Podcast Cover Art',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'podcastTitle',
      title: 'Podcast Title',
      type: 'string',
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'podcastDescription',
      title: 'Podcast Description',
      type: 'text',
      rows: 3,
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'podcastDuration',
      title: 'Podcast Duration',
      type: 'string',
      description: 'e.g., "45:30" or "1:15:00"',
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'host',
      title: 'Host/Guest',
      type: 'string',
      description: 'Name of host or guest speaker',
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'podcastDatePublished',
      title: 'Date Published',
      type: 'date',
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),
    defineField({
      name: 'podcastCategory',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Energy Policy', value: 'Energy Policy' },
          { title: 'Industry Insights', value: 'Industry Insights' },
          { title: 'Interviews', value: 'Interviews' },
          { title: 'Analysis', value: 'Analysis' },
          { title: 'Discussion', value: 'Discussion' },
          { title: 'Other', value: 'Other' },
        ],
      },
      group: 'podcast',
      hidden: ({ document }) => document?.isHeroSection === true || document?.mediaType !== 'podcast',
    }),

    // ============================================
    // COMMON FIELDS
    // ============================================
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as featured item',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)',
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
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
  ],
  preview: {
    select: {
      title: 'videoTitle',
      podcastTitle: 'podcastTitle',
      heroTitle: 'heroTitle',
      isHero: 'isHeroSection',
      mediaType: 'mediaType',
      videoMedia: 'videoThumbnail',
      podcastMedia: 'podcastCoverArt',
      heroMedia: 'heroThumbnail',
      episodeNumber: 'episodeNumber',
      status: 'status',
      featured: 'featured',
    },
    prepare(selection) {
      const { 
        title, 
        podcastTitle, 
        heroTitle, 
        isHero, 
        mediaType, 
        videoMedia, 
        podcastMedia, 
        heroMedia,
        episodeNumber,
        status,
        featured
      } = selection
      
      if (isHero) {
        return {
          title: '🎯 Hero Video',
          subtitle: heroTitle || 'Featured Hero Video',
          media: heroMedia,
        }
      }
      
      if (mediaType === 'video') {
        return {
          title: title || 'Untitled Video',
          subtitle: `📹 Video • ${status || 'draft'}${featured ? ' • ⭐ Featured' : ''}`,
          media: videoMedia,
        }
      }
      
      if (mediaType === 'podcast') {
        const episode = episodeNumber ? `Ep ${episodeNumber} • ` : ''
        return {
          title: podcastTitle || 'Untitled Podcast',
          subtitle: `🎙️ ${episode}Podcast • ${status || 'draft'}${featured ? ' • ⭐ Featured' : ''}`,
          media: podcastMedia,
        }
      }
      
      return {
        title: 'Untitled Media',
        subtitle: 'No media type set',
      }
    },
  },
})