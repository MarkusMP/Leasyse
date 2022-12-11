import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    title, 
  }
`;

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    slug,
    title,
  }
`;

export const headerQuery = groq`
  *[_type == "header"][0]{
    logo,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
  }
`;
