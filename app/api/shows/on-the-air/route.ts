
import { TVShow } from '@/app/entities/TVShow';
import { NextResponse } from 'next/server';


export async function GET() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air/?api_key=${process.env.TMDB_API_KEY}`);
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
}

const data = await res.json();
  const series: TVShow[] = data.results.map((show: TVShow) => ({
    adult: show.adult,
    chemin_fond: show.backdrop_path,
    genres_ids: show.genre_ids,
    id: show.id,
    pays_origine: show.origin_country,
    langue_originale: show.original_language,
    nom_original: show.original_name,
    description: show.overview,
    popularite: show.popularity,
    chemin_affiche: show.poster_path,
    date_premiere: show.first_air_date,
    nom: show.name,
    moyenne_votes: show.vote_average,
    nombre_votes: show.vote_count,
  }));

  return NextResponse.json(series);
}