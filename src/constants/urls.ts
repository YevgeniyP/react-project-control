export const baseURL = import.meta.env.VITE_API_URL;
export const baseImageURL = import.meta.env.VITE_API_IMAGE_URL;
export const apiToken = import.meta.env.VITE_API_TOKEN;

const movies = '/discover/movie';
const movie = '/movie';
const genres = '/genre/movie/list';

export const urls = {
  movie: {
    getAll: movies,
    getById: (id: number) => `${movie}/${id}`,
  },
  genre: {
    getAll: genres,
  },
};
