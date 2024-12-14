import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/app/entities/Movie";
import { useApplicationRepositoryContext } from "@/app/repository/ApplicationRepositoryContext";


export const useFetchNowPlayingMovies = () => {
  const { movieRepository } = useApplicationRepositoryContext();

  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey:["now-playing-movies"], 
    queryFn:async () => await movieRepository.getNowPlayingMovies()
});

  return { data: data, isLoading, isError }; 
};

export const useFetchPopularMovies = () => {
  const { movieRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey:["popular-movies"], 
    queryFn:async () => await movieRepository.getPopularMovies()
});

  return { data: data, isLoading, isError }; 
};

export const useFetchTopRatedMovies = () => {
  const { movieRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey:["top-rated-movies"], 
    queryFn:async () => await movieRepository.getTopRatedMovies()
});

  return { data: data, isLoading, isError }; 
};
