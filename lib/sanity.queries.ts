import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    title, 
    descriptionSEO,
    titleSEO,
    content[] {
      ...,
      link-> {
                  "slug": slug.current
            },
      list[] {
        ...,
        list[] ->
      }
    }
  }
`;

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    slug,
    title,
    indexPage,
    descriptionSEO,
    titleSEO,
    content[] {
      ...,
      link-> {
                  "slug": slug.current,
                
            },
      list[] {
        ...,
        link-> {
                  "slug": slug.current,
                
            },
        list[] ->
      }
    }
  }
`;

export const headerQuery = groq`
  *[_type == "header"][0]{
    logo,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title,
      _id
    },
    buttonItems[]->{
      _type,
      "slug": slug.current,
      title,
      _id,
    }
  }
`;
export const footerQuery = groq`
  *[_type == "footer"][0]{
    logo,
    copyright,
    btnText,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title,
      _id
    },
    menuItemsTwo[]->{
      _type,
      "slug": slug.current,
      title,
      _id
    },
    social[],
  }
`;
export const redirectsQuery = groq`
  *[_type == "redirects"]{ from, to, isPermanent }
`;
