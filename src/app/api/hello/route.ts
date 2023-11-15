// app/api/sendJson.ts
import { Request, Response } from 'next';

export async function GET(request: Request) {
  const jsonData = {
    message: "Hello, this is a JSON response!",
    timestamp: new Date().toISOString(),
  };

  return new Response(JSON.stringify(jsonData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
