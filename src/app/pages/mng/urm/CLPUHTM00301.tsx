import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from '../../../shared/utils/table-paginator';
import './CLPUHTM00301.css';
import { uhtDummyData } from '../../../shared/demo/data/uhtDummyData';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../core/models/search-params';

//사용자 접속이력 관리
const CLPUHTM00301: React.FC = () => {
    const { goPage, goBack } = useBasePage()

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
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
        { name: '직번', code: 'RM' },
        { name: '성명', code: 'LDN' },
    ];
    
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    
    //table page length
    let pages = 50;
    
    //다운로드 버튼
    const register = (event:any) => {
    }

    const goDetail = ( e:any ) => {
        // console.log('clicked row =>', e.index)
        // goPage(`/rm/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'number',
            header: '직번',
            sortable: false,
        },
        {
            field: 'name',
            header: '성명',
            sortable: false,
        },
        {
            field: 'ip',
            header: 'IP',
            sortable: false,
        },
        {
            field: 'loginDate',
            header: '로그인 일시',
            sortable: false,
        },
    ]

    return(
    <BasePage className='CLPUHTM00301'>
        <div className='searchBar'>
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
            <Button className='ml-auto outline' label='다운로드' icon='pi pi-file-excel' onClick={register} />
        </div>

        <DataTable value={uhtDummyData} paginator paginatorTemplate={paginator} 
            className="uht"
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} ></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPUHTM00301;

