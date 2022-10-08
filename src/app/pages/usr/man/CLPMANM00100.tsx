import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";

interface IProps {
    children: React.ReactNode;
}
// 메인화면
const CLPMANM00100: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>notice list!!</h1>
    </BasePage>)
}
export default CLPMANM00100;