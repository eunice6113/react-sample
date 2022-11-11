import * as React from 'react';
import { Menubar } from 'primereact/menubar';
import './page-title.css'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';

interface IProps {
    title: string;
    breadcrumbs?: string[];
}

const PageTitle: React.FC<IProps> = ({title, breadcrumbs}) => {

    React.useEffect(() => {

    }, [])


    return(
    <div className='pageTitleContainer'>
        <h1>{title}</h1>

        <BreadCrumbs />
    </div>
    )
}
export default PageTitle

