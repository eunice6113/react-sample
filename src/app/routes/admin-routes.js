import { DOM_KEY_LOCATION } from '@testing-library/user-event/dist/keyboard/types';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { OuterExpressionKinds } from 'typescript';
import Loadable from '../shared/layouts/loader/Loadable';

/****Layouts*****/
const BlankLayout = Loadable(lazy(() => import('../shared/layouts/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../shared/layouts-admin/FullLayout')));

/***** Pages ****/
const NoticeList = Loadable(lazy(() => import('../pages-admin/mng/stm/ntc/CLPNTCM91010')));
const NoticeRegister = Loadable(lazy(() => import('../pages/sample/CLPNTCM91030')));
const NoticeDetail = Loadable(lazy(() => import('../pages/sample/CLPNTCM91020')));
const NoticeEdit = Loadable(lazy(() => import('../pages/sample/CLPNTCM91020')));

const Error = Loadable(lazy(() => import('../pages/auth/Error')));

/*****Routes******/
const adminRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: 'notice', 
        name: 'notice', 
        children: [
          {path: 'list', element: <NoticeList />},
          {path: 'register', element: <NoticeRegister />},
          {path: 'detail/:id'
          , element: <NoticeDetail />},
          {path: 'edit/:id', element: <NoticeEdit />},
        ],
      },
    ]
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default adminRoutes