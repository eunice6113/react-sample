import * as React from 'react';
import { Dropdown, Button, InputText } from 'primereact';
import './bws-dialog.css';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { bwsCodePopDummyData } from '../../../../shared/demo/data/bwsCodePopDummyData';
import { paginator } from '../../../../shared/utils/table-paginator';
import { Column } from 'primereact/column';
import { SearchParams } from '../../../../core/models/search-params';

//업무시스템 조회 팝업  
const BwsDialog: React.FC = () => {

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,

    });

    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    //table
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

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
            <div className='buttonGrp'>
                <Button label="취소" onClick={() => onHide(name)} className="outline md " />
                <Button label="확인" onClick={() => onHide(name)} autoFocus className="md" />
            </div>
        );
    }
    //table
    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    const headerTemplate = [
        {
            field: 'no',
            header: 'no',
            sortable: false,
        },
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
   

    return(
        <>
            <Button type='button' className='md ml10' label='조회' onClick={() => onClick('displayBasic2')} />
            <Dialog header="업무시스템 조회" visible={displayBasic2}  style={{ width: '450px' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                 {/* 검색영역 */}
                 <div className='searchBar mt0 mb10'>
                    <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />
                    <Button label='조회' />
                </div>

                <DataTable value={bwsCodePopDummyData} paginator paginatorTemplate={paginator} 
                    className="bwCodePop"
                    first={first} rows={rows} 
                    onPage={onCustomPage} responsiveLayout='scroll'>
                    {headerTemplate.map((col, index) => (
                        <Column key={col.header} field={col.field} header={col.header} ></Column>
                    ))}
                </DataTable>
            </Dialog>
        </>
    )
}
export default BwsDialog

