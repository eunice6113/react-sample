import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";
import NoData from "../../shared/components/ui/NoData";
import './ui-guide.css';

interface IProps {
    children: React.ReactNode;
}

const NoDataGuide: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>

        <h3>Basie</h3>
        <NoData message="데이터가 없습니다" />

        <h3>Horizontal</h3>
        <NoData isVertical={false} isTriangleIcon={false} message="데이터가 없습니다" />

    </BasePage>)
}
export default NoDataGuide