import { Button } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPCATM94620.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import Comment from '../../../../shared/components/ui/comment/Comment';
import CommentRegister from '../../../../shared/components/ui/comment/CommentRegister';
import { IComment } from '../../../../core/models/i-comment';
import { updateItemInList } from '../../../../shared/utils/com-utils';
import { commDummyData } from '../../../../shared/demo/data/commentDummyData';

interface File {
    name:string;
    size:number;
}

interface FaqContent {
    title: string;
    content: string;
    fromDate: Date;
    toDate: Date;
    useYn?: boolean;
}

//서비스 카탈로그 신청 상세
const CLPCATM94620:React.FC = () => {
    const { goPage } = useBasePage()

    //approval: 승인 완료, reject: 반려, ongoing: 진행중
    //상태를 바꾸면 UI 분기처리한 부분이 보입니다~!
    const [status, setStatus] = React.useState<'approval' | 'reject' | 'ongoing'>('ongoing');

    const [values, setValues] = React.useState<any>({
        title: '',
        content: '',
        fromDate: undefined,
        toDate: undefined,
        useYn: false,
    });

    const handleChange = (prop: keyof FaqContent, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    //관리자만 삭제 가능한 댓글 목록, id 값 필수
    const initialComments:IComment[] = commDummyData

    //(하나만 있는) 댓글 입력 처리
    const [comment, setComment] = React.useState('');

    //(하나만 있는) 댓글 등록
    const registerComment = () => {
        console.log('등록')
    }
    



    //댓글 목록
    const [comments, setComments] = React.useState<IComment[]>([])

    React.useEffect(() => {
        //댓글 목록 초기화
        setComments(initialComments);
    }, [])

    //목록 버튼
    const list = () => {
        goPage('/apm/cat/list')
    }

    //반려 버튼
    const reject = () => {
        console.log('반려')
    }

    //승인 버튼
    const approval = () => {
        console.log('승인')
    }

    //완료 버튼
    const success = () => {
        console.log('완료')
    }


    //댓글 목록 ===================================================

    //댓글 삭제 버튼
    const deleteFunc = ( e:Event, id:any ) => {
        console.log('삭제', id)

        setComments(
            comments.filter(c =>
                c.id !== id
            )
        );
    }

    // Start 댓글 수정 버튼 눌렀을 때 나오는 버튼들 ---------------
    //댓글 취소
    const cancel = ( e:Event, id:any ) => {
        console.log('취소', id)

        //댓글 목록의 해당 댓글 모드를 view 로 바꾼다
        updateItemInList(id, 'mode', 'view', comments, setComments)
    }

    //댓글 등록
    const register = ( e:Event, id:any ) => {
        console.log('등록', id)

        //댓글 목록의 해당 댓글 모드를 view 로 바꾼다
        updateItemInList(id, 'mode', 'view', comments, setComments)
    }
    // End 댓글 수정 버튼 눌렀을 때 나오는 버튼들 ---------------


    //댓글 수정 버튼
    const edit = ( e:Event, id:any ) => {
        console.log('수정', id)

        //댓글 목록의 해당 댓글 모드를 edit 로 바꾼다
        updateItemInList(id, 'mode', 'edit', comments, setComments)
    }

    //댓글 내용 수정
    const editValue = ( e:any, id:any ) => {
        console.log('댓글 내용 수정', id, e.target.value)

        //댓글 목록의 해당 댓글 값을 업데이트한다
        updateItemInList(id, 'value', e.target.value, comments, setComments)
    }


    //api 읽어와서 업데이트 할 내용
    const authorInfo = {
        title: '신청자 정보',
        rows: [
            {
                cols: [
                    {
                        key: '신청자', 
                        value: '신재문 (12345)'
                    },
                    {
                        key: '신청일시', 
                        value: '2023.03.02. 15:00:00'
                    },
                ]
            }
        ]
    }
    const types = [
        {name: '상세', key: 'D'}, 
        {name: '반려', key: 'R'},
        {name: '진행', key: 'P'},
        {name: '완료', key: 'S'}];
    
    const [type, setType] = React.useState(types[0]);
    
    const contentsInfo = {
        title: '신청 내용',
        status: status,
        rows: [
            {
                cols: [
                    {
                        key: '신청 아이디', 
                        value: <span>123456789645</span>,
                    }
                ]
            },
            {
                cols: [
                    {
                        key: '이메일', 
                        value: <span>kwon@ibk.co.kr</span>,
                    }
                ]
            },
            
            {
                showIf: status !== 'approval',
                cols: [
                    {
                        key: '진행상태', 
                        value: 
                        <>
                        {
                            status === 'reject' ? <span className='color-red'>반려</span>
                            :
                            status === 'ongoing' ? <span>진행</span>
                            :
                            <span>완료</span>
                        }
                        </>,
                    }
                ]
            },
            {   showIf: status === 'reject',
                cols: [
                    {
                        key: '반려사유', 
                        value: <span className='error-text'>사업계획서 내용 미진으로 인한 p10 개선도출안 변경 독려를 위한 반려</span>,
                    }
                ]
            },
            {
                showIf: status === 'approval',
                cols: [
                    {
                        key: '진행상태', 
                        value: <>
                            {
                                status === 'reject' ? <span className='color-red'>반려</span>
                                :
                                status === 'ongoing' ? <span>진행</span>
                                :
                                <span>완료</span>
                            }
                        </>,
                    },
                    {
                        key: '담당자', 
                        value: <span>안광훈(1232456)</span>,
                    }
                ]
            },
            
        ]
    }


    //더보기 할 댓글수
    let moreCommentLen = 120;

    //댓글 더보기 버튼
    const moreComment = () => {
        console.log('댓글 더보기')
    }


    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 등록 내용 */}
        <ViewTemplate {...contentsInfo} />

        {/* 버튼영역 */}
         <div className='btn-container cld-row mb30 justify-center'>
            <div className='cld-col-3'>
                <Button className='secondary' onClick={list}>목록</Button>
            </div>
               
            <div className='cld-col-6 text-center'>
            {
                    status === 'ongoing' ?
                    <>
                        <Button className='lg outline' onClick={reject}>반려</Button>
                        <Button className='lg ml5' onClick={approval}>승인</Button>
                    </>
                    :
                    status === 'approval' ?
                    <>
                        <Button className='lg ml5' onClick={success}>완료</Button>
                    </>
                    :
                    <></>
                }
            
            </div>
            <div className='cld-col-3 d-flex'></div>
        </div>

        {/* 댓글 */}
        <div className='commentWrap mt30'>
            <CommentRegister 
                title='진행 내용'
                total='3'
                value={comment}
                setValue={setComment}
                register={registerComment}
            />

            {
                comments.map(( item, index) => (
                    <Comment 
                        key={'comm'+index}
                        id={item.id}
                        deletable={item.deletable}
                        editable={item.editable}
                        showProfile={item.showProfile}
                        userName={item.userName} 
                        date={item.date}
                        mode={item.mode}
                        value={item.value} 
                        setValue={(e:Event) => editValue(e, item.id)}
                        edit={(e:Event) => edit(e, item.id)}
                        delt={(e:Event) => deleteFunc(e, item.id)}
                        register={(e:Event) => register(e, item.id)}
                        cancel={(e:Event) => cancel(e, item.id)}
                    />
                ))
            }
            
            <Button onClick={moreComment} label={`더보기 ${moreCommentLen}댓글`} className='more p-button-text' icon='pi pi-angle-down' iconPos="right"/>
        </div>
    </BasePage>)
}
export default CLPCATM94620;