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
          title: 'Gallery photo',
          fields: [{type: 'link', name: 'photoLink', title: 'Gallery photo'}],
        },
      ],
    }),
  ],
})