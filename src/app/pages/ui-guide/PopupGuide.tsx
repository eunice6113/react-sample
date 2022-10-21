import { Button, confirmDialog } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";
import './ui-guide.css';

const SelectGuide: React.FC = () => {

    //alert
    // confirm
    
    const showTitlePopup = () => {

        confirmDialog({
            header: '제목',
            message: '내용',
            rejectLabel: '취소',
            acceptLabel: '확인',
            accept: () => {},
            reject: () => {}
        })
    }

    const showNoTitlePopup = () => {
        confirmDialog({
            message: '내용',
            rejectLabel: '취소',
            acceptLabel: '확인',
            className: 'noHeader',
            accept: () => {},
            reject: () => {}
        })
    }

    const showAlertDialog = () => {
        confirmDialog({
            message: '내용',
            acceptLabel: '확인',
            className: 'noHeader oneButton',
            accept: () => {},
        })
    }

    return(
    <BasePage>
        <Button label='제목이 있는 팝업' onClick={showTitlePopup} />
        <br/>
        <br/>
        <Button label='제목이 없는 팝업' onClick={showNoTitlePopup} />
        <br/>
        <br/>
        <Button label='확인 버튼만 있는 팝업' onClick={showAlertDialog} />
    </BasePage>)
}
export default SelectGuide;