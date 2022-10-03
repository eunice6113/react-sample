import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../shared/layouts/loader/Loadable';

/****Layouts*****/
const BlankLayout = Loadable(lazy(() => import('../shared/layouts/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../shared/layouts-admin/FullLayout')));

/***** Pages ****/
const NoticeList = Loadable(lazy(() => import('../pages/sample/NoticeList')));
const NoticeRegister = Loadable(lazy(() => import('../pages/sample/NoticeRegister')));
const NoticeDetail = Loadable(lazy(() => import('../pages/sample/NoticeDetail')));
const NoticeEdit = Loadable(lazy(() => import('../pages/sample/NoticeEdit')));

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
          {path: 'detail/:id', element: <NoticeDetail />},
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

export default adminRoutes;
