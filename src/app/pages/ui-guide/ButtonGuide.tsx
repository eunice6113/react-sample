import { Button } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";

const ButtonGuide: React.FC = () => {

    const btnClick = () => {
        alert(0)
    }

    return(
    <BasePage>

        <h3>primary</h3>
        <Button label='조회' />

        <h3>secondary</h3>
        <Button className='secondary' label='조회' onClick={btnClick} />

        <h3>outline</h3>
        <Button className='outline' onClick={btnClick}>수정</Button>

        <h3>size</h3>
        <Button className='xxl' onClick={btnClick}>xxl 사이즈</Button>
        <br/>
        <br/>
        <Button className='xl' onClick={btnClick}>xl 사이즈</Button>
        <br/>
        <br/>
        <Button className='lg' onClick={btnClick}>lg 사이즈</Button>
        <br/>
        <br/>
        <Button className='md' onClick={btnClick}>md 사이즈</Button>
        <br/>
        <br/>
        <Button className='sm' onClick={btnClick}>sm 사이즈</Button>
    </BasePage>)
}
export default ButtonGuide;