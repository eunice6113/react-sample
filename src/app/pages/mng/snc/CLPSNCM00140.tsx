import * as React from 'react';
import { Dropdown, Button, InputText, InputTextarea,  } from "primereact";
import { BasePage } from '../../../shared/components/base/BasePage';
import './CLPSNCM00140.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tree } from 'primereact/tree';
import { asignDummyData } from '../../../shared/demo/data/asignDummyData';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import CldFileUpload from "../../../shared/components/CldFileUpload";
import { SearchParams } from '../../../core/models/search-params';




//설문 관리 상세/수정
const CLPSNCM00140:React.FC = () => {
    
    //table page length
    let pages = 5;

    //table
    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
    const [taskID, setTaskID] = React.useState('');
    const [content, setContent] = React.useState('');
    
     //검색 조건
     const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
    });
     //select option dummy data
     const options1 = [
        { name: '전체', code: 'NY' },
        { name: '결제구분코드', code: 'RM' },
        { name: '업무명', code: 'LDN' },
    ];
    
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    const tableContent= {
        mode: mode,
        hasRequired: true,
        colgroups: ['150px', '*'],
        rows: [
            {
                cols: [
                    {
                        required: true,
                        key: '제목', 
                        value: <InputText className="" placeholder="업무화면 ID를 입력해주세요." value={taskID} onChange={(e) => setTaskID(e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '결재요청 내용', 
                        value: <InputTextarea value={content} onChange={(e) => setContent(e.target.value)} rows={5} cols={30} />
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '결재요청 내용', 
                        value:<CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />
                    },
                ]
            },
            
        ]
    }
    
   
    return(
        <BasePage className='CLPSNCM00140'>

                <>
                {/* 검색영역 */}
                <div className='searchBar'>
                    <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                        optionLabel='name' placeholder='전체' />

                    <InputText className='searchTxt' placeholder='업무구분코드, 업무명을 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

                    <Button label='조회' />
                </div>
                    <div className='request'>
                        <table className='cld-table requestTb'>
                            <tr>
                                <th>팀원</th>
                                <th>팀장</th>
                                <th>부점장</th>
                                
                            </tr>
                            <tr>
                                <td>
                                    요청<br />
                                    <span className='color-primary'>허승회</span><br />
                                    과장
                                </td>
                                <td>
                                    요청<br />
                                    <span className='color-primary'>허승회</span><br />
                                    과장
                                </td>
                                <td>
                                    요청<br />
                                    <span className='color-primary'>허승회</span><br />
                                    과장
                                </td>
                            </tr>
                        </table>
                        <ViewTemplate {...tableContent} />
                    </div>
                </>


                
       
        </BasePage>)
}
export default CLPSNCM00140;