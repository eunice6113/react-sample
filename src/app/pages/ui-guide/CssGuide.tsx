import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";

interface IProps {
    children: React.ReactNode;
}

const CssGuide: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>CSS Guide</h1>



    </BasePage>)
}
export default CssGuide