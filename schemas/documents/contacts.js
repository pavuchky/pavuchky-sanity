import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'streetList',
      title: 'Street list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'streetItem',
          title: 'Street',
          fields: [
            {
              name: 'streetUa',
              type: 'array',
              title: 'Street UA',
              of: [
                {
                  type: 'block',
                },
              ],
            },

            {
              name: 'streetEn',
              type: 'array',
              title: 'Street EN',
              of: [
                {
                  type: 'block',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialMediaList',
      title: 'Social media list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialMediaItem',
          title: 'Social media item',
          fields: [
            {
              name: 'socialMediaName',
              title: 'Social media name',
              type: 'string',
              initialValue: 'Instagram',
              options: {
                list: [
                  {title: 'Instagram', value: 'Instagram'},
                  {title: 'Telegram', value: 'Telegram'},
                  {title: 'YouTube', value: 'YouTube'},
                  {title: 'Facebook', value: 'Facebook'},
                ],
              },
            },
            {type: 'string', name: 'socialMediaLink', title: 'Social media link'},
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
