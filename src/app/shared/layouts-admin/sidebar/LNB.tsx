import * as React from "react";
import { PanelMenu } from 'primereact/panelmenu';
import './lnb.css'
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
            expanded: true,
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
                    url: '',
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
        open && 
        <PanelMenu className="cldLnb" model={items}/>
    }
    </>
    )
}
export default LNB;