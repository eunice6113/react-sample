import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import './CLPEVNM93820.css';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import Comment from '../../../shared/components/ui/comment/Comment';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { eventWinData } from '../../../shared/demo/data/eventWinData';
import { paginator } from "../../../shared/utils/table-paginator";
import { Column } from 'primereact/column';



//소통공간 상세
const CLPEVNM93820:React.FC = () => {
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
    const [value2, setValue2] = React.useState('');

    // 댓글 등록 버튼
    const registration = () => {
        console.log('등록')
    }
    //댓글 편집 버튼
    const edit = () => {
        console.log('편집')
    }
    //댓글 삭제 버튼 
    const deleteFunc = () => {
        console.log('삭제')
    }

    //table
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);
    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    //api 읽어와서 업데이트 할 내용
    const authorInfo = {
        title: '등록자 정보',
        rows: [
            {
                cols: [
                    {
                        key: '등록자', 
                        value: '신재문 (12345)'
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
        title: '이벤트 정보',
        mode: mode,
        rows: [
            {
                cols: [
                    {
                        key: <p className='eventTitle'>클라우드 추진 Cell 응원 댓글 이벤트에 많은 참여 (진행중)</p>, 
                        value: null,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '이벤트 유형', 
                        value: <p>댓글-실시간당첨 <span className='cld-error-text d-inline-block'>(총 당첨/당첨 : 50/29명)</span></p>,
                    },
                    {
                        key: '이벤트 기간', 
                        value: <span>2022.08.30 ~ 2022.09.03</span>,
                    }
                ]
            },
            {
                cols: [
                    {
                        key: '조회수', 
                        value: <span>1,234</span>,
                    },
                    {
                        key: '퀴즈 정답', 
                        value: <span>정답노출영역</span>,
                    }
                ]
            },
            {
                cols: [
                    {
                        key:null,
                        value: <span>내용노출 영역</span>,
                    }
                ]
            },
            
        ]
        
    }

    //이벤트 댓글 리스트
    const commentList = [
        {//관리자 이거나 ? 본인이 작성한 것만 수정/삭제 가능
            deletable:true,
            userName:'권승주',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            deletable:true,
            userName:'홍길동',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            deletable:true,
            userName:'홍길동',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'

        },
        
    ]

    //이벤트 당첨 리스트  
    const headerTemplate = [
        {
            field: 'name',
            header: '성명',
            sortable: false,
        },
        {
            field: 'num',
            header: '직번',
            sortable: false,
        },
        {
            field: 'department',
            header: '부서',
            sortable: false,
        },
        {
            field: 'comment',
            header: '댓글',
            sortable: false,
        },
        
       
    ]


    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 등록 내용 */}
        <ViewTemplate {...contentsInfo} />

        <div className='btn-container cld-row mb30'>
                <Button className='secondary' onClick={list}>목록</Button>
                <Button className='ml-auto' onClick={remove}>당첨발표하기</Button>
                <Button className='ml-auto' onClick={remove}>삭제</Button>
        </div>

        <Accordion multiple activeIndex={[0]}>
            <AccordionTab header="이벤트 댓글 리스트 (3)" >
                {/* 댓글 */}
                <div className='commentWrap'>
                    {
                        commentList.map(( item, index) => (
                            <Comment 
                                id={index}
                                deletable={item.deletable}
                                key={'comm'+index}
                                userName={item.userName} 
                                commentContent={item.commentContent}
                                date={item.date}
                                mode='register'
                                value={value2} 
                                setValue={setValue2}
                                edit={edit}
                                delt={deleteFunc}
                                registration={registration}
                                />
                        ))
                    
                    }

                   <Button className='more p-button-text' label='더보기 123댓글' icon='pi pi-angle-down'  iconPos="right"/>
                </div>
                
            </AccordionTab>
            <AccordionTab header="이벤트 당첨 리스트 (29)">
                <DataTable value={eventWinData} paginator paginatorTemplate={paginator} 
                    className='evn'
                    first={first} rows={rows} 
                    onPage={onCustomPage} responsiveLayout='scroll'>
                    {headerTemplate.map((col, index) => (
                        <Column key={col.header} field={col.field} header={col.header} ></Column>
                    ))}
                </DataTable>
            </AccordionTab>
        </Accordion>

                

                
        
    </BasePage>)
}
export default CLPEVNM93820;