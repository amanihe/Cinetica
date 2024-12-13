import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    console.log("Received params:", params);

    if (!params?.id) {
        console.error("No ID provided in params");
        return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    const { id } = params;
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits,images`;
    console.log("Fetching URL:", url);

    const res = await fetch(url);

    if (!res.ok) {
        console.error("Error fetching from TMDB:", await res.text());
        return NextResponse.json({ error: "Failed to fetch show details" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
