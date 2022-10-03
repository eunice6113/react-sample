import * as React from "react";
import { useState, useEffect } from "react";

interface IProps {
    children?: React.ReactNode;
}

const Header: React.FC<IProps> = ({children}) => {

    return(
    <>
        <h1 className="title">this is GNB~!!</h1>
        {children}
    </>
    )
}
export default Header;