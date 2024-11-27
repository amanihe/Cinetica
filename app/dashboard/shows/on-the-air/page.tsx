"use client";

import { useOnTheAirShows } from "@/hooks/use-shows";


export default function PopularShows() {
  const { data, loading, error } = useOnTheAirShows();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">On The Air TV Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.map((show) => (
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