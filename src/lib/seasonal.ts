/**
 * Build-time seasonal strings for titles, SEO titles and descriptions.
 *
 * Frontmatter can use `{year}` and `{month}` tokens; they resolve when the site is
 * built (the nightly deploy keeps them current), so "Best Cat Gifts {year}" becomes
 * "Best Cat Gifts 2027" on the first build after January 1.
 *
 * Honesty guard: posts whose offers expire set `seasonalUntil` (e.g. coupon pages
 * with codes valid through Dec 31). After that date the tokens freeze at that date's
 * month/year instead of implying fresh, still-valid deals.
 *
 * Only titles/meta are tokenised, never body copy, and the Black Friday pages that
 * the daily refresh routine edits (/blog/black-friday-cat-deals,
 * /blog/litter-robot-black-friday-deal, /blog/cat-tree-black-friday-deals) keep
 * literal years on purpose.
 */
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** The site is published from Germany for a US audience; use US Eastern for "today". */
export function buildDate(now: Date = new Date()): { year: number; month: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
  }).formatToParts(now);
  const year = Number(parts.find((p) => p.type === 'year')?.value);
  const month = Number(parts.find((p) => p.type === 'month')?.value) - 1;
  return { year, month };
}

export function resolveSeasonal(value: string, until?: Date, now?: Date): string;
export function resolveSeasonal(value: string | undefined, until?: Date, now?: Date): string | undefined;
export function resolveSeasonal(value: string | undefined, until?: Date, now: Date = new Date()) {
  if (!value || !value.includes('{')) return value;
  const effective = until && until.getTime() < now.getTime() ? until : now;
  const { year, month } = buildDate(effective);
  return value.replaceAll('{year}', String(year)).replaceAll('{month}', MONTHS[month]);
}

export const hasSeasonalToken = (value?: string) => Boolean(value && /\{(year|month)\}/.test(value));
