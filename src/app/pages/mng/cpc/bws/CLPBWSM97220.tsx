import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPBWSM97220.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { bwsCodePopDummyData } from '../../../../shared/demo/data/bwsCodePopDummyData';
import { paginator } from '../../../../shared/utils/table-paginator';
import { Column } from 'primereact/column';


//업무시스템 등록
const CLPBWSM97220:React.FC = () => {
    const { goPage, goBack, } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('register');

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
    //dialog
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const onClick = (name:any, position?:any) => {
        setDisplayBasic2(true)
    }

    const onHide = (name:string) => {
        setDisplayBasic2(false)
    }

    const renderFooter = (name:any) => {
        return (
            <div className='buttonGrp d-flex justify-center'>
                
                <Button label="닫기" onClick={() => onHide(name)} autoFocus className="md" />
            </div>
        );
    }

    //table
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    const headerTemplate = [
        {
            field: 'code',
            header: '코드',
            sortable: false,
        },
        {
            field: 'name',
            header: '코드명',
            sortable: false,
        },
        
    ]
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
                            <Button type='button' className='md ml10' label='조회' onClick={() => onClick('displayBasic2')} />
                            <Dialog header="업무시스템 공통팝업" visible={displayBasic2}  style={{ width: '450px' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                                <DataTable value={bwsCodePopDummyData} paginator paginatorTemplate={paginator} 
                                    className="bwCodePop"
                                    first={first} rows={rows} 
                                    onPage={onCustomPage} responsiveLayout='scroll'>
                                    {headerTemplate.map((col, index) => (
                                        <Column key={col.header} field={col.field} header={col.header} ></Column>
                                    ))}
                                </DataTable>
                            </Dialog>
                        </div>,
                    },
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
export default CLPBWSM97220;