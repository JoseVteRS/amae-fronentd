
export class Photo {
    async getAll(slug: string): Promise<any> {
        try {

            const url = `${process.env.NEXT_PUBLIC_API_URL}/api/photos?filters[gallery][slug][$eqi]=${slug}&populate=*`;
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) throw new Error(data.message);


            return data;

        } catch (error: any) {
            throw new Error(error);
        }
    }
}