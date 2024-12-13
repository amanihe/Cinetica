import { useQuery } from "@tanstack/react-query";

export const useFetchMovieDetails = (id: string) => {
    return useQuery({
        queryKey: ["movie-details", id],
        queryFn: async () => {
            const res = await fetch(`/api/movies/${id}`);
            if (!res.ok) {
                throw new Error("Failed to fetch movie details");
            }
            return res.json();
        },
        enabled: !!id, 
    });
};
