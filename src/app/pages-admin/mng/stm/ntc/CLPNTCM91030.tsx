import { Button, confirmDialog } from 'primereact';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPNTCM91030.css';

const CLPNTCM91030:React.FC = () => {
    const { goPage, goBack, paramId } = useBasePage()

    const cancel = () => {
        goBack();
    }

    return(
    <BasePage>
        <div className='view-container'>
            <h2 className='page-title mb5'>등록자 정보</h2>
            <div className='cld-table-cover'>
                <table className='cld-table'>
                    <caption>등록자 정보</caption>
                    <tr>
                        <th>등록자</th>
                        <td>신재문</td>
                    
                        <th>등록일시</th>
                        <td>2023.03.02. 15:00:00</td>
                    </tr>
                </table>    
            </div>
        </div>
        <div className='view-container'>
            <h2 className='page-title mb5'>등록 내용</h2>
            <div className='cld-table-cover'>
                <table className='cld-table'>
                    <caption>등록내용</caption>
                    <colgroup>
                        <col width='15%'></col>
                        <col width='*'></col>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>구분</th>
                        <td>
                            공지사항
                        </td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>
                            클라우드 포탈 소식 전해드립니다.
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            공지사항
                            
                        </td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td>
                            <i className='pi pi-download mr5 downloadIco'></i><u>파일명.xlsx</u>
                        </td>
                    </tr>
                    <tr>
                        <th>중요공지여부</th>
                        <td>
                            노출
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='btn-container cld-row'>
            <div className='cld-col-3'>
                <Button className='secondary' onClick={goBack}>목록</Button>
            </div>
            <div className='cld-col-6 text-center'>
                <Button className='lg outline' onClick={cancel}>취소</Button>
                <Button className='lg ml5'>확인</Button>
            </div>
            <div className='cld-col-3'></div>

        </div>
    </BasePage>)
}
export default CLPNTCM91030;