import * as React from "react";
import { PanelMenu } from 'primereact/panelmenu';
import './lnb.css';
import { classNames } from "primereact";

interface IProps {
    open: boolean;
    children?: React.ReactNode;
}

const LNB: React.FC<IProps> = ({open, children}) => {

    const items = [
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
            // expanded: true,
            items:[
                {
                    label:'사용자 권한관리',
                    url: '/notice/list'
                },
                {
                    label:'사용자 접속이력 관리',
                    url: '/notice/list'
                },
            ]
        },
        {
            label:'사이트 관리',
            expanded: true,
            items:[
                {
                    label:'메뉴 관리',
                    url: '',
                },
                {
                    label:'공지사항 관리',
                    url: '/notice/list',
                },
                {
                    label:'자주 묻는 질문 관리',
                    url: '',
                },
                {
                    label:'건의 및 개선 관리',
                    url: '',
                },
                {
                    label:'팝업 관리',
                    url: '',
                },
                {
                    label:'소통공간 관리',
                    url: '',
                },
            ]
        },
        {
            label:'설문 관리',
            expanded: true,
            items:[
                {
                    label:'설문 목록 관리',
                    url: '',
                },
            ]
        },
        {
            label:'신청하기 관리',
            items:[
                {
                    label:'The First Cloud 신청 관리',
                    url: '',
                },
                {
                    label:'서비스 카탈로그 신청 관리',
                    url: '',
                },
            ]
        },
        {
            label:'요청 관리',
            expanded: true,
            items:[
                {
                    label:'서비스그룹 요청 목록',
                    url: '',
                },
                {
                    label:'자원 요청 목록',
                    url: '',
                },
            ]
        },
        {
            label:'운영 관리',
            expanded: true,
            items:[
                {
                    label:'자원 할당량 관리',
                    url: '',
                },
                {
                    label:'자원 청구 코드 관리',
                    url: '',
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

:::::::::::::::::: 관리자 화면 :::::::::::::::::::::::::::

CLPMNUM90900 메뉴 관리

CLPNTCM91010 공지사항 관리
CLPNTCM91020 공지사항 관리 상세/수정
CLPNTCM91030 공지사항 관리 등록

CLPQNAM91410 자주묻는질문 관리
CLPQNAM91520 자주묻는질문 상세

CLPFAQM91810 자주묻는질문 관리
CLPFAQM91920 자주묻는질문 상세

CLPPOPM92110 팝업관리
CLPPOPM92220 팝업관리 상세

CLPCMNM95410 소통공간 관리
CLPCMNM95520 소통공간 관리 상세

CLPMBNM95810 메인배너 관리
CLPMBNM95920 메인배너 관리 상세

CLPSURM93310 설문 관리 
CLPSURM93420 설문 상세
CLPSURM93600 설문 결과 

CLPEVNM93710 이벤트 관리
CLPEVNM93820 이벤트 관리 상세

CLPMNNM94110 매뉴얼 관리
CLPMNNM94220 매뉴얼 관리 상세

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
