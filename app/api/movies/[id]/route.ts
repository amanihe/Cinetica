import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits,images`
    );

    if (!res.ok) {
        return NextResponse.json({ error: "Failed to fetch movie details" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
