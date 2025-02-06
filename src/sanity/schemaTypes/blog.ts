import { defineType, defineField } from 'sanity';

export const blog = defineType({
  name: 'blog',            
  title: 'Blog',             
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
      name: 'image',        
      title: 'Image',       
      type: 'image',         
      options: {
        hotspot: true,       
      },
    }),
  ],
});

  