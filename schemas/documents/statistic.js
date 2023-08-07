import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statistic',
  title: 'Statistic',
  type: 'document',
  fields: [
    defineField({
      name: 'days',
      title: 'Days',
      type: 'string',
    }),
    defineField({
      name: 'gridFootage',
      title: 'Grid footage',
      type: 'string',
    }),
    defineField({
      name: 'days',
      title: 'Days',
      type: 'string',
    }),
  ],
})
