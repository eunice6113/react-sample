import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact";

interface IProps {
    children: React.ReactNode;
}

const NoticeList: React.FC<IProps> = ({children}) => {

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

    let pages = 50;

    return(
    <BasePage>
        
        <div className="searchBar">
            <Dropdown value={select1} options={cities} onChange={handleChange} 
                optionLabel="name" placeholder="전체" />
            <Dropdown value={select2} options={cities} onChange={handleChange} 
                optionLabel="name" placeholder="전체" />

            <InputText className="searchTxt" placeholder="검색어를 입력해주세요" value={value1} onChange={(e) => setValue1(e.target.value)} />

            <Calendar id="icon" dateFormat="yy-mm-dd" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
            <Calendar id="icon" dateFormat="yy-mm-dd" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
            <Button className="searchBtn" label="조회" />
        </div>

        <div className="toolbar">
            <p className="mb10">총 <span className="pageNm">{pages}</span>개</p>
            <Button className="ml-auto p-button-outlined" label="신규등록" icon='pi pi-pencil' />
        </div>

        <table>
            <caption></caption>
            <thead>

            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>

    </BasePage>)
}
export default NoticeList;