import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './header/Header';
import './layout.css'
import Lnb from './sidebar/Lnb';

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
                <Lnb open={naviOpen} />
            </div>
            <div className='pageContainer'>
                <Outlet />
            </div>
        </div>
    </>
    )
}

export default FullLayout
