import { NextResponse } from 'next/server'
import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

export async function GET(request: Request) {
  const MODEL_NAME = "models/chat-bison-001";
  const API_KEY = "AIzaSyCdf0QI11bfqok5uX1UXuTvonUkeOF8ooM";
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query') 

  if (!query) {
    return NextResponse.json({ error: "Give me a query" }, { status: 500 })
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

    const ans = result[0].candidates[0].content;
    return NextResponse.json({ ans }, { status: 500 })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}