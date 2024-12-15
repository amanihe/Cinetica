export interface TVShow {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
    genres?: { id: number; name: string }[];
    credits?: {
      cast: { id: number; name: string; character: string; profile_path?: string }[];
      crew: { id: number; name: string; job: string }[];
    };
    images?: {
      backdrops: { file_path: string }[];
      posters: { file_path: string }[];
    };
        
  }
  
  
  