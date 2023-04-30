import Image from "next/image";
import { RenderPhotoProps } from "react-photo-album";

export const GalleryImage = ({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) => {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
        alt={`Imagen de la galería ${title}`}
        className="rounded-md shadow"
        loading="lazy"
      />
    </div>
  );
};
