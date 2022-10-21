import { useLocation, useNavigate, useParams } from "react-router-dom"


export const useBasePage = () => {

    const location = useLocation();
    const curLocation = location.pathname.split('/')
    // console.log('curLocation', curLocation, curLocation[3])

    const isRegister:boolean = curLocation[3] === 'register'

    const navigator = useNavigate();
    const params = useParams();

    const paramId = params.id;
    // console.log('params.id', params.id);

    const goBack = () => {
        navigator(-1);
    }

    const goPage = ( url:string ) => {
        navigator(url);
    }

    return {
        goBack,
        goPage,
        paramId,

        curLocation,
        isRegister
    }
}