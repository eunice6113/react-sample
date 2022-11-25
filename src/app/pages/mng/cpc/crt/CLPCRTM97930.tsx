import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPCRTM97930.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';

//업무시스템 등록
const CLPCRTM97930:React.FC = () => {
    const { goPage, goBack, } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('register');

    //목록 버튼
    const list = () => {
        goPage('/cpc/cop')
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
                        value: '신재문(42483)'
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
                        key: '제휴처 명', 
                        value:'경리나라',
                        editingValue: <InputText placeholder='제휴처 명을 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '사업자등록번호', 
                        value:'123-456-7890',
                        editingValue: <InputText placeholder='사업자등록번호를 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '담당자', 
                        value:'홍길동',
                        editingValue: <InputText placeholder='담당자를 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '담당자 연락처', 
                        value:'02-123-4567',
                        editingValue: <InputText placeholder='담당자 연락처를 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '담당자 이메일', 
                        value:'cloud@ibk.co.kr',
                        editingValue: <InputText placeholder='담당자 이메일을 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: false,
                        key: '대표자명', 
                        value:'김대표',
                        editingValue: <InputText placeholder='대표자명을 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: false,
                        key: '대표자 연락처', 
                        value:'02-123-4567',
                        editingValue: <InputText placeholder='대표자 연락처를 입력해주세요.' />
                    },
                ],
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
export default CLPCRTM97930;