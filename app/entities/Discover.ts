import { Movie } from "./Movie";
import { TVShow } from "./TVShow";

export interface Discover{
    movies: Movie[];
    tvShows: TVShow[];
}