import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/app/entities/Movie";
import { useApplicationRepositoryContext } from "@/app/repository/ApplicationRepositoryContext";

export const useFetchMovieDetails = (id: string) => {
  const { movieRepository } = useApplicationRepositoryContext();

  return useQuery<Movie>({
    queryKey: ["movie-details", id],
    queryFn: async () => await movieRepository.getMovieDetails(id),
    enabled: !!id,
  });
};
