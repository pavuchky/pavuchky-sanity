import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutShortUa',
      type: 'array',
      title: 'About short UA',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'aboutShortEn',
      type: 'array',
      title: 'About short EN',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'aboutFullUa',
      type: 'array',
      title: 'About full UA',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'aboutFullEn',
      type: 'array',
      title: 'About full EN',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
