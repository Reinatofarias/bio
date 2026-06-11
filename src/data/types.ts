export interface Profile {
  name: string;
  role: string;
  tagline: string;
  avatar: string;
  badges: { icon: string; text: string }[];
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary' | 'ghost';
  };
}

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  image?: string;
  variant: 'full' | 'half' | 'featured' | 'banner';
  badge?: string;
  external: boolean;
  order: number;
  active: boolean;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
  price?: string;
  badge?: string;
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary' | 'ghost';
  };
  featured: boolean;
  order: number;
  active: boolean;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
  order: number;
}

export interface AboutSection {
  text: string;
  highlights: { icon: string; text: string }[];
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
  order: number;
  active: boolean;
}

export interface Config {
  profile: Profile;
  links: LinkItem[];
  products: ProductItem[];
  stats: StatItem[];
  about: AboutSection;
  social: SocialLink[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    canonical: string;
    locale: string;
    twitterHandle: string;
  };
  analytics?: {
    googleAnalyticsId?: string;
    facebookPixelId?: string;
  };
  theme: {
    defaultMode: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    cnpj?: string;
  };
}
