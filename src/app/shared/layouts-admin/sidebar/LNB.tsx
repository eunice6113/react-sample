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

——— 관리자 화면

CLPMNUM90900 메뉴 관리

CLPNTCM91010 공지사항 관리
CLPNTCM91020 공지사항 관리 상세

CLPQNAM91410 자주묻는질문 관리
CLPQNAM91520 자주묻는질문 상세

CLPFAQM91810 자주묻는질문 관리
CLPFAQM91920 자주묻는질문 상세

CLPPOPM92110 팝업관리
CLPPOPM92220 팝업관리 상세

CLPCMNM95410 소통공간 관리
CLPCMNM95520 소통공간 관리 상세

CLPCTFM92510 자격증명 관리
CLPCTFM92620 자격증명 관리 상세

CLPCTFM92700 자격증명 발급
CLPCTFM92800 자격증명 갱신

CLPACTM92910 접근토큰 발급 관리
CLPACTM93020 접근토큰 발급 관리 상세 

CLPACTM93100 접근토큰 발급
CLPACTM93200 접근토큰 갱신

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

CLPCATM95610    the fast cloud 신청 관리 목록
CLPCATM95720  the fast cloud 신청 관리 상세

CLPSVGM04910 서비스그룹 요청 목록
CLPSVGM05020 서비스그룹 요청 상세
CLPSVGM05621 서비스그룹 상세

CLPRSRM05110 자원 요청 목록
CLPRSRM05220 자원 요청 상세

CLPRSQM05300 자원 할당량 관리

CLPRSQM05410 자원 청구 코드 목록

CLPRSQM05510 자원 목록





——— 사용자 화면

CLP
CLP

CLP
CLP

CLP
CLP



*/
