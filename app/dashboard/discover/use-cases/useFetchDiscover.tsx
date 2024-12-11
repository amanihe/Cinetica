import { useQuery } from "@tanstack/react-query";
import { Discover } from "@/app/entities/Discover";
import { useApplicationRepositoryContext } from "@/app/repository/interfaces/ApplicationRepositoryContext";


export const useFetchDiscover = () => {
    const { discoverRepository } = useApplicationRepositoryContext();
    const { data, isLoading, isError } = useQuery<Discover>({
        queryKey: ["discover"],
        queryFn: async () => await discoverRepository.getDiscover(),
    });

    return { data, isLoading, isError };
};
