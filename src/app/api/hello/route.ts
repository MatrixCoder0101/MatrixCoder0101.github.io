import { NextResponse } from "next/server";

export default function handler() {
  return NextResponse.json({ message: "Hello, World!" });
}
