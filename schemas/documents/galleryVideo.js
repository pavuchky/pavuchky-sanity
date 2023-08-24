import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryVideo',
  title: 'Gallery video',
  type: 'document',
  fields: [
    defineField({
      name: 'galleryVideoList',
      title: 'Gallery video list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryVideoItem',
          title: 'Gallery video',
          fields: [
            {type: 'string', name: 'videoLink', title: 'Gallery video link'},
            {type: 'string', name: 'videoDescription', title: 'Gallery video description'},
          ],
        },
      ],
    }),
  ],
})
