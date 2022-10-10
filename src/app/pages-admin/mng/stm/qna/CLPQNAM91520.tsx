import { Button, Dropdown, Editor, FileUpload, InputNumber, InputText, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPQNAM91520.css';

//자주묻는질문 상세/수정
const CLPQNAM91520:React.FC = () => {
    const { goPage, goBack, paramId } = useBasePage()

    const [order, setOrder] = React.useState<any>(null);
    const [editMode, setEditmode] = React.useState<boolean>(false);
    const [select1, setSelect1] = React.useState<any>(null);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

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

    const edit = () => {
        setEditmode(!editMode);

        console.log('editMode =>', editMode)
    }
    
    const confirm = () => {
        setEditmode(false);
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
            <h2 className='page-title mb5'>
                등록 내용
                {editMode && <span className='infoTxt'>(<span className='required'>*</span> 필수)</span>}
            </h2>
            <div className='cld-table-cover'>
                <table className='cld-table'>
                    <caption>등록내용</caption>
                    <colgroup>
                        <col width='15%'></col>
                        <col width='*'></col>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>
                            구분
                            {editMode && <span className='required'>*</span>}
                        </th>
                        <td>
                            {editMode ? 
                                <Dropdown value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                                :
                                <span>클라우드</span>
                            }
                        </td>
                    </tr>
                    <tr>
                        <th>
                            질문
                            {editMode && <span className='required'>*</span>}
                        </th>
                        <td>
                            {editMode ? 
                                <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />
                                :
                                <span>질문내용</span>
                            }
                        </td>
                    </tr>
                    <tr>
                        <th>
                            답변
                            {editMode && <span className='required'>*</span>}
                        </th>
                        <td>
                            {editMode ? 
                                <Editor style={{height:'320px'}} value={content} onTextChange={(e) => setContent(e.textValue)} />
                                :
                                <span>답변내용</span>
                            }
                        </td>
                    </tr>
                    <tr>
                        <th>
                            노출순서
                            {editMode && <span className='required'>*</span>}
                        </th>
                        <td>
                            {editMode ? 
                                <div className='d-flex-default'>
                                    <InputNumber className='orderNm' inputId="integeronly" value={order} onValueChange={(e) => setOrder(e.value)} />
                                    <span className='infoTxt d-flex-default'><i className='pi pi-info-circle ml10 mr5'></i> 기등록한 노출순서와 변경하시는 경우 기등록된 자주 묻는 질문 이후 게시글도 포함하여 +1 처리 됩니다. </span>
                                </div>
                                :
                                <span>1</span>
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='btn-container d-flex'>
            <Button className='secondary' onClick={goBack}>목록</Button>
            <Button className='ml-auto outline' onClick={edit}>수정</Button>
            {editMode ? 
                <Button className='ml5' onClick={confirm}>확인</Button> 
                : 
                <Button className='ml5'>삭제</Button>
            }
            
        </div>
    </BasePage>)
}
export default CLPQNAM91520;