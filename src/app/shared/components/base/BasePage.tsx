import * as React from "react";
import { useLocation } from "react-router-dom";
import adminRoutes from "../../../routes/admin-routes";
import AdminPageTitle from "../page-title/AdminPageTitle";

interface IProps {
    children: React.ReactNode;
}

export const BasePage: React.FC<IProps> = ({children}) => {

    const location = useLocation();
    const curLocation = location.pathname.split('/')
    let pageTitle = '';
    const routes = adminRoutes;

    //route에 정의된 name 에서 페이지 제목을 읽어온다
    if( curLocation[3] && curLocation[3] !== 'list' && curLocation[3] !== 'register' &&  curLocation[3] !== '') {
        curLocation[3] = ':id'
    }

    //이 방법 말고 path + children path 를 / 로 flatten 해서 읽어오게 개선하기
    //breadcrumb 도 개발해야함
    routes.map((item) => {
        item.children?.map((sub:any) => {
            sub.children?.map((tir:any) => {
                if(curLocation[1] === sub.path && curLocation[2] === tir.path) {
                    if(curLocation.length === 3) {
                        pageTitle = tir.name;
                        return;
                   } else {
                        tir.children?.map((four:any) => {
                            // console.log(curLocation.length, sub.path, tir.path, tir.name, four.path, four.name)
                            if(curLocation.length === 4 && curLocation[3] === four.path) {
                                pageTitle = four.name;
                            }
                        })
                   }
                } 
            })
        })
    })

    // function getFlat(array:any, n = '', p = '') {
    //     return array.reduce((r:any, { children = [], ...o }) => {
    //         var name = n + (n && '.') + o.name,
    //             path = p + o.path;
    //         return r.concat(Object.assign({}, o, { name, path }), getFlat(children, name, path));
    //     }, []);
    // }
    
    // let flat = getFlat([routes]);
    // console.log(flat);


    //새로운 곳으로 이동시 페이지 상단으로 스크롤 이동
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return(<>
        <AdminPageTitle title={pageTitle} />
        <div className="pl20 pr20">
         {children}
        </div>
    </>)
}
