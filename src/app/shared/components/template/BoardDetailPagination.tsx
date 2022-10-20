import * as React from 'react';
import { Link } from 'react-router-dom';

interface Contents {
    value?: any;
}

interface IProps {
    rows: Contents[];
    className?: string;
}

const BoardDetailPagination: React.FC<IProps> = ({ rows, className }) => {

    return(
    <>
        <div className={className + ' view-container'}>
            
            <div className='cld-table-cover'>
                <table className='cld-table boardDtailPagination'>
                    <tbody>
                    {
                        rows?.map((item:any, rowIndex:number) => (
                            <React.Fragment key={item?.key} >

                            <tr className={ item?.preview?.showIf !== undefined && item?.preview?.showIf === false ? 'hide':'' }>
                                <td>
                                    <span className='iconTitle'>이전글 <i className="pi pi-chevron-up iconArrow"></i></span> 
                                    <Link to={item?.preview?.link}>{item?.preview?.label}</Link>
                                </td>
                            </tr>
                            <tr className={ item?.next?.showIf !== undefined && item?.next?.showIf === false ? 'hide':'' }>
                                <td>
                                <span className='iconTitle'>다음글 <i className="pi pi-chevron-down iconArrow"></i></span> 
                                    <Link to={item?.next?.link}>{item?.next?.label}</Link>
                                </td>
                            </tr>
                            </React.Fragment>
                        ))
                    }
                    </tbody>
                </table>    
            </div>
        </div>
    </>
    )
}
export default BoardDetailPagination;