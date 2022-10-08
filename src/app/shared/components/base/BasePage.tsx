import * as React from "react";
import { matchRoutes, useLocation, useMatch, useNavigate, useParams, useRoutes } from "react-router-dom";
import adminRoutes from "../../../routes/admin-routes";
import AdminPageTitle from "../page-title/AdminPageTitle";

interface IProps {
    children: React.ReactNode;
}

//https://reactnavigation.org/docs/use-navigation-state/

export const BasePage: React.FC<IProps> = ({children}) => {

    const location = useLocation();
    const curLocation = location.pathname.split('/')
    let pageTitle = '';
    const routes = adminRoutes;

    //route에 정의된 name 에서 페이지 제목을 읽어온다
    if( curLocation[3] && curLocation[3] !== 'list' && curLocation[3] !== 'register' &&  curLocation[3] !== '') {
        curLocation[3] = ':id'
    }

    routes.map((item, index) => {
        item.children?.map((sub:any, sidx) => {
            sub.children?.map((tir:any, tidx:any) => {
                tir.children?.map((four:any, fidx:any) => {
                    console.log(curLocation.length, sub.path, tir.path, tir.name, four.path, four.name)

                    if(curLocation.length === 3 &&
                        curLocation[1] === sub.path && curLocation[2] === tir.path) 
                     {
                        //  console.log(' ==>', tir.name)
                         pageTitle = tir.name;
                     }
                     else if(curLocation.length === 4 &&
                         curLocation[1] === sub.path && curLocation[2] === tir.path && curLocation[3] === four.path) 
                      {
                        //   console.log(' ==>', four.name)
                          pageTitle = four.name;
                      }
                })
            })
        })
    })

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
