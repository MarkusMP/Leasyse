import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "policy",
  title: "Policy",

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      name: "date",
      type: "string",
      title: "Last Updated",
    }),
    defineField({
      name: "policy",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      blocks: "blocks",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block) => block._type === "block"
      );
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
      };
    },
  },
});
