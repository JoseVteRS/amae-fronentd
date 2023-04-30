

export class Service {
    async getAll() {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/api/services`;

            const response = await fetch(url);
            const data = await response.json();


            if (!response.ok) throw new Error(data.message);



            return data;

        } catch (error) {
            console.error(error)
        }
    }
}