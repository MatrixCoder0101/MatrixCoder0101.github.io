import { NextResponse } from "next/server";
import truesearch from 'truesearch';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const phone = searchParams.get("phone")
    const mq = `+${phone}`;
    const id = searchParams.get("id")

    const result = await truesearch(mq, id);
    return NextResponse.json(result, { status: 500 });
}
