import { getCollection, type CollectionEntry } from 'astro:content';
import { resolveSeasonal } from './seasonal';

export type BlogPost = CollectionEntry<'blog'>;

const SEO_TITLE_MAX = 60;

/** Resolve {year}/{month} tokens in a post's title, seoTitle and description. */
export function resolvePost(post: BlogPost): BlogPost {
  const { data } = post;
  const until = data.seasonalUntil;
  const seoTitle = resolveSeasonal(data.seoTitle, until);
  if (seoTitle && seoTitle.length > SEO_TITLE_MAX) {
    throw new Error(`seoTitle for ${post.id} is ${seoTitle.length} chars after resolving seasonal tokens (max ${SEO_TITLE_MAX}).`);
  }
  return {
    ...post,
    data: {
      ...data,
      title: resolveSeasonal(data.title, until),
      seoTitle,
      description: resolveSeasonal(data.description, until),
    },
  };
}

/** Drop-in replacement for getCollection('blog', filter) with seasonal strings resolved. */
export async function getBlogPosts(filter?: (entry: BlogPost) => boolean): Promise<BlogPost[]> {
  const posts = await getCollection('blog', filter as never);
  return (posts as BlogPost[]).map(resolvePost);
}
