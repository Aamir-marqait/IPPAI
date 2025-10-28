import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'eventGallery',
  title: 'Event Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Small title above main heading (e.g., "EVENTS GALLERY")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the image (for accessibility)',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(8).max(20),
      description: 'Add 8-20 images for the gallery. First 8 will be shown in the custom desktop layout.',
    }),
  ],
  preview: {
    select: {
      title: 'mainHeading',
      media: 'images.0',
    },
  },
})