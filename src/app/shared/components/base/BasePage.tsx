import * as React from "react";
import { useState, useEffect } from "react";

interface IProps {
    children: React.ReactNode;
}

export const BasePage: React.FC<IProps> = ({children}) => {

    const app = 'this is app';
    
    return(<>
        {children}
    </>)
}
