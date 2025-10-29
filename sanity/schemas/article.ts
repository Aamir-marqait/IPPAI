import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      description: 'The main title of the article',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Brief description of the article (shown in card)',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'image',
      title: 'Article Image',
      type: 'image',
      description: 'Main image for the article card',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      description: 'Upload the article PDF file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Select one or more categories for this article',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Industry Perspective', value: 'Industry Perspective' },
          { title: 'Narratives / Socio-Ecological', value: 'Narratives / Socio-Ecological' },
          { title: 'Energy Security', value: 'Energy Security' },
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'customCategories',
      title: 'Custom Categories',
      type: 'array',
      description: 'Add custom categories (press Enter after each category)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'author',
      title: 'Author Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Author Name',
          type: 'string',
          initialValue: 'IPPAI',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'avatar',
          title: 'Author Avatar/Logo',
          type: 'image',
          description: 'Author profile image or logo',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'When was this article published?',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Optional: Lower numbers appear first. Leave empty to sort by date.',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Mark this article as featured',
      initialValue: false,
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
        layout: 'radio',
      },
      initialValue: 'published',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
      status: 'status',
      featured: 'featured',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { title, author, media, status, featured, publishedAt } = selection
      const featuredIcon = featured ? '⭐' : ''
      const statusIcon = status === 'published' ? '✅' : status === 'draft' ? '📝' : '📦'
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date'
      
      return {
        title: `${featuredIcon} ${title}`,
        subtitle: `${statusIcon} ${author} • ${date}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, Newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date, Oldest',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})