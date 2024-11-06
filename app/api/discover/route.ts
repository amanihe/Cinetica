import { mapToMovie, mapToTVShow } from '@/app/utils/mapData';
import { NextResponse } from 'next/server';

export async function GET() {
    const moviesRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`);
    const moviesData = await moviesRes.json();
    const movies = moviesData.results.map(mapToMovie);

    const tvShowsRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}`);
    const tvShowsData = await tvShowsRes.json();
    const tvShows = tvShowsData.results.map(mapToTVShow);

    const data = {
        movies,
        tvShows,
    };

    return NextResponse.json(data);
}
