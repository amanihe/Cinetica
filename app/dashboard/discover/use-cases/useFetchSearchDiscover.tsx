import { useQuery } from "@tanstack/react-query";
import { Discover } from "@/app/entities/Discover";
import { useApplicationRepositoryContext } from "@/app/repository/ApplicationRepositoryContext";

export const useFetchSearchDiscover = (query: string) => {
  const { discoverRepository } = useApplicationRepositoryContext();

  const { data, isLoading, isError } = useQuery<Discover>({
    queryKey: ["search-discover", query],
    queryFn: async () => await discoverRepository.searchDiscover(query),
    enabled: !!query,
  });

  return { data, isLoading, isError };
};
