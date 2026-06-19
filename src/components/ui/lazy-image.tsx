import Image, { type ImageProps } from "next/image";

type LazyImageProps = ImageProps & {
  priority?: boolean;
};

/** Next.js Image with lazy loading enabled by default (use priority only for LCP). */
export function LazyImage({
  priority = false,
  loading,
  alt,
  title,
  ...props
}: LazyImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      title={title ?? alt}
      priority={priority}
      loading={priority ? undefined : loading ?? "lazy"}
    />
  );
}

export default LazyImage;
