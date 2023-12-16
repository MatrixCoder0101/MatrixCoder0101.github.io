import { NextResponse } from "next/server";
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const phone = searchParams.get("phone")
    const mq = `+${phone}`;
    const id = searchParams.get("id")

   const apiUrl = `https://supreme-catfish-goutammallick516.koyeb.app/truecaller?phone=${phone}&id=${id}`;
   let response = await axios.get(apiUrl);
   let json = response.data;
   if (json) {
    return NextResponse.json(json, { status: 500 });
  } else {
    return NextResponse.json({ error: 'Kuch Gadbad he'}, { status: 500 });
  }
}
