"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useFetchOnTheAirShows } from "@/app/dashboard/shows/use-cases/useFetchShows";
import { useFetchSearchShows } from "../use-cases/useFetchSearchShows";
import { useSearchParams } from "next/navigation";

function OnTheAirShowsContent({ query }: { query: string }) {
  const { data: onTheAirShows = [], isLoading, isError } = useFetchOnTheAirShows();
  const { data: searchedShows = [], isLoading: isSearching } = useFetchSearchShows(query);

  const shows = query.trim() ? searchedShows : onTheAirShows;

  if (isLoading || isSearching) return <div>Loading...</div>;
  if (isError) return <div>Error fetching TV shows</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">On The Air TV Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {shows.map((show) => (
          <Link href={`/dashboard/shows/${show.id}`} key={show.id}>
            <div className="border rounded shadow p-2">
              <img
                src={
                  show.poster_path
                    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                    : "https://via.placeholder.com/150x225?text=No+Image"
                }
                alt={show.name}
                className="w-full h-[320px] object-cover rounded"
              />
              <h3 className="text-sm font-medium mt-2">{show.name}</h3>
              <p className="text-xs text-gray-500">{show.first_air_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function OnTheAirShows() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnTheAirShowsContent query={query} />
    </Suspense>
  );
}
