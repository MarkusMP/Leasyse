import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "pricingItemList",
  title: "Pricing Item List",

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
      name: "price",
      type: "string",
      title: "Price",
    }),
    defineField({
      name: "pricingType",
      type: "string",
      title: "Pricing Type",
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
    defineField({
      name: "list",
      title: "List of whats provided",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [
            {
              type: "pricingItem",
            },
          ],
        },
      ],
    }),
  ],
});
