import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "contact",
  title: "Contact",

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
      name: "btnText",
      type: "string",
      title: "Button Text",
    }),
  ],
});
