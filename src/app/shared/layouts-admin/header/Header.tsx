import { Button } from "primereact";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../../../../assets/images/ibk-logo.png';
import './header.css';


interface IProps {
    handleOpen: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

const Header: React.FC<IProps> = ({handleOpen, children}) => {

    let userAccessInfo = `xxx.xxx.xxx.xxx YYYY.MM.DD HH:MM:SS`

    let userName = '홍길동'

    return(
    <div className='customHeader'>
        <Button className="menu p-button-text" icon="pi pi-bars"
                onClick={handleOpen} />

        <Link to='/' className="">
            <img className="ibkLogo" src={logo} alt='클라우드 포털 관리자' />
            <span className="portalName">Cloud Portal 관리자</span>
        </Link>
        {/* {children} */}
        <span className="accessInfo">최근 접속 {userAccessInfo}</span>
            <span className="profile">
                <i className="pi pi-user" />
            </span>
            <span>{userName}</span>
    </div>
    )
}
export default Header;