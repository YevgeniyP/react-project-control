import { GenreInterface } from ".";

export interface MovieDetailInterface {
	id: number;
	title: string;
	original_title: string;
	poster_path: string;
	backdrop_path: string;
	adult: false;
	budget: number;
	genres: GenreInterface[];
	homepage: string;
	imdb_id: string;
	original_language: string;
	overview: string;
	popularity: number;
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	tagline: string;
	video: false;
	vote_average: number;
	vote_count: number;
}
