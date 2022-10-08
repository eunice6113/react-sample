import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPMMBM08500.css';

interface IProps {
    children: React.ReactNode;
}
// 알림 이벤트 노출 상세 화면
const CLPMMBM08500: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <h1>notice list!!</h1>
    </BasePage>)
}
export default CLPMMBM08500;