import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    console.log(name);
    if (!query) {
        return NextResponse.json({ error: "Give me a query" }, { status: 500 });
    }
    try {
        const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(
            query
        )}`;
        let response = await axios.get(apiEndpoint);
        let responseData = response.data.result;

        if (responseData) {
            return NextResponse.json({ responseData }, { status: 500 });
        } else {
            return NextResponse.json(
                { error: "No answer found" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
