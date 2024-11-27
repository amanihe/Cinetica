import { Movie } from "../entities/Movie";
import { apiFetch } from "./api";

export async function fetchTopRatedMovies(): Promise<Movie[]> {
    return apiFetch<Movie[]>("/api/movies/top-rated");
  }
  
export async function fetchNowPlayingMovies(): Promise<Movie[]> {
    return apiFetch<Movie[]>("/api/movies/now-playing");
  }
  
  export async function fetchPopularMovies(): Promise<Movie[]> {
    return apiFetch<Movie[]>("/api/movies/popular");
  }