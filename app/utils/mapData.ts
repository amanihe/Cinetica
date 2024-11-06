
import { Movie } from '@/app/entities/Movie';
import { TVShow } from '@/app/entities/TVShow';

export function mapToMovie(data: Movie): Movie {
    return {
        adult: data.adult,
        backdrop_path: data.backdrop_path,
        genre_ids: data.genre_ids,
        id: data.id,
        original_language: data.original_language,
        original_title: data.original_title,
        overview: data.overview,
        popularity: data.popularity,
        poster_path: data.poster_path,
        release_date: data.release_date,
        title: data.title,
        video: data.video,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
    };
}

export function mapToTVShow(data: TVShow): TVShow {
    return {
        adult: data.adult,
        backdrop_path: data.backdrop_path,
        genre_ids: data.genre_ids,
        id: data.id,
        origin_country: data.origin_country,
        original_language: data.original_language,
        original_name: data.original_name,
        overview: data.overview,
        popularity: data.popularity,
        poster_path: data.poster_path,
        first_air_date: data.first_air_date,
        name: data.name,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
    };
}
