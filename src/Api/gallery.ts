import { MappedGallery, galleryMapper } from "./Gallery/gallery.mapper";


export class Gallery {
    async getAll(): Promise<MappedGallery[]> {
        try {

            const url = 'http://localhost:1337/api/galleries?populate=Thumbnail';
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) throw new Error(data.message);

          
            return data;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }


    async getBySlug(slug: string): Promise<MappedGallery> {
        try {

            const filters = `filters[slug][$eqi]=${slug}`;
            const populate = 'populate=*';
            const params = `${filters}&${populate}`;
            
            const url = `http://localhost:1337/api/galleries?${params}`;
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) throw new Error(data.message);

            return data.data[0];

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}