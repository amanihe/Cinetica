"use client";

import { useParams } from "next/navigation";
import { useFetchMovieDetails } from "../use-cases/useFetchMovieDetails";
import { useRef } from "react";

type CrewMember = { id: number; name: string; job: string };
type CastMember = { id: number; name: string; character: string; profile_path?: string };
type Image = { file_path: string };

export default function MovieDetailsPage() {
  const { id } = useParams();
  const actorScrollRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const validId = Array.isArray(id) ? id[0] : id || "";

  const { data, isLoading, isError } = useFetchMovieDetails(validId);

  if (!id || Array.isArray(id)) {
    return <div>Error: Invalid movie ID</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching movie details</div>;

  const director = data.credits?.crew.find(
    (member: CrewMember) => member.job === "Director"
  )?.name;

  const composer = data.credits?.crew.find(
    (member: CrewMember) => member.job === "Original Music Composer"
  )?.name;

  const actors = data.credits?.cast.slice(0, 15); 
  const images = data.images?.backdrops.slice(0, 6);

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
    <div className="p-4 bg-gray-100 min-h-screen w-full">
      <div className="flex flex-col lg:flex-row gap-6 bg-white p-4 rounded shadow-md">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="w-full lg:w-1/3 rounded shadow-md object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            {data.title}{" "}
            <span className="text-gray-500 text-xl">
              ({new Date(data.release_date).getFullYear()})
            </span>
          </h1>
          <p className="text-gray-700 text-sm mb-4">
            {data.genres?.map((g: { name: string }) => g.name).join(", ")}
          </p>
          <div className="flex items-center gap-4">
            <span className="bg-green-500 text-white font-bold px-4 py-1 rounded-full">
              {Math.round(data.vote_average * 10)}%
            </span>
            <span className="text-gray-500">Score d'évaluation</span>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Synopsis</h2>
          <p className="text-gray-700">{data.overview}</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Credits</h2>
          <p>Director: <span className="font-medium">{director || "Unknown"}</span></p>
          <p>Composer: <span className="font-medium">{composer || "Unknown"}</span></p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Distribution des rôles</h2>
      <div className="relative bg-white rounded shadow-md p-4">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md z-10"
          onClick={() => scrollLeft(actorScrollRef)}
        >
          ◀
        </button>
        <div ref={actorScrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
          {actors?.map((actor: CastMember) => (
            <div
              key={actor.id}
              className="flex-shrink-0 w-[120px] text-center"
            >
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/120x180?text=No+Image"
                }
                alt={actor.name}
                className="w-24 h-36 rounded-md shadow-md mb-2 object-cover"
              />
              <h3 className="text-sm font-medium">{actor.name}</h3>
              <p className="text-xs text-gray-500">{actor.character}</p>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md z-10"
          onClick={() => scrollRight(actorScrollRef)}
        >
          ▶
        </button>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Images principales</h2>
      <div className="relative bg-white rounded shadow-md p-4">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md z-10"
          onClick={() => scrollLeft(imageScrollRef)}
        >
          ◀
        </button>
        <div ref={imageScrollRef} className="flex overflow-x-auto no-scrollbar gap-4">
          {images?.map((image: Image, index: number) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt="Movie Scene"
              className="rounded-md shadow-md w-[300px] h-auto flex-shrink-0 object-cover"
            />
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md z-10"
          onClick={() => scrollRight(imageScrollRef)}
        >
          ▶
        </button>
      </div>
    </div>
  );
}