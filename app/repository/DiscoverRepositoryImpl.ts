import { Discover } from "../entities/Discover";
import { apiFetch } from "./api";

export class DiscoverRepositoryImpl {
    async getDiscover(): Promise<Discover> {
        return apiFetch<Discover>("/api/discover");
    }
}
