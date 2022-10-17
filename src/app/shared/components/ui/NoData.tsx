import * as React from 'react';

interface IProps {
    isTriangleIcon?: boolean;
    isVertical? : boolean;
    message: string;

}
const NoData:React.FC<IProps> = ({isTriangleIcon = true, isVertical = true, message}) => {

    let classes = isVertical ? 'text-center' : 'd-flex'

    return (
        <div className={classes}>
            {isTriangleIcon ? 
                <i className='pi pi-exclamation-triangle color-gray f30'></i> 
                :
                <i className='pi pi-exclamation-circle color-gray'></i>
            }
            <br/>
            <span className='f12 color-gray'>{message}</span>
        </div>
    )
}
export default NoData;