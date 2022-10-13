import * as React from 'react';

interface Contents {
    required?: boolean;
    key:string;
    value?: any;
    editingValue?: any;
}

interface Cols {
    showIf?: true | false | null;
    cols: Contents[];
}

interface IProps {
    title:string;
    hasRequired?:boolean;
    mode?: 'view' | 'edit' | 'register';
    rows: Cols[] | object[];
}

const ViewTemplate: React.FC<IProps> = ({ title, hasRequired, mode = 'view', rows }) => {

    return(
    <>
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
                        <col width='35%'></col>
                        <col width='15%'></col>
                        <col width='35%'></col>
                    </colgroup>
                    <tbody>
                    {
                        rows?.map((row:any, rowIndex:number) => (
                            <tr key={'tr'+rowIndex} className={ row?.showIf !== undefined && row?.showIf === false ? 'hide':'' }>
                                {
                                    row?.cols?.map((item:any, index:number) => (
                                        <React.Fragment key={item?.key + index}>
                                            <th>
                                                {item?.key}
                                                {mode !== 'view' && item?.required && <span className='required'>*</span>}    
                                            </th>
                                            <td colSpan={ row.cols.length == 1 ? 3 : 0}>
                                                {mode === 'view' ? item?.value : item?.editingValue}
                                            </td>
                                        </React.Fragment>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    </tbody>
                </table>    
            </div>
        </div>
    </>
    )
}
export default ViewTemplate;