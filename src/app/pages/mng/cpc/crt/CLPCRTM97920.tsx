import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button,Calendar } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPCRTM97920.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import BwsDialog from '../../../../shared/components/dialog/bws-dialog/BwsDialog';
import CrtDialog from '../../../../shared/components/dialog/crt-dialog/CrtDialog';
import { SearchParams } from "../../../../core/models/search-params";

//제휴인증 상세/수정
const CLPCRTM97920:React.FC = () => {
    const { goPage, goBack, } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');

    //목록 버튼
    const list = () => {
        goPage('/cpc/crt')
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

     //검색 조건
     const [values, setValues] = React.useState<SearchParams>({
        fromDate: undefined,
        toDate: undefined,
    });

    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

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
        title: '상세 내용',
        mode: mode,
        hasRequired: true,
        rows: [
            {
                cols: [
                    {
                        required: true,
                        key: '제휴서비스명', 
                        value:'아이원잡(개인회원)',
                        editingValue: <InputText placeholder='제휴서비스명을 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '업무시스템', 
                        value:'아이원잡',
                        editingValue: 
                        <div className='d-flex'>
                            <InputText placeholder='업무시스템을 검색하세요.'  style={{ width: '200px' }} />
                            <BwsDialog />
                        </div>,
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '제휴처', 
                        value:'경리나라',
                        editingValue: 
                        <div className='d-flex'>
                            <InputText placeholder='제휴처를 검색하세요.'  style={{ width: '200px' }} />
                            <CrtDialog />
                        </div>,
                    },
                ],
            },
            {
                cols: [
                    {
                        required: false,
                        key: '제휴처 인증번호', 
                        value:'sdjfksdflkdjlsfkdjlsl1234dfkjdlksj',
                        editingValue: <InputText placeholder='제휴처 인증번호를 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: false,
                        key: '제휴처 비밀키', 
                        value:'sdjfksdflkdjlsfkdjlsl1234dfkjdlksj',
                        editingValue: <InputText placeholder='제휴처 비밀키를 입력해주세요.' />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '서비스 개시일', 
                        value:'2023.01.30',
                        editingValue: <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: '서비스 종료일', 
                        value:'2023.01.30',
                        editingValue: <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />

                    },
                ],
            },
            {
                cols: [
                    {
                        required: false,
                        key: '요청직원', 
                        value:'홍길동',
                        editingValue: 
                        <div className='d-flex'>
                            <InputText placeholder='제휴처를 검색하세요.'  style={{ width: '200px' }} />
                            <CrtDialog />
                        </div>,
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
export default CLPCRTM97920;