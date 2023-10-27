import './index.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { store } from './state';

const app = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

app.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
