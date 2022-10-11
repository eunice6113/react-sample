import { Button, Dropdown, Editor, FileUpload, InputText, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPNTCM91020.css';

//공지사항 관리 상세/수정
const CLPNTCM91020:React.FC = () => {
    const { goPage, goBack, paramId } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'resgister'>('view');

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
        setMode('view')
    }

    //확인 버튼
    const confirm = () => {
        setMode('view')
    }

    const contents1 = {
        title: '등록자 정보',
        grid: 4,  
        contents: [
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

    const contents2 = {
        title: '등록 내용',
        grid: 2, 
        mode: mode,
        hasRequired: true,
        contents: [
            {
                required: true,
                key: '구분', 
                value: <span>공지사항</span>,
                editingValue: <Dropdown value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
            },
            {
                required: true,
                key: '제목', 
                value: <span> 클라우드 포탈 소식 전해드립니다.</span>,
                editingValue: <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />,
            },
            {
                required: true,
                key: '내용', 
                value: <span>내용입니다</span>,
                editingValue: <Editor style={{height:'320px'}} value={content} onTextChange={(e) => setContent(e.textValue)} />,
            },
            {
                key: '첨부파일', 
                value: <><i className='pi pi-download mr5 downloadIco'></i><u>파일명.xlsx</u></>,
                editingValue: <FileUpload />
            },
            {
                key: '중요공지여부',
                value: <span>노출</span>,
                editingValue: (
                    categories.map((category) => {
                    return (
                        <span key={category.key} className="field-radiobutton mr20">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)}  checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                            <label className='ml5' htmlFor={category.key}>{category.name}</label>
                        </span>
                )}))
            }
        ]
    }

    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...contents1} />

        {/* 등록 내용 */}
        <ViewTemplate {...contents2} />

        {/* 
            버튼영역 
            mode={mode} 편집모드 'view' | 'edit' | 'resgister'
            list={goBack} 목록 버튼
            edit={edit} 수정 버튼
            remove={remove} 삭제 버튼
            cancel={cancel} 수정모드 > 취소 버튼
            confirm={confirm} 수정모드 > 확인 버튼
        */}
        <ViewButtonsTemplate 
            mode={mode}
            list={goBack}
            edit={edit}
            remove={remove}
            cancel={cancel}
            confirm={confirm}
        />
    </BasePage>)
}
export default CLPNTCM91020;