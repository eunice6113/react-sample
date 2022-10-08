import * as React from "react";
import { matchRoutes, useLocation, useMatch, useParams } from "react-router-dom";
import AdminPageTitle from "../page-title/AdminPageTitle";

interface IProps {
    children: React.ReactNode;
}

export const BasePage: React.FC<IProps> = ({children}) => {

    const location = useLocation();
    console.log(location.pathname);

    const { id } = useParams();
    const app = 'this is app';
    
    return(<>
        <AdminPageTitle title='공지사항 관리' />
        <div className="pl20 pr20">
         {children}
        </div>
    </>)
}
