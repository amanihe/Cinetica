import { useQuery } from "@tanstack/react-query";
import { TVShow } from "@/app/entities/TVShow";
import { useApplicationRepositoryContext } from "@/app/repository/ApplicationRepositoryContext";

export const useFetchShowDetails = (id: string) => {
  const { tvShowsRepository } = useApplicationRepositoryContext();

  return useQuery<TVShow>({
    queryKey: ["show-details", id],
    queryFn: async () => await tvShowsRepository.getShowDetails(id),
    enabled: !!id,
  });
};
