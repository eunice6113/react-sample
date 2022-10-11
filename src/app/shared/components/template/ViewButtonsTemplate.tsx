import { Button } from "primereact";

interface IProps {
    list?: any,
    cancel?: any,
    confirm?: any,
    edit?: any,
    remove?:  any,
    mode?: 'view' | 'edit' | 'resgister';
}
const ViewButtonsTemplate: React.FC<IProps> = ({ list, cancel, confirm, edit, remove, mode }) => {

    return(
        <div className='btn-container cld-row'>
            <div className='cld-col-3'>
                <Button className='secondary' onClick={list}>목록</Button>
            </div>
            <div className='cld-col-6 text-center'>
            { (mode === 'edit' || mode === 'resgister') &&
            <>
                <Button className='lg outline' onClick={cancel}>취소</Button>
                <Button className='lg ml5' onClick={confirm}>확인</Button>
            </>
            }
            </div>
            <div className='cld-col-3 d-flex'>
            {mode === 'view' &&
            <>
                <Button className='ml-auto outline' onClick={edit}>수정</Button>
                <Button className='ml5' onClick={remove}>삭제</Button>
            </>
            }
            </div>
        </div>
    )
}
export default ViewButtonsTemplate;