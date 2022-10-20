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

    //approval: 승인 완료, reject: 반려, ongoing: 진행중
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

    //comment 댓글입력
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    //comment 등록
    const registration = () => {
        console.log('등록')
    }
    
    //comment 삭제
    const deleteFunc = () => {
        console.log('삭제')
    }

    //comment 수정 버튼
    const edit = () => {
        setMode('edit');
        console.log('mode =>', mode)
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