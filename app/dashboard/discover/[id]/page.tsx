"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useFetchDiscoverDetails } from "../use-cases/useFetchDiscoverDetails";
import { useRef } from "react";
import Image from "next/image";
import { Movie } from "@/app/entities/Movie";
import { TVShow } from "@/app/entities/TVShow";

export default function DiscoverDetailsPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const actorScrollRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);

  const validId = Array.isArray(id) ? id[0] : id || "";
  const { data, isLoading, isError } = useFetchDiscoverDetails(validId, type || "");

  if (!validId || !type) {
    return <div className="dark:text-white">Error: Invalid ID or Type</div>;
  }

  if (isLoading) return <div className="dark:text-white">Loading...</div>;
  if (isError || !data) return <div className="dark:text-white">Error fetching details</div>;

  const isMovie = type === "movie";
  const item = data as Movie | TVShow;

  const director = item.credits?.crew.find((member) => member.job === "Director")?.name;
  const composer = item.credits?.crew.find((member) => member.job === "Original Music Composer")?.name;
  const actors = item.credits?.cast.slice(0, 15) || [];
  const images = item.images?.backdrops.slice(0, 6) || [];

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-black dark:text-gray-100 min-h-screen w-full">
      <div className="flex flex-col lg:flex-row gap-6 bg-white dark:bg-gray-900 p-4 rounded shadow-md">
        <Image
          src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}
          alt={isMovie ? (item as Movie).title : (item as TVShow).name}
          width={400}
          height={500}
          className="rounded shadow-md object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 dark:text-gray-100">
            {isMovie ? (item as Movie).title : (item as TVShow).name}
            <span className="text-gray-500 dark:text-gray-400 text-xl">
              ({new Date(isMovie ? (item as Movie).release_date : (item as TVShow).first_air_date).getFullYear()})
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
            {item.genres?.map((g) => g.name).join(", ")}
          </p>
          <div className="flex items-center gap-4">
            <span className="bg-green-500 text-white font-bold px-4 py-1 rounded-full">
              {Math.round(item.vote_average * 10)}%
            </span>
            <span className="text-gray-500 dark:text-gray-400">Review score</span>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2 dark:text-gray-100">Synopsis</h2>
          <p className="text-gray-700 dark:text-gray-400">{item.overview}</p>
          <br/>
          <p><b>Director: </b><span className="font-medium">{director || "Unknown"}</span></p>
          <p><b>Composer: </b><span className="font-medium">{composer || "Unknown"}</span></p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 dark:text-gray-100">Credits</h2>
      <div className="relative bg-white dark:bg-gray-900 rounded shadow-md p-4">
        <button onClick={() => scrollLeft(actorScrollRef)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10">◀</button>
        <div ref={actorScrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
          {actors.map((actor) => (
            <div key={actor.id} className="flex-shrink-0 w-[120px] text-center">
              <Image src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : "https://via.placeholder.com/120x180?text=No+Image"} alt={actor.name} width={120} height={180} className="rounded-md shadow-md object-cover" />
              <h3 className="text-sm font-medium dark:text-gray-100">{actor.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scrollRight(actorScrollRef)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10">▶</button>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 dark:text-gray-100">Images</h2>
      <div className="relative bg-white dark:bg-gray-900 rounded shadow-md p-4">
        <button onClick={() => scrollLeft(imageScrollRef)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10">◀</button>
        <div ref={imageScrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
          {images.map((image, index) => (
            <Image key={index} src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt="Scene" width={300} height={200} className="rounded-md shadow-md object-cover" />
          ))}
        </div>
        <button onClick={() => scrollRight(imageScrollRef)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-2 shadow-md z-10">▶</button>
      </div>
    </div>
  );
}
