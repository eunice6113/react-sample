import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../shared/utils/table-paginator";
import './CLPEVNM93710.css';
import { eventDummyData } from '../../../shared/demo/data/eventDummyData';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../core/models/search-params';
import { TableSortParams } from '../../../core/models/table-sort-params';

//이벤트 관리
const CLPEVNM93710: React.FC = () => {
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
        sort2: undefined,
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
        { name: '제목', code: 'RM' },
        { name: '등록자', code: 'IST' },
    ];
    
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '댓글', code: 'RM' },
        { name: '퀴즈', code: 'LDN' },
    ];
    const options3 = [
        { name: '전체', code: 'NY' },
        { name: '시작일', code: 'RM' },
        { name: '종료일', code: 'LDN' },
        { name: '등록일자', code: 'LDN2' },
    ];
    const options4 = [
        { name: '전체', code: 'NY' },
        { name: '진행중', code: 'RM' },
        { name: '종료', code: 'LDN' },
        { name: '당첨발표 건', code: 'LDN2' },
    ];
    const options5 = [
        { name: '전체', code: 'NY' },
        { name: '실패', code: 'RM' },
        { name: '완료', code: 'LDN' },
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
        goPage(`/evm/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'subject',
            header: '이벤트 제목',
            sortable: false,
        },
        {
            field: 'type',
            header: '이벤트 유형',
            sortable: false,
        },
        {
            field: 'author',
            header: '등록자',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '등록일자',
            sortable: false,
        },
        {
            field: 'state',
            header: '진행상태',
            sortable: false,
        },
        {
            field: 'period',
            header: '이벤트 기간',
            sortable: false,
        },
        
    ]

    return(
    <BasePage className="CLPEVNM93710">
        <div className='searchBar'>
            <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                optionLabel='name' placeholder='전체' />
            <Dropdown value={values.type2} options={options2} onChange={(e) => handleChange('type2', e.value)} 
                optionLabel='name' placeholder='전체' />

            <InputText className='searchTxt mr20' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

            <Dropdown value={values.type3} options={options3} onChange={(e) => handleChange('type3', e.value)} 
                optionLabel='name' placeholder='전체' />
            <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
            <span className='mt5'>~</span>
            <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
            <Button label='조회' />
        </div>

        <div className='toolbar mb10'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
            <Dropdown className='ml-auto mr8' value={sort.sort1} options={options4} onChange={(e) => sortHandleChange('sort1', e.value)} 
                optionLabel='name' placeholder='전체' />
                <Dropdown className='' value={sort.sort2} options={options5} onChange={(e) => sortHandleChange('sort2', e.value)} 
                optionLabel='name' placeholder='전체' />
        </div>

        <DataTable value={eventDummyData} paginator paginatorTemplate={paginator} 
            className='evn'
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} ></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPEVNM93710;

