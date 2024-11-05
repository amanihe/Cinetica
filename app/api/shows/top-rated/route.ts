import { TVShow } from '@/app/entities/TVShow';
import { NextResponse } from 'next/server';


export async function GET() {
    console.log(process.env.TMDB_API_KEY);
    const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}`);
    
    if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
    }

    const data = await res.json();

    const shows: TVShow[] = data.results.map((show: TVShow) => ({
        adultt: show.adult,
        backdrop_path: show.backdrop_path,
        genre_ids: show.genre_ids,
        id: show.id,
        origin_country: show.origin_country,
        original_language: show.original_language,
        original_name: show.original_name,
        overview: show.overview,
        popularity: show.popularity,
        poster_path: show.poster_path,
        first_air_date: show.first_air_date,
        name: show.name,
        vote_average: show.vote_average,
        vote_count: show.vote_count,
    }));

    return NextResponse.json(shows);
}