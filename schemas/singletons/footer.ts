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
      name: "logo",
      title: "Logo",
    }),
    defineField({
      type: "string",
      name: "copyright",
      title: "Copyright Text",
    }),
    defineField({
      type: "string",
      name: "btnText",
      title: "Button Text",
    }),
    defineField({
      name: "menuItems",
      title: "Menu Item list",
      description: "Links displayed on the footer of your site.",
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
      name: "menuItemsTwo",
      title: "Menu Item list Two",
      description: "Links displayed on the footer of your site.",
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
      name: "social",
      type: "array",
      title: "Social Links",
      description: "Enter your Social Media URLs",
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "media",
              title: "Choose Social Media",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" },
                ],
              },
            },
            {
              type: "url",
              name: "url",
              title: "Full Profile URL",
            },
          ],
          preview: {
            select: {
              title: "media",
              subtitle: "url",
            },
          },
        },
      ],
    }),
  ],
});
