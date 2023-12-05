export default interface RoupaFloar {
    sys: {
        id: string;
    };

    fields: {
        id: string;
        name: string;
        slug: string;
        author: string;
        year: number;
        season: string;
        category: string[];
        price: number;
        discount: number;
        stockQuantity: number;
        availableForSale: boolean;
        promoted: boolean;
        materials: any[]; // Replace 'any' with the actual type if known
        sizes: string[];
        intro: string;
        description: any; // Replace 'any' with the actual type if known
        tags: string[];
        images: any[]; // Replace 'any' with the actual type if known
        videos: any[]; // Replace 'any' with the actual type if known
        relatedProducts: any[]; // Replace 'any' with the actual type if known
        interested_list: any[]; // Replace 'any' with the actual type if known
        buyer_list: any[]; // Replace 'any' with the actual type if known
        reviews: any[]; // Replace 'any' with the actual type if known
    };
}
