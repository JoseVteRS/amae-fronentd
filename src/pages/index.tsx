import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { ScrollMore, Separator } from "@/components/Ui";
import { SectionLightLayout, MainLayout, SectionDarkLayout } from "@/layouts";
import { Heading } from "@/components/Ui/Heading";
import { Icon } from "@/components/Icons";
import { Gallery } from "@/Api/gallery";
import { MappedGallery, galleryMapper } from "@/Api/Gallery/gallery.mapper";
import { Section } from "@/components/Sections";
import ScrollToTopButton from "@/components/Ui/ScrollToTop";
import { Service } from "@/Api/service";

export default function Home({
  galleriesFetch,
  servicesFetch,
}: {
  galleriesFetch: any;
  servicesFetch: any;
}) {
  const { data: galleriesData } = galleriesFetch;
  const { data: serviceData } = servicesFetch;
  

  return (
    <MainLayout>
      <Section.Header />

      <Section.AboutMe />

      <Section.Gallery galleries={galleriesData} />

      <Section.Phrase />

      <Section.Services services={serviceData} />

      <Section.Contact />

      <ScrollToTopButton />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const galleryCtrl = new Gallery();
  const serviceCtrl = new Service();

  const galleriesFetch = await galleryCtrl.getAll();
  const servicesFetch = await serviceCtrl.getAll();

  return {
    props: {
      galleriesFetch,
      servicesFetch,
    },
  };
}
