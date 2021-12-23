
import { lazy } from 'react';

const AllRoutes = [
  {
    path: '/',
    component: lazy(() => import('pages/Home')),
    exact: true
  },
  {
    path: 'users',
    component: lazy(() => import('components/Users')),
    exact: true
  }
];

export default AllRoutes;