import * as React from 'react';
import { Button, InputTextarea } from 'primereact';

interface IProps {
    title: string;
    total: string;
    value: string;
    setValue: any;
    register: Function;
}

const CommentRegister:React.FC<IProps> = ({
    title, 
    total, 
    value, 
    setValue, 
    register
}) => {
    
    //등록
    const _register = () => {
        register();
    }

    return (
        <div>
            <p className='titel'>
                <i className='pi pi-comments'></i> {title} <span className='gray'>({total})</span>
            </p>
            <div className='commentRegist mb20'>
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                <div className='btn-container mt4'>
                    <Button className='ml-auto' onClick={_register}>등록</Button>
                </div>
            </div>
        </div>
    )
}
export default CommentRegister;