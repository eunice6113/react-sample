import { useNavigate, useParams } from "react-router-dom"


export const useBasePage = () => {

    const navigator = useNavigate();
    const params = useParams();

    const paramId = params.id;
    console.log(params.id);

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
    }
}