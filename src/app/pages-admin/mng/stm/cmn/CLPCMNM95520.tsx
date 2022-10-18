import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPCMNM95520.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import Comment from '../../../../shared/components/ui/comment/Comment';
import CommentRegister from '../../../../shared/components/ui/comment/CommentRegister';

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

    //comment 댓글입력
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

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
                        key:null,
                        value: <span>내용노출 영역</span>,
                    }
                ]
            },
            
        ]
        
    }


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


    const registration = () => {
        console.log('등록')
    }
    const edit = () => {
        console.log('편집')
    }
    const deleteFunc = () => {
        console.log('삭제')
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
        <div className='commentWrap mt30'>
            <CommentRegister 
                title='관리자 댓글을 입력하실 수 있습니다.'
                total='글 댓글 3'
                value={value1}
                // setValue={setValue1}
                setValue={setValue1}
            />

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
    </BasePage>)
}
export default CLPCMNM95520;