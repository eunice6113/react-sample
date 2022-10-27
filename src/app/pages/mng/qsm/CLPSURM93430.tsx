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
import { QMeasure, Survey, Question, Qoption, Qdaterange } from '../../../core/models/survey';
import QuestionnaireItem from '../../../shared/components/survey/QuestionnaireItem';


//설문 관리 등록
const CLPSURM93430:React.FC = () => {
    const { goPage } = useBasePage()



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

    //설문지 초기화
    let survey_initialize:Survey = {
        title: '',                          //설문 제목
        type: {name: '내부', key: 'inside'}, //노출구분 라디오
        daterange: {                        //설문기간
            fromDate: new Date(),
            toDate: new Date()
        },
        content: '',                        //설문 내용
        questions: [                        //설문 질문지들
            {
                question: '',               //질문 입력 인풋
                requiredToggle: false,      //필수 여부 토글 
                questionType: '',           //질문유형 선택

                selectedOption: [],         //객관식 질문 - 단수형, 복수형 선택시
                options: [                  //객관식 질문 옵션목록 
                    {name: '선택 1', key: 'opt0'}, 
                ],
                date: {                     //날짜형
                    fromDate: new Date(),
                    toDate: new Date()
                },
                measure: {                  //척도형
                    from: '',
                    to: '',
                    fromLabel: '',
                    toLabel: '',
                }
            }
        ]
    }
    
    //설문지 전체 데이터
    const [survey, setSurvey] = React.useState<Survey>(survey_initialize)


    // 설문 > id 번째 문항 내 라디오, 체크박스 옵션 추가 
    const addOption = ( qst_id:any, qst_opts:any ) => {

        const newOption = {
            name: ''
            , key: 'opt' + qst_id + Math.random()*100
        };

        const questions = survey.questions.map(( question, i ) => {
            if( i === qst_id ) {
                const options = [ ...question.options, newOption ]
                return { ...question, options }
            }
            return question;
        })

        setSurvey({
            ...survey, 
            questions
        })
    }

    // 설문 > id 번째 문항 내 라디오, 체크박스 옵션 삭제
    const deltOption = ( qst_id:any, opt_key:any ) => {
        const questions = survey.questions.map((question, i) => {
            if( i === qst_id ) {
                const options = question.options.filter((item:any) => item.key !== opt_key )
                return { ...question, options }
            }
            return question;
        })

        setSurvey({
            ...survey,
            questions
        })
    }

    // 설문 > id 번째 문항 내 라디오, 체크박스 옵션 수정
    const updateOption = ( qst_id:any, opt_id:any, opt_key:any, opt_type:any, opt_value:any ) => {

        // console.log('updateOption qst_id', qst_id, 'opt_id', opt_id, 'opt_key', opt_key, 'opt_type', opt_type, 'opt_value', opt_value)
        const questions = survey.questions.map(( question, i ) => {
            if( i === qst_id ) {
                
                const options = question.options.map((item:any, oid) => {
                    // console.log('item[opt_key]', item[opt_key], oid, opt_id)
                    if (oid === opt_id) {
                      return {
                        ...item,
                        [opt_type]: opt_value
                      };
                    } else {
                        return item
                    }
                });
                return { ...question, options }
            }
            return question;
        })

        setSurvey({
            ...survey, 
            questions
        })
    }
    
    // 설문 문항 추가
    const addQuestion = () => {

        const newQuestion:Question = {
            question: '',               //질문 입력 인풋
            requiredToggle: false,      //필수 여부 토글 
            questionType: '',           //질문유형 선택

            selectedOption: [],         //객관식 질문 - 단수형, 복수형 선택시
            options: [                  //객관식 질문 옵션목록 
                {name: '선택 1', key: 'opt0'}, 
            ],
            date: {                     //날짜형
                fromDate: new Date(),
                toDate: new Date()
            },
            measure: {                  //척도형
                from: '',
                to: '',
                fromLabel: '',
                toLabel: '',
            }
        }

        setSurvey(prevState => ({
            ...prevState,        
            questions: [            
              ...prevState.questions, 
              newQuestion   
            ]
        }));
    }

    // 설문 제목, 설문기간, 노출구분
    const handleSurveyChange = ( prop:any, value:any ) => {
        setSurvey({ ...survey, [prop]: value });
    };

    // 설문내용
    const handleContentSurveyChange = ( value?:any ) => {
        setSurvey({ ...survey, content: value });
    };

    // 설문 > 질문 내용 업데이트
    const handleSurveyQuestionChange = ( q_id:any, type:any, value:any ) => {

        const updateQuestions:any[] = survey.questions.map((item:any, i:number ) => {
            if (i === q_id) {
              return {
                ...item,
                [type]: value
              };
            } else {
                return item
            }
        });
        console.log('updateQuestions', updateQuestions)
        setSurvey({ ...survey, questions: updateQuestions });
    }
    

    React.useEffect(() => {

        console.log('survey ==>', survey)

    }, [survey])



    //설문 공통 ****************************************************************************
    
    //노출구분 라디오
    const expsOpt = [
        {name: '내부', key: 'inside'}, 
        {name: '외부', key: 'outside'},
    ];
    const [typeCategory, setTypeCategory] = React.useState(expsOpt[1]);
    
    const questionTypeOptions = [
        { name: '단답형', value: 'question' },
        { name: '장문형', value: 'longForm' },
        { name: '객관식 질문(단수)', value: 'singularQ' },
        { name: '객관식 질문(복수)', value: 'mulipleQ' },
        { name: '척도선택', value: 'measure' },
        { name: '날짜선택', value: 'date' },
    ];

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

    //설문 2 depth ****************************************************************************

    //설문 문항 복제 버튼
    const copy = ( e:any, q_id:number ) => {
        console.log(q_id, '복제')
    }

    //설문 문항 삭제
    const delt = ( e:any, q_id:number ) => {
        console.log(q_id, '삭제')
    }

    //질문유형 선택
    // const [questionType, setQuestionType] = React.useState<any[]>([]);
    const [questionType, setQuestionType] = React.useState<any>();

    //필수 스위치 
    // const [requiredToggle, setRequiredToggle] = React.useState<boolean[]>([]);
    const [requiredToggle, setRequiredToggle] = useState(false);

    const handlequestionTypeChange = (e: { value: any}) => {
        setQuestionType(e.value);
    }

    //단답형 질문
    const [question, setQuestion] = React.useState<string>('');
    // const [question, setQuestion] = React.useState<string[]>([]);


    /*
    
    survey[] 
    ㄴquestion[]
      ㄴradio[]
      ㄴcheckbox[]

        redux 로 설문 만들기 !!!!!!!!!!!
        최하위에서 값이 바뀔때 useEffect 에서 redux 에 설문 저장해버리기
    */

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
        {/* <ViewTemplate {...authorInfo} /> */}

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
                            <div><InputText placeholder='설문 제목을 입력해주세요.' value={survey.title} onChange={(e) => handleSurveyChange('title', e.target.value)} /></div>
                            </td>
                        </tr>
                        <tr>
                            <th>설문기간 <span className='required'>*</span></th>
                            <td>
                                <div className='d-flex'>
                                <Calendar dateFormat='yy.mm.dd' value={survey.daterange.fromDate} onChange={(e) => handleSurveyChange('daterange.fromDate', e.value)} showIcon />
                                <span className='mt5 mr5 ml5'>~</span>
                                <Calendar dateFormat='yy.mm.dd' value={survey.daterange.toDate} onChange={(e) => handleSurveyChange('daterange.toDate', e.value)} showIcon />
                                </div>
                            </td>
                            <th>노출구분</th>
                            <td>
                            {
                                expsOpt.map((category) => (
                                    <span key={category.key} className='field-radiobutton mr20'>
                                        <RadioButton inputId={category.key} name='category' value={category} 
                                            onChange={(e) => { handleSurveyChange('type', e.value)}} 
                                            checked={survey.type.key === category.key} 
                                            disabled={category.key === 'R'} 
                                        />
                                        <label htmlFor={category.key}>{category.name}</label>
                                    </span>
                                ))
                            }
                            </td>
                        </tr>
                        <tr>
                            <th>설문내용</th>
                            <td colSpan={3}>
                            <TextEditor value={survey.content} onTextChange={handleContentSurveyChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}>
<>
                                {/* <div className='survey'>
                                    {
                                        questions.map((item, index) => 
                                            <QuestionnaireItem 
                                                key={`q-${index}`}
                                                question={question_items}
                                                copy={(e:any) => copy(e, index)}
                                                delt={(e:any) => delt(e, index)}
                                            />
                                        )
                                    }

                                    <div className='d-flex justify-center'>
                                        <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' 
                                                onClick={addQuestion} />
                                    </div>
                                </div> */}
</>
                                <div className='survey'>
                                    {/* 복제, 삭제, 추가 범위 시작 --------------------------------------------------------------------------------------- */}
                                    {
                                        survey.questions.map(( question, q_id ) => (

                                        <div className='surveyBox' key={`survey-q-${q_id}`}>
                                            <div className='mb10'>
                                                <div className='d-flex mb10'>
                                                    <InputText className='mr10' placeholder='질문을 입력해주세요.' value={question.question} 
                                                                onChange={(e) => handleSurveyQuestionChange(q_id, 'question', e.target.value)} />
                                                    <div className='d-flex-default'>
                                                        <span className='swichText'>필수</span>
                                                        <InputSwitch checked={question.requiredToggle} 
                                                                onChange={(e) => handleSurveyQuestionChange(q_id, 'requiredToggle', e.value)} />
                                                    </div>
                                                </div>
                                                <Dropdown className='mb10' value={question.questionType} options={questionTypeOptions} 
                                                        onChange={(e) => handleSurveyQuestionChange(q_id, 'questionType', e.value)} optionLabel='name' placeholder='전체' />

                                                {/* 파일 업로드 부분은 따로 연동을 안했어요~!! */}
                                                <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />

                                                <div className='mt10'>
                                                { 
                                                // 객관식 질문(단수) ************************************************************************************
                                                question.questionType === 'singularQ' ?
                                                <>
                                                {
                                                    question.options.map((item, opt_id) => (
                                                        <div key={item.key} className='field-radiobutton mb10 d-flex-default'>
                                                            <RadioButton inputId={item.key} name='radios' value={item} 
                                                                        onChange={(e) => setselectedRadio(e.value)} 
                                                                        checked={selectedRadio.key === item.key} disabled={item.key === 'R'} />
                                                            <InputText className='mr10 ml10' placeholder='옵션' value={item.name} 
                                                                        onChange={(e) => updateOption(q_id, opt_id, item.key, 'name', e.target.value)} />
                                                            <Button className='iconBtn p-button-text mr10' icon='pi pi-times'
                                                                    onClick={(e) => deltOption(q_id, item.key)} />
                                                        </div>
                                                    ))
                                                }
                                                <Button onClick={(e) => addOption(q_id, question.options)} icon='pi pi-plus' label='추가' className="p-button-text mb10" />
                                                </>
                                                :
                                                // 객관식 질문(복수) ************************************************************************************
                                                question.questionType === 'mulipleQ' ?
                                                <>
                                                {
                                                    question.options.map((item, opt_id) => (
                                                        <div key={item.key} className='field-checkbox mb10 d-flex-default'>
                                                            <Checkbox inputId={item.key} name='check' value={item} 
                                                                      onChange={onCheckboxChange} 
                                                                      checked={selectedCheckboxs.some((item:any) => item.key === item.key)} disabled={item.key === 'R'} />
                                                            <InputText className='mr10 ml10' placeholder='옵션' value={item.name} 
                                                                       onChange={(e) => updateOption(q_id, opt_id, item.key, 'name', e.target.value)} />
                                                            <Button className='iconBtn p-button-text mr10' icon='pi pi-times' 
                                                                    onClick={(e) => deltOption(q_id, item.key)} />
                                                        </div>
                                                ))
                                                }
                                                <Button onClick={(e) => addOption(q_id, question.options)} icon='pi pi-plus' label='추가' className="p-button-text mb10" />
                                                </>
                                                :
                                                // 척도선택 ************************************************************************************ 
                                                question.questionType === 'measure' ?
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
                                                // 날짜선택 ************************************************************************************
                                                question.questionType === 'date' ?
                                                <div className=''>
                                                    {/* <Calendar dateFormat='yy.mm.dd' value={question.date.fromDate} 
                                                              onChange={(e) => handleSurveyQuestionChange(q_id, 'date.fromDate', e.value)} showIcon /> */}
                                                </div>
                                                :
                                                <></>
                                            }
                                            </div>
                                            </div>
                                            
                                            <div className='d-flex'>
                                                <Button className='ml-auto outline text-bold mr5' onClick={(e) => copy(e, q_id)}>복제</Button>
                                                <Button className='' onClick={(e) => delt(e, q_id)}>삭제</Button>
                                            </div>
                                        </div>

                                        ))
                                    }
                                    
                                    {/* 복제, 삭제, 추가 범위 끝 ---------------------------------------------------------------------------------------- */}

                                    {/* 추가 버튼 */}
                                    <div className='d-flex justify-center'>
                                        <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' onClick={addQuestion} />
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
            <div className='cld-col-6 text-center'></div>
            <div className='cld-col-3 d-flex'>
                <Button className='ml-auto outline' onClick={edit}>수정</Button>
                <Button className='ml5' onClick={remove}>삭제</Button>
            </div>
        </div>
    </BasePage>)
}
export default CLPSURM93430;