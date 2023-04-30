import Link from "next/link";
import { SectionLightLayout } from "@/layouts";
import { Icon } from "../Icons";
import { Separator, Heading } from "../Ui";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const showEmail = () => {
    setEmail("hola@amaefotografía.com");
  };

  const showPhone = () => {
    setPhone("+34 644 20 43 76");
  };

  return (
    <SectionLightLayout title="Contacto." id="contacto" className="bg-white">
      <div className="w-1/2 mx-auto text-gray-700 leading-relaxed">
        <p className="text-center">
          ¿Te gustó mi portafolio fotográfico? Contáctame para discutir cómo
          puedo ayudarte a crear recuerdos únicos e inolvidables. ¡Estoy
          emocionada de trabajar contigo!
        </p>
        <Separator size="xl" />
        <div className="md:flex gap-10 align-top justify-between">
          <div className="w-full my-10">
            <Heading as="h3" className="text-3xl">
              Redes sociales
            </Heading>

            <ul className="flex justify-center items-center gap-5">
              <li>
                <Link
                  href="https://www.linkedin.com/company/amae-fotograf%C3%ADa/"
                  target="_blank"
                  title="Link a mi perfil de LinkedIn"
                >
                  <Icon.LinkedIn className="h-8 w-8 fill-slate-700" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/mar.fotografia.7"
                  target="_blank"
                  title="Link a mi perfil de Facebook"
                >
                  <Icon.Facebook className="h-8 w-8 fill-slate-700" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/mar-fotografia-7b1b1b1b9/"
                  target="_blank"
                  title="Link a mi perfil de Instagram"
                >
                  <Icon.Instagram className="h-8 w-8 fill-slate-700" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full my-10">
            <Heading as="h3" className="text-3xl">
              Contacto
            </Heading>

            <ul className="flex justify-center items-center gap-5">
              <li className="flex flex-col justify-center items-center">
                <Icon.Envelope className="h-8 w-8 fill-slate-700" />
                {email ? (
                  <Link href={`mailto:${email}`} target="_blank">
                    {email}
                  </Link>
                ) : (
                  <button onClick={showEmail}>Mostrar correo</button>
                )}
              </li>

              <li className="flex flex-col justify-center items-center">
                <Icon.Whatsapp className="h-8 w-8 fill-slate-700" />
                {phone ? (
                  <Link
                    href={`tel:${phone}`}
                    target="_blank"
                    className="inline-block"
                  >
                    {phone}
                  </Link>
                ) : (
                  <button onClick={showPhone}>Mostrar Teléfono</button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLightLayout>
  );
};
