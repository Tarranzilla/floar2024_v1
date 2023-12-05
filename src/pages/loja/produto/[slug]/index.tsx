import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { getEntryBySlug, getEntriesByContentTypeAndPreviewMode } from "@/lib/contentful/contentful";
import { GetStaticPropsContext } from "next";

import Link from "next/link";
import Product_Detail from "@/components/shop/Product_Detail";

interface RoupaFloar {
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

export default function ProdutoDetalhe({ roupaFloar }: { roupaFloar: RoupaFloar }) {
    console.log(roupaFloar.fields.name);
    if (!roupaFloar || !roupaFloar.fields) {
        return <div>Carregando ...</div>; // Or some other placeholder
    }

    return <Product_Detail item={roupaFloar} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
    if (!context.params) {
        // Handle the case where params is undefined
        throw new Error("No params");
    }

    const { slug } = context.params;
    const roupaFloar = await getEntryBySlug("roupaFloar", slug);
    console.log(roupaFloar.fields.name);
    return {
        props: {
            roupaFloar, // Pass roupaFloar as a prop to the page
        },
    };
}

export async function getStaticPaths() {
    // Fetch all products
    const products = await getEntriesByContentTypeAndPreviewMode("roupaFloar");
    // Extract the slugs
    const slugs = products.map((product: RoupaFloar) => product.fields.slug);

    const paths = slugs.map((slug: string) => ({
        params: { slug },
    }));

    return { paths, fallback: false };
}
