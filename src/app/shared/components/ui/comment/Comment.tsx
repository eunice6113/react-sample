import * as React from 'react';
import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import { useState } from 'react';

interface IProps {
    userName:string;
    commentContent:string;
    date:string;
    mode?: 'view' | 'edit' | 'register';
    hasEditBtn?: boolean;
    hasRemoveBtn?: boolean;
}
const Comment:React.FC<IProps> = ({userName, commentContent, date, mode = 'view', hasEditBtn,hasRemoveBtn}) => {
    
    return (
               
            <div className='comment'>
                <div className='d-flex'>
                    <div className='d-flex-default'>
                        <span className='profile'>
                            <i className='pi pi-user'></i>
                        </span>
                        <span className='profileName ml8'>{userName}</span>
                    </div>
                    
                    <div className='ml-auto'>
                        {mode !== 'view' && hasEditBtn && <Button className='iconBtn p-button-text' icon='pi pi-file-edit' />}
                        {mode === 'view' && hasRemoveBtn && <Button className='iconBtn p-button-text' icon='pi pi-trash' />}
                        
                        <Button className='iconBtn p-button-text ml8' icon='pi pi-trash' />
                    </div>
                </div>

                <p className='content mt8 mb8'>{commentContent}</p>
                <p className='date'>{date}</p>
            </div>
    )
}
export default Comment;