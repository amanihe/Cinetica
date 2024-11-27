import { Movie } from "@/app/entities/Movie";
import { TVShow } from "@/app/entities/TVShow";
import { fetchDiscover } from "@/app/repository/discover";
import { useState, useEffect } from "react";

export function useDiscover() {
  const [data, setData] = useState<{ movies: Movie[]; tvShows: TVShow[] }>({
    movies: [],
    tvShows: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await fetchDiscover();
        setData(result);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
