import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "feature",
  title: "Feature",

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
      name: "list",
      type: "array",
      title: "List",
      of: [{ type: "featureItem" }],
    }),
  ],
});
