import * as React from "react";

interface IProps {
    children: React.ReactNode;
}

const Error: React.FC<IProps> = ({children}) => {

    return(
    <>
        <h1>404 !!</h1>

    </>)
}
export default Error;