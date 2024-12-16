import { Movie } from "@/app/entities/Movie";

export interface MoviesRepository {
  getPopularMovies(): Promise<Movie[]>;
  getNowPlayingMovies(): Promise<Movie[]>;
  getTopRatedMovies(): Promise<Movie[]>;
  getMovieDetails(id: string): Promise<Movie>;
  searchMovies(query: string): Promise<Movie[]>; 

}
