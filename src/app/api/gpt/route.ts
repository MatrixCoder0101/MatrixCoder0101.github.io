import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query")
    if (!query) {
        return NextResponse.json({ error: "Give me a query" }, { status: 500 });
    }
    
        const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(query)}`;
        const response = await axios.get(apiEndpoint);
        const responseData = response.data.result;

        if (responseData) {
            return NextResponse.json({ responseData }, { status: 500 });
        } else {
            return NextResponse.json(
                { error: "No answer found" },
                { status: 500 }
            );
        }
}
