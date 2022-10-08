import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPENTM07210.css';

interface IProps {
    children: React.ReactNode;
}
// 이벤트 목록
const CLPENTM07210: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>notice list!!</h1>
    </BasePage>)
}
export default CLPENTM07210;