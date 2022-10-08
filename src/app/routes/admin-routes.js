import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../shared/layouts/loader/Loadable';

//:::::::::::::::::::::::::::::::::::::::: Layouts ::::::::::::::::::::::::::::::::::::::::::

const BlankLayout = Loadable(lazy(() => import('../shared/layouts/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../shared/layouts-admin/FullLayout')));

// :::::::::::::::::::::::::::::::::::::::: Pages :::::::::::::::::::::::::::::::::::::::::::

//사이트 관리 ==================================================================================
//메뉴 관리
const CLPMNUM90900 = Loadable(lazy(() => import('../pages-admin/mng/stm/mnu/CLPMNUM90900')));

//공지사항
const CLPNTCM91010 = Loadable(lazy(() => import('../pages-admin/mng/stm/ntc/CLPNTCM91010')));
const CLPNTCM91020 = Loadable(lazy(() => import('../pages-admin/mng/stm/ntc/CLPNTCM91020')));
const CLPNTCM91030 = Loadable(lazy(() => import('../pages-admin/mng/stm/ntc/CLPNTCM91030'))); 
// const NoticeDetail = Loadable(lazy(() => import('../pages/sample/CLPNTCM91020')));

//자주묻는질문
const CLPQNAM91410 = Loadable(lazy(() => import('../pages-admin/mng/stm/qna/CLPQNAM91410')));
const CLPQNAM91520 = Loadable(lazy(() => import('../pages-admin/mng/stm/qna/CLPQNAM91520')));
const CLPQNAM91530 = Loadable(lazy(() => import('../pages-admin/mng/stm/qna/CLPQNAM91530')));

// 건의및개선
const CLPFAQM91810 = Loadable(lazy(() => import('../pages-admin/mng/stm/faq/CLPFAQM91810')));
const CLPFAQM91920 = Loadable(lazy(() => import('../pages-admin/mng/stm/faq/CLPFAQM91920')));
const CLPFAQM91930 = Loadable(lazy(() => import('../pages-admin/mng/stm/faq/CLPFAQM91930')));

// 팝업관리
const CLPPOPM92110 = Loadable(lazy(() => import('../pages-admin/mng/stm/pop/CLPPOPM92110')));
const CLPPOPM92220 = Loadable(lazy(() => import('../pages-admin/mng/stm/pop/CLPPOPM92220')));
const CLPPOPM92230 = Loadable(lazy(() => import('../pages-admin/mng/stm/pop/CLPPOPM92230')));

// 소통공간
const CLPCMNM95410 = Loadable(lazy(() => import('../pages-admin/mng/stm/cmn/CLPCMNM95410')));
const CLPCMNM95520 = Loadable(lazy(() => import('../pages-admin/mng/stm/cmn/CLPCMNM95520')));
const CLPCMNM95530 = Loadable(lazy(() => import('../pages-admin/mng/stm/cmn/CLPCMNM95530')));

// 메인배너
const CLPMBNM95810 = Loadable(lazy(() => import('../pages-admin/mng/stm/mbn/CLPMBNM95810')));
const CLPMBNM95920 = Loadable(lazy(() => import('../pages-admin/mng/stm/mbn/CLPMBNM95920')));
const CLPMBNM95930 = Loadable(lazy(() => import('../pages-admin/mng/stm/mbn/CLPMBNM95930')));

// 설문관리 ===================================================================================
const CLPSURM93310 = Loadable(lazy(() => import('../pages-admin/mng/qsm/CLPSURM93310')));
const CLPSURM93420 = Loadable(lazy(() => import('../pages-admin/mng/qsm/CLPSURM93420')));
const CLPSURM93600 = Loadable(lazy(() => import('../pages-admin/mng/qsm/CLPSURM93600')));

// 이벤트관리 ==================================================================================
const CLPEVNM93710 = Loadable(lazy(() => import('../pages-admin/mng/evm/CLPEVNM93710')));
const CLPEVNM93820 = Loadable(lazy(() => import('../pages-admin/mng/evm/CLPEVNM93820')));
const CLPEVNM93830 = Loadable(lazy(() => import('../pages-admin/mng/evm/CLPEVNM93830')));

// 매뉴얼 관리 =================================================================================
const CLPMNNM94110 = Loadable(lazy(() => import('../pages-admin/mng/mnm/CLPMNNM94110')));
const CLPMNNM94220 = Loadable(lazy(() => import('../pages-admin/mng/mnm/CLPMNNM94220')));
const CLPMNNM94230 = Loadable(lazy(() => import('../pages-admin/mng/mnm/CLPMNNM94230')));

// 신청하기 관리 ================================================================================
//서비스 카탈로그 관리
const CLPCATM94510 = Loadable(lazy(() => import('../pages-admin/mng/apm/cat/CLPCATM94510')));
const CLPCATM94620 = Loadable(lazy(() => import('../pages-admin/mng/apm/cat/CLPCATM94620')));

//The fast cloud 신청
const CLPCATM95610 = Loadable(lazy(() => import('../pages-admin/mng/apm/tfc/CLPCATM95610')));
const CLPCATM95720 = Loadable(lazy(() => import('../pages-admin/mng/apm/tfc/CLPCATM95720')));



const Error = Loadable(lazy(() => import('../pages/auth/Error')));

// Routes
const adminRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: 'notice', 
        name: '공지사항 관리', 
        children: [
          {path: 'list', element: <CLPNTCM91010 />},
          {path: ':id', element: <CLPNTCM91020 />},
          {path: 'register', element: <CLPNTCM91030 />},
          // {path: 'detail/:id', element: <NoticeDetail />},
        ],
      },
      { path: 'stm',
        name: '사이트 관리', 
        children: [
          {
            path: 'mnm', 
            name: '메뉴 관리', 
            element: <CLPMNUM90900 />,
          },
          {
            path: 'ntc',
            name: '공지사항 관리',
            children: [
              {path: 'list', name:'공지사항 관리', element: <CLPNTCM91010 />},
              {path: ':id', name:'공지사항 관리 상세/수정', element: <CLPNTCM91020 />},
              {path: 'register', name:'공지사항 관리 등록', element: <CLPNTCM91030 />},
            ],
          },
          { 
            path: 'qna', 
            name: '자주묻는질문', 
            children: [
              {path: 'list', name:'자주묻는질문 관리', element: <CLPQNAM91410 />},
              {path: ':id', name:'자주묻는질문 상세/수정', element: <CLPQNAM91520 />},
              {path: 'register', name:'자주묻는질문 등록', element: <CLPQNAM91530 />},
            ],
          },
          { 
            path: 'faq', 
            name: '건의및개선', 
            children: [
              {path: 'list', name:'건의및개선 관리', element: <CLPFAQM91810 />},
              {path: ':id', name:'건의및개선 상세/수정', element: <CLPFAQM91920 />},
              {path: 'register', name:'건의및개선 등록', element: <CLPFAQM91930 />},
            ],
          },
          { 
            path: 'pop', 
            name: '팝업관리', 
            children: [
              {path: 'list', name:'팝업관리', element: <CLPPOPM92110 />},
              {path: ':id', name:'팝업관리 상세/수정', element: <CLPPOPM92220 />},
              {path: 'register', name:'팝업 등록', element: <CLPPOPM92230 />},
            ],
          },
          { 
            path: 'mnm', 
            name: '소통공간', 
            children: [
              {path: 'list', name:'소통공간 관리', element: <CLPCMNM95410 />},
              {path: ':id', name:'소통공간 상세/수정', element: <CLPCMNM95520 />},
              {path: 'register', name:'소통공간 등록', element: <CLPCMNM95530 />},
            ],
          },
          { 
            path: 'mbn', 
            name: '메인배너', 
            children: [
              {path: 'list', name:'메인배너 관리', element: <CLPMBNM95810 />},
              {path: ':id', name:'메인배너 상세/수정', element: <CLPMBNM95920 />},
              {path: 'register', name:'메인배너 등록', element: <CLPMBNM95930 />},
            ],
          },
        ],
      },
      { path: 'qsm', 
        name: '설문 관리', 
        children: [
          {path: 'list', name:'설문 관리', element: <CLPSURM93310 />},
          {path: ':id', name:'설문 상세/수정', element: <CLPSURM93420 />},
          {path: 'result', name:'설문 결과', element: <CLPSURM93600 />},
        ],
      },
      { path: 'evm', 
        name: '이벤트 관리', 
        children: [
          {path: 'list', name:'이벤트 관리', element: <CLPEVNM93710 />},
          {path: ':id', name:'이벤트 관리 상세/수정', element: <CLPEVNM93820 />},
          {path: 'register', name:'이벤트 등록', element: <CLPEVNM93830 />},
        ],
      },
      { path: 'mnm', 
        name: '매뉴얼 관리', 
        children: [
          {path: 'list', name:'매뉴얼 관리', element: <CLPMNNM94110 />},
          {path: ':id', name:'매뉴얼 관리 상세/수정', element: <CLPMNNM94220 />},
          {path: 'register', name:'매뉴얼 등록', element: <CLPMNNM94230 />},
        ],
      },
      { path: 'apm', 
        name: '신청하기 관리', 
        children: [
          { path: 'cat', 
            name: '서비스 카탈로그 관리', 
            children: [
              {path: 'list', name:'서비스 카탈로그 신청 관리', element: <CLPCATM94510 />},
              {path: ':id', name:'서비스 카탈로그 신청 상세', element: <CLPCATM94620 />},
            ],
          },
          { path: 'tfc', 
            name: 'The fast cloud 신청', 
            children: [
              {path: 'list', name:'The fast cloud 신청 관리 목록', element: <CLPCATM95610 />},
              {path: ':id', name:'The fast cloud 신청 관리 상세', element: <CLPCATM95720 />},
            ],
          },
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