import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'publicationsHero',
  title: 'Publications Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Publications',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional subtitle',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: 'Publications Hero',
        subtitle: `${title}${subtitle ? ' - ' + subtitle : ''}`,
      }
    },
  },
})