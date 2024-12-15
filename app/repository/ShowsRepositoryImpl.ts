
import { apiFetch } from "./api";
import { TVShow } from "@/app/entities/TVShow";
import { ShowsRepository } from "./interfaces/ShowsRepository";

export class ShowsRepositoryImpl implements ShowsRepository {
  async geOnTheAirShows(): Promise<TVShow[]> {
    return apiFetch<TVShow[]>("/api/shows/on-the-air");
  }

  async getPopularShows(): Promise<TVShow[]> {
    return apiFetch<TVShow[]>("/api/shows/popular");
  }

  async getTopRatedShows(): Promise<TVShow[]> {
    return apiFetch<TVShow[]>("/api/shows/top-rated");
  }
  async getShowDetails(id: string): Promise<TVShow> {
    return apiFetch<TVShow>(`/api/shows/${id}`);
  }
}
