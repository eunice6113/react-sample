import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../../shared/utils/table-paginator";
import './CLPMBNM95810.css';
import { mbnDummyData } from '../../../../shared/demo/data/mbnDummyData';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../../core/models/search-params';

// 메인배너 관리
const CLPMBNM95810: React.FC = () => {
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
    const [data, setData] = React.useState(mbnDummyData);

    //reorder
    const toast = React.useRef(null);
    const isMounted = React.useRef(false);

    //초기화
    React.useEffect(() => {

    }, []); 

    React.useEffect(() => {
        console.log('data =>', data)

        if (isMounted.current) {
            // toast.current.show({severity:'success', summary: 'Rows Reordered', life: 3000});
        }
    }, [data]); 

    //select option dummy data
    const options1 = [
        { name: '전체', code: 'NY' },
        { name: '배너명', code: 'RM' },
        { name: '등록자', code: 'LDN' },
    ];
    
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '노출시작일', code: 'RM' },
        { name: '노출종료일', code: 'LDN' },
        { name: '등록일자', code: 'IST' },
    ];
    
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };
    
    //table page length
    let pages = 50;
    
    //신규 등록 버튼
    const register = (event:any) => {
        goPage(`/stm/mbn/register`);
    }
    
    //순서저장 버튼
    const save = (event:any) => {
        console.log('data =>', data)
    }

    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/stm/mbn/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'idx',
            header: '노출 순번',
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
            field: 'author',
            header: '등록자',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '등록일',
            sortable: false,
        },
        {
            field: 'useYn',
            header: '사용여부',
            sortable: true,
        },
        {
            field: 'period',
            header: '노출기간',
            sortable: false,
        },
    ]

    const onRowReorder = (e:any) => {
        console.log(e.value, e, 'onRowReorder')
        setData(e.value);
    }

    const onIndexTemplate = (data:any, props:any) => {
        return props.rowIndex + 1;
    }

    return(
    <BasePage className='CLPMBNM95810'>
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
            <Button className='ml-auto outline mr8' label='순서저장' icon='pi pi-save' onClick={save}/>
            <Button className='outline' label='신규등록' icon='pi pi-pencil' onClick={register} />
        </div>

        <DataTable 
            className='mbn'
            value={data}
            onRowClick={(e) => goDetail(e)}
            reorderableRows onRowReorder={onRowReorder}
            responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} body={col.field === 'idx' ? onIndexTemplate : null}></Column>
            ))}
            <Column rowReorder />
        </DataTable>

    </BasePage>)
}
export default CLPMBNM95810;

