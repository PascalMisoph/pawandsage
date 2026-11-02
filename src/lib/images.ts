import responsiveImageManifest from '../generated/responsive-image-manifest.json';
import { SITE_URL } from './site';

type Variant = {
  width: number;
  src: string;
};

type ImageEntry = {
  width: number;
  height: number;
  variants: {
    avif?: Variant[];
    webp?: Variant[];
    jpeg?: Variant[];
  };
};

const manifest = responsiveImageManifest as Record<string, ImageEntry>;

export function getResponsiveImageMeta(src?: string) {
  if (!src) {
    return null;
  }

  const entry = manifest[src];
  if (!entry) {
    return null;
  }

  return entry;
}

export function buildImagePreloadHint(src: string, sizes: string) {
  const entry = getResponsiveImageMeta(src);
  if (!entry?.variants.jpeg?.length) {
    return null;
  }

  const srcset = entry.variants.jpeg.map((variant) => `${variant.src} ${variant.width}w`).join(', ');
  const href = entry.variants.jpeg[entry.variants.jpeg.length - 1]?.src;

  if (!href) {
    return null;
  }

  return {
    rel: 'preload',
    href,
    as: 'image',
    imagesrcset: srcset,
    imagesizes: sizes,
    type: 'image/jpeg',
  };
}

/**
 * Lightweight share image: the largest JPEG variant of a source image (the PNG
 * originals are 1.5-3.5 MB, too heavy for og:image / crawlers). Falls back to the
 * original path when the image has no generated variants.
 */
export function getShareImage(src: string) {
  const entry = getResponsiveImageMeta(src);
  const jpeg = entry?.variants.jpeg?.[entry.variants.jpeg.length - 1];
  if (!entry || !jpeg) {
    return { src, width: entry?.width, height: entry?.height };
  }
  return { src: jpeg.src, width: jpeg.width, height: Math.round((entry.height * jpeg.width) / entry.width) };
}

export function buildImageObject(src?: string) {
  if (!src) {
    return undefined;
  }

  const entry = getResponsiveImageMeta(src);
  if (!entry) {
    return undefined;
  }

  const share = getShareImage(src);
  return {
    '@type': 'ImageObject',
    url: new URL(share.src, SITE_URL).toString(),
    width: share.width,
    height: share.height,
  };
}
