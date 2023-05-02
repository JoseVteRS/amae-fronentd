import Image from "next/image";
import React from "react";
import { ScrollMore, Separator } from "../Ui";

export const Header = () => {
  return (
    <section className="relative">
      <div className="">
        <div className="relative w-full h-[100vh]">
          <Image
            src="/assets/images/fondo-amae.jpg"
            alt="Mar, fotógrafa"
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
          />
        </div>
        <div className="absolute inset-0 bg-gray-50 opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col ">
          <h1 className="text-slate-900 text-dynamic font-bold uppercase">
            Amae<span className="font-normal text-slate-700">Fotografía</span>
          </h1>
          <Separator size="lg" />
          <p className="text-2xl">Lo importante no es la cámara, sino el ojo</p>

          <Separator size="4xl" />
          <ScrollMore href="sobre-mi" />
        </div>
      </div>
    </section>
  );
};
