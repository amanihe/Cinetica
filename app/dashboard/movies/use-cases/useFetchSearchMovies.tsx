import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/app/entities/Movie";
import { useApplicationRepositoryContext } from "@/app/repository/ApplicationRepositoryContext";

export const useFetchSearchMovies = (query: string) => {
  const { movieRepository } = useApplicationRepositoryContext();

  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["search-movies", query],
    queryFn: async () => await movieRepository.searchMovies(query),
    enabled: !!query, 
  });

  return { data, isLoading, isError };
};
