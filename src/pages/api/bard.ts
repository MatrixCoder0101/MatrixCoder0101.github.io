import type { NextApiRequest, NextApiResponse } from 'next'
import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

type Data = {
  name: string,
  error: string,
  answer: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  const MODEL_NAME = "models/chat-bison-001";
  const API_KEY = "AIzaSyCdf0QI11bfqok5uX1UXuTvonUkeOF8ooM";
  const query = req.query.query;

  if (!query) {
    res.json({ error: 'Give me a query.' });
  }

  const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
  });

  try {
    const result = await client.generateMessage({
      model: MODEL_NAME,
      temperature: 0.5,
      candidateCount: 1,
      prompt: {
        context: 'Respond to all the questions in a good manner.',
        messages: [{ content: query }],
      },
    });

    const answer = result[0].candidates[0].content;
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.json({ error: 'Internal Server Error' });
  }
}