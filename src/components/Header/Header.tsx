import { LinearProgress } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { UserInfo } from './UserInfo/UserInfo';

interface HeaderPropsInterface {}

export const Header: FC<HeaderPropsInterface> = () => {
  const { isLoading } = useAppSelector((state) => state.movie);
  const navigate = useNavigate();
  return (
    <div>
      <header className={styles.Header}>
        <div>
          <Logo />
        </div>
        <nav>
          <menu className={styles.Header_menu}>
            <li onClick={() => navigate('movies')}>Movies</li>
            <li onClick={() => navigate('genres')}>Genres</li>
          </menu>
        </nav>
        <div>
          <UserInfo />
        </div>
      </header>
      {isLoading && <LinearProgress />}
    </div>
  );
};
