import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch TV shows" }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json(data.results);
}
