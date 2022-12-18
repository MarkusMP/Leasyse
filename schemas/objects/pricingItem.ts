import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "pricingItem",
  title: "Pricing Item",

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
  ],
});
