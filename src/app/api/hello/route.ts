import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
 //const url = request.nextUrl;
 return NextResponse.json({ message: "Hello, World!" });
}