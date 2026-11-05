// A thin <img> wrapper that resolves an internal image key (from IMAGE_PATHS)
// to its real static src + intrinsic width/height. No data-src, no runtime
// swap. The hero image on each page is eager + high priority; every other
// image is lazy-loaded. Alt text is passed through unchanged.
import { IMAGE_PATHS, type ImgInfo } from "@/lib/image-paths";

type Props = {
  imgKey: string;
  alt: string;
  className?: string;
  id?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
  decoding?: "async" | "sync" | "auto";
};

function resolve(key: string): ImgInfo {
  const info = IMAGE_PATHS[key];
  if (!info) {
    // Fall back to treating the key itself as a real path (e.g. an absolute
    // /images/... path used directly in a route).
    return { src: key, width: 0, height: 0 };
  }
  return info;
}

export function Img({
  imgKey,
  alt,
  className,
  id,
  loading = "lazy",
  fetchpriority,
  decoding = "async",
}: Props) {
  const info = resolve(imgKey);
  return (
    <img
      src={info.src}
      width={info.width || undefined}
      height={info.height || undefined}
      alt={alt}
      className={className}
      id={id}
      loading={loading}
      {...(fetchpriority ? { fetchpriority } : {})}
      decoding={decoding}
    />
  );
}
