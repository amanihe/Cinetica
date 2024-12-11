import { Movie } from "@/app/entities/Movie";

export interface MoviesRepository {
  getPopularMovies(): Promise<Movie[]>;
  getNowPlayingMovies(): Promise<Movie[]>;
  getTopRatedMovies(): Promise<Movie[]>;
}
