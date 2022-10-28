import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../shared/utils/table-paginator";
import './CLPSURM93310.css';
// import { surDummyData } from '../../../shared/demo/data/surDummyData';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../core/models/search-params';
import { TableSortParams } from '../../../core/models/table-sort-params';

//설문 관리 
const CLPSURM93310: React.FC = () => {
    const { goPage, goBack } = useBasePage()

    const surDummyData = [
        {
            no: 0,
            type: '내부',
            subject: '제목입니다',
            state: '진행중',
            respondents: <div className="d-flex-default"><span className="mr8">1,100</span><Button className="outline" onClick={(e) => goPage('/qsm/result')} label='결과보기' /></div>,
            period: '2022.10.15 ~ 2022.12.20',
            registrar:'신재문 (12345)',
            registerDate:'2022.12.05',
        },
        {
            no: 0,
            type: '내부',
            subject: '제목입니다',
            state: '진행중',
            respondents: <div className="d-flex-default"><span className="mr8">1,100</span><Button className="outline" onClick={(e) => goPage('/qsm/result')} label='결과보기' /></div>,
            period: '2022.10.15 ~ 2022.12.20',
            registrar:'신재문 (12345)',
            registerDate:'2022.12.05',
        },
    ]

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
        { name: '등록일자', code: 'RM' },
        { name: '설문시작일', code: 'LDN' },
        { name: '설문종료일', code: 'LDN' },
    ];
    const options3 = [
        { name: '전체', code: 'NY' },
        { name: '내부', code: 'RM' },
        { name: '외부', code: 'LDN' },
    ];
    const options4 = [
        { name: '전체', code: 'NY' },
        { name: '진행중', code: 'RM' },
        { name: '완료', code: 'LDN' },
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
    
    //신규 등록 버튼
    const register = (event:any) => {
    goPage(`/qsm/register`);
    }    
    
    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/qsm/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
        },
        {
            field: 'type',
            header: '노출구분',
            sortable: false,
        },
        {
            field: 'subject',
            header: '설문제목',
            sortable: false,
        },
        {
            field: 'state',
            header: '설문상태',
            sortable: false,
        },
        {
            field: 'respondents',
            header: '응답자',
            sortable: false,
        },
        {
            field: 'period',
            header: '설문기간',
            sortable: false,
        },
        {
            field: 'registrar',
            header: '등록자',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '등록일자',
            sortable: false,
        },
        
    ]

    return(
    <BasePage className="CLPSURM93310">
        <div className='searchBar'>
            <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                optionLabel='name' placeholder='전체' />

            <InputText className='searchTxt mr20' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

            <Dropdown value={values.type2} options={options2} onChange={(e) => handleChange('type2', e.value)} 
                optionLabel='name' placeholder='전체' />
            <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
            <span className='mt5'>~</span>
            <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
            <Button label='조회' />
        </div>

        <div className='toolbar mb10'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
            <Dropdown className='ml-auto mr8' value={sort.sort1} options={options3} onChange={(e) => sortHandleChange('sort1', e.value)} 
                optionLabel='name' placeholder='전체' />
                <Dropdown className='mr8' value={sort.sort2} options={options4} onChange={(e) => sortHandleChange('sort2', e.value)} 
                optionLabel='name' placeholder='전체' />
            <Button className='outline' label='설문등록' icon='pi pi-pencil' onClick={register} />
        </div>

        <DataTable value={surDummyData} paginator paginatorTemplate={paginator} 
            className="sur"
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header}></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPSURM93310;

