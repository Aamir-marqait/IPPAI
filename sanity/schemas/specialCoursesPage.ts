import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'specialCoursesPage',
  title: 'Special Courses - Page Settings',
  type: 'document',
  fields: [
    // ============================================
    // HERO SECTION
    // ============================================
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'logo',
          title: 'Logo Image',
          type: 'image',
          description: 'Logo displayed in hero section',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          description: 'Main heading (e.g., "IRPRI — IPPAI Regulatory and Policy Research Institute")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'string',
          description: 'Subtitle text (e.g., "Building Capacity, Sharing Knowledge...")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 3,
          description: 'Description text below subtitle',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Hero background image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaButtonText',
          title: 'CTA Button Text',
          type: 'string',
          description: 'Button text (e.g., "Learn More About IRPRI")',
          initialValue: 'Learn More About IRPRI',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaButtonLink',
          title: 'CTA Button Link',
          type: 'string',
          description: 'Button link (e.g., "#about" or full URL)',
          initialValue: '#about',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // ============================================
    // FOCUS AREAS (3 FIXED CARDS)
    // ============================================
    defineField({
      name: 'focusAreas',
      title: 'Focus Areas (3 Cards)',
      type: 'object',
      description: 'Three focus area cards',
      fields: [
        defineField({
          name: 'card1',
          title: 'Card 1 - Policy Research',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Image',
              type: 'image',
              description: 'Icon for this card',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Policy Research',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'card2',
          title: 'Card 2 - Capacity Building',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Image',
              type: 'image',
              description: 'Icon for this card',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Capacity Building',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'card3',
          title: 'Card 3 - Industry Training',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Image',
              type: 'image',
              description: 'Icon for this card',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Industry Training',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroSection.title',
    },
    prepare(selection) {
      return {
        title: 'Special Courses Page Settings',
        subtitle: selection.title || 'Configure hero & focus areas',
      }
    },
  },
})