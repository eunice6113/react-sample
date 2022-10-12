import { Dropdown, MultiSelect } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";
import './ui-guide.css';

const Select: React.FC = () => {

    const [select1, setSelect1] = React.useState<any>(null);
    const [selectedGroupedCities, setSelectedGroupedCities] = React.useState(null);

    const options1 = [
        { name: '공지사항', code: 'NY' },
        { name: '웹툰', code: 'RM' },
    ];

    const handleChange1 = (e: { value: any}) => {
        setSelect1(e.value);
    }
    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];
    

    return(
    <BasePage>

        <h3>Basic</h3>
        <Dropdown value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
        
        <br/>
        <br/>
        <Dropdown disabled value={select1} optionLabel="name" placeholder="Disabled" />

        <h3>Multi Select</h3>
        <MultiSelect 
            style={{width:150}}
            filter
            value={selectedGroupedCities} 
            options={groupedCities} 
            onChange={(e) => setSelectedGroupedCities(e.value)} 
            optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
            placeholder="Select Cities" />

        <br/>
        <br/>
        <MultiSelect 
            disabled
            style={{width:150}}
            filter
            optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
            placeholder="Disabled" />
    
    
    </BasePage>)
}
export default Select;