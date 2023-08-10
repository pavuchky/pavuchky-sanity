import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statistic',
  title: 'Statistic',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutShort',
      type: 'array',
      title: 'About short',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'aboutFull',
      type: 'array',
      title: 'About full',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
