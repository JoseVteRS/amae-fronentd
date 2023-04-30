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
        src={`process.env.NEXT_PUBLIC_API_URL${url}`}
        alt=""
        width={width}
        height={height} 
        className="w-full h-full shadow-md" 
        loading="lazy"
      />
    </div>
  );
};
