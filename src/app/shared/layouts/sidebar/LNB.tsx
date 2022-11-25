import * as React from "react";
import { PanelMenu } from 'primereact/panelmenu';
import './lnb.css';
import { useLocation } from "react-router-dom";

interface IProps {
    open: boolean;
    children?: React.ReactNode;
}

const LNB: React.FC<IProps> = ({open, children}) => {
    const location = useLocation();
    const pathName = location.pathname;
    const curLocation = location.pathname.split('/')[1];
    console.log('curLocation', curLocation);

    const getClsName = ( url:string ) => url === pathName ? 'selected' : '';

    //메뉴 필터링
    const getIsAdmin = () => {
        return true;
    }

    const items = [
        {
            label:'UI',
            visible: true,
            expanded: curLocation === 'ui',
            items:[
                {
                    label:'CSS Guide',
                    url: '/ui/guide',
                    className: getClsName('/ui/guide')
                },
                {
                    label:'Button',
                    url: '/ui/button',
                    className: getClsName('/ui/button')
                },
                {
                    label:'Input',
                    url: '/ui/input',
                    className: getClsName('/ui/input')
                },
                {
                    label:'Select',
                    url: '/ui/select',
                    className: getClsName('/ui/select')
                },
                {
                    label:'Radio',
                    url: '/ui/radio',
                    className: getClsName('/ui/radio')
                },
                {
                    label:'Checkbox',
                    url: '/ui/check',
                    className: getClsName('/ui/check')
                },
                {
                    label:'DatePicker',
                    url: '/ui/datepicker',
                    className: getClsName('/ui/datepicker')
                },
                {
                    label:'Popup',
                    url: '/ui/popup',
                    className: getClsName('/ui/popup')
                },
                {
                    label:'Table',
                    url: '/ui/table',
                    className: getClsName('/ui/table')
                },
                {
                    label:'No Data',
                    url: '/ui/nodata',
                    className: getClsName('/ui/nodata')
                },
                {
                    label:'Excel Import/Export',
                    url: '/ui/excel',
                    className: getClsName('/ui/excel')
                },
                {
                    label:'Chart',
                    url: '/ui/chart',
                    className: getClsName('/ui/chart')
                },
                {
                    label:'Upload',
                    url: '/ui/upload',
                    className: getClsName('/ui/upload')
                },
                
            ]
        },
        {
            label:'사용자 관리',
            // template: (item, options) => {
            //     return (
            //         /* custom element */
            //         <a className={options.className} target={item.target} onClick={options.onClick}>
            //             <span className={classNames(options.iconClassName, 'pi pi-home')}></span>;
            //             <span className={options.labelClassName}>{item.label}</span>;
            //         </a>
            //     );
            // },
            expanded: curLocation === 'urm',
            visible: true,
            items:[
                {
                    label:'사용자 권한관리',
                    url: '/urm/role',
                    className: getClsName('/urm/role')
                },
                {
                    label:'사용자 접속이력 관리',
                    url: '/urm/list',
                    className: getClsName('/urm/list')
                },
            ]
        },
        {
            label:'사이트 관리',
            expanded: curLocation === 'stm',
            visible: true,
            items:[
                {
                    label:'메뉴 관리',
                    url: '/stm/mnm',
                    className: getClsName('/stm/mnm')
                },
                {
                    label:'공지사항 관리',
                    url: '/stm/ntc/list',
                    className: getClsName('/stm/ntc/list')
                },
                {
                    label:'자주 묻는 질문 관리',
                    url: '/stm/qna/list',
                    className: getClsName('/stm/qna/list')
                },
                {
                    label:'건의 및 개선 관리',
                    url: '/stm/faq/list',
                    className: getClsName('/stm/faq/list')
                },
                {
                    label:'팝업 관리',
                    url: '/stm/pop/list',
                    className: getClsName('/stm/pop/list')
                },
                {
                    label:'소통공간 관리',
                    url: '/stm/cmn/list',
                    className: getClsName('/stm/cmn/list')
                },
                {
                    label:'메인배너 관리',
                    url: '/stm/mbn/list',
                    className: getClsName('/stm/mbn/list')
                },
            ]
        },
        {
            label:'설문 관리',
            expanded: curLocation === 'qsm',
            visible: true,
            items:[
                {
                    label:'설문 목록 관리',
                    url: '/qsm/list',
                    className: getClsName('/qsm/list')
                },
            ]
        },
        {
            label:'이벤트 관리',
            expanded: curLocation === 'evm',
            visible: true,
            items:[
                {
                    label:'이벤트 목록 관리',
                    url: '/evm/list',
                    className: getClsName('/evm/list')
                },
            ]
        },
        {
            label:'매뉴얼 관리',
            expanded: curLocation === 'mnm',
            visible: true,
            items:[
                {
                    label:'매뉴얼 목록 관리',
                    url: '/mnm/list',
                    className: getClsName('/mnm/list')
                },
            ]
        },
        {
            label:'신청하기 관리',
            expanded: curLocation === 'apm',
            visible: true,
            items:[
                {
                    label:'The First Cloud 신청 관리',
                    url: '/apm/tfc/list',
                    className: getClsName('/apm/tfc/list')
                },
                {
                    label:'서비스 카탈로그 신청 관리',
                    url: '/apm/cat/list',
                    className: getClsName('/apm/cat/list')
                },
            ]
        },
        {
            label:'요청 관리',
            visible: getIsAdmin(),
            expanded: curLocation === 'rqm',
            items:[
                {
                    label:'서비스그룹 요청 목록',
                    url: '',
                    className: getClsName('')
                },
                {
                    label:'자원 요청 목록',
                    url: '',
                    className: getClsName('')
                },
            ]
        },
        {
            label:'운영 관리',
            expanded: curLocation === 'rqm',
            visible: getIsAdmin(),
            items:[
                {
                    label:'자원 할당량 관리',
                    url: '',
                    className: getClsName('')
                },
                {
                    label:'자원 청구 코드 관리',
                    url: '',
                    className: getClsName('')
                },
            ]
        },
        {
            label:'결재업무 관리',
            expanded: curLocation === 'snc',
            visible: getIsAdmin(),
            items:[
                {
                    label:'결재업무 관리',
                    url: '/snc',
                    className: getClsName('/snc')
                },
                {
                    label:'결재요청 팝업',
                    url: '/snc/popup',
                    className: getClsName('/snc/popup')
                },
                {
                    label:'결재내역(승인/반려)',
                    url: '/snc/list',
                    className: getClsName('/snc/list')
                },
            ]
        },
        {
            label:'제휴인증 관리',
            expanded: curLocation === 'cpc',
            visible: getIsAdmin(),
            items:[
                {
                    label:'업무시스템 관리',
                    url: '/cpc/bws',
                    className: getClsName('/cpc/bws')
                },
                {
                    label:'업무시스템 등록',
                    url: '/cpc/popup',
                    className: getClsName('/snc/popup')
                },
                {
                    label:'결재내역(승인/반려)',
                    url: '/snc/list',
                    className: getClsName('/snc/list')
                },
            ]
        },
    ];

    React.useEffect(() => {
        console.log('open', open)
    }, [open])
    return(
    <>
    {
        /*
        multiple 추가시 여러 탭 오픈 가능
        */
        <PanelMenu className={`cldLnb navi ${open ? 'open':'close'}`} model={items}/>
    }
    </>
    )
}
export default LNB;







/*
00 메인
10 목록
20 상세
30 등록

:::::::::::::::::: 관리자 화면 :::::::::::::::::::::::::::

//사이트 관리

CLPMNUM90900 메뉴 관리

CLPUATM90201 사용자 권한 관리

CLPUHTM00301 사용자 접속이력 관리

CLPNTCM91010 공지사항 관리
CLPNTCM91020 공지사항 관리 상세/수정
CLPNTCM91030 공지사항 관리 등록

CLPQNAM91410 자주묻는질문 관리
CLPQNAM91520 자주묻는질문 상세/수정
CLPQNAM91530 자주묻는질문 등록

CLPFAQM91810 건의및개선 관리
CLPFAQM91920 건의및개선 상세
CLPFAQM91930 건의및개선 등록

CLPPOPM92110 팝업관리
CLPPOPM92220 팝업관리 상세
CLPPOPM92230 팝업관리 등록

CLPCMNM95410 소통공간 관리
CLPCMNM95520 소통공간 관리 상세
CLPCMNM95530 소통공간 등록

CLPMBNM95810 메인배너 관리
CLPMBNM95920 메인배너 관리 상세
CLPMBNM95930 메인배너 등록


//설문관리

CLPSURM93310 설문 관리 
CLPSURM93420 설문 상세
CLPSURM93600 설문 결과 


//이벤트관리

CLPEVNM93710 이벤트 관리
CLPEVNM93820 이벤트 관리 상세
CLPEVNM93830 이벤트 등록


//매뉴얼 관리

CLPMNNM94110 매뉴얼 관리
CLPMNNM94220 매뉴얼 관리 상세
CLPMNNM94230 매뉴얼 등록


//신청하기 관리

CLPCATM94510 서비스 카탈로그 신청 관리
CLPCATM94620 서비스 카탈로그 신청 상세

CLPCATM95610  the fast cloud 신청 관리 목록
CLPCATM95720  the fast cloud 신청 관리 상세



(크로센트) ----------------------------
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




:::::::::::::::::: 사용자 화면 :::::::::::::::::::::::::::

CLPMANM00100 메인화면
CLPCLTM00200 클라우드추진셀소개
CLPTFCM00300 the fast claoud 지원 프로그램
CLPICPM00400 클라우드 포털 소개
CLPIASM00500 클라우드 서비스 소개
CLPISCM00800 the fast cloud 서비스 신청
CLPASCM01700 서비스 카탈로그 신청 화면
CLPASCM08900 서비스 카탈로그 신청 장바구니

CLPMNLM04010 매뉴얼 목록

CLPENTM07210 이벤트 목록
CLPENTM07320 이벤트 상세

CLPNTCM07410 공지사항 목록
CLPNTCM07520 공지사항 상세

CLPFAQM07600 자주 묻는 질문

CLPQNAM07800 건의 및 개선

CLPSGSM07910 설문 목록
CLPSGSM08020 설문 상세

CLPMMBM08500 알림 이벤트 노출 상세 화면

CLPCMNM08610 소통공간 목록 화면
CLPCMNM08720 소통공간 상세, 등록, 수정 화면




(크로센트)
//요청관리 ------------------

CLPRQDM02100 요청 현황

CLPSVGM02210 서비스그룹 목록
CLPSVGM02300 서비스그룹 신청
CLPSVGM02420 서비스그룹 상세
CLPSVGM02521 서비스그룹 이력 상세 
CLPSVGM02622 서비스그룹 수정

CLPRSRM02710 자원 요청 목록
CLPRSRM02800 자원 요청
CLPRSRM02920 자원 요청 상세
CLPRSRM03021 자원 요청 수정


//운영관리 ------------------

CLPRSDM03100 이용현황 

CLPRSDM08910 자원 목록

CLPSRVM03210 가상서버 목록
CLPSRVM03220 가상서버 상세

CLPCDBM03410 클라우드 db 목록
CLPCDBM03520 클라우드 db 상세

CLPNKSM03810 쿠버네티스 파드 목록
CLPNKSM03920 쿠버네티스 파드 상세

CLPENTM04010 자원 이벤트 목록
CLPENTM09020 자원 이벤트 상세

CLPCASM04100 비용 분석

CLPCBLM08800 요금 명세서


*/
