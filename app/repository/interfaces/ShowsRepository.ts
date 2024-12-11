import { TVShow } from "@/app/entities/TVShow";

export interface ShowsRepository {
  geOnTheAirShows(): Promise<TVShow[]>;
  getPopularShows(): Promise<TVShow[]>;
  getTopRatedShows(): Promise<TVShow[]>;
}
