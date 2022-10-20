import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../shared/layouts/loader/Loadable';

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




// 메인
const CLPMANM00100 = Loadable(lazy(() => import('../pages/usr/man/CLPMANM00100')));

// 클라우드소개
const CLPCLTM00200 = Loadable(lazy(() => import('../pages/usr/inr/CLPCLTM00200')));
const CLPTFCM00300 = Loadable(lazy(() => import('../pages/usr/inr/CLPTFCM00300')));
const CLPICPM00400 = Loadable(lazy(() => import('../pages/usr/inr/CLPICPM00400')));
const CLPIASM00500 = Loadable(lazy(() => import('../pages/usr/inr/CLPIASM00500')));
const CLPISCM00800 = Loadable(lazy(() => import('../pages/usr/inr/CLPISCM00800')));
const CLPASCM01700 = Loadable(lazy(() => import('../pages/usr/inr/CLPASCM01700')));
const CLPASCM08900 = Loadable(lazy(() => import('../pages/usr/inr/CLPASCM08900')));

// 매뉴얼
const CLPMNLM04010 = Loadable(lazy(() => import('../pages/usr/mnl/CLPMNLM04010')));

// 클라우드 지원 ================================================================================
// 이벤트
const CLPENTM07210 = Loadable(lazy(() => import('../pages/usr/asc/ent/CLPENTM07210')));
const CLPENTM07320 = Loadable(lazy(() => import('../pages/usr/asc/ent/CLPENTM07320')));

// 공지사항
const CLPNTCM07410 = Loadable(lazy(() => import('../pages/usr/asc/ntc/CLPNTCM07410')));
const CLPNTCM07520 = Loadable(lazy(() => import('../pages/usr/asc/ntc/CLPNTCM07520')));

// 자주묻는질문
const CLPFAQM07600 = Loadable(lazy(() => import('../pages/usr/asc/faq/CLPFAQM07600')));

// 건의 및 개선
const CLPQNAM07800 = Loadable(lazy(() => import('../pages/usr/asc/qna/CLPQNAM07800')));

// 설문
const CLPSGSM07910 = Loadable(lazy(() => import('../pages/usr/asc/sgs/CLPSGSM07910')));
const CLPSGSM08020 = Loadable(lazy(() => import('../pages/usr/asc/sgs/CLPSGSM08020')));

// 알림 이벤트 노출 상세
const CLPMMBM08500 = Loadable(lazy(() => import('../pages/usr/asc/mmb/CLPMMBM08500')));

// 소통공간
const CLPCMNM08610 = Loadable(lazy(() => import('../pages/usr/asc/cmn/CLPCMNM08610')));
const CLPCMNM08720 = Loadable(lazy(() => import('../pages/usr/asc/cmn/CLPCMNM08720')));




const NoticeList = Loadable(lazy(() => import('../pages/sample/NoticeList')));
const NoticeRegister = Loadable(lazy(() => import('../pages/sample/NoticeRegister')));
const NoticeDetail = Loadable(lazy(() => import('../pages/sample/NoticeDetail')));
const NoticeEdit = Loadable(lazy(() => import('../pages/sample/NoticeEdit')));

const Error = Loadable(lazy(() => import('../pages/auth/Error')));



// Routes ==================================================================================
const portalRoutes = [
  {
    path: 'callback',
    element: <Callback />
  },
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: 'ui',
        name: 'UI guide', 
        children: [
          {
            path: 'guide', 
            name: 'CSS Guide', 
            element: <UI_GUIDE />
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
      }
    ]
  },
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
      { path: '', 
        name: '메인', 
        element: <CLPMANM00100 />,
      },
      { path: 'inr', 
        name: '클라우드소개', 
        children: [
          {path: 'cell', name:'클라우드추진셀소개', element: <CLPCLTM00200 />},
          {path: 'tfc', name:'The fast claoud 지원 프로그램', element: <CLPTFCM00300 />},
          {path: 'portal', name:'클라우드 포털 소개', element: <CLPICPM00400 />},
          {path: 'cloud',  name:'클라우드 서비스 소개',element: <CLPIASM00500 />},
          {path: 'tfc-req', name:'The fast cloud 서비스 신청', element: <CLPISCM00800 />},
          {path: 'cat-req', name:'서비스 카탈로그 신청 화면', element: <CLPASCM01700 />},
          {path: 'cat-basket', name:'서비스 카탈로그 신청 장바구니', element: <CLPASCM08900 />},
        ],
      },
      { path: 'mnl', 
        name: '매뉴얼 목록', 
        element: <CLPMNLM04010 />,
      },
      { path: 'asc',
        name: '클라우드 지원', 
        children: [
          { path: 'ent',
            name: '이벤트',
            children: [
              {path: 'list', name:'이벤트 목록', element: <CLPENTM07210 />},
              {path: ':id', name:'이벤트 상세', element: <CLPENTM07320 />},
            ],
          },
          { path: 'ntc',
            name: '공지사항',
            children: [
              {path: 'list', name:'공지사항 목록', element: <CLPNTCM07410 />},
              {path: ':id', name:'공지사항 상세', element: <CLPNTCM07520 />},
            ],
          },
          {
            path: 'faq', 
            name: '자주 묻는 질문', 
            element: <CLPFAQM07600 />,
          },
          {
            path: 'qna', 
            name: '건의 및 개선', 
            element: <CLPQNAM07800 />,
          },
          { path: 'sgs',
            name: '설문',
            children: [
              {path: 'list', name:'설문 목록', element: <CLPSGSM07910 />},
              {path: ':id', name:'설문 상세', element: <CLPSGSM08020 />},
            ],
          },
          {
            path: 'mmb', 
            name: '알림 이벤트 노출 상세 화면', 
            element: <CLPMMBM08500 />,
          },
          { path: 'cmn',
            name: '소통공간',
            children: [
              {path: 'list', name:'소통공간 목록', element: <CLPCMNM08610 />},
              {path: ':id', name:'소통공간 상세', element: <CLPCMNM08720 />},
            ],
          },
        ]
      }
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

export default portalRoutes;
