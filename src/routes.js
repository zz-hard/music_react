import {lazy} from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('./pages/homepages/home')),
        exact: true,
    },
    {
        path: '/login',
        component: lazy(() => import('./pages/login.js')),
        exact: true,
    },
    {
        path: '/home',
        component: lazy(() => import('./pages/home.js')),
        routes: [
            {
              path: '/home',
              component: lazy(() => import('./pages/homepages/home.js')),
              exact: true,
            },
            {
                path: '/home/bookingdetails',
                component: lazy(() => import('./pages/homepages/bookingdetails.js')),
                exact: true,
            },
            {
                path: '/home/chart',
                component: lazy(() => import('./pages/homepages/Chart.js')),
                exact: true,
            },
        ]
    },
    {
        path: '/community',
        component: lazy(() => import('./pages/community.js')),
        exact: true,
    },
    {
        path: '/history',
        component: lazy(() => import('./pages/history.js')),
        exact: true,
    },
    {
        path: '/personalCenter',
        component: lazy(() => import('./pages/personalCenter.js')),
        exact: true,
    },
    {
        path: '/releaseConcert',
        component: lazy(() => import('./pages/releaseConcert.js')),
        exact: true,
    },
    {
        path: '*',
        component: lazy(() => import('./pages/404')),
        exact: true,
      },
];
export default routers;