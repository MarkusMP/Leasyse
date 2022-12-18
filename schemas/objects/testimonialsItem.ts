import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "testimonialsItem",
  title: "Testimonials Item",

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      title: "Image",
      description: "Upload image here.",
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
    }),
  ],
});
