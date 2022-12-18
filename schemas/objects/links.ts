import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "links",
  title: "Links",
  icon: LinkIcon,

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      validation: (rule) => rule.required(),
    }),
  ],
});
