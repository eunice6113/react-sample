import { Editor } from 'primereact';
import * as React from 'react';

interface iProps { 
    value: any;
    onTextChange: Function;
}
const TextEditor:React.FC<iProps> = ({value, onTextChange}) => {

    return (
        <Editor style={{height:'320px'}} 
        value={value} 
        onTextChange={(e) => onTextChange(e.textValue)} />
    )
}

export default TextEditor;