import { Button, TreeNodeTemplateOptions, TreeNodeTemplateType } from "primereact";
import TreeNode from "primereact/treenode";
import * as React from "react";
import TreeNodeShowBtn from "../TreeNodeShowBtn";

interface IProps {
    node: TreeNode;
    options: TreeNodeTemplateOptions;
}
// const TreeNode:TreeNodeTemplateType<IProps> = ({node, options}) => {
const TreeNode:React.FC<IProps> = ({node, options}) => {

    const [open, setOpen] = React.useState(true)

    let label = <div className='d-flex-default'>
            <div>{node.label}</div>

            <div className='ml-auto'>
                <Button className='treeNodeBtn p-button-text' icon='pi pi-plus-circle' />
                <Button className='treeNodeBtn p-button-text' icon='pi pi-file-edit' />
                <Button className='treeNodeBtn p-button-text' icon='pi pi-eye' />
                <Button className='treeNodeBtn p-button-text' icon='pi pi-eye-slash' />
                {/* <TreeNodeShowBtn /> */}
            </div>
        </div>;

        return (
            <span className={options.className}>
                {label}
            </span>
        )
}
export default TreeNode;