import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const jsonResponse = { message: "Hello, World!" };

  return NextResponse.json({ message: "Hello, World!" });
}