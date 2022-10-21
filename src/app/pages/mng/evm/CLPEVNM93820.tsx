import { Button } from 'primereact';
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
import { IComment } from '../../../core/models/i-comment';

//이벤트 상세
const CLPEVNM93820:React.FC = () => {
    const { goPage } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
   

    //이벤트 댓글 리스트
    const initialComments:IComment[] = [
        {
            id: 'c0',
            deletable: true, //true 이면 휴지통 아이콘 버튼이 보임
            userName: '권승주',
            value: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date: '2022.03.02 09:00:00'
        },
        {
            id: 'c1',
            deletable:true,
            userName:'홍길동',
            value: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            id: 'c2',
            deletable:true,
            userName:'홍길동',
            value: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
    ]

    //댓글 목록
    const [comments, setComments] = React.useState<IComment[]>([])

    React.useEffect(() => {
        //댓글 목록 초기화
        setComments(initialComments);
    }, [])
    


    //목록 버튼
    const list = () => {
        goPage('/stm/cmn/list')
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
    }

    //댓글 삭제 버튼
    const deleteFunc = ( e:Event, id:any ) => {
        console.log('삭제', id)

        setComments(
            comments.filter(c =>
                c.id !== id
            )
        );
    }

    //댓글 더보기 버튼
    const moreComment = () => {
        console.log('댓글 더보기')
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
                thOnly: {
                    key: <p className='eventTitle'>클라우드 추진 Cell 응원 댓글 이벤트에 많은 참여 (진행중)</p>, 
                },
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
                tdOnly: {
                    value: <span>내용노출 영역</span>,
                }
            },
        ]
    }


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

    //더보기 할 댓글수
    let moreCommentLen = 120;


    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 등록 내용 */}
        <ViewTemplate {...contentsInfo} />

        <div className='btn-container mb30'>
            <Button className='secondary' onClick={list}>목록</Button>
            <Button className='ml-auto' onClick={remove}>당첨발표하기</Button>
            <Button className='ml-auto' onClick={remove}>삭제</Button>
        </div>

        <Accordion multiple activeIndex={[0]}>
            <AccordionTab header={`이벤트 댓글 리스트 (${comments.length})`} >
                {/* 댓글 */}
                <div className='commentWrap'>
                    {
                        comments.map(( item, index ) => (
                            <Comment 
                                key={'comm'+index}
                                id={item.id}
                                deletable={item.deletable}
                                userName={item.userName} 
                                value={item.value}
                                date={item.date}
                                delt={(e:Event) => deleteFunc(e, item.id)}
                            />
                        ))
                    }

                    <Button onClick={moreComment} label={`더보기 ${moreCommentLen} 댓글`} className='more p-button-text' icon='pi pi-angle-down' iconPos="right"/>
                </div>
                
            </AccordionTab>
            <AccordionTab header={`이벤트 당첨 리스트 (${eventWinData.length})`}>
                <DataTable value={eventWinData} paginator paginatorTemplate={paginator} 
                    className='evnWin'
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