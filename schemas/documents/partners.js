import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'partnersList',
      title: 'Partners List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'partnerItem',
          title: 'Partner',
          fields: [
            {type: 'image', name: 'partnerImage', title: 'Partner Photo'},
            {type: 'string', name: 'partnerLink', title: 'Partner Link'},
          ],
        },
      ],
    }),
  ],
})
