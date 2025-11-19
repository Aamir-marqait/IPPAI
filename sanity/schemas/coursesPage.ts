import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'coursesPage',
  title: 'Courses Page - Settings',
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
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          description: 'Main heading (e.g., "Intensive Course on Regulatory & Policy Framework in the Power Sector")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'text',
          rows: 2,
          description: 'Description text below title',
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
          description: 'Button text (e.g., "Register Now")',
          initialValue: 'Register Now',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaButtonLink',
          title: 'CTA Button Link',
          type: 'string',
          description: 'Button link (e.g., "#register-now" or full URL)',
          initialValue: '#register-now',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'brochure',
          title: 'Course Brochure',
          type: 'file',
          description: 'Upload course brochure (PDF, DOCX, etc.)',
          options: {
            accept: '.pdf,.doc,.docx,.ppt,.pptx'
          },
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Document Title',
              description: 'Display name for the brochure (e.g., "Download Course Brochure", "Course PDF")',
            },
          ],
        }),
      ],
    }),

    // ============================================
    // COURSES SECTION SETTINGS
    // ============================================
    defineField({
      name: 'coursesSection',
      title: 'Courses Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          description: 'Small uppercase label (e.g., "OUR COURSE")',
          initialValue: 'OUR COURSE',
        }),
        defineField({
          name: 'mainHeading',
          title: 'Main Heading',
          type: 'string',
          description: 'Section heading',
          initialValue: 'Comprehensive Curriculum On Energy, Policy & Regulation',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Section background image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // ============================================
    // GALLERY SECTION
    // ============================================
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          description: 'Small uppercase label (e.g., "OUR GALLERY")',
          initialValue: 'OUR GALLERY',
        }),
        defineField({
          name: 'title',
          title: 'Gallery Title',
          type: 'string',
          description: 'Gallery heading (e.g., "RPRI Batch 1")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Gallery Description',
          type: 'text',
          rows: 2,
          description: 'Description text below title',
        }),
        defineField({
          name: 'images',
          title: 'Gallery Images',
          type: 'array',
          description: 'Upload gallery images - minimum 8 for desktop layout',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'altText',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Describe the image for accessibility',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'altText',
                  media: 'image',
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    // ============================================
    // ALUMNI SECTION
    // ============================================
    defineField({
      name: 'alumniSection',
      title: 'Alumni Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Alumni Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Alumni Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Order of the testimonial',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // ============================================
    // MENTOR SECTION
    // ============================================
    defineField({
      name: 'mentorSection',
      title: 'Mentor Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Mentor Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Mentor Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Mentor Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Order of the mentor',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroSection.title',
    },
    prepare(selection) {
      return {
        title: 'Courses Page Settings',
        subtitle: selection.title || 'Configure hero, courses section & gallery',
      }
    },
  },
})
