import { Discover } from "@/app/entities/Discover";

export interface DiscoverRepository {
    getDiscover(): Promise<Discover>;
}
