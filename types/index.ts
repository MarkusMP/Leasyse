export interface Image {
  _type: string;
  alt?: string;
  asset: {
    _ref: string;
    _types: string;
  };
}

export interface MenuItem {
  _type: string;
  slug?: string;
  title?: string;
  _id?: string;
}

// Page Payloads

export interface HomePagePayload {
  titleSEO?: string;
  descriptionSEO?: string;
  title?: string;
  ogImage?: Image;
  content?: any[];
}

export interface PagePayload {
  title?: string;
  titleSEO?: string;
  descriptionSEO?: string;
  ogImage?: Image;
  indexPage?: boolean;
  content?: any[];
}

export interface HeaderPayload {
  menuItems?: MenuItem[];
  buttonItems?: MenuItem[];
  logo?: string;
}

export interface FooterPayload {
  logo?: string;
  copyright?: string;
  btnText?: string;
  social?: FooterSocial[];
  menuItemsTwo?: MenuItem[];
  menuItems?: MenuItem[];
}

export interface FooterSocial {
  _key: string;
  media: string;
  url: string;
}

export interface RedirectsPayload {
  from?: string;
  to?: string;
  isPermanent?: boolean;
}

// Section payload
export interface HeroPayload {
  title?: string;
  description?: string;
  image?: Image;
  btnText?: string;
  link?: { slug?: string };
}

export interface FeaturePayload {
  title?: string;
  description?: string;
  list?: FeatureItemPayload[];
}

export interface FeatureItemPayload {
  title?: string;
  description?: string;
  _key?: string;
}

export interface PricingPayload {
  title?: string;
  description?: string;
  list?: PricingItemListPayload[];
}

export interface PricingItemListPayload {
  title?: string;
  description?: string;
  price?: string;
  pricingType?: string;
  btnText?: string;
  link?: { slug?: string };
  list?: PricingItemPayload[];
  _key?: string;
}

export interface PricingItemPayload {
  title?: string;
  _id?: string;
}

export interface TestimonialsPayload {
  title?: string;
  list: TestimonialsItemPayload[];
}

export interface TestimonialsItemPayload {
  title?: string;
  description?: string;
  image?: Image;
  _key: string;
}

export interface CtaPayload {
  title?: string;
  btnText?: string;
  link?: { slug?: string };
}

export interface ContactPayload {
  title?: string;
  description?: string;
  btnText?: string;
}

export interface PolicyPayload {
  title?: string;
  date?: string;
  policy?: any;
}
