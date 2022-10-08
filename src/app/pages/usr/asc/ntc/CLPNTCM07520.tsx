import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";

interface IProps {
    children: React.ReactNode;
}
// 공지사항 상세
const CLPNTCM07520: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>notice list!!</h1>
    </BasePage>)
}
export default CLPNTCM07520;