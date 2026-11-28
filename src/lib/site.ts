export const SITE_URL = 'https://www.pawandsage.com';
export const SITE_NAME = 'Paw & Sage';
export const SITE_DESCRIPTION =
  'A calm, considered guide to understanding the cat in your home.';
export const SITE_LANGUAGE = 'en-US';
export const SITE_LOGO = '/favicon.svg';

export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;

export const ORGANIZATION = {
  id: ORGANIZATION_ID,
  name: SITE_NAME,
  legalName: 'Paw & Sage',
  url: SITE_URL,
  email: 'hello@pawandsage.com',
  logo: `${SITE_URL}${SITE_LOGO}`,
  sameAs: ['https://pinterest.com/pawandsage'],
  publishingPrinciples: `${SITE_URL}/editorial-policy`,
};

/**
 * Reference to the one canonical Organization entity (full node emitted site-wide by
 * BaseLayout.astro). Use this for every nested publisher / worksFor / mainEntity.
 */
export const ORGANIZATION_REFERENCE = {
  '@id': ORGANIZATION_ID,
} as const;

export const PERSON = {
  name: 'Pascal Misoph',
  givenName: 'Pascal',
  familyName: 'Misoph',
  url: `${SITE_URL}/author/pascal-misoph`,
  id: `${SITE_URL}/author/pascal-misoph#person`,
  jobTitle: 'Founder, writer, and editor',
  // Leave empty until Pascal provides real profile URLs (LinkedIn, Instagram, ...).
  sameAs: [] as string[],
  description:
    'Independent publisher of Paw & Sage, focused on clear, practical writing about cat behavior, enrichment, and new cat care.',
};

export const DEFAULT_SOCIAL_IMAGE = '/home-header-premium-wide.png';
