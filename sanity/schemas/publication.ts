import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publications',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
    },
    {
      name: 'publications',
      title: 'Publications List',
    },
  ],
  fields: [
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
      group: 'hero',
      hidden: ({ document }) => document?.isHeroSection !== true,
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
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
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'IPPAI',
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Policy', value: 'Policy' },
          { title: 'Analysis', value: 'Analysis' },
          { title: 'Research', value: 'Research' },
          { title: 'Report', value: 'Report' },
          { title: 'White Paper', value: 'White Paper' },
          { title: 'Case Study', value: 'Case Study' },
        ],
      },
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'customCategories',
      title: 'Custom Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add custom categories not in the predefined list',
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as featured publication',
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)',
      group: 'publications',
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
      group: 'publications',
      hidden: ({ document }) => document?.isHeroSection === true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heroTitle: 'heroTitle',
      isHero: 'isHeroSection',
      author: 'author',
      media: 'image',
      heroMedia: 'heroBackgroundImage',
      status: 'status',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, heroTitle, isHero, author, media, heroMedia, status, featured } = selection
      
      if (isHero) {
        return {
          title: '🎯 Hero Section',
          subtitle: heroTitle || 'Publications Hero',
          media: heroMedia,
        }
      }
      
      return {
        title: title || 'Untitled',
        subtitle: `${author || 'IPPAI'} • ${status || 'draft'}${featured ? ' • ⭐ Featured' : ''}`,
        media: media,
      }
    },
  },
})