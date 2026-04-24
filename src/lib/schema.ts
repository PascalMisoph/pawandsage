import { ORGANIZATION, PERSON, SITE_NAME, SITE_URL } from './site';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface PageSchemaOptions {
  type?: string;
  name: string;
  description: string;
  path: string;
  image?: string;
  about?: string;
  significantLinks?: string[];
}

interface CollectionPageOptions extends PageSchemaOptions {
  hasPart?: string[];
}

const compact = <T extends Record<string, unknown>>(value: T) =>
  Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined));

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

const imageObject = (image?: string) =>
  image
    ? {
        '@type': 'ImageObject',
        url: absoluteUrl(image),
      }
    : undefined;

const siteReference = {
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

const organizationReference = {
  '@type': 'Organization',
  name: ORGANIZATION.name,
  url: ORGANIZATION.url,
};

const personReference = {
  '@type': 'Person',
  name: PERSON.name,
  url: PERSON.url,
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildPageSchema({
  type = 'WebPage',
  name,
  description,
  path,
  image,
  about,
  significantLinks = [],
}: PageSchemaOptions) {
  return compact({
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: 'en',
    isPartOf: siteReference,
    author: personReference,
    publisher: organizationReference,
    about: about
      ? {
          '@type': 'Thing',
          name: about,
        }
      : undefined,
    primaryImageOfPage: imageObject(image),
    significantLink: significantLinks.length > 0 ? significantLinks.map((link) => absoluteUrl(link)) : undefined,
  });
}

export function buildCollectionPageSchema({
  name,
  description,
  path,
  image,
  about,
  significantLinks = [],
  hasPart = [],
}: CollectionPageOptions) {
  return compact({
    ...buildPageSchema({
      type: 'CollectionPage',
      name,
      description,
      path,
      image,
      about,
      significantLinks,
    }),
    hasPart: hasPart.length > 0 ? hasPart.map((item) => absoluteUrl(item)) : undefined,
  });
}

export function buildAboutPageSchema(name: string, description: string, path: string) {
  return compact({
    ...buildPageSchema({
      type: 'AboutPage',
      name,
      description,
      path,
      about: `${ORGANIZATION.name} and ${PERSON.name}`,
    }),
    mainEntity: personReference,
  });
}

export function buildContactPageSchema(name: string, description: string, path: string) {
  return compact({
    ...buildPageSchema({
      type: 'ContactPage',
      name,
      description,
      path,
      about: ORGANIZATION.name,
    }),
    mainEntity: organizationReference,
  });
}

export function buildFAQPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
