import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clickable',
      title: 'Card Clickable',
      type: 'boolean',
      description: 'Enable/disable clicking on this event card to view details',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Display Date',
      type: 'string',
      description: 'Human-readable date (e.g., "7th - 10th January, 2026")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateTime',
      title: 'Full Date & Time',
      type: 'string',
      description: 'Full date and time string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'string',
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
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          { title: 'Ongoing', value: 'ongoing' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statusLabel',
      title: 'Status Label',
      type: 'string',
      description: 'Display label for status (e.g., "Upcoming Event")',
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'string',
    }),
    defineField({
      name: 'redirectTo',
      title: 'External Redirect URL',
      type: 'string',
      description: 'Optional: Redirect to external URL instead of event detail page',
    }),
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb',
      type: 'object',
      fields: [
        {
          name: 'category',
          title: 'Category',
          type: 'string',
        },
        {
          name: 'eventTitle',
          title: 'Event Title',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'eventDuration',
      title: 'Event Duration',
      type: 'string',
      description: 'e.g., "Event lasts 4 days"',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'theme',
      title: 'Event Theme',
      type: 'string',
    }),
    defineField({
      name: 'conceptNote',
      title: 'Concept Note',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'aboutEvent',
      title: 'About Event',
      type: 'object',
      fields: [
        {
          name: 'mainDescription',
          title: 'Main Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'details',
          title: 'Event Details',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Icon identifier (e.g., "clock", "location")',
                },
                {
                  name: 'text',
                  title: 'Detail Text',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          name: 'venue',
          title: 'Venue Information',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Venue Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Venue Description',
              type: 'text',
              rows: 4,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Event Highlights',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Highlight Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'emoji',
                  title: 'Emoji',
                  type: 'string',
                  description: 'Emoji for this highlight',
                },
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                  description: 'Hex color code (e.g., #A37CFE)',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'criticalIssues',
      title: 'Critical Issues',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Issues List',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'whyAttend',
      title: 'Why Attend',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'whoShouldAttend',
      title: 'Who Should Attend',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'delegateFees',
      title: 'Delegate Fees',
      type: 'object',
      fields: [
        {
          name: 'privateEntities',
          title: 'Private Entities',
          type: 'string',
        },
        {
          name: 'governmentEntities',
          title: 'Government Entities',
          type: 'string',
        },
        {
          name: 'sercChairmenMembers',
          title: 'SERC Chairmen & Members',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'awards',
      title: 'Awards Information',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Awards Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Awards Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'date',
          title: 'Awards Date',
          type: 'string',
        },
        {
          name: 'categories',
          title: 'Award Categories',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'prizes',
      title: 'Prizes',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Prizes Title',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Prize Items',
          type: 'array',
          of: [{ type: 'text' }],
        },
      ],
    }),
    defineField({
      name: 'contacts',
      title: 'Contact Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'conclusion',
      title: 'Conclusion',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      description: 'Upload images for this event gallery (recommended: 6-12 images)',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the image',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'brochure',
      title: 'Event Brochure',
      type: 'file',
      description: 'Upload event brochure (PDF, DOCX, etc.)',
      options: {
        accept: '.pdf,.doc,.docx,.ppt,.pptx'
      },
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Document Title',
          description: 'Display name for the brochure (e.g., "Event Brochure", "Download PDF")',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
      status: 'status',
      clickable: 'clickable',
    },
    prepare(selection) {
      const { title, date, media, status, clickable } = selection
      const clickableIcon = clickable ? '🔗' : '🔒'
      return {
        title: title,
        subtitle: `${clickableIcon} ${date} • ${status}`,
        media: media,
      }
    },
  },
})