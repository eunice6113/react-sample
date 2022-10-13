import * as React from 'react';

interface Contents {
    required?: boolean;
    key:string;
    value?: any;
    editingValue?: any;
}

interface IProps {
    title:string;
    grid:number;
    hasRequired?:boolean;
    mode?: 'view' | 'edit' | 'register';
    contents: Contents[]
}

const ViewTemplate_old: React.FC<IProps> = ({ title, grid, hasRequired, mode, contents }) => {

    return(
        <>
        {
            grid === 4 &&
            <div className='view-container'>
                <h2 className='page-title mb5'>{title}</h2>
                <div className='cld-table-cover'>
                    <table className='cld-table'>
                        <caption>{title}</caption>
                        <colgroup>
                            <col width='15%'></col>
                            <col width='35%'></col>
                            <col width='15%'></col>
                            <col width='35%'></col>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>{contents[0].key}</th>
                            <td>{contents[0].value}</td>
                            <th>{contents[1].key}</th>
                            <td>{contents[1].value}</td>
                            {/* {
                                contents.map((item, index) => (
                                    <>
                                    <th>{item.key}</th>
                                    <td>{item.value}</td>
                                    </>
                                ))
                            } */}
                        </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
        }
        {
            grid === 2 &&
            <div className='view-container'>
                <h2 className='page-title mb5'>
                    {title}
                    {mode !== 'view' && hasRequired && <span className='infoTxt'>(<span className='required'>*</span> 필수)</span>}
                </h2>
                <div className='cld-table-cover'>
                    <table className='cld-table'>
                        <caption>{title}</caption>
                            <colgroup>
                                <col width='15%'></col>
                                <col width='*'></col>
                            </colgroup>
                        <tbody>
                        {
                            contents.map((item, index) => (
                                <tr key={item.value + item.key + index}>
                                    <th>
                                        {item.key}
                                        {mode !== 'view' && item.required && <span className='required'>*</span>}    
                                    </th>
                                    <td>
                                        {
                                            mode === 'view' ? item.value : item.editingValue
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>    
                </div>
            </div>
        }
        </>
    )
}
export default ViewTemplate_old;