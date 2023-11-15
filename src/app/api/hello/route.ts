import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const jsonResponse = { message: "Hello, World!" };

  // Set Content-Disposition header to inline for displaying response in the browser
  return NextResponse.json(jsonResponse, {
    headers: {
      "Content-Disposition": 'inline; filename="response.json"',
    },
  });
}
