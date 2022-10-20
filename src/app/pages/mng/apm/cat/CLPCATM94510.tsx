import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../../shared/utils/table-paginator";
import './CLPCATM94510.css';
import { catDummyData } from '../../../../shared/demo/data/catDummyData';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../../core/models/search-params';
import { TableSortParams } from '../../../../core/models/table-sort-params';

//서비스 카탈로그 신청 관리
const CLPCATM94510: React.FC = () => {
    const { goPage, goBack } = useBasePage()

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
    });
    //table sorting 조건
    const [sort, setSort] = React.useState<TableSortParams>({
        sort1: undefined,
    });

    //table
    const [data, setData] = React.useState([]);
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

    //초기화
    React.useEffect(() => {

    }, []); 

    React.useEffect(() => {
        console.log('data =>', data)
    }, [data]); 

    //select option dummy data
    const options1 = [
        { name: '전체', code: 'NY' },
        { name: '신청자', code: 'RM' },
        { name: '담당자', code: 'IST' },
    ];
    
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '공통인증', code: 'RM' },
        { name: '세션클러스터링', code: 'LDN' },
    ];
    const options3 = [
        { name: '전체', code: 'NY' },
        { name: '신청', code: 'RM' },
        { name: '진행', code: 'LDN' },
        { name: '완료(승인)', code: 'LDN2' },
        { name: '반려', code: 'LDN3' },
    ];
    
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };
    const sortHandleChange = (prop: keyof TableSortParams, value:any) => {
        setSort({ ...sort, [prop]: value });
    };

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    
    //table page length
    let pages = 50;
    
    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/apm/cat/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'userId',
            header: '신청 아이디',
            sortable: false,
        },
        
        {
            field: 'author',
            header: '신청자',
            sortable: false,
        },
        {
            field: 'mail',
            header: '이메일',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '신청일자',
            sortable: false,
        },
        {
            field: 'state',
            header: '진행상태',
            sortable: false,
        },
        {
            field: 'manager',
            header: '담당자',
            sortable: false,
        },
        
    ]

    return(
    <BasePage className="CLPCATM94510">
        <div className='searchBar'>
            <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                optionLabel='name' placeholder='전체' />
            <Dropdown value={values.type2} options={options2} onChange={(e) => handleChange('type2', e.value)} 
                optionLabel='name' placeholder='전체' />
            
            <InputText className='searchTxt mr20' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

            <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
            <span className='mt5'>~</span>
            <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
            <Button label='조회' />
        </div>

        <div className='toolbar mb10'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
            <Dropdown className='ml-auto' value={sort.sort1} options={options3} onChange={(e) => sortHandleChange('sort1', e.value)} 
                optionLabel='name' placeholder='전체' />
        </div>

        <DataTable value={catDummyData} paginator paginatorTemplate={paginator} 
            className='cat'
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} ></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPCATM94510;

