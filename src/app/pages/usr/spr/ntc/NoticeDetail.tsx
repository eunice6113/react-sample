import * as React from 'react';
import { useState, useEffect, FunctionComponent } from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import {Route, Link, Routes, useParams} from 'react-router-dom';

const NoticeDetail:React.FC = () => {
    const params = useParams();
    console.log(params.id);

    return(
    <BasePage>
        <h1>notice detail!! {params.id} !!!!</h1>
    </BasePage>)
}
export default NoticeDetail;