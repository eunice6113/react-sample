import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPNTCM07410.css';

interface IProps {
    children: React.ReactNode;
}
// 공지사항 목록
const CLPNTCM07410: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>notice list!!</h1>
    </BasePage>)
}
export default CLPNTCM07410;