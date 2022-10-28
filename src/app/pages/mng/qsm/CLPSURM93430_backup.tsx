import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button, Checkbox, Calendar, InputSwitch } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import './CLPSURM93430.css';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import { SearchParams } from '../../../core/models/search-params';
import TextEditor from '../../../shared/components/ui/text-editor/TextEditor';
import { useState } from 'react';
import CldFileUpload from '../../../shared/components/CldFileUpload';
import { updateItemInList } from '../../../shared/utils/com-utils';
import { QMeasure, Qoption } from '../../../core/models/survey';
import Questionnaire from '../../../shared/components/survey/Questionnaire';


//설문 관리 등록
//state 통합하기 전
const CLPSURM93430_backup:React.FC = () => {
    const { goPage } = useBasePage()

    //제목
    const [title, setTitle] = React.useState('');

    //노출구분 라디오
    const typeCategories = [
        {name: '내부', key: 'inside'}, 
        {name: '외부', key: 'outside'},
    ];
    const [typeCategory, setTypeCategory] = React.useState(typeCategories[1]);

    //설문내용 텍스트 에디터
    const [content, setContent] = React.useState('');

    //설문 기간
    const [daterange, setDaterange] = React.useState<SearchParams>({
        fromDate: undefined,
        toDate: undefined,
    });

    //설문 기간 입력
    const handleDaterangeChange = (prop: keyof SearchParams, value:any) => {
        setDaterange({ ...daterange, [prop]: value });
    };

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

    //결과보기 버튼
    const result =() => {
        goPage('/qsm/register')
    }

    

    interface Question {
        name: string;
        key: any;
        answerType: string; //질문유형 선택
        requiredToggle: boolean; //필수 스위치 
        answer: string; //단답형 질문

        // 복제
        // 삭제

    }

    let question_items = [
        {
            answerType: '', //질문유형 선택
            requiredToggle: false, //필수 스위치 
            answer: '', //단답형 질문

            //체크박스
            checkBoxOptions: [
                {name: '복수선택1', key: 'chk0'}, 
            ],
            checkboxs: [],

        }
    ]


    React.useEffect(()=>{
        setQuestions(question_items)
    }, [])

    const [questions, setQuestions] = React.useState<any[]>([])

    //설문 문항 추가
    const addQuestion = () => {
        const newQ = {
            name: ''
            , key: 'survey' + questions.length
            , answerType: ''
            , requiredToggle: false
            , answer: ''
            , 
        };
        setQuestions([...questions, newQ])
    }

    



    //설문 공통****************************************************************************
    
    const answerTypeOptions = [
        { name: '단답형', value: 'answer' },
        { name: '장문형', value: 'longForm' },
        { name: '객관식 질문(단수)', value: 'singularQ' },
        { name: '객관식 질문(복수)', value: 'mulipleQ' },
        { name: '척도선택', value: 'measure' },
        { name: '날짜선택', value: 'date' },
    ];

    //설문 문항 복제 버튼
    const copy = ( e:Event, index:number ) => {
        console.log('복제')
    }

    //설문 문항 삭제
    const delt = ( e:Event, index:number ) => {
        console.log('삭제')
    }


    //목록화 ******************************************************************************

    //질문유형 선택
    const [answerType, setAnswerType] = React.useState<any[]>([]);

    //필수 스위치 
    const [requiredToggle, setRequiredToggle] = React.useState<boolean[]>([]);
    // const [requiredToggle, setRequiredToggle] = useState(false);
    
    const handleAnswerTypeChange = (e: { value: any}) => {
        setAnswerType(e.value);
    }

    //단답형 질문
    const [answer, setAnswer] = React.useState<string[]>([]);





    //반복문 ******************************************************************************



    


    //복수형 객관식 ================================================================================================
    //체크박스
    const checkBoxOptions = [
        {name: '복수선택1', key: 'chk0'}, 
    ];

    //체크박스 전체
    const [checkboxs, setCheckboxs] = React.useState<Qoption[]>(checkBoxOptions);

    //선택한 체크박스 옵션
    const [selectedCheckboxs, setSelectedCheckboxs] = React.useState<any>(checkBoxOptions.slice(1,3));

    //체크박스 수정
    const onCheckboxChange = (e: { value: any, checked: boolean }) => {
        let _selectedCheckboxs = [...selectedCheckboxs];

        if (e.checked) {
            _selectedCheckboxs.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedCheckboxs.length; i++) {
                const selected = _selectedCheckboxs[i];

                if (selected.key === e.value.key) {
                    _selectedCheckboxs.splice(i, 1);
                    break;
                }
            }
        }

        setSelectedCheckboxs(_selectedCheckboxs);
    }

    //체크박스 입력
    const handleCheckboxChange = (prop: any, key:any, value:any) => {
        updateItemInList(key, 'name', value, checkboxs, setCheckboxs, 'key')
    };

    //체크박스 옵션 삭제
    const deltCheckbox = ( e:any, key:any ) => {
        // console.log('삭제', e, key)

        setCheckboxs(
            checkboxs.filter((c:Qoption) =>
                c.key !== key
            )
        );
    }

    //체크박스 옵션 추가 
    const addCheckbox = () => {
        const newOpt = {
            name: ''
            , key: 'chk' + checkboxs.length
        };
        setCheckboxs([...checkboxs, newOpt])
    }




    //단수형 객관식 ================================================================================================
    //라디오
    const radioOptions:Qoption[] = [
        {name: '옵션1', key: 'radio0'}, 
    ];

    //라디오 전체
    const [radios, setRadios] = React.useState<Qoption[]>(radioOptions);

    //선택한 라디오 옵션
    const [selectedRadio, setselectedRadio] = React.useState(radioOptions[0]);

    //라디오 입력
    const handleRadioChange = (prop: any, key:any, value:any) => {
        updateItemInList(key, 'name', value, radios, setRadios, 'key')
    };

    //라디오 삭제
    const deltRadio = ( e:any, key:any ) => {
        // console.log('삭제', e, key)

        setRadios(
            radios.filter((c:Qoption) =>
                c.key !== key
            )
        );
    }

    //라디오 추가
    const addRadio = () => {
        const newRadioOpt = {
            name: ''
            , key: 'radio' + radios.length
        };
        setRadios([...radios, newRadioOpt])
    }



    //척도선택 ================================================================================================
    const measureNumOpt = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
        { name: '7', value: '7' },
        { name: '8', value: '8' },
        { name: '9', value: '9' },
        { name: '10', value: '10' },
    ];

    const [measure, setMeasure] = React.useState<QMeasure>({
        from: undefined,
        fromLabel: '',
        to: undefined,
        toLabel: '',
    });

    const handleMeasureChange = (prop: keyof QMeasure, value:any) => {
        setMeasure({ ...measure, [prop]: value });
        // console.log('measure =>', measure)
    };



    //날짜선택 ================================================================================================
    const [date, setDate] = React.useState<SearchParams>({
        fromDate: undefined,
        toDate: undefined,
    });

    const handleChange = (prop: keyof SearchParams, value:any) => {
        setDate({ ...date, [prop]: value });
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
                        value: ''
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
                            <th>제목 <span className='required'>*</span></th>
                            <td colSpan={3}>
                            <div><InputText placeholder='설문 제목을 입력해주세요.' value={title} onChange={(e) => setTitle(e.target.value)} /></div>
                            </td>
                           
                        </tr>
                        <tr>
                            <th>설문기간 <span className='required'>*</span></th>
                            <td>
                                <div className='d-flex'>
                                <Calendar dateFormat='yy.mm.dd' value={daterange.fromDate} onChange={(e) => handleDaterangeChange('fromDate', e.value)} showIcon />
                                <span className='mt5 mr5 ml5'>~</span>
                                <Calendar dateFormat='yy.mm.dd' value={daterange.toDate} onChange={(e) => handleDaterangeChange('toDate', e.value)} showIcon />
                                </div>
                            </td>
                            <th>노출구분</th>
                            <td>
                                {
                                    typeCategories.map((category) => (
                                        <span key={category.key} className='field-radiobutton mr20'>
                                            <RadioButton inputId={category.key} name='category' value={category} onChange={(e) => setTypeCategory(e.value)} checked={typeCategory.key === category.key} disabled={category.key === 'R'} />
                                            <label htmlFor={category.key}>{category.name}</label>
                                        </span>
                                    ))
                                }
                            </td>

                        </tr>
                        <tr>
                            <th>설문내용</th>
                            <td colSpan={3}>
                            <TextEditor value={content} onTextChange={setContent} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4}>


                                {/* <div className='survey'>
                                    {
                                        questions.map((item, index) => 
                                            <Questionnaire 
                                                key={`q-${index}`}
                                                question={question_items}
                                                copy={(e:any) => copy(e, index)}
                                                delt={(e:any) => delt(e, index)}
                                            />
                                        )
                                    }

                                    //설문 질문 추가 버튼 
                                    <div className='d-flex justify-center'>
                                        <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' 
                                                onClick={addQuestion} />
                                    </div>
                                </div> */}


                                <>
                                {/* <div className='survey'>
                                    <div className='surveyBox'>
                                        <div className='mb10'>
                                            <div className='d-flex mb10'>
                                                <InputText className='mr10' placeholder='질문을 입력해주세요.' value={answer} onChange={(e) => setAnswer(e.target.value)} />
                                                <div className='d-flex-default'>
                                                    <span className='swichText'>필수</span>
                                                    <InputSwitch checked={requiredToggle} onChange={(e) => setRequiredToggle(e.value)} />
                                                </div>
                                            </div>
                                            <Dropdown className='mb10' value={answerType} options={answerTypeOptions} onChange={handleAnswerTypeChange} optionLabel='name' placeholder='전체' />

                                            <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />

                                            <div className='mt10'>
                                            { 
                                                // 객관식 질문(단수)  
                                                answerType === 'singularQ' ?
                                                <>
                                                {
                                                    radios.map((item, index) => (
                                                        <div key={item.key} className='field-radiobutton mb10 d-flex-default'>
                                                            <RadioButton inputId={item.key} name='radios' value={item} onChange={(e) => setselectedRadio(e.value)} checked={selectedRadio.key === item.key} disabled={item.key === 'R'} />
                                                            <InputText className='mr10 ml10' placeholder='옵션' value={item.name} onChange={(e) => handleRadioChange('name', item.key, e.target.value)} />
                                                            <Button className='iconBtn p-button-text mr10' icon='pi pi-times' onClick={(e) => deltRadio(e, item.key)} />
                                                        </div>
                                                    ))
                                                }
                                                <Button onClick={addRadio} icon='pi pi-plus' label='추가' className="p-button-text mb10" />
                                                </>
                                                :
                                                // 객관식 질문(복수)  
                                                answerType === 'mulipleQ' ?
                                                <>
                                                {
                                                    checkboxs.map((item) => (
                                                        <div key={item.key} className='field-checkbox mb10 d-flex-default'>
                                                            <Checkbox inputId={item.key} name='check' value={item} onChange={onCheckboxChange} 
                                                                checked={selectedCheckboxs.some((item:any) => item.key === item.key)} disabled={item.key === 'R'} />
                                                            <InputText className='mr10 ml10' placeholder='옵션' value={item.name} onChange={(e) => handleCheckboxChange('name', item.key, e.target.value)} />
                                                            <Button className='iconBtn p-button-text mr10' icon='pi pi-times' onClick={(e) => deltCheckbox(e, item.key)} />
                                                        </div>
                                                ))
                                                }
                                                <Button onClick={addCheckbox} icon='pi pi-plus' label='추가' className="p-button-text mb10" />
                                                </>
                                                :
                                                // 척도선택  
                                                answerType === 'measure' ?
                                                <div>
                                                    <Dropdown className='mb10' value={measure.from} options={measureNumOpt} onChange={(e) => handleMeasureChange('from', e.target.value)} optionLabel='name' placeholder='전체' />
                                                    <span className='ml10 mr10'>~</span>
                                                    <Dropdown className='mb10' value={measure.to} options={measureNumOpt} onChange={(e) => handleMeasureChange('to', e.target.value)} optionLabel='name' placeholder='전체' />
                                                    {
                                                        measure?.from !== undefined &&
                                                        <div className='d-flex-default'>
                                                            <span className='mr10 text-bold labelScale'>{measure.from}</span>
                                                            <InputText className='mr10' placeholder='라벨을 입력해주세요(예. 아주 안좋음)' value={measure.fromLabel} onChange={(e) => handleMeasureChange('fromLabel', e.target.value)} /> 
                                                        </div>
                                                    }
                                                    {
                                                        measure?.to !== undefined &&
                                                        <div className='d-flex-default mt10'>
                                                            <span className='mr10 text-bold labelScale' flex-col='1'>{measure.to}</span>
                                                            <InputText className='mr10' placeholder='라벨을 입력해주세요(예. 아주 좋음)' value={measure.toLabel} onChange={(e) => handleMeasureChange('toLabel', e.target.value)} /> 
                                                        </div>
                                                    }
                                                </div>
                                                :
                                                // 날짜선택  
                                                answerType === 'date' ?
                                                <div className=''>
                                                    <Calendar dateFormat='yy.mm.dd' value={date.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                                                </div>
                                                :
                                                <></>
                                            }
                                            </div>
                                        </div>
                                        
                                        <div className='d-flex'>
                                            <Button className='ml-auto outline text-bold mr5' onClick={copy}>복제</Button>
                                            <Button className='' onClick={delt}>삭제</Button>
                                        </div>
                                    </div>

                                    //추가 버튼
                                    <div className='d-flex justify-center'>
                                        <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' onClick={copy} />
                                    </div>
                                </div> */}
                                </>
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
            <div className='cld-col-6 text-center'></div>
            <div className='cld-col-3 d-flex'>
                <Button className='ml-auto outline' onClick={edit}>수정</Button>
                <Button className='ml5' onClick={remove}>삭제</Button>
            </div>
        </div>
    </BasePage>)
}
export default CLPSURM93430_backup;