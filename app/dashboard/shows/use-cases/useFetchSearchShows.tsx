import { useQuery } from "@tanstack/react-query";
import { TVShow } from "@/app/entities/TVShow";
import { useApplicationRepositoryContext } from "@/app/repository/ApplicationRepositoryContext";

export const useFetchSearchShows = (query: string) => {
  const { tvShowsRepository } = useApplicationRepositoryContext();

  const { data, isLoading, isError } = useQuery<TVShow[]>({
    queryKey: ["search-shows", query],
    queryFn: async () => await tvShowsRepository.searchShows(query),
    enabled: !!query,
  });

  return { data, isLoading, isError };
};
