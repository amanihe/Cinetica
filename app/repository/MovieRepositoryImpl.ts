import { apiFetch } from "./api";
import { Movie } from "@/app/entities/Movie";
import { MoviesRepository } from "./interfaces/MoviesRepository";

export class MovieRepositoryImpl implements MoviesRepository {
  async getPopularMovies(): Promise<Movie[]> {
    return apiFetch<Movie[]>("/api/movies/popular");
  }

  async getNowPlayingMovies(): Promise<Movie[]> {
    return apiFetch<Movie[]>("/api/movies/now-playing");
  }

  async getTopRatedMovies(): Promise<Movie[]> {
    return apiFetch<Movie[]>("/api/movies/top-rated");
  }
  async getMovieDetails(id: string): Promise<Movie> {
    return apiFetch<Movie>(`/api/movies/${id}`);
  }
}
