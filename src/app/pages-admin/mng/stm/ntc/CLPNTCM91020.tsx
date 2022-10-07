import * as React from 'react';
import { BasePage } from '../../shared/components/base/BasePage';
import { useParams } from 'react-router-dom';

const NoticeEdit:React.FC = () => {
    const params = useParams();
    console.log(params.id);

    return(
    <BasePage>
        <div className='heading'>
            <h1>공지사항 관리</h1>
        </div>
        <div className='mb'>
            <p>등록자 정보</p>
            <table className='table'>
                <caption>등록자 정보</caption>
                <tr>
                    <th>등록자</th>
                    <td>신재문</td>
                
                    <th>등록일시</th>
                    <td>2023.03.02. 15:00:00</td>
                </tr>
            </table>    
        </div>
        <div>
            <p>등록 내용</p>
            <table className='table'>
                <caption>등록내용</caption>
                <tr>
                    <th>구분</th>
                    <td>공지사항</td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>클라우드 포탈 소식 전해드립니다.</td>
                </tr>
                <tr>
                    <th>구분</th>
                    <td>공지사항</td>
                </tr>
                <tr>
                    <th>구분</th>
                    <td>공지사항</td>
                </tr>
            </table>    
        </div>
        
    </BasePage>)
}
export default NoticeEdit;