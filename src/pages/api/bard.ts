import { NextApiRequest, NextApiResponse } from 'next';
import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const MODEL_NAME: string = "models/chat-bison-001";
  const API_KEY: string = "AIzaSyCdf0QI11bfqok5uX1UXuTvonUkeOF8ooM";
  const query: string = req.query.query as string;

  if (!query) {
    return res.status(400).json({ error: 'Give me a query.' });
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

    if (result && result[0] && result[0].candidates && result[0].candidates[0]) {
      const ans: string = result[0].candidates[0].content;
      res.json({ ans });
    } else {
      res.status(500).json({ error: 'Invalid response structure' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
