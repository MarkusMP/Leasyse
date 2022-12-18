import { urlForImage } from "lib/sanity.image";
import Image from "next/image";

interface ImageBoxProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
  priority?: boolean;
}

export default function ImageBox({
  image,
  alt = "Cover image",
  width = 3500,
  height = 2000,
  size = "100vw",
  classesWrapper,
  priority = false,
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit("crop").url();

  return (
    <div className={`w-full overflow-hidden ${classesWrapper}`}>
      {imageUrl && (
        <Image
          className="absolute h-full w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          priority={priority}
        />
      )}
    </div>
  );
}
