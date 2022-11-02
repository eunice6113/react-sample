import { Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPFAQM91920.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import CldFileUpload from '../../../../shared/components/CldFileUpload';

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
    files?: File[];
}

//건의 및 개선 관리 상세/수정
const CLPFAQM91920:React.FC = () => {
    const { goPage } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
    

    const [values, setValues] = React.useState<any>({
        title: '',
        content: '',
        fromDate: undefined,
        toDate: undefined,
        useYn: false,
        files: [{name: '파일1.xlsx', size:0}, {name:'파일2.png', size:10}],
    });

    const handleChange = (prop: keyof FaqContent, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    //목록 버튼
    const list = () => {
        goPage('/stm/faq/list')
    }

    //수정 버튼
    const edit = () => {
        setMode('edit');
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
        title: '등록 내용',
        mode: mode,
        rows: [
            {
                cols: [
                    {
                        key: '제목', 
                        value: <span> 클라우드 포탈 소식 전해드립니다프라이빗 클라우드를 통해 스마트뱅킹 기능을 내부적으로 테스트하는 방법을 알고 싶습니다.</span>,
                        editingValue: <InputText maxLength={100} placeholder='제목을 입력해주세요.(최대 100자)' value={values.title} onChange={(e) => handleChange('title', e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '내용', 
                        value: <span>클라우드 포탈 소식 전해드립니다프라이빗 클라우드를 통해 스마트뱅킹 기능을 내부적으로 테스트하는 방법을 알고 싶습니다.</span>,
                        editingValue: <InputTextarea rows={5} maxLength={250} placeholder='상세내용을 입력해주세요.(최대 250자)' value={values.content} onChange={(e) => handleChange('content', e.target.value)} />,
                    }
                ]
            },
            
        ]
    }

    const answer = {
        title: '건의 및 개선 답변',
        mode: mode,
        rows: [
            {
                cols: [
                    {
                        key: '답변', 
                        value: <span>클라우드 포탈 소식 전해드립니다프라이빗 클라우드를 통해 스마트뱅킹 기능을 내부적으로 테스트하는 방법을 알고 싶습니다.</span>,
                        editingValue: <InputTextarea rows={5} maxLength={250} placeholder='답변 내용을 입력해주세요.' value={values.content} onChange={(e) => handleChange('content', e.target.value)} />,
                    }
                ]
            },
            {
                cols: [
                    {
                        key: '파일첨부', 
                        value: <>
                            <div className='downloadFiles'>
                                <ul className='fileList'>
                                    {
                                        values.files.map((file:any, index:number) => (
                                            <li key={file.name+index}><i className='pi pi-download mr5 downloadIco'></i><u>{file.name}</u></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </>,
                        editingValue: <>
                            <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />
                            <div className='downloadFiles mt10'>
                                <ul className='fileList'>
                                    {
                                        values.files.map((file:any, index:number) => (
                                            <li key={file.name+index}><i className='pi pi-download mr5 downloadIco'></i><u>{file.name}</u></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </>
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

        {/* 답변 */}
        <ViewTemplate {...answer} />

        {/* 
            버튼영역 
            mode={mode} 편집모드 'view' | 'edit' | 'register'
            list={list} 목록 버튼
            edit={edit} 수정 버튼
            remove={remove} 삭제 버튼
            cancel={cancel} 수정모드 > 취소 버튼
            confirm={confirm} 수정모드 > 확인 버튼
        */}
        <ViewButtonsTemplate 
            mode={mode}
            list={list}
            edit={edit}
            remove={remove}
            cancel={cancel}
            confirm={confirm}
        />
    </BasePage>)
}
export default CLPFAQM91920;