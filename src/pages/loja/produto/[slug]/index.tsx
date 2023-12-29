import { getEntryBySlug, getEntriesByContentTypeAndPreviewMode } from "@/lib/contentful/contentful";
import { GetStaticPropsContext } from "next";

import Head from "next/head";

import Product_Detail from "@/components/shop/Product_Detail";

import RoupaFloar from "@/types/RoupaFloar";

export default function ProdutoDetalhe({ roupaFloar }: { roupaFloar: RoupaFloar }) {
    console.log(roupaFloar.fields.name);
    if (!roupaFloar || !roupaFloar.fields) {
        return <div>Carregando Loja ...</div>; // Or some other placeholder
    }

    return (
        <>
            <Head>
                <title>{"Atelier Floar | Loja | " + roupaFloar.fields.name}</title>
                <meta name="description" content={roupaFloar.fields.intro} />
            </Head>
            <Product_Detail item={roupaFloar} />
        </>
    );
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
