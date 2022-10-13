import { Calendar } from "primereact";
import * as React from "react";
import { SearchParams } from "../../core/models/search-params";
import { BasePage } from "../../shared/components/base/BasePage";
import './ui-guide.css';

const DatePickerGuide: React.FC = () => {

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        fromDate: undefined,
        toDate: undefined,
    });

    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    return(
    <BasePage>
        <h3>Basic</h3>
        <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
        <span className='mt5 mx5'>~</span>
        <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
    
    </BasePage>)
}
export default DatePickerGuide;