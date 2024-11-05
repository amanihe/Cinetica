import { NextResponse } from 'next/server';

export async function GET() {
    console.log(process.env.TMDB_API_KEY)
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`);
  const data = await res.json();
  return NextResponse.json(data);
}