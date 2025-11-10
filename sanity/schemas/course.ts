import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'course',
  title: 'Courses',
  type: 'document',
  fields: [
    // ============================================
    // BASIC INFORMATION
    // ============================================
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      description: 'Main course title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of title (click Generate)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Course category (e.g., "Regulatory Framework", "Policy Analysis")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Main course image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for course card (2-3 sentences)',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'highlights',
      title: 'Course Highlights',
      type: 'array',
      description: 'Key points displayed on course card (3-5 points)',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1).max(5),
    }),

    // ============================================
    // META INFORMATION
    // ============================================
    defineField({
      name: 'lessons',
      title: 'Number of Lessons',
      type: 'string',
      description: 'e.g., "12 Lessons" or "8 Sessions"',
    }),
    defineField({
      name: 'duration',
      title: 'Course Duration',
      type: 'string',
      description: 'e.g., "3 Days" or "2 Weeks"',
    }),
    defineField({
      name: 'students',
      title: 'Students Count',
      type: 'string',
      description: 'e.g., "100+ Students" or "50 Enrolled"',
    }),
    defineField({
      name: 'price',
      title: 'Course Price',
      type: 'string',
      description: 'e.g., "₹25,000" or "Free" or "Contact for pricing"',
    }),
    defineField({
      name: 'level',
      title: 'Course Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'All Levels', value: 'all-levels' },
        ],
      },
    }),
    defineField({
      name: 'certificationType',
      title: 'Certification Type',
      type: 'string',
      description: 'e.g., "Certificate of Completion", "Professional Certificate"',
    }),
    defineField({
      name: 'language',
      title: 'Course Language',
      type: 'string',
      description: 'e.g., "English", "Hindi", "English & Hindi"',
      initialValue: 'English',
    }),

    // ============================================
    // INSTRUCTOR/AUTHOR
    // ============================================
    defineField({
      name: 'instructor',
      title: 'Course Instructor',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Instructor Name',
          type: 'string',
        }),
        defineField({
          name: 'role',
          title: 'Instructor Role',
          type: 'string',
          description: 'e.g., "Senior Lecturer", "Course Coordinator"',
        }),
        defineField({
          name: 'image',
          title: 'Instructor Photo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // ============================================
    // COURSE CONTENT (RICH TEXT EDITOR)
    // ============================================
    defineField({
      name: 'courseContent',
      title: 'Course Content',
      type: 'array',
      description: 'Full course details - use rich text editor to add any content you want',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'course' }],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ============================================
    // STATUS & ORDER
    // ============================================
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft', value: 'draft' },
        ],
      },
      initialValue: 'published',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Course',
      type: 'boolean',
      description: 'Feature this course (appears first)',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'coverImage',
      status: 'status',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, category, media, status, featured } = selection
      return {
        title: title || 'Untitled Course',
        subtitle: `${category || 'No category'}${featured ? ' • ⭐ Featured' : ''}${status === 'published' ? ' • ✓' : ' • ○ Draft'}`,
        media,
      }
    },
  },
})