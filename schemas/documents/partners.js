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
            {type: 'image', name: 'partnerImageMobile', title: 'Partner Photo Mobile'},
            {type: 'image', name: 'partnerImageTablet', title: 'Partner Photo Tablet'},
            {type: 'image', name: 'partnerImageDesktop', title: 'Partner Photo Desktop'},
            {type: 'string', name: 'partnerLink', title: 'Partner Link'},
          ],
        },
      ],
    }),
  ],
})
