
"use client";

import { useEffect, useState } from "react";

export default function DiscoverPage() {
  const [data, setData] = useState<{ movies: any[]; tvShows: any[] }>({
    movies: [],
    tvShows: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/discover");
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.movies.map((movie) => (
          <div key={movie.id} className="border rounded shadow p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded"
            />
            <h3 className="text-sm font-medium mt-2">{movie.title}</h3>
            <p className="text-xs text-gray-500">{movie.release_date}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">TV Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.tvShows.map((show) => (
          <div key={show.id} className="border rounded shadow p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="w-full h-auto rounded"
            />
            <h3 className="text-sm font-medium mt-2">{show.name}</h3>
            <p className="text-xs text-gray-500">{show.first_air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
