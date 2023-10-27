import { urls } from '../constants';
import { apiService } from './api.service';
import { GenreResponseInterface } from './types';

export const genreService = {
  getAll: () => apiService.get<GenreResponseInterface>(urls.genre.getAll),
};
