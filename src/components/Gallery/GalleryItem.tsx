import Image from "next/image";

interface GalleryItemProps {
  photo: {
    url: string;
    width: number;
    height: number;
  };
}

export const GalleryItem = ({  photo }: GalleryItemProps) => {

  const { url, width, height } = photo;
  return (
    <div className="w-full">
      <Image
        src={`https://amae-backend-production.up.railway.app${url}`}
        alt=""
        width={width}
        height={height} 
        className="w-full h-full shadow-md" 
        loading="lazy"
      />
    </div>
  );
};
