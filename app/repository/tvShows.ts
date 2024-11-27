import { TVShow } from "../entities/TVShow";
import { apiFetch } from "./api";



export async function fetchOnTheAirShows(): Promise<TVShow[]> {
  return apiFetch<TVShow[]>("/api/shows/on-the-air");
}

export async function fetchPopularShows(): Promise<TVShow[]> {
  return apiFetch<TVShow[]>("/api/shows/popular");
}


export async function fetchTopRatedShows(): Promise<TVShow[]> {
  return apiFetch<TVShow[]>("/api/shows/top-rated");
}
