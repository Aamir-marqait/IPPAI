import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeBanner',
  title: 'Homepage - Banner Image',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      description: 'Upload the main banner image for homepage',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility (e.g., "Energy Infrastructure")',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'bannerImage',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: 'Homepage Banner',
        subtitle: title || 'No alt text set',
        media,
      }
    },
  },
})