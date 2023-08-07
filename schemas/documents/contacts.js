import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'socialMediaList',
      title: 'Social Media List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialMediaItem',
          title: 'Social Media Item',
          fields: [
            {type: 'string', name: 'name', title: 'Social Media Name'},
            {type: 'string', name: 'link', title: 'Social Media Link'},
          ],
        },
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
  ],
})
