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
    title?:string;
    hasRequired?:boolean;
    mode?: 'view' | 'edit' | 'register';
    status? : 'approval' | 'reject' | 'ongoing'; //approval: 승인, reject: 반려, ongoing: 진행중
    rows: Cols[] | object[];
    colgroups?: string[];
    className?: string;
}

const ViewTemplate: React.FC<IProps> = ({ 
    title, 
    hasRequired, 
    mode = 'view', 
    status = 'ongoing', 
    rows, 
    colgroups = ['15%','35%','15%','35%'], 
    className 
}) => {

    return(
    <>
        <div className={className + ' view-container'}>
            {title &&
            <h2 className='page-title mb5'>
                {title}
                {mode !== 'view' && hasRequired && <span className='infoTxt'>(<span className='required'>*</span> 필수)</span>}
            </h2>}
            <div className='cld-table-cover'>
                <table className='cld-table'>
                    <caption>{title}</caption>
                    <colgroup>
                        {colgroups.map((wid, index) => (<col key={`v-${wid}-${index}`} width={wid}></col>))}
                    </colgroup>
                    <tbody>
                    {
                        rows?.map((row:any, rowIndex:number) => (
                            <tr key={'tr'+rowIndex} className={ row?.showIf !== undefined && row?.showIf === false ? 'hide':'' }>
                                {
                                    row?.thOnly ?
                                        <th colSpan={4}>{row?.thOnly?.key}</th>
                                    :
                                    row?.tdOnly ?
                                        <td colSpan={4}>{mode === 'view' ? row?.tdOnly?.value : row?.tdOnly?.editingValue}</td>
                                    :
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