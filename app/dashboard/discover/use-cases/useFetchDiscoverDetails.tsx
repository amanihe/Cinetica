import { useQuery } from "@tanstack/react-query";

export const useFetchDiscoverDetails = (id: string, type: string) => {
  return useQuery({
    queryKey: ["discover-details", id, type],
    queryFn: async () => {
      const res = await fetch(`/api/discover/${id}?type=${type}`);
      if (!res.ok) {
        throw new Error("Failed to fetch discover details");
      }
      return res.json();
    },
    enabled: !!id && !!type, 
  });
};
