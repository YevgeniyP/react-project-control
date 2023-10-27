import { FC, ReactNode } from 'react';

import styles from './MovieList.module.css';

interface MovieListPropsInterface {
  children?: ReactNode;
}

export const MovieList: FC<MovieListPropsInterface> = ({ children }) => {
  return <div className={styles.MovieList}>{children}</div>;
};
