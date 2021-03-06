import HomePage from './components/pages/HomePage';
import App from './App';
import UserListPage from './components/pages/UserListPage';
import AdminsListPage from './components/pages/AdminsListPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ProductsListPage from './components/pages/ProductsListPage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';

//  server side rendering react-router-config, exports Array of routes
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UserListPage,
        path: '/users',
      },
      {
        ...ProductsListPage,
        path: '/products',
      },
      {
        ...ProductDetailsPage,
        path: '/product/:slug',
      },
      {
        ...NotFoundPage,
        path: '',
      },
    ],
  },
];
