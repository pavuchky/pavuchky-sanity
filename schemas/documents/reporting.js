import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reporting',
  title: 'Reporting',
  type: 'document',
  fields: [
    defineField({
      name: 'reportingList',
      title: 'Reporting list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'reportingItem',
          title: 'Reporting item',
          fields: [
            {type: 'localizedString', name: 'reportingMonth', title: 'Reporting month'},
            {
              title: 'Financial report',
              name: 'financialReport',
              type: 'file',
            },
            {
              title: 'Results report',
              name: 'resultsReport',
              type: 'file',
            },
          ],
        },
      ],
    }),
  ],
})
