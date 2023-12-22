import { NextApiRequest, NextApiResponse } from "next";
import { getEntriesByContentTypeAndPreviewMode } from "@/lib/contentful/contentful";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ msg: "Method not allowed" });
    }

    try {
        const products = await getEntriesByContentTypeAndPreviewMode("roupaFloar");
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong." });
    }
}
