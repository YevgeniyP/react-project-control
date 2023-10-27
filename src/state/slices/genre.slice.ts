import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import {
  ErrorResponseInterface,
  GenreResponseInterface,
  genreService,
} from '../../services';
import { GenreInterface } from '../../types';

interface GenreSliceInterface {
  isLoading: boolean;
  genreList: GenreInterface[];
  errors: string[];
}

const initialState: GenreSliceInterface = {
  isLoading: false,
  genreList: [],
  errors: [],
};

const getAllGenres = createAsyncThunk<
  GenreResponseInterface,
  void,
  { rejectValue: string[] }
>('getAllGenres', async (_, { rejectWithValue }) => {
  try {
    const { data } = await genreService.getAll();
    return data;
  } catch (e) {
    const error = (await e) as ErrorResponseInterface;
    return rejectWithValue(error.response.data.errors);
  }
});

export const genreSlice = createSlice({
  name: 'Genres',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllGenres.fulfilled, (state, action) => {
        state.genreList = action.payload.genres;
        state.errors = [];
      })
      .addCase(getAllGenres.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addMatcher(isPending(), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isRejected(), (state) => {
        state.isLoading = false;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.isLoading = false;
      }),
});

export const genreAction = {
  ...genreSlice.actions,
  getAllGenres,
};
