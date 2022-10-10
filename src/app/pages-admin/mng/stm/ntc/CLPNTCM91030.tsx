import { Button, confirmDialog, Dropdown, Editor, FileUpload, InputText, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPNTCM91030.css';

const CLPNTCM91030:React.FC = () => {
    const { goPage, goBack, paramId } = useBasePage()

    const [select1, setSelect1] = React.useState<any>(null);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const categories = [
        {name: '노출', key: 'Y'}, 
        {name: '비노출', key: 'N'}];
    const [selectedCategory, setSelectedCategory] = React.useState(categories[1]);

    //select option dummy data
    const options1 = [
        { name: '공지사항', code: 'NY' },
        { name: '웹툰', code: 'RM' },
    ];

    const handleChange1 = (e: { value: any}) => {
        setSelect1(e.value);
    }

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
                    <colgroup>
                        <col width='15%'></col>
                        <col width='35%'></col>
                        <col width='15%'></col>
                        <col width='35%'></col>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>등록자</th>
                        <td>신재문</td>
                    
                        <th>등록일시</th>
                        <td>2023.03.02. 15:00:00</td>
                    </tr>
                    </tbody>
                </table>  
            </div>
        </div>
        <div className='view-container'>
            <h2 className='page-title mb5'>등록 내용 <span className='infoTxt'>(<span className='required'>*</span> 필수)</span></h2>
            <div className='cld-table-cover'>
                <table className='cld-table'>
                    <caption>등록내용</caption>
                    <colgroup>
                        <col width='15%'></col>
                        <col width='*'></col>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>구분<span className='required'>*</span></th>
                        <td>
                            <Dropdown value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                        </td>
                    </tr>
                    <tr>
                        <th>제목<span className='required'>*</span></th>
                        <td>
                            <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />

                        </td>
                    </tr>
                    <tr>
                        <th>내용<span className='required'>*</span></th>
                        <td>
                            <Editor style={{height:'320px'}} value={content} onTextChange={(e) => setContent(e.textValue)} />
                        </td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td>
                            <FileUpload />
                        </td>
                    </tr>
                    <tr>
                        <th>중요공지여부</th>
                        <td>
                        {
                            categories.map((category) => {
                            return (
                                <span key={category.key} className="field-radiobutton mr20">
                                    <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)}  checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                    <label className='ml5' htmlFor={category.key}>{category.name}</label>
                                </span>
                                )
                            })
                        }
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