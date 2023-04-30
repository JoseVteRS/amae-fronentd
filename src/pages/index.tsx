import { Gallery } from "@/Api/gallery";
import { Service } from "@/Api/service";
import { MainLayout } from "@/layouts";
import { ScrollToTopButton } from "@/components/Ui";
import { Section } from "@/components/Sections";

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
