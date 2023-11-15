import { NextResponse, NextRequest } from "next/server";

export default function GET(request: NextRequest) {
  const name = request.name;
  return NextResponse.json({ message: "Hello, World!" });
}
