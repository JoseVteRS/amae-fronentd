import { SectionDarkLayout } from "@/layouts";
import { Link as LinkScroll } from "react-scroll";
import { Separator } from "../Ui";
import Image from "next/image";


export const AboutMe = () => {
  return (
    <SectionDarkLayout title="Sobre mi." id="sobre-mi" clipPath="gray">
      <div className="container mx-auto px-10 md:px-0">
        <div className="md:flex items-center">
          <div className="relative w-full md:w-1/2 h-[35rem] rounded-lg shadow-md mb-6 md:mb-0 md:mr-10">
            <Image
              src="/assets/images/mar.jpg"
              alt="Mar, fotógrafa"
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xl mb-4 leading-relaxed">
              <span className="text-3xl font-bold text-blue-200 ">
                ¡Hola! soy Mar,
              </span>{" "}
              una fotógrafa que narra historias a través de mi lente, capturando
              la esencia de cada momento y tejiendo emociones en mis imágenes.
              Mi pasión y empatía me permiten conectar con las personas y
              encontrar inspiración en lo cotidiano. La naturaleza, la música y
              la poesía son mi motor creativo, y en cada fotografía reflejo mi
              alma, iluminando los rincones más oscuros de la vida.
            </p>
            <p className="text-xl leading-relaxed">
              Mis fotografías son un delicado baile entre técnica e intuición,
              donde cada retrato se convierte en un poema visual y cada paisaje
              en una sinfonía de colores. A través de mi lente, te invito a
              sumergirte en mi mundo y a ser testigo de la magia que habita en
              cada instante capturado.
            </p>

            <Separator size="lg" />

            <LinkScroll
              to="servicios"
              className="px-4 py-2 rounded bg-blue-200 hover:bg-blue-300 text-black"
            >
              Que ofrezco
            </LinkScroll>
          </div>
        </div>
      </div>

      <p className="my-14 font-thin text-center text-2xl">
        Me gusta lo natural y espontáneo, lo genuino
      </p>
    </SectionDarkLayout>
  );
};
