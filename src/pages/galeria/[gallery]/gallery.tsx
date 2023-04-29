import { HeaderWithImage } from "@/components/Common/HeaderPage";
import { Gallery } from "@/components/Gallery";
import { ButtonPrimary } from "@/components/Ui";
import { Heading } from "@/components/Ui/Heading";
import { MainLayout } from "@/layouts";
import { Abhaya_Libre } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const galleryImages = (images: []) => {
  if (!images || images.length < 0) return [];
  return images.map((image: any) => ({
    src: `https://amae-backend-production.up.railway.app${image.attributes.url}`,
    width: image.attributes.width,
    height: image.attributes.height,
  }));
};

const GalleryPage = ({ responseGallery }: { responseGallery: any }) => {
  const { back } = useRouter();
  const [index, setIndex] = useState(-1);

  const handleBack = () => back();

  if (!responseGallery) return <p>Cargando</p>;

  return (
    <>
      <MainLayout>
        <HeaderWithImage
          title={responseGallery.attributes.title}
          imageSrc={`https://amae-backend-production.up.railway.app${responseGallery.attributes.Thumbnail?.data.attributes.url}`}
          className="diagonal"
        />

        <section className="relative bg-gray-100 text-slate-300 py-28">
          <div className="container mx-auto">
            <PhotoAlbum
              
              layout="masonry"
              targetRowHeight={150}
              columns={3}
              photos={galleryImages(responseGallery.attributes.photos.data)}
              onClick={({ index }) => {
                setIndex(index);
              }}
            />

            <Lightbox
            plugins={[Zoom]}
              index={index}
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={galleryImages(responseGallery.attributes.photos.data)}
            />

            {responseGallery.attributes.photos.data !== null ? (
              <></>
            ) : (
  
              <div className="grid place-content-center h-[30vh]">
                <Heading
                  as="h2"
                  className={`${abhaya.className} text-6xl text-neutral-700`}
                >
                  No hay fotos
                </Heading>
                <button
                  onClick={handleBack}
                  className="text-center bg-blue-300 p-2 rounded shadow text-slate-800 font-semibold"
                >
                  Volver al Inicio
                </button>
              </div>
            )}
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default GalleryPage;
