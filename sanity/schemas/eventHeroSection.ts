import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'eventHeroSection',
  title: 'Event Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'First line of the hero title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Second line (before highlight)',
    }),
    defineField({
      name: 'highlightText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'Text that appears in red (e.g., "Retreat")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'string',
      description: 'Date to display (e.g., "7th- 10th January, 2026")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventLocation',
      title: 'Event Location',
      type: 'string',
      description: 'Location to display',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Button Link',
      type: 'string',
      description: 'Link for "Register Now" button',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'knowMoreLink',
      title: 'Know More Button Link',
      type: 'string',
      description: 'Link for "Know More" button',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'countdownTargetDate',
      title: 'Countdown Target Date',
      type: 'datetime',
      description: 'Date for the countdown timer',
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: 'frameImage',
      title: 'Frame Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The decorative frame image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The main hero image that overlaps the frame',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventDate',
      media: 'heroImage',
    },
  },
})