import { RadioButton } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";

const RadioGuide: React.FC = () => {

    const categories = [
        {name: '노출', key: 'Y'}, 
        {name: '비노출', key: 'N'}];
    const [selectedCategory, setSelectedCategory] = React.useState(categories[1]);

    return(
    <BasePage>

    <h3>Basic</h3>
    {
        categories.map((category) => {
            return (
                <span key={category.key} className="field-radiobutton mr20">
                    <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                    <label className='ml5' htmlFor={category.key}>{category.name}</label>
                </span>
        )})
    }
    
    </BasePage>)
}
export default RadioGuide;