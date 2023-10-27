import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import {
  ErrorResponseInterface,
  MovieResponseInterface,
  movieService,
} from '../../services';
import { MovieDetailInterface, MovieInterface } from '../../types';

interface MovieSliceInterface {
  movieList: MovieInterface[];
  totalPage: number;
  isLoading: boolean;
  errors: string[];
  currentMovie: MovieDetailInterface;
}

const initialState: MovieSliceInterface = {
  movieList: [],
  totalPage: 0,
  isLoading: false,
  errors: [],
  currentMovie: undefined,
};

const getAllMovies = createAsyncThunk<
  MovieResponseInterface,
  { page: number; genre: string },
  { rejectValue: string[] }
>('getAllMovies', async ({ page, genre }, { rejectWithValue }) => {
  try {
    const { data } = await movieService.getAll(page, genre);
    return data;
  } catch (e) {
    const error = (await e) as ErrorResponseInterface;
    return rejectWithValue(error.response.data.errors);
  }
});

const getMovieById = createAsyncThunk<
  MovieDetailInterface,
  number,
  { rejectValue: string }
>('getMovieById', async (movieId, { rejectWithValue }) => {
  try {
    const { data } = await movieService.getById(movieId);
    return data;
  } catch (e) {
    const error = (await e) as ErrorResponseInterface;
    return rejectWithValue(error.response.data.status_message);
  }
});

export const movieSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.movieList = action.payload.results;
        state.totalPage =
          action.payload.total_pages > 500 ? 500 : action.payload.total_pages;
        state.errors = [];
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.currentMovie = action.payload;
        state.errors = [];
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.errors.push(action.payload);
      })
      .addMatcher(isPending(), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.isLoading = false;
      })
      .addMatcher(isRejected(), (state) => {
        state.isLoading = false;
      }),
});

export const movieAction = {
  ...movieSlice.actions,
  getAllMovies,
  getMovieById,
};
