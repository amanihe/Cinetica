import { Discover } from "../entities/Discover";
import { Movie } from "../entities/Movie";
import { TVShow } from "../entities/TVShow";
import { apiFetch } from "./api";

export class DiscoverRepositoryImpl {
    async getDiscover(): Promise<Discover> {
        return apiFetch<Discover>("/api/discover");
    }
    async getDiscoverDetails(id: string, type: string): Promise<Movie | TVShow> {
        const url = `/api/discover/${id}?type=${type}`;
        if (type === "movie") {
          return apiFetch<Movie>(url);
        } else if (type === "tv") {
          return apiFetch<TVShow>(url);
        }
        throw new Error("Invalid type");
      }
      async searchDiscover(query: string): Promise<Discover> {
        return apiFetch<Discover>(`/api/discover/search?query=${query}`);
      }
}
