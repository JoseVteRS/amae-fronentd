import { MappedGallery, galleryMapper } from "@/Api/Gallery/gallery.mapper";
import { SectionLightLayout } from "@/layouts";
import Image from "next/image";
import Link from "next/link";

export const Gallery = ({ galleries }: { galleries: any }) => {
  return (
    <SectionLightLayout
      title="Galerías."
      id="galeria"
      className="pb-52"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryMapper(galleries).map((gallery: MappedGallery) => (
            <Link
              key={gallery.id}
              href={"/galeria/[gallery]"}
              as={`/galeria/${gallery.slug}`}
              className="relative w-full h-48 overflow-hidden rounded shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <Image
                src={`https://amae-backend-production.up.railway.app${gallery.thumbnail}`}
                alt={gallery.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-12 px-2 flex items-center text-white font-semibold">
                {gallery.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionLightLayout>
  );
};
