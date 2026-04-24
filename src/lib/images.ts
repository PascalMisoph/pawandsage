import responsiveImageManifest from '../generated/responsive-image-manifest.json';

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

export function buildImageObject(src?: string) {
  if (!src) {
    return undefined;
  }

  const entry = getResponsiveImageMeta(src);
  if (!entry) {
    return undefined;
  }

  return {
    '@type': 'ImageObject',
    url: src,
    width: entry.width,
    height: entry.height,
  };
}
