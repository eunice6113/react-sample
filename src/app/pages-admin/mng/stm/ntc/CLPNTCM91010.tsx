import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from '../../../../shared/utils/table-paginator';
import './CLPNTCM91010.css';
import { noticeDummyData } from '../../../../shared/demo/data/noticeDummyData';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';

//공지사항 관리
const CLPNTCM91010: React.FC = () => {
    const { goPage, goBack } = useBasePage()

    const [select1, setSelect1] = React.useState<any>(null);
    const [select2, setSelect2] = React.useState<any>(null);
    const [searchValue, setSearchValue] = React.useState('');
    const [fromDate, setFromDate] = React.useState<Date | Date[] | undefined>(undefined);
    const [toDate, setToDate] = React.useState<Date | Date[] | undefined>(undefined);

    //table
    const [data, setData] = React.useState([]);
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

    //table dummy data
    React.useEffect(() => {
        // setData(demoData)
    }, []); 

    React.useEffect(() => {
        console.log('data =>', data)
    }, [data]); 

    //select option dummy data
    const options1 = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const options2 = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const handleChange1 = (e: { value: any}) => {
        setSelect1(e.value);
    }

    const handleChange2 = (e: { value: any}) => {
        setSelect2(e.value);
    }

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    
    //table page length
    let pages = 50;
    
    //신규 등록 버튼
    const register = (event:any) => {
        goPage(`/stm/ntc/register`);
    }

    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/stm/ntc/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
            style: {width: '10%', textAlign:'center', color:'gray'}
        },
        {
            field: 'type',
            header: '유형',
            sortable: false,
            style: {width: '10%'},
            className: 'text-center'
        },
        {
            field: 'subject',
            header: '제목',
            sortable: false,
            style: {width: '40%'},
        },
        {
            field: 'attach',
            header: '첨부파일',
            sortable: false,
            style: {width: '10%'},
            className: 'text-center'
        },
        {
            field: 'author',
            header: '등록자',
            sortable: false,
            style: {width: '8%'},
            className: 'text-center'
        },
        {
            field: 'hit',
            header: '조회수',
            sortable: false,
            style: {width: '10%'},
            className: 'text-center'
        },
        {
            field: 'registerDate',
            header: '등록일',
            sortable: false,
            style: {width: '12%'},
            className: 'text-center'
        },
    ]

    return(
    <BasePage>
        <div className='searchBar'>
            <Dropdown value={select1} options={options1} onChange={handleChange1} 
                optionLabel='name' placeholder='전체' />
            <Dropdown value={select2} options={options2} onChange={handleChange2} 
                optionLabel='name' placeholder='전체' />

            <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

            <Calendar dateFormat='yy-mm-dd' value={fromDate} onChange={(e) => setFromDate(e.value)} showIcon />
            <Calendar dateFormat='yy-mm-dd' value={toDate} onChange={(e) => setToDate(e.value)} showIcon />
            <Button label='조회' />
        </div>

        <div className='toolbar mb10'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
            <Button className='ml-auto outline' label='신규등록' icon='pi pi-pencil' onClick={register} />
        </div>

        <DataTable value={noticeDummyData} paginator paginatorTemplate={paginator} 
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} style={col.style} className={col.className}></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPNTCM91010;

