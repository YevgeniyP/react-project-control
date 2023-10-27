import { configureStore } from '@reduxjs/toolkit';

import { genreSlice, movieSlice } from './slices';

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    genre: genreSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
