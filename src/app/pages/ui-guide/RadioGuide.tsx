import { RadioButton } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";
import './ui-guide.css';

const RadioGuide: React.FC = () => {

    const [city, setCity] = React.useState(null);
    const categories = [
        {name: '노출', key: 'Y'}, 
        {name: '비노출', key: 'N'}];
    const [selectedCategory, setSelectedCategory] = React.useState(categories[1]);

    return(
    <BasePage>

    <h3>Basic</h3>
    <div className="field-radiobutton">
        <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
        <label htmlFor="city1">Chicago</label>
    </div>

    <div className="field-radiobutton">
        <RadioButton inputId="city1" name="city" value="Chicago" 
        onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} disabled />
        <label htmlFor="city1">Chicago</label>
    </div>

    <br/>
    <br/>
    <br/>

    {
        categories.map((category) => (
            <span key={category.key} className="field-radiobutton mr20">
                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                <label htmlFor={category.key}>{category.name}</label>
            </span>
        ))
    }
    
    </BasePage>)
}
export default RadioGuide;