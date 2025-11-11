import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'specialCourse',
  title: 'Special Courses',
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
      description: 'URL-friendly version (used for navigation)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for course card',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'courseImage',
      title: 'Course Image',
      type: 'image',
      description: 'Main image for course card and header',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organizerInfo',
      title: 'Organizer Information',
      type: 'string',
      description: 'e.g., "Organized for Maharashtra State Electricity Transmission Company Limited (MSETCL)"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Full location/venue (e.g., "Rambhau Mhalagi Prabodhini, Bhayandar, Maharashtra")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Date or date range (e.g., "September 11–13, 2025")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "3 days" or "2 weeks"',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'string',
      description: 'Link for registration (e.g., "#register-now" or full URL)',
      initialValue: '#register-now',
    }),

    // ============================================
    // ABOUT WORKSHOP SECTION
    // ============================================
    defineField({
      name: 'aboutSection',
      title: 'About Workshop Section',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Background image for about section',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          description: 'Small uppercase label (e.g., "SPECIAL COURSE")',
          initialValue: 'SPECIAL COURSE',
        }),
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Section heading (e.g., "About The Workshop")',
          initialValue: 'About The Workshop',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          description: 'Detailed description about the workshop',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // ============================================
    // KEY TOPICS SECTION
    // ============================================
    defineField({
      name: 'keyTopicsSection',
      title: 'Key Topics Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          description: 'Small uppercase label (e.g., "KEY TOPICS")',
          initialValue: 'KEY TOPICS',
        }),
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Section heading (e.g., "Key Topics Covered")',
          initialValue: 'Key Topics Covered',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'topicsImage',
          title: 'Topics Image',
          type: 'image',
          description: 'Image displayed on the left side',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'topics',
          title: 'Topics List',
          type: 'array',
          description: 'List of topics covered',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // ============================================
    // FACULTY MEMBERS SECTION
    // ============================================
    defineField({
      name: 'facultySection',
      title: 'Faculty Members Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          description: 'Small uppercase label (e.g., "FACULTY MEMBER")',
          initialValue: 'FACULTY MEMBER',
        }),
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Section heading (e.g., "Expert-Led Faculty Members")',
          initialValue: 'Expert-Led Faculty Members',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sectionDescription',
          title: 'Section Description',
          type: 'string',
          description: 'Brief description below title',
          initialValue: 'Industry leaders sharing decades of experience and insights',
        }),
        defineField({
          name: 'facultyMembers',
          title: 'Faculty Members',
          type: 'array',
          description: 'Add faculty members for this course',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'photo',
                  title: 'Photo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'name',
                  title: 'Full Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Title/Position',
                  type: 'string',
                  description: 'e.g., "Former CEO"',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'organization',
                  title: 'Organization',
                  type: 'string',
                  description: 'e.g., "POSOCO"',
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'title',
                  media: 'photo',
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    // ============================================
    // GALLERY SECTION
    // ============================================
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          description: 'Small uppercase label (e.g., "WORKSHOP")',
          initialValue: 'WORKSHOP',
        }),
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Section heading (e.g., "Our Workshop Moments")',
          initialValue: 'Our Workshop Moments',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'images',
          title: 'Gallery Images',
          type: 'array',
          description: 'Upload gallery images (minimum 8 for desktop mosaic layout)',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'altText',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Describe the image for accessibility',
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'altText',
                  media: 'image',
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    // ============================================
    // DISPLAY SETTINGS
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
      description: 'Check to show on main page (only featured courses are displayed)',
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
      date: 'date',
      media: 'courseImage',
      status: 'status',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, date, media, status, featured } = selection
      return {
        title: title || 'Untitled Course',
        subtitle: `${date || 'No date'}${featured ? ' • ⭐ Featured' : ''}${status === 'published' ? ' • ✓' : ' • ○ Draft'}`,
        media,
      }
    },
  },
})