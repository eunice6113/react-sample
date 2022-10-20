import { InputText, RadioButton, Button, Checkbox, Calendar } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import './CLPSURM93420.css';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import { SearchParams } from "../../../core/models/search-params";


//설문 관리 상세/수정
const CLPSURM93420:React.FC = () => {
    const { goPage, goBack, paramId, isRegister } = useBasePage()


    //목록 버튼
    const list = () => {
        goPage('/qsm/list')
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
    }

    //수정 버튼
    const edit = () => {
        console.log('수정')
    }
    
    //취소 버튼
    const cancel = () => {
        console.log('취소')
    }

    //확인 버튼
    const confirm = () => {
    }

    //결과보기 버튼
    const result =() => {
        goPage('/qsm/register')
    }

    //라디오
    const radioCategories = [
        {name: '옵션1', key: 'option1'}, 
        {name: '옵션2', key: 'option2'},
        {name: '옵션3', key: 'option3'},
        {name: '옵션4', key: 'option4'}];
    const [selectedCategory, setSelectedCategory] = React.useState(radioCategories[1]);

    //척도 라디오
    const scaleCategories = [
        {name: '1', key: 'scale1'}, 
        {name: '2', key: 'scale2'},
        {name: '3', key: 'scale3'},
        {name: '4', key: 'scale4'},
        {name: '5', key: 'scale5'},
        {name: '6', key: 'scale6'},
        {name: '7', key: 'scale7'},
        {name: '8', key: 'scale8'},
        {name: '9', key: 'scale9'},
        {name: '10', key: 'scale10'}];
    const [scaleCategory, setScaleCategory] = React.useState(scaleCategories[1]);
    
    //input
    const [longForm, setLongForm] = React.useState('');
    const [shortForm, setShortForm] = React.useState('');

    //checkBox
    const checkBoxCategories = [
        {name: '복수선택1', key: 'checkBox1'}, 
        {name: '복수선택2', key: 'checkBox2'}, 
        {name: '복수선택3', key: 'checkBox3'}, 
        {name: '복수선택4', key: 'checkBox4'}];
    const [selectedCategories, setSelectedCategories] = React.useState<any>(checkBoxCategories.slice(1,3));
    const onCategoryChange = (e: { value: any, checked: boolean }) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) {
            _selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedCategories.length; i++) {
                const selectedCategory = _selectedCategories[i];

                if (selectedCategory.key === e.value.key) {
                    _selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        setSelectedCategories(_selectedCategories);
    }
    //Date Picker
    const [values, setValues] = React.useState<SearchParams>({
        fromDate: undefined,
        toDate: undefined,
    });

    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };
    //api 읽어와서 업데이트 할 내용
    const authorInfo = {
        title: '등록자 정보',
        rows: [
            {
                cols: [
                    {
                        key: '등록자', 
                        value: '신재문(12345)'
                    },
                    {
                        key: '등록일시', 
                        value: '2023.03.02. 15:00:00'
                    },
                ]
            }
        ]
    }


    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 상세 내용 */}
        <div className='view-container'>
            <h2 className='page-title mb5'>상세내용</h2>
            <div className='cld-table-cover'>
                <table className='cld-table'>
                    <colgroup>
                        <col width='15%'></col>
                        <col width='35%'></col>
                        <col width='15%'></col>
                        <col width='35%'></col>
                        
                    </colgroup>
                    <caption>설문 상세 내용</caption>
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td colSpan={3}>SaaS 서비스 이용실태 조사</td>
                           
                        </tr>
                        <tr>
                            <th>응답수</th>
                            <td>
                                <div className='d-flex-default'>
                                    <span>1,509</span>
                                    <Button className='outline ml10 text-bold' onClick={result}>결과보기</Button>
                                </div>
                            </td>
                            <th>설문기간</th>
                            <td>2022.12.20 ~ 2022.12.25</td>
                        </tr>
                        <tr>
                            <th>설문상태</th>
                            <td>진행</td>
                            <th>노출구분</th>
                            <td>내부</td>
                        </tr>
                        <tr>
                            <th>설문내용</th>
                            <td colSpan={3}>본 설문은 당행 임직원들의 SaaS 서비스 이용실태를 조사하기 위해 진행합니다. 많은 응답 바랍니다.</td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                <div className='survey'>
                                    <div className='surveyBox'>{/* 객관식 질문(단수) */}
                                        <h3 className='mb10'>1. 현재 SaaS 서비스를 이용 중이신가요?(<span className='required'>*</span>)</h3>
                                        <div className='mb10'></div>
                                        <div>
                                        {
                                            radioCategories.map((category) => {
                                                return (
                                                    <span key={category.key} className="field-radiobutton mb10 d-block">
                                                        <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                                        <label htmlFor={category.key}>{category.name}</label>
                                                    </span>
                                            )})
                                        }
                                        </div>
                                    </div>
                                    <div className='surveyBox'>{/* 장문형 */}
                                        <h3 className='mb10'>2. 어떤 SaaS 서비를 이용 중이신가요? (이용중인 서비스를 모두 기입해주세요.)(<span className='required'>*</span>)</h3>
                                        <div><InputText className="" placeholder="장문형 텍스트를 입력해주세요." value={longForm} onChange={(e) => setLongForm(e.target.value)} /></div>
                                    </div>
                                    <div className='surveyBox'>{/* 단문형 */}
                                        <h3 className='mb10'>3. 어떤 SaaS 서비를 이용 중이신가요? (이용중인 서비스를 모두 기입해주세요.)(<span className='required'>*</span>)</h3>
                                        <div><InputText className="" placeholder="단문형 텍스트를 입력해주세요." value={shortForm} onChange={(e) => setShortForm(e.target.value)} /></div>
                                    </div>
                                    <div className='surveyBox'>{/* 객관식 질문(복수) */}
                                        <h3 className='mb10'>3. 어떤 SaaS 서비를 이용 중이신가요? (이용중인 서비스를 모두 기입해주세요.)(<span className='required'>*</span>)</h3>
                                        <div>
                                            {
                                                checkBoxCategories.map((category) => {
                                                    return (
                                                        <div key={category.key} className="field-checkbox mb10">
                                                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} 
                                                            checked={selectedCategories.some((item:any) => item.key === category.key)} disabled={category.key === 'R'} />
                                                            <label htmlFor={category.key}>{category.name}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='surveyBox'>{/* 척도선택 */}
                                        <h3 className='mb10'>3. 어떤 SaaS 서비를 이용 중이신가요? (이용중인 서비스를 모두 기입해주세요.)(<span className='required'>*</span>)</h3>
                                        <div>
                                            <div className='scaleWrap'>
                                                <span className='mr20'>네</span>
                                                {
                                                    scaleCategories.map((category) => {
                                                        return (
                                                            <span key={category.key} className="field-radiobutton mr20 scale">
                                                                <label htmlFor={category.key}>{category.name}</label>
                                                                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setScaleCategory(e.value)} checked={scaleCategory.key === category.key} disabled={category.key === 'R'} />
                                                                
                                                            </span>
                                                    )})
                                                }
                                                <span>아니오</span>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div className='surveyBox'>{/* 날짜 선택 */}
                                        <h3 className='mb10'>3. 어떤 SaaS 서비를 이용 중이신가요? (이용중인 서비스를 모두 기입해주세요.)(<span className='required'>*</span>)</h3>
                                        <div className=''>
                                            <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                                        </div>
                                    </div>
                                </div>
                                
                            </td>
                        </tr>
                    </tbody>
                    

                </table>
            </div>
        </div>
        

        {/* 버튼영역 */}
        <div className='btn-container cld-row'>
            <div className='cld-col-3'>
                <Button className='secondary' onClick={list}>목록</Button>
            </div>
            <div className='cld-col-6 text-center'>
                
            </div>
            <div className='cld-col-3 d-flex'>
                <Button className='ml-auto outline' onClick={edit}>수정</Button>
                <Button className='ml5' onClick={remove}>삭제</Button>
            </div>
        </div>
    </BasePage>)
}
export default CLPSURM93420;