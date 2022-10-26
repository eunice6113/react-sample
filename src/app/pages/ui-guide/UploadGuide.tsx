import { confirmDialog } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";
import CldFileUpload from "../../shared/components/CldFileUpload";
import './ui-guide.css';

interface IProps {
    children: React.ReactNode;
}

const UploadGuide: React.FC<IProps> = ({children}) => {

    const [totalSize, setTotalSize] = React.useState(0);

    const onSelect = (e:any) => {
        let _totalSize = totalSize;
        e.files.forEach((file:any) => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);
    }

    const onUpload = (e:any) => {
        let _totalSize = 0;
        e.files.forEach((file:any) => {
            _totalSize += (file.size || 0);
        });

        setTotalSize(_totalSize);

        confirmDialog({
            message: '파일 업로드 성공',
            acceptLabel: '확인',
            className: 'oneButton',
            accept: () => {
                //확인 눌렀을 때 처리
            },
        })
    }

    const onFileRemove = (file:any, callback:any) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onClear = () => {
        setTotalSize(0);
    }

    return(
    <BasePage>
        <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />
    </BasePage>)
}
export default UploadGuide