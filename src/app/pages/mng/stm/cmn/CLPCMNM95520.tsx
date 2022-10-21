import { Button } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPCMNM95520.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import Comment from '../../../../shared/components/ui/comment/Comment';
import CommentRegister from '../../../../shared/components/ui/comment/CommentRegister';
import { IComment } from '../../../../core/models/i-comment';

//소통공간 상세
const CLPCMNM95520:React.FC = () => {
    const { goPage } = useBasePage()

    //목록 버튼
    const list = () => {
        goPage('/stm/cmn/list')
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
    }

    //comment 댓글입력
    const [value1, setValue1] = React.useState('');

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
                tdOnly: {
                    value: <span>내용노출 영역</span>,
                }
            },
            
        ]
        
    }

    //댓글목록, 관리자면 삭제 가능
    const initialComments:IComment[] = [
        {
            id: 'c0',
            deletable:true,
            userName:'권승주',
            value: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
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

    //댓글 등록
    const register = () => {
        console.log('등록')
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

    //더보기 할 댓글수
    let moreCommentLen = 120;

    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 등록 내용 */}
        <ViewTemplate {...contentsInfo} />

        <div className='btn-container'>
            <Button className='secondary' onClick={list}>목록</Button>
            <Button className='ml-auto' onClick={remove}>삭제</Button>
        </div>

        {/* 댓글 */}
        <div className='commentWrap mt30'>
            <CommentRegister 
                title='관리자 댓글을 입력하실 수 있습니다.'
                total={`글 댓글 ${comments.length}`}
                value={value1}
                setValue={setValue1}
                register={register}
            />

            {
                comments.map(( item, index ) => (
                    <Comment 
                        id={item.id}
                        deletable={item.deletable}
                        key={'comm'+index}
                        userName={item.userName} 
                        value={item.value}
                        date={item.date}
                        delt={(e:Event) => deleteFunc(e, item.id)}
                    />
                ))
            }
            
            <Button onClick={moreComment} label={`더보기 ${moreCommentLen} 댓글`} className='more p-button-text' icon='pi pi-angle-down' iconPos='right'/>
        </div>
    </BasePage>)
}
export default CLPCMNM95520;