"use client";

import { useFetchDiscover } from "@/app/dashboard/discover/use-cases/useFetchDiscover";
import { useFetchSearchDiscover } from "@/app/dashboard/discover/use-cases/useFetchSearchDiscover";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";

export default function DiscoverContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data: defaultDiscover, isLoading, isError } = useFetchDiscover();
  const { data: searchedDiscover, isLoading: isSearching } = useFetchSearchDiscover(query);

  const data = query.trim() ? searchedDiscover : defaultDiscover;

  const movieScrollRef = useRef<HTMLDivElement>(null);
  const tvShowScrollRef = useRef<HTMLDivElement>(null);

  if (isLoading || isSearching) return <div>Loading...</div>;
  if (isError || !data) return <div>Error fetching data</div>;

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) ref.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) ref.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="p-6">
      {data.movies.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Discover Movies</h2>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10"
              onClick={() => scrollLeft(movieScrollRef)}
            >
              ◀
            </button>
            <div ref={movieScrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
              {data.movies.map((movie) => (
                <Link
                  href={{ pathname: `/dashboard/discover/${movie.id}`, query: { type: "movie" } }}
                  key={movie.id}
                >
                  <div className="border rounded shadow p-2 min-w-[150px] h-[300px] flex flex-col items-center dark:bg-gray-900">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "https://via.placeholder.com/150x225?text=No+Image"
                      }
                      alt={movie.title}
                      className="w-full h-[225px] object-cover rounded"
                    />
                    <h3 className="text-sm font-medium mt-2">{movie.title}</h3>
                    <p className="text-xs text-gray-500">{movie.release_date}</p>
                  </div>
                </Link>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10"
              onClick={() => scrollRight(movieScrollRef)}
            >
              ▶
            </button>
          </div>
        </>
      )}

      {data.tvShows.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Discover TV Shows</h2>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10"
              onClick={() => scrollLeft(tvShowScrollRef)}
            >
              ◀
            </button>
            <div ref={tvShowScrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
              {data.tvShows.map((show) => (
                <Link
                  href={{ pathname: `/dashboard/discover/${show.id}`, query: { type: "tv" } }}
                  key={show.id}
                >
                  <div className="border rounded shadow p-2 min-w-[150px] h-[300px] flex flex-col items-center dark:bg-gray-900">
                    <img
                      src={
                        show.poster_path
                          ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                          : "https://via.placeholder.com/150x225?text=No+Image"
                      }
                      alt={show.name}
                      className="w-full h-[225px] object-cover rounded"
                    />
                    <h3 className="text-sm font-medium mt-2">{show.name}</h3>
                    <p className="text-xs text-gray-500">{show.first_air_date}</p>
                  </div>
                </Link>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10"
              onClick={() => scrollRight(tvShowScrollRef)}
            >
              ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
}
