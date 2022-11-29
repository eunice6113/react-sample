import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPCPUM98120.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { paginator } from '../../../../shared/utils/table-paginator';
import { Column } from 'primereact/column';
import { userDummyData } from '../../../../shared/demo/data/userDummyData';
import { SearchParams } from '../../../../core/models/search-params';


//업무시스템 등록
const CLPCPUM98120:React.FC = () => {
    const { goPage, goBack, } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('register');
    const [selectedProducts12, setSelectedProducts12] = useState(null);
    
    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
    });

    //table page length
    let pages = 10;

    //삭제 버튼
    const deleteBtn = () => {
    }

    //목록 버튼
    const list = () => {
        goPage('/cpc/cpu')
    }
 
    //select option dummy data
    const options1 = [
        { name: '전체', code: 'NY' },
        { name: '제휴처ID', code: 'RM' },
        { name: '사용자ID', code: 'LDN' },
    ];
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    //api 읽어와서 업데이트 할 내용
    const authorInfo = {
        colgroups: ['10%','20%','10%','20%','10%','20%'],
        rows: [
            {
                cols: [
                    {
                        key: '제휴처', 
                        value: '경리나라'
                    },
                    {
                        key: '업무시스템', 
                        value: '아이원잡'
                    },
                    {
                        key: '사용서비스', 
                        value: '기업회원'
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
    
    const headerTemplateApi = [
        {
            field: 'partnerID',
            header: '제휴 ID',
            sortable: false,
        },
        {
            field: 'userID',
            header: '사용자ID',
            sortable: false, 
        },
    ]

    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        <div className='searchBar'>
            <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                optionLabel='name' placeholder='전체' />
            

            <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

            <Button label='조회' />
        </div>

        <div className='toolbar mb10'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
            <Button className='ml-auto outline' label='삭제' icon='pi pi-trash' onClick={deleteBtn} />
        </div>

        <DataTable value={userDummyData} paginator paginatorTemplate={paginator} 
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
            list={list}
        />
        
               
    </BasePage>)
}
export default CLPCPUM98120;