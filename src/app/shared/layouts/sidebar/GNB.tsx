import * as React from "react";
import { useState, useEffect } from "react";

interface IProps {
    children?: React.ReactNode;
}

export const GNB: React.FC<IProps> = ({children}) => {

    return(
    <>
        <h1>this is GNB~!!</h1>
        {children}
    </>
    )
}
