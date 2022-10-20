import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../../shared/utils/table-paginator";
import './CLPCATM95610.css';
import { tfcDummyData } from '../../../../shared/demo/data/tfcDummyData';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../../core/models/search-params';
import { TableSortParams } from '../../../../core/models/table-sort-params';
import { SplitButton } from 'primereact/splitbutton';


//the fast cloud 신청 관리 목록
const CLPCATM95610: React.FC = () => {
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
        { name: '사업명', code: 'RM' },
        { name: '부서명', code: 'IST' },
        { name: '신청자', code: 'IST' },
        { name: '담당자', code: 'IST' },
    ];
    
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '내부사업', code: 'RM' },
        { name: '정보화사업 추진', code: 'LDN' },
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

    //체크리스트 업로드 버튼
    const checkListUpload = (event:any) => {
    }
    //신청서 업로드 버튼
    const formListUpload = (event:any) => {
    }
    const items = [
        {
            label: '신청서 22.09.22',
            icon: 'pi pi-download',
            command: () => {
            }
        },
        {
            label: '체크리스트 22.09.10',
            icon: 'pi pi-download',
            command: () => {
            }
        },
        {
            label: '신청서 22.08.10',
            icon: 'pi pi-download',
            command: () => {
            }
        },
        
    ];
    
    const save = () => {
    }

    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/apm/tfc/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'businessName',
            header: '사업명',
            sortable: false,
        },
        
        {
            field: 'department',
            header: '부서명',
            sortable: false,
        },
        {
            field: 'type',
            header: '신청 유형',
            sortable: false,
        },
        {
            field: 'applicant',
            header: '신청자',
            sortable: false,
        },
        {
            field: 'applicationDate',
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
    <BasePage>
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
            <Button className='ml-auto outline' label='체크리스트 업로드' icon='pi pi-upload' onClick={checkListUpload} />
            <Button className='outline mr8 ml8' label='신청서 업로드' icon='pi pi-upload' onClick={formListUpload} />
            <SplitButton className="p-button-outlined outline mr8" label="기존 파일 다운로드" icon="pi pi-download" model={items} ></SplitButton>
            
            <Dropdown className='' value={sort.sort1} options={options3} onChange={(e) => sortHandleChange('sort1', e.value)} 
                optionLabel='name' placeholder='전체' />
        </div>

        <DataTable value={tfcDummyData} paginator paginatorTemplate={paginator} 
            className='tfc'
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header}></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPCATM95610;