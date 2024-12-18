import { TVShow } from "@/app/entities/TVShow";

export interface ShowsRepository {
  geOnTheAirShows(): Promise<TVShow[]>;
  getPopularShows(): Promise<TVShow[]>;
  getTopRatedShows(): Promise<TVShow[]>;
  getShowDetails(id: string): Promise<TVShow>;
  searchShows(query: string): Promise<TVShow[]>;


}
