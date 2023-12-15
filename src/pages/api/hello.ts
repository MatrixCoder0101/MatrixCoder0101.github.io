// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ message: 'Hello World!' });
}
