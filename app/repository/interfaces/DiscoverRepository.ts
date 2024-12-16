import { Discover } from "@/app/entities/Discover";

export interface DiscoverRepository {
    getDiscover(): Promise<Discover>;
    getDiscoverDetails(id: string, type: string): Promise<Discover>;
    searchDiscover(query: string): Promise<Discover>; 

}
