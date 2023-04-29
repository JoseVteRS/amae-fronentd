import { SectionLightLayout } from "@/layouts";
import React from "react";
import { ScrollMore, Separator } from "../Ui";

export const Services = ({ services }: { services: any }) => {

  return (
    <SectionLightLayout title="Servicios." id="servicios" clipPath="light">
      <div className="bg-gray-100 min-h-auto">
        <ul className="flex flex-wrap justify-center">
          {services.map((service: any) => (
            <li
              key={service.attributes.id}
              className="bg-white shadow-lg rounded-lg mx-4 my-8 w-72"
            >
              <div
                className={`bg-white p-8 rounded shadow-md border-t-4 border-gray-400`}
              >
                <h3 className="text-2xl font-semibold mb-4">{service.attributes.title}</h3>
                <p className="text-gray-700">{service.attributes.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full flex flex-col items-center justify-center">
          <Separator size="2xl" />
          <p className="font-semibold text-xl">¿Hablamos?</p>
          <ScrollMore href="contacto" />
        </div>
      </div>
    </SectionLightLayout>
  );
};
