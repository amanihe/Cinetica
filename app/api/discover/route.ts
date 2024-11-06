import { mapToMovie, mapToTVShow } from '@/app/utils/mapData';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const moviesRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`);
        if (!moviesRes.ok) throw new Error('Failed to fetch movies');
        const moviesData = await moviesRes.json();
        const movies = moviesData.results ? moviesData.results.map(mapToMovie) : [];

        const tvShowsRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}`);
        if (!tvShowsRes.ok) throw new Error('Failed to fetch TV shows');
        const tvShowsData = await tvShowsRes.json();
        const tvShows = tvShowsData.results ? tvShowsData.results.map(mapToTVShow) : [];

        const data = { movies, tvShows };
        return NextResponse.json(data);

    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
