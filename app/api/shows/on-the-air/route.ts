import { mapToTVShow } from '@/app/utils/mapData';
import { NextResponse } from 'next/server';

export async function GET() {
    console.log(process.env.TMDB_API_KEY);
    const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.TMDB_API_KEY}`);
    
    if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
    }

    const data = await res.json();
    const shows = data.results.map(mapToTVShow);

    return NextResponse.json(shows);
}
