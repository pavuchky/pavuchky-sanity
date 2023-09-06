import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryPhoto',
  title: 'Gallery photo',
  type: 'document',
  fields: [
    defineField({
      name: 'galleryPhotoList',
      title: 'Gallery photo list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryPhotoItem',
          title: 'Gallery photo id',
          fields: [{type: 'image', name: 'photoLink', title: 'Gallery photo'}],
        },
      ],
    }),
  ],
})
