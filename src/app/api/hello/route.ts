import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  //const jsonResponse = { message: "Hello, World!" };

  return NextResponse.json({ message: "Hello, World!" });
}