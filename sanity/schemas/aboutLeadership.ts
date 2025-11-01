import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutLeadership',
  title: 'About - Leadership Team',
  type: 'document',
  fields: [
    // ============================================
    // SECTION HEADER
    // ============================================
    defineField({
      name: 'smallTitle',
      title: 'Small Title (Top)',
      type: 'string',
      description: 'Small uppercase title above main heading',
      initialValue: 'Meet Our Leadership Team',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      description: 'Large main heading',
      initialValue: 'The Driving Force of IPPAI',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Subtitle text below the main heading',
      initialValue: 'Our dedicated leadership team brings together decades of expertise and vision, steering IPPAI\'s mission to transform India\'s power sector through strategic collaboration and innovation.',
    }),

    // ============================================
    // TEAM MEMBERS
    // ============================================
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      description: 'Add team members - drag to reorder. The featured member will be shown first by default.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Photo',
              type: 'image',
              description: 'Upload team member photo',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'altText',
              title: 'Image Alt Text',
              type: 'string',
              description: 'Describe the image for accessibility (e.g., "Photo of John Doe")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Full Name',
              type: 'string',
              description: 'Team member\'s full name',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'position',
              title: 'Position/Title',
              type: 'string',
              description: 'Job title or position (e.g., "President", "Vice President")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bio',
              title: 'Biography',
              type: 'text',
              rows: 3,
              description: 'Short biography or description of responsibilities',
              validation: (Rule) => Rule.required().max(300),
            }),
            defineField({
              name: 'featured',
              title: 'Featured Member',
              type: 'boolean',
              description: 'Check this to make this member appear first/default (only one should be featured)',
              initialValue: false,
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Lower numbers appear first (optional - you can also drag to reorder)',
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
              name: 'name',
              position: 'position',
              image: 'image',
              featured: 'featured',
              status: 'status',
            },
            prepare(selection) {
              const { name, position, image, featured, status } = selection
              return {
                title: name || 'Untitled Member',
                subtitle: `${position || 'No position'}${featured ? ' • ⭐ Featured' : ''}${status === 'published' ? ' • ✓' : ' • ○ Draft'}`,
                media: image,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'mainTitle',
      membersCount: 'teamMembers.length',
    },
    prepare(selection) {
      const { title, membersCount } = selection
      return {
        title: title || 'Leadership Team',
        subtitle: `${membersCount || 0} team member${membersCount !== 1 ? 's' : ''}`,
      }
    },
  },
})