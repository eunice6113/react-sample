import * as React from 'react';
import { Dropdown, Button, InputText } from "primereact";
import { BasePage } from '../../../../shared/components/base/BasePage';
import './CLPBWSM97110.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { businessSystemDummyData } from '../../../../shared/demo/data/businessSystemDummyData';
import { SearchParams } from '../../../../core/models/search-params';
import { Calendar } from 'primereact/calendar';
import { paginator } from '../../../../shared/utils/table-paginator';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';

import { useState } from 'react';

//업무시스템 관리
const CLPBWSM97110:React.FC = () => {
    const { goPage, goBack } = useBasePage()

    //table page length
    let pages = 10;


    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);
    const [selectedProducts12, setSelectedProducts12] = useState(null);

    
     //검색 조건
     const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,

    });


     //select option dummy data
     const options1 = [
        { name: '전체', code: 'NY' },
        { name: '업무시스템', code: 'RM' },
        { name: '등록자', code: 'LDN' },
    ];
   
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    
    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/cpc/bws/${e.index}`);
    }
    // 삭제 버튼
    const deletBtn = (event:any) => {
    }

    //등록 버튼
    const register = (event:any) => {
        goPage(`/cpc/bws/register`);
    }

    // api 등록 버튼
    const apiRegister = (event:any) => {
        goPage(`/cpc/bws/apiRegister`);
    }

  
    const headerTemplate = [
        {
            field: 'code',
            header: '업무시스템코드',
            sortable: false,
        },
        {
            field: 'name',
            header: '업무시스템명',
            sortable: false, 
        },
        {
            field: 'service',
            header: '서비스',
            sortable: false,
        },
        {
            field: 'author',
            header: '등록직원',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '등록일시',
            sortable: false,
        },
        
    ]
    
    return(
        <BasePage className='CLPBWSM96100'>

                <>
                {/* 검색영역 */}
                <div className='searchBar '>
                    <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                    optionLabel='name' placeholder='전체' />

                    <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

                    <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                    <span className='mt5'>~</span>
                    <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
                    <Button label='조회' />
                </div>

                <div className='toolbar mb10'>
                    <p>총 <span className='pageNm'>{pages}</span>개</p>
                    <Button className='ml-auto outline' label='삭제' onClick={deletBtn} />
                    <Button className='ml8 outline' label='등록' icon='pi pi-pencil' onClick={register} />
                    <Button className='ml8 outline' label='API등록' icon='pi pi-pencil' onClick={apiRegister} />

                </div>

                <DataTable value={businessSystemDummyData} paginator paginatorTemplate={paginator} 
                    className="businessSystemList"
                    onRowClick={(e) => goDetail(e)}
                    selection={selectedProducts12} 
                    onSelectionChange={e => setSelectedProducts12(e.value)} 
                    dataKey="no"
                    first={first} rows={rows} 
                    onPage={onCustomPage} responsiveLayout='scroll'>

                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    {headerTemplate.map((col, index) => (
                        <Column key={col.header} field={col.field} header={col.header} ></Column>
                    ))}
                    
                </DataTable>
               
                </>
      
        </BasePage>)
}
export default CLPBWSM97110;