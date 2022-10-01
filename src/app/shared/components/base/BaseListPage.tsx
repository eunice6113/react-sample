import * as React from "react";
import { useState, useEffect } from "react";
import { BasePage } from "./BasePage";

interface IProps {
    children: React.ReactNode;
}

export const BaseListPage: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        {children}
    </BasePage>
    )
}
