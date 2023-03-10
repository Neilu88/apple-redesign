// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';
import { sanityClient} from "../../sanity"

const query = groq`*[_type == "product"] {
  id,
  ...
} | order(_createdAt asc)`;

type Data = {
  products: Product[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("hi");
  const products = await sanityClient.fetch(query)
  
  res.status(200).json({ products })
}