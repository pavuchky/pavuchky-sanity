import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'reviewList',
      title: 'Review list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'reviewItem',
          title: 'Review',
          fields: [
            {type: 'string', name: 'reviewDesc', title: 'Review description'},
            {type: 'string', name: 'reviewImage', title: 'Review photo'},
          ],
        },
      ],
    }),
  ],
})
