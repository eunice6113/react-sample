import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPCMNM08610.css';

interface IProps {
    children: React.ReactNode;
}
// 소통공간 목록 화면
const CLPCMNM08610: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>notice list!!</h1>
    </BasePage>)
}
export default CLPCMNM08610;