
import { defineType, defineField } from 'sanity';
export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
      validation: (Rule) => Rule.min(0).warning('Inventory cannot be negative!'),
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Purple', value: '#816DFA' },
              { title: 'Black', value: '#000000' },
              { title: 'Brown', value: '#CDBA7B' },
            ],
          },
        },
      ],
    }),
  
  ],
  
});
