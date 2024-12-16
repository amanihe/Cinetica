import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

    const [moviesResponse, showsResponse] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`),
      fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${query}`),
    ]);

    if (!moviesResponse.ok || !showsResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch discover search results" }, { status: 500 });
    }

    const [movies, shows] = await Promise.all([moviesResponse.json(), showsResponse.json()]);

    return NextResponse.json({
      movies: movies.results || [],
      tvShows: shows.results || [],
    });
  
}
