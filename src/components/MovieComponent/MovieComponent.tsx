import { FC } from 'react';

import { MovieInterface } from '../../types';
import { MovieList } from './MovieList/MovieList';
import { MovieListCard } from './MovieListCard/MovieListCard';

interface MovieComponentPropsInterface {
  movies: MovieInterface[];
}

export const MovieComponent: FC<MovieComponentPropsInterface> = ({
  movies,
}) => {
  return (
    <>
      <MovieList>
        {movies.map((movie) => (
          <MovieListCard key={movie.id} movie={movie} />
        ))}
      </MovieList>
    </>
  );
};
