import { urls } from "../constants";
import { MovieDetailInterface } from "../types";
import { apiService } from "./api.service";
import { MovieResponseInterface } from "./types";

export const movieService = {
	getAll: (page: number) =>
		apiService.get<MovieResponseInterface>(urls.movie.getAll, {
			params: { page },
		}),
	getById: (id: number) =>
		apiService.get<MovieDetailInterface>(urls.movie.getById(id)),
};
