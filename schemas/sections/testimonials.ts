import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "testimonials",
  title: "Testimonials",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "testimonialsItem" }],
    }),
  ],
});
