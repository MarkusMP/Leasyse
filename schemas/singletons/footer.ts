import { InsertBelowIcon } from "@sanity/icons";

import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "footer",
  title: "Footer",
  icon: InsertBelowIcon,

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
  ],
});
