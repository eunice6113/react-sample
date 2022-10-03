import * as React from 'react';
import LNB from './sidebar/LNB';
import { Link, Outlet } from 'react-router-dom';

import Header from './header/Header';
import './layout.css'
import { open } from 'fs';

const FullLayout: React.FC = () => {

    const [naviOpen, setNaviOpen] = React.useState(true)

    React.useEffect(() => {

    }, [])

    const handleOpen = () => {
        console.log('handle open')

        setNaviOpen(!naviOpen)
    }
  
    return(
    <>
        <Header handleOpen={handleOpen} />
        
        <div className='mainContainer'>
            <div className='lnbContainer'>
                <LNB open={naviOpen} />
            </div>
            <div className='pageContainer'>
                <Outlet />
            </div>
        </div>
    </>
    )
}

export default FullLayout
