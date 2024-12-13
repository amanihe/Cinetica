import { useQuery } from "@tanstack/react-query";

export const useFetchShowDetails = (id: string) => {
    return useQuery({
        queryKey: ["show-details", id],
        queryFn: async () => {
            const res = await fetch(`/api/shows/${id}`);
            if (!res.ok) {
                throw new Error("Failed to fetch show details");
            }
            return res.json();
        },
        enabled: !!id, 
    });
};
