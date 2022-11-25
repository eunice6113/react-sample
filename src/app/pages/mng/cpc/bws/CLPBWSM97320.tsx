import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPBWSM97320.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { paginator } from '../../../../shared/utils/table-paginator';
import { Column } from 'primereact/column';
import { bwsApiDummyData } from '../../../../shared/demo/data/bwsApiDummyData';
import BwsDialog from '../../../../shared/components/dialog/bws-dialog/BwsDialog';


//업무시스템 등록
const CLPBWSM97220:React.FC = () => {
    const { goPage, goBack, } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('register');
    const [selectedProducts12, setSelectedProducts12] = useState(null);
    
    //table page length
    let pages = 10;

    //목록 버튼
    const list = () => {
        goPage('/cpc/bws')
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

    //행추가
    const addRow = () => {

    }
    //저장
    const save = () => {

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
    
    

    //table
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    const contentsInfo = {
        title: '등록 내용',
        mode: mode,
        hasRequired: true,
        rows: [
            {
                cols: [
                    {
                        required: false,
                        key: '업무시스텝', 
                        editingValue: 
                        <div className='d-flex'>
                            <InputText placeholder='코드명으로 검색하세요.'  style={{ width: '200px' }} />
                            <BwsDialog />
                        </div>,
                    },
                ]
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

        <div className='toolbar mb10 mt20'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
            <Button className='ml-auto outline' label='행추가'icon='pi pi-plus' onClick={addRow} />
            <Button className='outline ml8' label='행삭제'icon='pi pi-minus' onClick={addRow} />
            <Button className='outline ml8' label='저장' icon='pi pi-save' onClick={save}/>
        </div>
        <DataTable value={bwsApiDummyData} paginator paginatorTemplate={paginator} 
            className="bwsApi"
            selection={selectedProducts12} 
            onSelectionChange={e => setSelectedProducts12(e.value)} 
            dataKey="no"
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>

            <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
            
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
export default CLPBWSM97220;