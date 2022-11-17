import * as React from 'react';
import { Dropdown, Button, InputText } from "primereact";
import { BasePage } from '../../../shared/components/base/BasePage';
import './CLPSNCM00140.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { approvalListDummyData } from '../../../shared/demo/data/approvalListDummyData';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import { SearchParams } from '../../../core/models/search-params';
import { Calendar } from 'primereact/calendar';
import { paginator } from '../../../shared/utils/table-paginator';
import { useState } from 'react';




//설문 관리 상세/수정
const CLPSNCM00140:React.FC = () => {
    
    //table page length
    let pages = 5;

    //table
    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
    const [taskID, setTaskID] = React.useState('');

    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(5);
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
        { name: '결제구분코드', code: 'RM' },
        { name: '업무명', code: 'LDN' },
    ];
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '승인', code: 'RM' },
        { name: '반려', code: 'LDN' },
    ];
    const options3 = [
        { name: '전체', code: 'NY' },
        { name: '', code: 'RM' },
        { name: '', code: 'LDN' },
    ];
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    //일괄승인 버튼
    const apvSelectBtn = (event:any) => {
    }

    //일괄승인 버튼
    const rjcSelectBtn = (event:any) => {
    }

    //일괄승인 버튼
    const approvalBtn = (event:any) => {
    }

    //일괄승인 버튼
    const rejectBtn = (event:any) => {
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'state',
            header: '결재상태',
            sortable: false, 
        },
        {
            field: 'type',
            header: '업무구분',
            sortable: false,
        },
        {
            field: 'subject',
            header: '요청제목',
            sortable: false,
        },
        {
            field: 'author',
            header: '요청자',
            sortable: false,
        },
        {
            field: 'applicant',
            header: '한단계 결제자',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '요청일',
            sortable: false,
        },
        {
            field: 'approvalDate',
            header: '결재완료일',
            sortable: false,
        },
    ]
    const [fileValues, setileValues] = React.useState<any>({
        title: '',
        content: '',
        fromDate: undefined,
        toDate: undefined,
        useYn: false,
        files: [{name: '파일1.xlsx', size:0}, {name:'파일2.png', size:10}],
    });

    const tableContent= {
        mode: mode,
        hasRequired: true,
        colgroups: ['150px', '*'],
        rows: [
            {
                cols: [
                    {
                        required: true,
                        key: '제목', 
                        value: '개발자(송호철) 접속권한 신청',
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '결재요청 내용', 
                        value: '결재 요청 내용 노출 영역'
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '파일첨부', 
                        value:
                        <>
                            <div className='downloadFiles'>
                                <ul className='fileList'>
                                    {
                                        fileValues.files.map((file:any, index:number) => (
                                            <li key={file.name+index}><i className='pi pi-download mr5 downloadIco'></i><u>{file.name}</u></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </>
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '승인/반려 사유', 
                        value: <InputText className="" placeholder="승인/반려 사유를 입력해주세요." value={taskID} onChange={(e) => setTaskID(e.target.value)} />,

                    },
                ]
            },
            
        ]
    }
    
   
    return(
        <BasePage className='CLPSNCM00140'>

                <>
                {/* 검색영역 */}
                <div className='searchBar '>
                    <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                    optionLabel='name' placeholder='전체' />

                    <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

                    <Dropdown value={values.type2} options={options2} onChange={(e) => handleChange('type2', e.value)} 
                        optionLabel='name' placeholder='전체' />
                    <Dropdown value={values.type3} options={options3} onChange={(e) => handleChange('type3', e.value)} 
                        optionLabel='name' placeholder='전체' />
                    
                    <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                    <span className='mt5'>~</span>
                    <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
                    <Button label='조회' />
                </div>

                <div className='toolbar mb10'>
                    <p>총 <span className='pageNm'>{pages}</span>개</p>
                    <Button className='ml-auto outline' label='일괄승인' onClick={apvSelectBtn} />
                    <Button className='ml8 outline' label='일괄반려' onClick={rjcSelectBtn} />
                </div>

                <DataTable value={approvalListDummyData} paginator paginatorTemplate={paginator} 
                    className="approvalList"
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
               

                <div className='request mt20'>
                    <table className='cld-table requestTb'>
                        <thead>
                            <tr>
                                <th>팀원</th>
                                <th>팀장</th>
                                <th>부점장</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                요청<br />
                                <span className='color-primary'>허승회</span><br />
                                과장
                            </td>
                            <td>
                                요청<br />
                                <span className='color-primary'>허승회</span><br />
                                과장
                            </td>
                            <td>
                                요청<br />
                                <span className='color-primary'>허승회</span><br />
                                과장
                            </td>
                        </tr>
                        </tbody>
                        
                    </table>
                    <ViewTemplate {...tableContent} />
                </div>

                <div className='d-flex justify-center mt30'>
                    <Button label="반려" className="outline xl " onClick={approvalBtn}/>
                    <Button label="승인"  className="xl ml8" onClick={rejectBtn}/>
                </div>
                </>
      
        </BasePage>)
}
export default CLPSNCM00140;