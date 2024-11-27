import { Movie } from "../entities/Movie";
import { TVShow } from "../entities/TVShow";
import { apiFetch } from "./api";

export interface DiscoverResponse {
    movies: Movie[];
    tvShows: TVShow[];
  }
  
export async function fetchDiscover(): Promise<DiscoverResponse> {
  return apiFetch<DiscoverResponse>("/api/discover");
}
