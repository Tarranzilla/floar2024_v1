type Product = {
    productId: string;

    year: number;
    season: string;
    category: string[];
    type: string;
    variants: string[];
    name: string;
    author: string;

    price: number;
    discount: number;
    stockQuantity: number;
    availableForSale: boolean;

    materials: string[];
    sizes: string[];
    introduction: string;
    description: string;
    careMethod: string;

    tags: string[];
    images: string[];
    videos: string[];
    posts: string[];
    relatedProducts: string[];

    reviews: { userId: string; review: string; rating: number }[];
    averageRating: number;
};
