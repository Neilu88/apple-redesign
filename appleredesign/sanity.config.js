import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import product from './schemas/product'
import category from './schemas/category'

export default defineConfig({
  name: 'default',
  title: 'appleredesign',

  projectId: 'lvmwhcy4',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types:   [
      product,
      category,
    ],
  },
})
