import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../shared/utils/table-paginator";
import './CLPMNNM94220.css';

interface IProps {
    children: React.ReactNode;
}
//매뉴얼 관리 상세
const CLPMNNM94220: React.FC<IProps> = ({children}) => {

    const [select1, setSelect1] = React.useState<any>(null);
    const [select2, setSelect2] = React.useState<any>(null);
    const [value1, setValue1] = React.useState('');
    const [date1, setDate1] = React.useState<Date | Date[] | undefined>(undefined);


    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const handleChange = (e: { value: any}) => {
        setSelect1(e.value);
    }


    const [customers2, setCustomers2] = React.useState([]);
    const [first1, setFirst1] = React.useState(0);
    const [rows1, setRows1] = React.useState(10);


    const onCustomPage = (event:any) => {
        setFirst1(event.first);
        setRows1(event.rows);
    }

    let pages = 50;

    return(
    <BasePage>
        <div className="searchBar">
            <Dropdown className="cld-select" value={select1} options={cities} onChange={handleChange} 
                optionLabel="name" placeholder="전체" />
            <Dropdown value={select2} options={cities} onChange={handleChange} 
                optionLabel="name" placeholder="전체" />

            <InputText className="searchTxt" placeholder="검색어를 입력해주세요" value={value1} onChange={(e) => setValue1(e.target.value)} />

            <Calendar id="icon" dateFormat="yy.mm.dd" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
            <Calendar id="icon" dateFormat="yy.mm.dd" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
            <Button className="cld-button primary" label="조회" />
        </div>

        <div className="toolbar">
            <p className="mb10">총 <span className="pageNm">{pages}</span>개</p>
            <Button className="ml-auto cld-button primary outline" label="신규등록" icon='pi pi-pencil' />
        </div>

        <DataTable value={customers2} paginator paginatorTemplate={paginator} first={first1} rows={rows1} onPage={onCustomPage} responsiveLayout="scroll">
            <Column field="name" header="Name" style={{ width: '25%' }}></Column>
            <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
            <Column field="company" header="Company" style={{ width: '25%' }}></Column>
            <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
        </DataTable>

    </BasePage>)
}
export default CLPMNNM94220;

