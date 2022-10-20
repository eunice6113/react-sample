import * as React from 'react';

interface Contents {
    value?: any;
}

interface IProps {
    rows: Contents[];
    className?: string;
}

const BoardDetail: React.FC<IProps> = ({ rows, className }) => {

    return(
    <>
        <div className={className + ' view-container'}>
            
            <div className='cld-table-cover'>
                <table className='cld-table boardDtailTable'>
                    <tbody>
                    {
                        rows?.map((item:any, rowIndex:number) => (
                            <tr key={rowIndex + 'tr'}>
                                <td>
                                    {item?.value}
                                </td>
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
export default BoardDetail;