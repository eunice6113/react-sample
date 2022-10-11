import { Dropdown } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";

const Select: React.FC = () => {

    const [select1, setSelect1] = React.useState<any>(null);

    const options1 = [
        { name: '공지사항', code: 'NY' },
        { name: '웹툰', code: 'RM' },
    ];

    const handleChange1 = (e: { value: any}) => {
        setSelect1(e.value);
    }

    return(
    <BasePage>

        <h3>Basic</h3>
        <Dropdown value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />

        <h3>Multi Select</h3>

    
    </BasePage>)
}
export default Select;