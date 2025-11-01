import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutMilestones',
  title: 'About - Milestones Timeline',
  type: 'document',
  fields: [
    // ============================================
    // SECTION HEADER
    // ============================================
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main heading for the timeline section',
      initialValue: 'Milestones That Matter',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 2,
      description: 'Subtitle text below the main heading',
      initialValue: 'Three decades of transformative achievements in India\'s power sector',
    }),

    // ============================================
    // TIMELINE ITEMS
    // ============================================
    defineField({
      name: 'milestones',
      title: 'Timeline Milestones',
      type: 'array',
      description: 'Add timeline items - they will be displayed in the order you arrange them',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
              description: 'Year of the milestone (e.g., "1994", "2001")',
              validation: (Rule) => Rule.required().max(4),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              description: 'Upload icon for this milestone',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'Achievement or milestone description',
              validation: (Rule) => Rule.required().max(200),
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
              year: 'year',
              description: 'description',
              icon: 'icon',
              status: 'status',
            },
            prepare(selection) {
              const { year, description, icon, status } = selection
              const desc = description ? description.substring(0, 50) : 'Untitled milestone'
              const displayYear = year || 'Year'
              
              return {
                title: `${displayYear} - ${desc}${description && description.length > 50 ? '...' : ''}`,
                subtitle: status === 'published' ? '✓ Published' : '○ Draft',
                media: icon,
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
      title: 'sectionTitle',
      subtitle: 'sectionSubtitle',
      milestonesCount: 'milestones.length',
    },
    prepare(selection) {
      const { title, milestonesCount } = selection
      return {
        title: title || 'Milestones Timeline',
        subtitle: `${milestonesCount || 0} milestone${milestonesCount !== 1 ? 's' : ''}`,
      }
    },
  },
})