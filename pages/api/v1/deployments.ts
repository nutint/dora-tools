import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.status(201).json({});
    return;
  }
  res.status(200).json({ text: "hello" });
}
