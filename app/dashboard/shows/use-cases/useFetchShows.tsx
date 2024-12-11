import { useQuery } from "@tanstack/react-query";
import { TVShow } from "@/app/entities/TVShow";
import { useApplicationRepositoryContext } from "@/app/repository/interfaces/ApplicationRepositoryContext";



export const useFetchOnTheAirShows = () => {
  const { tvShowsRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<TVShow[]>({
    queryKey:["on-the-air-shows"], 
    queryFn:async () => await tvShowsRepository.geOnTheAirShows()
});

  return { data: data, isLoading, isError }; 
};

export const useFetchPopularShows = () => {
  const { tvShowsRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<TVShow[]>({
    queryKey:["popular-shows"], 
    queryFn:async () => await tvShowsRepository.getPopularShows()
});

  return { data: data, isLoading, isError }; 
};

export const useFetchTopRatedShows = () => {
  const { tvShowsRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<TVShow[]>({
    queryKey:["top-rated-shows"], 
    queryFn:async () => await tvShowsRepository.getTopRatedShows()
});

  return { data: data, isLoading, isError }; 
};
