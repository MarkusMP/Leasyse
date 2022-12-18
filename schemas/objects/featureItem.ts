import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "featureItem",
  title: "Feature Item",

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
  ],
});
