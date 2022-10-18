import { Button,Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPCATM94620.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import Comment from '../../../../shared/components/ui/comment/Comment';
import CommentRegister from '../../../../shared/components/ui/comment/CommentRegister';

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

//The fast cloud 신청 관리 상세 상세/수정
const CLPCATM94620:React.FC = () => {
    const { goPage } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
    

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

    //목록 버튼
    const list = () => {
        goPage('/apm/cat/list')
    }

    //수정 버튼
    const edit = () => {
        //setMode('edit');
        console.log('mode =>', mode)
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
    }

    //취소 버튼
    const cancel = () => {
        console.log('취소')

        setMode('view')
    }

    //확인 버튼
    const confirm = () => {
        setMode('view')
    }

    //comment 댓글입력
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    //comment 등록
    const registration = () => {
        console.log('등록')
    }
    
    const deleteFunc = () => {
        console.log('삭제')
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
        mode: mode,
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
                cols: [
                    {
                        key: '진행상태', 
                        value: <span>신청</span>,
                    }
                ]
            },
            {   
                cols: [
                    {
                        key: '진행상태', 
                        value: <span className='error-text'>반려</span>,
                    }
                ]
            },
            {
                cols: [
                    {
                        key: '반려사유', 
                        value: <span className='error-text'>사업계획서 내용 미진으로 인한 p10 개선도출안 변경 독려를 위한 반려</span>,
                    }
                ]
            },
            {
                
                cols: [
                    {
                        key: '진행상태', 
                        value: <span>완료</span>,
                    },
                    {
                        key: '담당자', 
                        value: <span>안광훈(1232456)</span>,
                    }
                ]
            },
            
        ]
    }

    const commentList = [
        {//관리자 이거나 ? 본인이 작성한 것만 수정/삭제 가능
            deletable:true,
            editable:true,
            profileable:false,
            userName:'권승주',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            deletable:true,
            editable:true,
            profileable:false,
            userName:'홍길동',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            deletable:true,
            editable:true,
            profileable:false,
            userName:'홍길동',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'

        },
        
    ]
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
            <>
                <Button className='lg outline' onClick={cancel}>반려</Button>
                <Button className='lg ml5' onClick={confirm}>승인</Button>
                <Button className='lg ml5' onClick={confirm}>완료</Button>

            </>
            
            </div>
            <div className='cld-col-3 d-flex'>
            <>
               
            </>
            
            </div>
        </div>

        {/* 댓글 */}
        <div className='commentWrap mt30'>
            <CommentRegister 
                title='진행 내용'
                total='3'
                value={value1}
                // setValue={setValue1}
                setValue={setValue1}
            />

            {
                commentList.map(( item, index) => (
                    <Comment 
                        id={index}
                        deletable={item.deletable}
                        editable={item.editable}
                        profileable={item.profileable}
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
export default CLPCATM94620;