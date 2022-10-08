import * as React from "react";
import { matchRoutes, useLocation, useMatch, useNavigate, useParams, useRoutes } from "react-router-dom";
import AdminPageTitle from "../page-title/AdminPageTitle";

interface IProps {
    children: React.ReactNode;
}

export const BasePage: React.FC<IProps> = ({children}) => {

    const location = useLocation();
    console.log(location);

    const navigator = useNavigate();
    console.log(navigator)

    const { id } = useParams();

    //새로운 곳으로 이동시 페이지 상단으로 스크롤 이동
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return(<>
        <AdminPageTitle title='공지사항 관리' />
        <div className="pl20 pr20">
         {children}
        </div>
    </>)
}
