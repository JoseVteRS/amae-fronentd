import { Gallery } from "../gallery.interface";

export interface MappedGallery  {
    id: number;
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    thumbnail: string;
}


export const galleryMapper = (data: Gallery[]): MappedGallery[] => {
    
    
    const mappedGallery = data.map( (gallery: Gallery) => {
        return {
            id: gallery.id,
            title: gallery.attributes.title,
            slug: gallery.attributes.slug,
            createdAt: gallery.attributes.createdAt,
            updatedAt: gallery.attributes.updatedAt,
            publishedAt: gallery.attributes.publishedAt,
            thumbnail: gallery.attributes.Thumbnail.data.attributes.url
        }
    });

    return mappedGallery;

}