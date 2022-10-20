import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPMNLM04010.css';

interface IProps {
    children: React.ReactNode;
}
// 메인화면
const CLPMNLM04010: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>notice list!!</h1>
    </BasePage>)
}
export default CLPMNLM04010;