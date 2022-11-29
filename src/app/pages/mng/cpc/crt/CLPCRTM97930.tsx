import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button,Calendar } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPCRTM97930.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import BwsDialog from '../../../../shared/components/dialog/bws-dialog/BwsDialog';
import CrtDialog from '../../../../shared/components/dialog/crt-dialog/CrtDialog';
import EmployeesDialog from '../../../../shared/components/dialog/crt-dialog/EmployeesDialog';
import { SearchParams } from "../../../../core/models/search-params";
import { DataTable } from 'primereact/datatable';
import { apiListDummyData } from '../../../../shared/demo/data/apiListDummyData';
import { Column } from 'primereact/column';

//제휴인증 등록
const CLPCRTM97930:React.FC = () => {
    const { goPage, goBack, } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('register');

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
            setMode('view')
        } else if(mode === MODE.EDIT) {
            setMode('view')
        }
    }

    //table
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);
    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
    fromDate: undefined,
    toDate: undefined,
    });

    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    //select option dummy data
    const options1 = [
        { name: '일', code: 'NY' },
        { name: '시간', code: 'RM' },
    ];
    const options2 = [
        { name: '사용', code: 'NY' },
        { name: '미사용', code: 'RM' },
    ];
   
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
                        required: true,
                        key: '요청직원', 
                        value:'홍길동',
                        editingValue: 
                        <div className='d-flex'>
                            <InputText placeholder='제휴처를 검색하세요.'  style={{ width: '200px' }} />
                            <EmployeesDialog />
                        </div>,
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: 'Access token 만료', 
                        value:'10일',
                        editingValue: 
                        <div className='d-flex'>
                        <InputText className="mr10" style={{ width: '100px' }} />
                        <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                        optionLabel='name' placeholder='일' className='dateSelect' />
                        </div>
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: 'Access token 만료', 
                        value:'10일',
                        editingValue: 
                        <div className='d-flex'>
                        <InputText className="mr10" style={{ width: '100px' }} />
                        <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                        optionLabel='name' placeholder='일' className='dateSelect' />
                        </div>
                    },
                ],
            },
            {
                cols: [
                    {
                        required: true,
                        key: 'Api 사용여부', 
                        value:'사용',
                        editingValue: 
                        <div className='d-flex'>
                        <Dropdown value={values.type1} options={options2} onChange={(e) => handleChange('type1', e.value)} 
                        optionLabel='name' placeholder='사용' />
                        </div>
                    },
                ],
            },
            
        ]
    }

    const headerTemplateApi = [
        {
            field: 'no',
            header: 'API 순번',
            sortable: false,
        },
        {
            field: 'name',
            header: 'API명',
            sortable: false, 
        },
        {
            field: 'url',
            header: 'URL',
            sortable: false,
        },
    ]
    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 등록 내용 */}
        <ViewTemplate {...contentsInfo} />
        
        {/* API등록 내용  */}
        <DataTable value={apiListDummyData} 
            className="crtList mt30"
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplateApi.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} ></Column>
            ))}
        </DataTable>

        {/* 
            버튼영역 
            mode={mode} 편집모드 'view' | 'edit' | 'resgister'
            list={list} 목록 버튼
            edit={edit} 수정 버튼
            remove={remove} 삭제 버튼
            cancel={cancel} 수정모드 > 취소 버튼
            confirm={confirm} 수정모드 > 확인 버튼
        */}
        <div className='btn-container cld-row'>
            <div className='cld-col-3'>
                <Button className='secondary' onClick={list}>목록</Button>
            </div>
            { (mode === MODE.EDIT || mode === MODE.REGISTER) &&
            <div className='cld-col-6 text-center'>
            <>
                <Button className='lg outline' onClick={cancel}>취소</Button>
                <Button className='lg ml5' onClick={confirm}>확인</Button>
            </>
            </div>
             }
           
            {mode === MODE.VIEW &&
                <div className='cld-col-9 d-flex'>
                    <div className='cld-col-6 text-center'>
                    <Button className='lg ml5' onClick={confirm}>인증서버전송</Button>

                    </div>
                    <div className='cld-col-6 text-right'>
                        <Button className='ml-auto outline' onClick={edit}>수정</Button>
                        <Button className='ml5' onClick={remove}>삭제</Button>
                    </div>
                    
           
                </div>
             }
        </div>
        
    </BasePage>)
}
export default CLPCRTM97930;