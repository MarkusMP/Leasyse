import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "cta",
  title: "Cta",

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      name: "btnText",
      type: "string",
      title: "Button Text",
    }),
    defineField({
      name: "link",
      title: "Button Link to",
      type: "reference",
      to: [
        {
          type: "page",
        },
        {
          type: "links",
        },
      ],
    }),
  ],
});
