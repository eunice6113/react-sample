import * as React from "react";

interface IProps {
    children?: React.ReactNode;
}

export const GNB: React.FC<IProps> = ({children}) => {

    return(
    <>
        <h1 className="title">this is GNB~!!</h1>
        {children}
    </>
    )
}
