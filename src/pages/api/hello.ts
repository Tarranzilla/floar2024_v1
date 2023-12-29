// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    pragmatas: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ pragmatas: ["Conrider 3000", "Tarranzilla"] });
}
