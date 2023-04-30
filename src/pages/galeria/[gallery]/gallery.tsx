import { HeaderWithImage } from "@/components/Common/HeaderPage";
import { GalleryImage, Heading } from "@/components/Ui";
import { MainLayout } from "@/layouts";
import { galleryImages } from "@/utils";
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
          imageSrc={`${process.env.NEXT_PUBLIC_API_URL}${responseGallery.attributes.Thumbnail?.data.attributes.url}`}
          className="diagonal"
        />

        <section className="relative bg-gray-100 text-slate-300 py-28">
          <div className="container mx-auto">
            <PhotoAlbum
              renderPhoto={GalleryImage}
              layout="masonry"
              targetRowHeight={150}
              columns={3}
              photos={galleryImages(responseGallery.attributes.photos.data)}
              onClick={({ index }) => {
                setIndex(index);
              }}
              defaultContainerWidth={1200}
              sizes={{ size: "calc(100vw - 240px)" }}
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
