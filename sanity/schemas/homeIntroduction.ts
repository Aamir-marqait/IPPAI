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

    // ============================================
    // TESTIMONIALS SECTION
    // ============================================
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      description: 'Add testimonials to display on homepage - they will auto-slide every 5 seconds',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Name of the person giving testimonial',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'position',
              title: 'Position/Title',
              type: 'string',
              description: 'Job title or position (e.g., "Former Chairman, CERC")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'quote',
              title: 'Testimonial Quote',
              type: 'text',
              rows: 4,
              description: 'The testimonial text',
              validation: (Rule) => Rule.required().max(500),
            }),
            defineField({
              name: 'image',
              title: 'Profile Image',
              type: 'image',
              description: 'Portrait photo of the person',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which testimonial appears (lower numbers first)',
              initialValue: 0,
              validation: (Rule) => Rule.required().min(0),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'position',
              media: 'image',
              order: 'order',
            },
            prepare(selection) {
              const { title, subtitle, media, order } = selection
              return {
                title: title || 'Untitled Testimonial',
                subtitle: `${subtitle || 'No position'} • Order: ${order || 0}`,
                media,
              }
            },
          },
        },
      ],
    }),

    // ============================================
    // LEADERSHIP SECTION
    // ============================================
    defineField({
      name: 'leadershipTeam',
      title: 'Leadership Team',
      type: 'array',
      description: 'Add leadership team members - they will be displayed in rows of 5',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Full name of the leader',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role/Position',
              type: 'string',
              description: 'Position or title (e.g., "Former Chairman, CERC")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Profile Photo',
              type: 'image',
              description: 'Professional photo of the leader',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which leader appears (lower numbers first)',
              initialValue: 0,
              validation: (Rule) => Rule.required().min(0),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'image',
              order: 'order',
            },
            prepare(selection) {
              const { title, subtitle, media, order } = selection
              return {
                title: title || 'Untitled Leader',
                subtitle: `${subtitle || 'No role'} • Order: ${order || 0}`,
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
      testimonialsCount: 'testimonials.length',
      leadershipCount: 'leadershipTeam.length',
    },
    prepare(selection) {
      const { eventsCount, coursesCount, testimonialsCount, leadershipCount } = selection
      return {
        title: 'Homepage Introduction',
        subtitle: `${eventsCount || 0} events • ${coursesCount || 0} courses • ${testimonialsCount || 0} testimonials • ${leadershipCount || 0} leaders`,
      }
    },
  },
})