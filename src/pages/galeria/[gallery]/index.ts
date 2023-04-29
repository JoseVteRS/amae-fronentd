export { default } from "./gallery";

import { MappedGallery } from "@/Api/Gallery/gallery.mapper";
import { Gallery } from "@/Api/gallery"
import { GetServerSideProps, GetServerSidePropsContext } from "next";


export const getServerSideProps: GetServerSideProps<{ responseGallery: MappedGallery }> = async (context: GetServerSidePropsContext) => {
    const {
        params,
    } = context;
    
    const galleryCtrl = new Gallery();

    const responseGallery = await galleryCtrl.getBySlug(params!['gallery' ] as string);
    

    
    if(!responseGallery) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            responseGallery,
        },
    };
}