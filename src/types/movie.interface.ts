export interface MovieInterface {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  overview: string;
  popularity: number;
  release_date: Date;
  vote_average: number;
  vote_count: number;
  video: boolean;
  adult: boolean;
  genre_ids: number[];
}
