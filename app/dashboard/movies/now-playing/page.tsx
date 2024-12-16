"use client";

import Link from "next/link";
import { useFetchNowPlayingMovies } from "../use-cases/useFetchMovies";
import { useFetchSearchMovies } from "../use-cases/useFetchSearchMovies";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NowPlayingMoviesContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data: nowPlayingMovies = [], isLoading, isError } = useFetchNowPlayingMovies();
  const { data: searchedMovies = [], isLoading: isSearching } = useFetchSearchMovies(query);

  const movies = query.trim() ? searchedMovies : nowPlayingMovies;

  if (isLoading || isSearching) return <div>Loading...</div>;
  if (isError) return <div>Error fetching movies</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Now Playing Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <Link href={`/dashboard/movies/${movie.id}`} key={movie.id}>
            <div className="border rounded shadow p-2">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/150x225?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-[320px] rounded"
              />
              <h3 className="text-sm font-medium mt-2">{movie.title}</h3>
              <p className="text-xs text-gray-500">{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function NowPlayingMovies() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NowPlayingMoviesContent />
    </Suspense>
  );
}
