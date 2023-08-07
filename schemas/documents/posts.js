import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'postsLink',
      title: 'All posts link',
      type: 'string',
    }),
    defineField({
      name: 'postsList',
      title: 'Posts list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'postItem',
          title: 'Post',
          fields: [
            {type: 'image', name: 'postImage', title: 'Post photo'},
            {type: 'string', name: 'postDesc', title: 'Post description'},
            {type: 'string', name: 'postLink', title: 'Post link'},
          ],
        },
      ],
    }),
  ],
})
