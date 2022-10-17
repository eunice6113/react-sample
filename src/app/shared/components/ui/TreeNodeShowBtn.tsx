import { Button } from "primereact";
import * as React from "react";

interface IProps {
    handleClick: Function;
    open?: boolean;
}
const TreeNodeShowBtn:React.FC<IProps> = ({ handleClick, open }) => {
    // const [open, setOpen] = React.useState(true)

    return (
        <>
            <Button className='treeNodeBtn p-button-text' 
                    onClick={(e) => handleClick}
                    icon={open ? 'pi pi-eye':'pi pi-eye-slash'} 
                    // onClick={(e) => setOpen(!open)} 
                    />
            {/* <Button className='treeNodeBtn p-button-text' icon='pi pi-eye-slash' /> */}
        </>
    )
}
export default TreeNodeShowBtn;