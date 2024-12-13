export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  credits?: {
      cast: { id: number; name: string; character: string }[]; 
      crew: { id: number; name: string; job: string }[];      
  };
  images?: {
      backdrops: { file_path: string }[];  
      posters: { file_path: string }[];   
  };
}
