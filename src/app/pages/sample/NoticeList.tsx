import * as React from "react";
import { useState, useEffect } from "react";
import { BaseListPage } from "../../shared/components/base/BaseListPage";

interface IProps {
    children: React.ReactNode;
}

const NoticeList: React.FC<IProps> = ({children}) => {

    return(
    <BaseListPage>
        <h1>notice list!!</h1>
    </BaseListPage>)
}
export default NoticeList;