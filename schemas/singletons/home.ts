import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fieldsets: [
    {
      title: "SEO",
      name: "seo",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Title for SEO",
      description:
        "make it as enticing as possible to convert users in social feeds and google searches. Ideally between 15 and 70 characters.",
      name: "titleSEO",
      fieldset: "seo",
      type: "string",
      validation: (rule) =>
        rule.max(70).warning(`A title shouldn't be more than 70 characters.`),
    }),
    defineField({
      name: "descriptionSEO",
      type: "string",
      title: "Short paragraph for SEO (meta description)",
      description: "Ideally between 70 and 160 characters",
      fieldset: "seo",
      validation: (Rule) =>
        Rule.max(160).warning(
          `A description shouldn't be more than 160 characters.`
        ),
    }),
  ],
});
