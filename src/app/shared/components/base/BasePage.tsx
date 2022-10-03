import * as React from "react";
import AdminPageTitle from "../page-title/AdminPageTitle";

interface IProps {
    children: React.ReactNode;
}

export const BasePage: React.FC<IProps> = ({children}) => {

    const app = 'this is app';
    
    return(<>
        <AdminPageTitle title='공지사항 관리' />
        <div className="pl20 pr20">
         {children}
        </div>
    </>)
}
