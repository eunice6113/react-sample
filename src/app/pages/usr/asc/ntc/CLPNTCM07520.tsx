import { Button } from 'primereact';
import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPNTCM07520.css';
import BoardDetail from '../../../../shared/components/template/BoardDetail';
import BoardDetailPagination from '../../../../shared/components/template/BoardDetailPagination';
import { Link } from 'react-router-dom';
interface IProps {
    children: React.ReactNode;
}
// 공지사항 상세


const CLPNTCM07520: React.FC<IProps> = ({children}) => {
    const { goPage, goBack,  } = useBasePage()
    
    const [values, setValues] = React.useState<any>({
        files: [{name: '파일1.xlsx', size:0}, {name:'파일2.png', size:10}],
    });

    //목록 버튼
    const list = () => {
        goPage('/asc/ntc/list')
    }
    
    //api 읽어와서 업데이트 할 내용
    const contentsInfo = {
        rows: [
            {
                value: 
                <>  
                <div className='tableInfo'>
                    <h2 className='title'>공지사항</h2>
                    <ul className='info mt10'>
                        <li className='mr20'><span>등록일</span> 2023.03.01</li>
                        <li><span>조회수</span> 2,195</li>
                    </ul>
                </div>
                </>
            },
            {
                value: 
                <>
                    <p>공지사항 내용입니다.
                        <br/>
                        공지사항 내용입니다.
                        <br/>
                        공지사항 내용입니다.
                        <br/>
                        공지사항 내용입니다.
                        <br/>
                    </p>
                </>
            },
            {
                value: 
                <>
                    <div className='downloadFiles'> 
                        <ul className='fileList'>
                            {
                                values.files.map((file:any, index:number) => (
                                    <li key={file.name+index}><i className='pi pi-download mr5 downloadIco'></i><u>{file.name}</u></li>
                                ))
                            }
                        </ul>
                    </div>
                </>
            },
        ],
        
    }
    const boardPaginator = {
        rows: [
            {
                preview: {
                    label: '클라우드 포탈 오픈 소식을 전해드립니다.' ,
                    link: '/stm/ntc/1',
                    showIf: true
                },
                next: {
                    label: '클라우드 포탈 오픈 소식을 전해드립니다 >> 다음글입니다' ,
                    link: '/stm/ntc/list',
                    showIf: true
                },
            },
        ],
    }
    return(
    <BasePage>

        {/* 내용 */}
        <BoardDetail {...contentsInfo} />

        {/*버튼 영역*/}
        <div className='text-center mt30'>
            <Button className='xl' onClick={list}>목록</Button>
        </div>

        {/*이전글 다음글*/}
        <BoardDetailPagination {...boardPaginator} />
    </BasePage>)
}
export default CLPNTCM07520;