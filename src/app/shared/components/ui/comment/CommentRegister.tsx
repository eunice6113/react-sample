import * as React from 'react';
import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import { useState } from 'react';

interface IProps {
    title:string;
    total:string;
}

const CommentRegister:React.FC<IProps> = ({title, total}) => {
    
    const [value1, setValue1] = useState('');
    const registration = () => {
        console.log('등록')
    }
    return (
        <div>
            <p className='titel'><i className='pi pi-comments'></i> {title} <span className='gray'>(글 댓글 {total})</span></p>
            <div className='commentRegist mb20'>
                <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} />
                <div className='btn-container mt4'>
                    <Button className='ml-auto' onClick={registration}>등록</Button>
                </div>
            </div>            
        </div>
    )
}
export default CommentRegister;