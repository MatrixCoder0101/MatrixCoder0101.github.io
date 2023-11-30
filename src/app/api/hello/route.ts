import { NextRequest, NextResponse } from "next/server";

export function GET(res: NextResponse) {
  //const jsonResponse = { message: "Hello, World!" };

  return res.json({ message: "Hello, World!" });
}