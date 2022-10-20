import { Dropdown, InputNumber, InputText } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import TextEditor from '../../../../shared/components/ui/text-editor/TextEditor';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import './CLPQNAM91520.css';

//자주묻는질문 등록
const CLPQNAM91520:React.FC = () => {
    const { goPage, goBack } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('register');

    const [order, setOrder] = React.useState<any>(null);
    const [select1, setSelect1] = React.useState<any>(null);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

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
                        value: <span>클라우드</span>,
                        editingValue: <Dropdown value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '질문', 
                        value: <span> 클라우드 포탈 소식 전해드립니다.</span>,
                        editingValue: <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '답변', 
                        value: <span>내용입니다</span>,
                        editingValue: <TextEditor value={content} onTextChange={setContent} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '노출순서',
                        value: <span>1</span>,
                        editingValue: (
                            <div className='d-flex-default'>
                                <InputNumber className='orderNm' inputId="integeronly" value={order} onValueChange={(e) => setOrder(e.value)} />
                                <span className='infoTxt d-flex-default'><i className='pi pi-info-circle ml10 mr5'></i> 기등록한 노출순서와 변경하시는 경우 기등록된 자주 묻는 질문 이후 게시글도 포함하여 +1 처리 됩니다. </span>
                            </div>
                        )
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
export default CLPQNAM91520;