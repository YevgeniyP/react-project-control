import { FC, useEffect } from 'react';

import { GenreComponent } from '../../components';
import { useAppDispatch } from '../../hooks';
import { genreAction } from '../../state';

interface GenrePagePropsInterface {}

export const GenrePage: FC<GenrePagePropsInterface> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(genreAction.getAllGenres());
  }, [dispatch]);
  return (
    <div className={['container'].join(', ')}>
      <GenreComponent />
    </div>
  );
};
