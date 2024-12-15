import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/app/entities/Movie";
import { TVShow } from "@/app/entities/TVShow";
import { useApplicationRepositoryContext } from "@/app/repository/ApplicationRepositoryContext";

export const useFetchDiscoverDetails = (id: string, type: string) => {
  const { discoverRepository } = useApplicationRepositoryContext();

  return useQuery<Movie | TVShow>({
    queryKey: ["discover-details", id, type],
    queryFn: async () => await discoverRepository.getDiscoverDetails(id, type),
    enabled: !!id && !!type,
  });
};
