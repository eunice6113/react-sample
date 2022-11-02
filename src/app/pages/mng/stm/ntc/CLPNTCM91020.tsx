import { Dropdown, Editor, FileUpload, InputText, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import CldFileUpload from '../../../../shared/components/CldFileUpload';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPNTCM91020.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';

//공지사항 관리 상세/수정
const CLPNTCM91020:React.FC = () => {
    const { goPage, goBack, paramId, isRegister } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');

    const [select1, setSelect1] = React.useState<any>(null);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const categories = [
        {name: '노출', key: 'Y'}, 
        {name: '비노출', key: 'N'}];
    const [selectedCategory, setSelectedCategory] = React.useState(categories[1]);

    //select option dummy data
    const options1 = [
        { name: '공지사항', code: 'NY' },
        { name: '웹툰', code: 'RM' },
    ];

    const handleChange1 = (e: { value: any}) => {
        setSelect1(e.value);
    }

    //목록 버튼
    const list = () => {
        goPage('/stm/qna/list')
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
    }

    //수정 버튼
    const edit = () => {
        setMode('edit');

        console.log('mode =>', mode)
    }
    
    //취소 버튼
    const cancel = () => {
        console.log('취소')

        if(mode === MODE.REGISTER) {
            goBack();
        } else if(mode === MODE.EDIT) {
            setMode('view')
        }
    }

    //확인 버튼
    const confirm = () => {
        if(mode === MODE.REGISTER) {
            goBack();
        } else if(mode === MODE.EDIT) {
            setMode('view')
        }
    }

    //api 읽어와서 업데이트 할 내용
    const authorInfo = {
        title: '등록자 정보',
        rows: [
            {
                cols: [
                    {
                        key: '등록자', 
                        value: '신재문'
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
        hasRequired: true,
        rows: [
            {
                cols: [
                    {
                        required: true,
                        key: '구분', 
                        value: <span>공지사항</span>,
                        editingValue: <Dropdown value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '제목', 
                        value: <span> 클라우드 포탈 소식 전해드립니다.</span>,
                        editingValue: <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '내용', 
                        value: <span>내용입니다</span>,
                        editingValue: <Editor style={{height:'320px'}} value={content} onTextChange={(e) => setContent(e.textValue)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '첨부파일', 
                        value: <><i className='pi pi-download mr5 downloadIco'></i><u>파일명.xlsx</u></>,
                        editingValue: <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />
                    },
            ]
            },
            {
                cols: [
                    {
                        key: '중요공지여부',
                        value: <span>노출</span>,
                        editingValue: (
                            categories.map((category) => {
                            return (
                                <span key={category.key} className="field-radiobutton mr20">
                                    <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                    <label className='ml5' htmlFor={category.key}>{category.name}</label>
                                </span>
                        )}))
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

        {/* 
            버튼영역 
            mode={mode} 편집모드 'view' | 'edit' | 'resgister'
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
export default CLPNTCM91020;