import { MovieInterface } from "../../types";

export interface MovieResponseInterface {
	page: number;
	results: MovieInterface[];
	total_pages: number;
	total_results: number;
}
