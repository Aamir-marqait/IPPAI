import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeIntroduction',
  title: 'Homepage - Introduction Section',
  type: 'document',
  fields: [
    // ============================================
    // MAIN TITLE
    // ============================================
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      description: 'Main heading (e.g., "Independent Power Producers Association of India")',
      initialValue: 'Independent Power Producers Association of India',
      validation: (Rule) => Rule.required(),
    }),

    // ============================================
    // EVENTS SECTION
    // ============================================
    defineField({
      name: 'featuredEvents',
      title: 'Featured Events',
      type: 'array',
      description: 'Add events to display on homepage - they will auto-slide',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
              rows: 2,
              description: 'Brief description of the event',
              validation: (Rule) => Rule.required().max(150),
            }),
            defineField({
              name: 'image',
              title: 'Event Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Event Date',
              type: 'string',
              description: 'e.g., "Aug 10, 2025" or "29th - 31st October, 2025"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'location',
              title: 'Event Location',
              type: 'string',
              description: 'Venue or location name',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Event Link',
              type: 'url',
              description: 'Full URL to event page (e.g., https://www.ippai.org/events/26th-regulators-and-policymakers-retreat)',
              validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https']
              }),
            }),
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
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
              media: 'image',
              status: 'status',
            },
            prepare(selection) {
              const { title, date, media, status } = selection
              return {
                title: title || 'Untitled Event',
                subtitle: `${date || 'No date'} • ${status === 'published' ? '✓ Published' : '○ Draft'}`,
                media,
              }
            },
          },
        },
      ],
    }),

    // ============================================
    // COURSES SECTION
    // ============================================
    defineField({
      name: 'featuredCourses',
      title: 'Featured Courses',
      type: 'array',
      description: 'Add courses to display on homepage - they will auto-slide',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Course Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
              rows: 3,
              description: 'Brief description of the course',
              validation: (Rule) => Rule.required().max(250),
            }),
            defineField({
              name: 'image',
              title: 'Course Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Course Date',
              type: 'string',
              description: 'e.g., "29th - 31st October, 2025"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'location',
              title: 'Course Location',
              type: 'string',
              description: 'Venue or location name',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Course Link',
              type: 'url',
              description: 'Full URL to course page (e.g., https://www.ippai.org/special-courses)',
              validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https']
              }),
            }),
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
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
              media: 'image',
              status: 'status',
            },
            prepare(selection) {
              const { title, date, media, status } = selection
              return {
                title: title || 'Untitled Course',
                subtitle: `${date || 'No date'} • ${status === 'published' ? '✓ Published' : '○ Draft'}`,
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'mainTitle',
      eventsCount: 'featuredEvents.length',
      coursesCount: 'featuredCourses.length',
    },
    prepare(selection) {
      const {  eventsCount, coursesCount } = selection
      return {
        title: 'Homepage Introduction',
        subtitle: `${eventsCount || 0} events • ${coursesCount || 0} courses`,
      }
    },
  },
})