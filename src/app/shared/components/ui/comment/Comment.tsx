import * as React from 'react';
import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import { useState } from 'react';

interface IProps {
    id: number;
    editable: boolean;
    deletable:boolean;
    userName:string;
    commentContent:string;
    date:string;
    mode?: 'view' | 'edit' | 'register';
    value:string;
    setValue:any;
    edit: Function;
    delt: Function;
    registration: Function;
}
const Comment:React.FC<IProps> = ({id, editable, deletable, userName, commentContent, date, mode = 'view',value, setValue, registration, edit, delt}) => {
   
    const [_mode, _setMode]=React.useState<'view' | 'edit' | 'register'>(mode)
    const _registration = () => {
        registration()
        console.log('_등록')
        _setMode('view')
    }
    const _edit = () => {
        edit()
        console.log('_편집')
        _setMode('edit')
    }
    const _delete = () => {
        delt()
        console.log('_삭제')
    }
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
                        {editable && <Button className='iconBtn p-button-text mr10' icon='pi pi-file-edit' onClick={_edit} />}
                        {deletable && <Button className='iconBtn p-button-text' icon='pi pi-trash' onClick={_delete}/>}
                    </div>
                </div>

                <p className='content mt8 mb8'>
                    {
                        _mode === 'edit' ?
                        <>
                            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                            <div className='btn-container mt4'>
                                <Button className='ml-auto' onClick={_registration}>등록</Button>
                            </div>
                        </>
                        :
                        commentContent
                    }
                </p>
                <p className='date'>{date}</p>
            </div>
    )
}
export default Comment;