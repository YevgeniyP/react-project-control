import { Pagination } from '@mui/material';
import { FC, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { MovieComponent } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { movieAction } from '../../state';

interface MoviePagePropsInterface {}

export const MoviePage: FC<MoviePagePropsInterface> = () => {
  const dispatch = useAppDispatch();
  const { movieList, totalPage } = useAppSelector((state) => state.movie);
  const [query, setQuery] = useSearchParams({ page: '1' });
  const { genre } = useParams();

  const page = +query.get('page');

  useEffect(() => {
    dispatch(movieAction.getAllMovies({ page, genre }));
  }, [dispatch, page, genre]);
  return (
    <div className={['container'].join(', ')}>
      <MovieComponent movies={movieList} />
      <div className={['paginationElement'].join(',')}>
        <Pagination
          size="large"
          page={page}
          defaultPage={page}
          count={totalPage}
          onChange={(_, page) => setQuery({ page: page.toString() })}
        />
      </div>
    </div>
  );
};
