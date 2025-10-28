import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'whyJoinEvents',
  title: 'Why Join Events Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Small title above main heading (e.g., "Join our event")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Main heading (e.g., "Why Join Our Events?")',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'iconType',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image Upload', value: 'image' },
                  { title: 'Lucide Icon', value: 'lucide' },
                ],
                layout: 'radio',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'iconName',
              title: 'Lucide Icon Name',
              type: 'string',
              description: 'Enter Lucide icon name (e.g., "User", "Calendar", "Settings"). Only used if Icon Type is "Lucide Icon".',
              hidden: ({ parent }) => parent?.iconType !== 'lucide',
            },
            {
              name: 'iconImage',
              title: 'Icon Image',
              type: 'image',
              description: 'Upload custom icon image. Only used if Icon Type is "Image Upload".',
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => parent?.iconType !== 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'number',
              title: 'Number',
              type: 'string',
              description: 'Number displayed in background (e.g., "01.")',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              number: 'number',
              iconType: 'iconType',
              media: 'iconImage',
            },
            prepare(selection) {
              const { title, number, iconType } = selection
              return {
                title: `${number} ${title}`,
                subtitle: iconType === 'lucide' ? 'Lucide Icon' : 'Custom Image',
                media: selection.media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'mainHeading',
    },
  },
})