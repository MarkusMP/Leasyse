import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "header",
  title: "Header",
  icon: MenuIcon,

  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "logo",
      title: "Logo",
    }),
    defineField({
      name: "menuItems",
      title: "Menu Item list",
      description: "Links displayed on the header of your site.",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [
            {
              type: "home",
            },
            {
              type: "page",
            },
            {
              type: "links",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "buttonItems",
      title: "Button Item list",
      description: "Links displayed on the header of your site.",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [
            {
              type: "home",
            },
            {
              type: "page",
            },
            {
              type: "links",
            },
          ],
        },
      ],
    }),
  ],
});
