import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MovieDetailComponent } from '../../components';
import { useAppDispatch } from '../../hooks';
import { movieAction } from '../../state';
import styles from './MovieDetailPage.module.css';

interface MovieDetailPagePropsInterface {}

export const MovieDetailPage: FC<MovieDetailPagePropsInterface> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(movieAction.getMovieById(+id));
  }, [dispatch, id]);
  return (
    <div className={['container'].join(', ')}>
      <span
        onClick={() => navigate(-1)}
        className={styles.MovieDetailPage_backButton}
      >
        &larr; Back
      </span>
      <MovieDetailComponent />
    </div>
  );
};
