import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemas } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'IPPAI Events CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'r4mgvxxq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio', // ✅ This makes it embedded!

  plugins: [
    structureTool(),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemas,
  },
})