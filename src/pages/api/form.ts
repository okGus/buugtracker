import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body

    if (!body) {
        return res.status(400).json({data: "No Severity chosen"});
    }

    res.status(200).json({data: body.Severity });

    console.log("body: ", body);
}