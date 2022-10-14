
import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../../shared/utils/table-paginator";
import './CLPFAQM91810.css';
import { faqDummyData } from '../../../../shared/demo/data/faqDummyData';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../../core/models/search-params';

//건의 및 개선 관리
const CLPFAQM91810: React.FC = () => {
    const { goPage, goBack } = useBasePage()

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        type3: undefined,
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
        { name: '제목', code: 'RM' },
        { name: '내용', code: 'LDN' },
        { name: '답변', code: 'IST' },
    ];
    
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '질문자', code: 'RM' },
        { name: '답변자', code: 'LDN' },
    ];
    const options3 = [
        { name: '전체', code: 'NY' },
        { name: '등록일', code: 'RM' },
        { name: '답변일', code: 'LDN' },
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

    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/stm/faq/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
            style: {width: '10%', textAlign:'center', color:'gray'}
        },
        {
            field: 'subject',
            header: '제목',
            sortable: false,
            style: {width: '40%'},
        },
        {
            field: 'questioner',
            header: '질문자',
            sortable: false,
            style: {width: '10%'},
            className: 'text-center'
        },
        {
            field: 'answer',
            header: '답변자',
            sortable: false,
            style: {width: '10%'},
            className: 'text-center'
        },
        {
            field: 'registerDate',
            header: '등록일',
            sortable: false,
            style: {width: '15%'},
            className: 'text-center'
        },
        {
            field: 'answerDate',
            header: '답변일',
            sortable: false,
            style: {width: '15%'},
            className: 'text-center'
        },
    ]

    return(
    <BasePage className="CLPFAQM91810">
        <div className='searchBar'>
            <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                optionLabel='name' placeholder='전체' />
            <Dropdown value={values.type2} options={options2} onChange={(e) => handleChange('type2', e.value)} 
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
        </div>

        <DataTable value={faqDummyData} paginator paginatorTemplate={paginator} 
            className="faq"
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} style={col.style} className={col.className}></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPFAQM91810;
