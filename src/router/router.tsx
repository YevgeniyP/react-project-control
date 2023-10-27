import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayout } from '../layouts';

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={'movies'} />,
      },
      {
        path: 'movies',
        lazy: async () => {
          const { MoviePage } = await import('../pages/MoviePage/MoviePage');
          return { Component: MoviePage };
        },
      },
      {
        path: 'movies/:id',
        lazy: async () => {
          const { MovieDetailPage } = await import(
            '../pages/MovieDetailPage/MovieDetailPage'
          );
          return { Component: MovieDetailPage };
        },
      },
      {
        path: 'genres',
        lazy: async () => {
          const { GenrePage } = await import('../pages/GenrePage/GenrePage');
          return { Component: GenrePage };
        },
        children: [
          {
            path: ':genre',
            lazy: async () => {
              const { MoviePage } = await import(
                '../pages/MoviePage/MoviePage'
              );
              return { Component: MoviePage };
            },
          },
        ],
      },
    ],
  },
]);
