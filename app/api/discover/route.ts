import { NextResponse } from 'next/server';

export async function GET() {
   
    const moviesRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`);
    const moviesData = await moviesRes.json();

  
    const tvShowsRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}`);
    const tvShowsData = await tvShowsRes.json();

  
    const data = {
      movies: moviesData,
      tvShows: tvShowsData
    };

    return NextResponse.json(data);
  }