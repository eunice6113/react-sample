import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from '../../../../shared/utils/table-paginator';
import './CLPNTCM07410.css';
import { noticeDummyData } from '../../../../shared/demo/data/noticeDummyData';
import { useSearchParams } from "react-router-dom";
import { SearchParams } from "../../../../core/models/search-params";
import { useBasePage } from '../../../../shared/hooks/base-page.hook';

interface IProps {
    children: React.ReactNode;
}
// 공지사항 목록
const CLPNTCM07410: React.FC<IProps> = ({children}) => {
    const { goPage, goBack } = useBasePage()

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
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
        { name: '공지사항', code: 'RM' },
        { name: '웹툰', code: 'LDN' },
        { name: '소식지', code: 'IST' },
        { name: '기타', code: 'IST' },
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
        goPage(`/asc/ntc/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'type',
            header: '',
            sortable: false,
        },
        {
            field: 'subject',
            header: '제목',
            sortable: false,
        },
        {
            field: 'attach',
            header: '첨부파일',
            sortable: false,
        },
        
        {
            field: 'hit',
            header: '조회수',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '등록일',
            sortable: false,
        },
    ]

    return(
    <BasePage>
        <div className='toolbar mb10 mt40' >
            <p>총 <span className='pageNm'>{pages}</span>개</p>

            <div className='searchBar ml-auto'>
                <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                    optionLabel='name' placeholder='전체' />

                <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

                
                <Button label='조회' />
            </div>
        </div>

        <DataTable value={noticeDummyData} paginator paginatorTemplate={paginator} 
            className="ntc"
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} ></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPNTCM07410;