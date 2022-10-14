import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPCMNM95520.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';

interface File {
    name:string;
    size:number;
}
interface cmnContent {
    title: string;
    content: string;
    fromDate: Date;
    toDate: Date;
    useYn?: boolean;
    files?: File[];
}
//소통공간 상세
const CLPCMNM95520:React.FC = () => {
    const { goPage } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
   
    //목록 버튼
    const list = () => {
        goPage('/stm/cmn/list')
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
    }


    //api 읽어와서 업데이트 할 내용
    const authorInfo = {
        title: '등록자 정보',
        rows: [
            {
                cols: [
                    {
                        key: '등록자 | 부서', 
                        value: '신재문 (12345) | IT그룹'
                    },
                    {
                        key: '등록일시', 
                        value: '2023.03.02. 15:00:00'
                    },
                ]
            }
        ]
    }

    const contentsInfo = {
        title: '상세 내용',
        mode: mode,
        rows: [
            {
                cols: [
                    {
                        key: '유형', 
                        value: <span>자율소통</span>,
                    },
                    {
                        key: '노출수', 
                        value: <span>800</span>,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '업보트', 
                        value: <span>1,509</span>,
                    }
                ]
            },
            {
                cols: [
                    {
                        key: '제목', 
                        value: <span>제목이 노출되는 영역</span>,
                    }
                ]
            },
            {
                cols: [
                    {
                        
                        value: <span>내용노출 영역</span>,
                    }
                ]
            },
            
        ]
    }


    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 등록 내용 */}
        <ViewTemplate {...contentsInfo} />

        <div className='btn-container cld-row'>
                <Button className='secondary' onClick={list}>목록</Button>
                <Button className='ml-auto' onClick={remove}>삭제</Button>
        </div>
        {/* 댓글 */}
        <div className='commentWRap'>
            관리자 댓글을 입력하실 수 있습니다.(글 댓글 3)
            <div className='comment'>
                <div>홍길동</div>
                <p>클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!</p>
                <p>2022.03.02 09:00:00</p>
            </div>
        </div>
    </BasePage>)
}
export default CLPCMNM95520;