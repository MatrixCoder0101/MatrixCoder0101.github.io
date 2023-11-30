import { NextRequest, NextResponse } from "next/server";

export function hello(request) {
  const jsonResponse = { message: "Hello, World!" };

  return NextResponse.json({ message: "Hello, World!" });
}