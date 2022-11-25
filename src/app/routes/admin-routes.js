import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../shared/layouts/loader/Loadable';

//https://reactnavigation.org/docs/getting-started/

//:::::::::::::::::::::::::::::::::::::::: Layouts ::::::::::::::::::::::::::::::::::::::::::

const Callback = Loadable(lazy(() => import('../pages/auth/Callback')));

const BlankLayout = Loadable(lazy(() => import('../shared/layouts/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../shared/layouts/FullLayout')));

// :::::::::::::::::::::::::::::::::::::::: Pages :::::::::::::::::::::::::::::::::::::::::::

//UI GUIDE
const UI_GUIDE = Loadable(lazy(() => import('../pages/ui-guide/UiGuide')));
const ButtonGuide = Loadable(lazy(() => import('../pages/ui-guide/ButtonGuide')));
const InputGuide = Loadable(lazy(() => import('../pages/ui-guide/InputGuide')));
const SelectGuide = Loadable(lazy(() => import('../pages/ui-guide/SelectGuide')));
const PopupGuide = Loadable(lazy(() => import('../pages/ui-guide/PopupGuide')));
const TableGuide = Loadable(lazy(() => import('../pages/ui-guide/TableGuide')));
const ChartGuide = Loadable(lazy(() => import('../pages/ui-guide/ChartGuide')));
const UploadGuide = Loadable(lazy(() => import('../pages/ui-guide/UploadGuide')));
const NoDataGuide = Loadable(lazy(() => import('../pages/ui-guide/NoDataGuide')));
const ExcelGuide = Loadable(lazy(() => import('../pages/ui-guide/ExcelGuide')));
const CheckboxGuide = Loadable(lazy(() => import('../pages/ui-guide/CheckboxGuide')));
const DatePickerGuide = Loadable(lazy(() => import('../pages/ui-guide/DatePickerGuide')));
const InfoGuide = Loadable(lazy(() => import('../pages/ui-guide/InfoGuide')));
const LabelGuide = Loadable(lazy(() => import('../pages/ui-guide/LabelGuide')));
const RadioGuide = Loadable(lazy(() => import('../pages/ui-guide/RadioGuide')));
const TabGuide = Loadable(lazy(() => import('../pages/ui-guide/TabGuide')));
const ToggleGuide = Loadable(lazy(() => import('../pages/ui-guide/ToggleGuide')));

//메인
const CLPMANM00100 = Loadable(lazy(() => import('../pages/mng/man/CLPMANM00100')));

//사용자 관리 ==================================================================================
//사용자 권한관리 
const CLPUATM90200 = Loadable(lazy(() => import('../pages/mng/urm/CLPUATM90200')));
//사용자 접속이력 관리
const CLPUHTM00301 = Loadable(lazy(() => import('../pages/mng/urm/CLPUHTM00301')));

//사이트 관리 ==================================================================================
//메뉴 관리
const CLPMNUM90900 = Loadable(lazy(() => import('../pages/mng/stm/mnu/CLPMNUM90900')));

//공지사항
const CLPNTCM91010 = Loadable(lazy(() => import('../pages/mng/stm/ntc/CLPNTCM91010')));
const CLPNTCM91020 = Loadable(lazy(() => import('../pages/mng/stm/ntc/CLPNTCM91020')));

//자주묻는질문
const CLPQNAM91410 = Loadable(lazy(() => import('../pages/mng/stm/qna/CLPQNAM91410')));
const CLPQNAM91520 = Loadable(lazy(() => import('../pages/mng/stm/qna/CLPQNAM91520')));

// 건의및개선
const CLPFAQM91810 = Loadable(lazy(() => import('../pages/mng/stm/faq/CLPFAQM91810')));
const CLPFAQM91920 = Loadable(lazy(() => import('../pages/mng/stm/faq/CLPFAQM91920')));

// 팝업관리
const CLPPOPM92110 = Loadable(lazy(() => import('../pages/mng/stm/pop/CLPPOPM92110')));
const CLPPOPM92220 = Loadable(lazy(() => import('../pages/mng/stm/pop/CLPPOPM92220')));
const CLPPOPM92230 = Loadable(lazy(() => import('../pages/mng/stm/pop/CLPPOPM92230')));

// 소통공간
const CLPCMNM95410 = Loadable(lazy(() => import('../pages/mng/stm/cmn/CLPCMNM95410')));
const CLPCMNM95520 = Loadable(lazy(() => import('../pages/mng/stm/cmn/CLPCMNM95520')));

// 메인배너
const CLPMBNM95810 = Loadable(lazy(() => import('../pages/mng/stm/mbn/CLPMBNM95810')));
const CLPMBNM95920 = Loadable(lazy(() => import('../pages/mng/stm/mbn/CLPMBNM95920')));

// 설문관리 ===================================================================================
const CLPSURM93310 = Loadable(lazy(() => import('../pages/mng/qsm/CLPSURM93310')));
const CLPSURM93420 = Loadable(lazy(() => import('../pages/mng/qsm/CLPSURM93420')));
const CLPSURM93430 = Loadable(lazy(() => import('../pages/mng/qsm/CLPSURM93430')));
const CLPSURM93600 = Loadable(lazy(() => import('../pages/mng/qsm/CLPSURM93600')));

// 이벤트관리 ==================================================================================
const CLPEVNM93710 = Loadable(lazy(() => import('../pages/mng/evm/CLPEVNM93710')));
const CLPEVNM93820 = Loadable(lazy(() => import('../pages/mng/evm/CLPEVNM93820')));

// 매뉴얼 관리 =================================================================================
const CLPMNNM94110 = Loadable(lazy(() => import('../pages/mng/mnm/CLPMNNM94110')));
const CLPMNNM94220 = Loadable(lazy(() => import('../pages/mng/mnm/CLPMNNM94220')));

// 신청하기 관리 ================================================================================
//서비스 카탈로그 관리
const CLPCATM94510 = Loadable(lazy(() => import('../pages/mng/apm/cat/CLPCATM94510')));
const CLPCATM94620 = Loadable(lazy(() => import('../pages/mng/apm/cat/CLPCATM94620')));

//The fast cloud 신청
const CLPCATM95610 = Loadable(lazy(() => import('../pages/mng/apm/tfc/CLPCATM95610')));
const CLPCATM95720 = Loadable(lazy(() => import('../pages/mng/apm/tfc/CLPCATM95720')));

//결재업무 관리
const CLPSNCM00120 = Loadable(lazy(() => import('../pages/mng/snc/CLPSNCM00120')));
const CLPSNCM00130 = Loadable(lazy(() => import('../pages/mng/snc/CLPSNCM00130')));
const CLPSNCM00140 = Loadable(lazy(() => import('../pages/mng/snc/CLPSNCM00140')));

//제휴관리
const CLPBWSM97110 = Loadable(lazy(() => import('../pages/mng/cpc/bws/CLPBWSM97110')));
const CLPBWSM97220 = Loadable(lazy(() => import('../pages/mng/cpc/bws/CLPBWSM97220')));
const CLPBWSM97320 = Loadable(lazy(() => import('../pages/mng/cpc/bws/CLPBWSM97320')));



//운영 관리(크로센트) ==================================================================================
/*
사이트 관리 -------------------------

CLPCTFM92510 자격증명 관리
CLPCTFM92620 자격증명 관리 상세

CLPCTFM92700 자격증명 발급
CLPCTFM92800 자격증명 갱신

CLPACTM92910 접근토큰 발급 관리
CLPACTM93020 접근토큰 발급 관리 상세 

CLPACTM93100 접근토큰 발급
CLPACTM93200 접근토큰 갱신


요청관리 ------------

CLPSVGM04910 서비스그룹 요청 목록
CLPSVGM05020 서비스그룹 요청 상세
CLPSVGM05621 서비스그룹 상세

CLPRSRM05110 자원 요청 목록
CLPRSRM05220 자원 요청 상세

CLPRSQM05300 자원 할당량 관리

CLPRSQM05410 자원 청구 코드 목록

CLPRSQM05510 자원 목록
*/


const Error = Loadable(lazy(() => import('../pages/auth/Error')));

const loaderFunc = () => { return 0}

// Routes ================================================================
const adminRoutes = [
  // {
  //   path: 'callback',
  //   element: <Callback />
  // },
  {
    path: '/',
    element: <Navigate to='/man' />,
  },
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { 
        path: 'ui',
        name: 'UI guide', 
        children: [
          {
            path: 'guide', 
            name: 'CSS Guide', 
            element: <UI_GUIDE />,
          },
          {
            path: 'button', 
            name: 'Button Guide', 
            element: <ButtonGuide />
          },
          {
            path: 'input', 
            name: 'Input Guide', 
            element: <InputGuide />
          },
          {
            path: 'select', 
            name: 'Select Guide', 
            element: <SelectGuide />
          },
          {
            path: 'popup', 
            name: 'Popup Guide', 
            element: <PopupGuide />
          },
          {
            path: 'table', 
            name: 'Table Guide', 
            element: <TableGuide />
          },
          {
            path: 'excel', 
            name: 'Excel Import/Export', 
            element: <ExcelGuide />
          },
          {
            path: 'radio', 
            name: 'Radio Guide', 
            element: <RadioGuide />
          },
          {
            path: 'check', 
            name: 'Checkbox Guide', 
            element: <CheckboxGuide />
          },
          {
            path: 'datepicker', 
            name: 'DatePicker Guide', 
            element: <DatePickerGuide />
          },
          {
            path: 'info', 
            name: 'Info Guide', 
            element: <InfoGuide />
          },
          {
            path: 'label', 
            name: 'Label Guide', 
            element: <LabelGuide />
          },
          {
            path: 'tab', 
            name: 'Tab Guide', 
            element: <TabGuide />
          },
          {
            path: 'toggle', 
            name: 'Toggle Guide', 
            element: <ToggleGuide />
          },
          {
            path: 'chart', 
            name: 'Chart Guide', 
            element: <ChartGuide />
          },
          {
            path: 'upload', 
            name: 'Upload Guide', 
            element: <UploadGuide />
          },
          {
            path: 'nodata', 
            name: 'NoData Guide', 
            element: <NoDataGuide />
          },
        ]
      },
      {
        path: 'man',
        name: 'Main',
        element: <CLPMANM00100 />
      },
      { 
        path: 'urm', 
        name: '사용자 관리', 
        children: [
          {path: 'role', name:'사용자 권한 관리', element: <CLPUATM90200 />},
          {path: 'list', name:'사용자 접속이력 관리', element: <CLPUHTM00301 />},
        ],
      },
      { path: 'stm',
        name: '사이트 관리', 
        children: [
          {
            path: 'mnm', 
            name: '메뉴 관리', 
            element: <CLPMNUM90900 />
          },
          { path: 'ntc',
            name: '공지사항 관리',
            children: [
              {path: 'list', name:'공지사항 관리', state: {name:'hello'}, element: <CLPNTCM91010 />},
              {path: ':id', name:'공지사항 상세/수정', element: <CLPNTCM91020 />},
              {path: 'register', name:'공지사항 등록', element: <CLPNTCM91020 />},
            ],
          },
          { path: 'qna', 
            name: '자주 묻는 질문', 
            children: [
              {path: 'list', name:'자주 묻는 질문 관리', element: <CLPQNAM91410 />},
              {path: ':id', name:'자주 묻는 질문 상세/수정', element: <CLPQNAM91520 />},
              {path: 'register', name:'자주 묻는 질문 등록', element: <CLPQNAM91520 />},
            ],
          },
          { path: 'faq', 
            name: '건의 및 개선', 
            children: [
              {path: 'list', name:'건의 및 개선 관리', element: <CLPFAQM91810 />},
              {path: ':id', name:'건의 및 개선 상세/수정', element: <CLPFAQM91920 />},
              {path: 'register', name:'건의 및 개선 등록', element: <CLPFAQM91920 />},
            ],
          },
          { path: 'pop', 
            name: '팝업 관리', 
            children: [
              {path: 'list', name:'팝업 관리', element: <CLPPOPM92110 />},
              {path: ':id', name:'팝업 관리 상세/수정', element: <CLPPOPM92220 />},
              {path: 'register', name:'팝업 등록', element: <CLPPOPM92230 />},
            ],
          },
          { path: 'cmn', 
            name: '소통공간', 
            children: [
              {path: 'list', name:'소통공간 관리', element: <CLPCMNM95410 />},
              {path: ':id', name:'소통공간 상세/수정', element: <CLPCMNM95520 />},
              {path: 'register', name:'소통공간 등록', element: <CLPCMNM95520 />},
            ],
          },
          { path: 'mbn', 
            name: '메인배너', 
            children: [
              {path: 'list', name:'메인배너 관리', element: <CLPMBNM95810 />},
              {path: ':id', name:'메인배너 상세/수정', element: <CLPMBNM95920 />},
              {path: 'register', name:'메인배너 등록', element: <CLPMBNM95920 />},
            ],
          },
        ],
      },
      { path: 'qsm', 
        name: '설문 관리', 
        children: [
          {path: 'list', name:'설문 목록 관리', element: <CLPSURM93310 />},
          {path: ':id', name:'설문 상세/수정', element: <CLPSURM93420 />},
          {path: 'register', name:'설문 등록', element: <CLPSURM93430 />},
          {path: 'result', name:'설문 결과', element: <CLPSURM93600 />},
        ],
      },
      { path: 'evm', 
        name: '이벤트 관리', 
        children: [
          {path: 'list', name:'이벤트 관리', element: <CLPEVNM93710 />},
          {path: ':id', name:'이벤트 관리 상세/수정', element: <CLPEVNM93820 />},
          {path: 'register', name:'이벤트 등록', element: <CLPEVNM93820 />},
        ],
      },
      { path: 'mnm', 
        name: '매뉴얼 관리', 
        children: [
          {path: 'list', name:'매뉴얼 관리', element: <CLPMNNM94110 />},
          {path: ':id', name:'매뉴얼 관리 상세/수정', element: <CLPMNNM94220 />},
          {path: 'register', name:'매뉴얼 등록', element: <CLPMNNM94220 />},
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
      {
        path: 'snc', 
        name: '결재업무 관리', 
        children: [
          {path: '', name:'결재업무 관리', element: <CLPSNCM00120 />},
          {path: 'popup', name:'사용자 접속이력 관리', element: <CLPSNCM00130 />},
          {path: 'list', name:'사용자 접속이력 관리', element: <CLPSNCM00140 />},
        ],
      },
      {
        path: 'cpc', 
        name: '업무시스템 관리', 
        children: [
          {path: 'bws', name:'업무시스템 관리', element: <CLPBWSM97110 />},
          {path: 'bws/register', name:'업무시스템 등록', element: <CLPBWSM97220 />},
          {path: 'bws/apiRegister', name:'API 등록', element: <CLPBWSM97320 />},
        ],
      },
    ]
  },
  {
    path: '/callback',
    element: <Callback />,
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