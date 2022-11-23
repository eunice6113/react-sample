import { Dropdown, InputText, RadioButton, Button, Checkbox, Calendar, InputSwitch } from 'primereact';
import * as React from 'react';
import CldFileUpload from '../CldFileUpload';
import './questionnaire.css';
import { Question } from '../../../core/models/survey';
import { FieldArray} from "formik";

interface IQuestion {
    q_id: any;
    question: Question;
    handleSurveyQuestionChange: Function;
    questionTypeOptions: any,
    measureNumOpt: any,
    updateOption?: Function;
    deltOption?: Function;
    addOption?: Function;
    handleSurveyQuestionChkChange: Function;
    handleSurveyMeasureChange?: Function;
    duplicate?: Function;
    delt?: Function;
    formik?: any;
    arrayHelpers?:any;
}

const Questionnaire: React.FC<IQuestion> = ({
    q_id,
    question,
    handleSurveyQuestionChange,
    questionTypeOptions,
    measureNumOpt,
    updateOption,
    deltOption,
    addOption,
    handleSurveyQuestionChkChange,
    handleSurveyMeasureChange,
    duplicate,
    delt,
    formik,
    arrayHelpers,
}) => {


    return (
    <>
        <div className='surveyBox'>
            <div className='mb10'>
                <div className='d-flex mb10'>
                    <InputText name={`questions[${q_id}].question`} className='mr10' placeholder='질문을 입력해주세요.' 
                                value={formik.values.questions[q_id].question} 
                                onChange={formik.handleChange} />
                    <div className='d-flex-default'>
                        <span className='swichText'>필수</span>
                        <InputSwitch checked={question.requiredToggle} 
                                onChange={(e) => handleSurveyQuestionChange(q_id, 'requiredToggle', e.value)} />
                    </div>
                </div>
                <Dropdown name={`questions[${q_id}].questionType`}  className='mb10'
                                value={formik.values.questions[q_id].questionType} 
                                options={questionTypeOptions} 
                        onChange={formik.handleChange} optionLabel='name' placeholder='전체' />

            
            <span className='required'></span>

                {/* 파일 업로드 부분은 따로 연동을 안했어요~!! */}
                <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />

                <div className='mt10'>
                { 
                // 객관식 질문(단수) ************************************************************************************
                formik.values.questions[q_id].questionType === 'singularQ' ?

                <FieldArray
                    name={`questions[${q_id}].options`}
                    render={({push,remove}) => (
                        <>
                        {
                            formik.values.questions[q_id]?.options?.map((item:any, opt_id:number) => (
                                <div key={item.key} className='field-radiobutton mb10 d-flex-default'>
                                    <RadioButton inputId={item.key} name='radios' value={item} 
                                                onChange={(e) => handleSurveyQuestionChange(q_id, 'selectedRadio', e.value)} 
                                                checked={question?.selectedRadio?.key === item.key} disabled={item.key === 'R'} />
                                    <InputText className='mr10 ml10' placeholder='옵션' 
                                                name={`questions[${q_id}].options.[${opt_id}].name`}
                                                value={formik.values.questions[q_id].options[opt_id].name} 
                                                onChange={formik.handleChange} />
                                    <Button className='iconBtn p-button-text mr10' icon='pi pi-times'
                                            onClick={() => remove(opt_id)} />
                                </div>
                            ))
                        }
                        <Button type='button' onClick={() => push({name: '', key: 'opt' + Math.random()*100})} 
                        icon='pi pi-plus' label='추가' className="p-button-text mb10" />
                        </>
                    )}
                />

                :
                // 객관식 질문(복수) ************************************************************************************
                question.questionType === 'mulipleQ' ?

                <FieldArray
                    name={`questions[${q_id}].options`}
                    render={({push,remove}) => (
                        <>
                        {
                            formik.values.questions[q_id]?.options?.map((item:any, opt_id:number) => (
                                <div key={item.key} className='field-radiobutton mb10 d-flex-default'>
                                    <Checkbox inputId={item.key} name='check' value={item} 
                                                onChange={(e) => handleSurveyQuestionChkChange(e, q_id, question.selectedCheck)} 
                                                checked={question?.selectedCheck?.some((c:any) => c.key === item.key)} disabled={item.key === 'R'} />
                                    <InputText className='mr10 ml10' placeholder='옵션'name={`questions[${q_id}].options.[${opt_id}].name`}
                                                value={formik.values.questions[q_id].options[opt_id].name} 
                                                onChange={formik.handleChange} />
                                    <Button className='iconBtn p-button-text mr10' icon='pi pi-times' 
                                            onClick={() => remove(opt_id)}
                                            />
                                            
                                </div>
                            ))
                        }
                        <Button type='button' onClick={() => push({name: '', key: 'opt' + Math.random()*100})} 
                        icon='pi pi-plus' label='추가' className="p-button-text mb10" />
                        </>
                    )}
                />
                
                :
                // 척도선택 ************************************************************************************ 
                question.questionType === 'measure' ?
                <div>
                    <Dropdown className='mb10' 
                            name={`questions[${q_id}].measure.from`} 
                            options={measureNumOpt} 
                            value={formik.values.questions[q_id].measure?.from} 
                            onChange={formik.handleChange}
                           optionLabel='name' placeholder='전체' />
                    <span className='ml10 mr10'>~</span>

                    <Dropdown className='mb10'  
                            name={`questions[${q_id}].measure.to`} 
                            options={measureNumOpt} 
                            value={formik.values.questions[q_id].measure?.to} 
                            onChange={formik.handleChange}
                             optionLabel='name' placeholder='전체' />
                    {
                        formik.values?.questions[q_id]?.measure?.from !== undefined && formik.values?.questions[q_id]?.measure?.from !== '' &&
                        <div className='d-flex-default'>
                            <span className='mr10 text-bold labelScale'>{formik.values?.questions[q_id]?.measure?.from}</span>
                            <InputText className='mr10' placeholder='라벨을 입력해주세요(예. 아주 안좋음)' 
                                   name={`questions[${q_id}].measure.fromLabel`} 
                                   value={formik.values.questions[q_id].measure?.fromLabel} 
                                   onChange={formik.handleChange}
                                   /> 
                        </div>
                    }
                    {
                        question?.measure?.to !== undefined && question?.measure?.to !== '' &&
                        <div className='d-flex-default mt10'>
                            <span className='mr10 text-bold labelScale' flex-col='1'>{question?.measure?.to}</span>
                            <InputText className='mr10' placeholder='라벨을 입력해주세요(예. 아주 좋음)' 
                                    name={`questions[${q_id}].measure.toLabel`} 
                                    value={formik.values.questions[q_id].measure?.toLabel} 
                                    onChange={formik.handleChange} /> 
                        </div>
                    }
                </div>
                :
                // 날짜선택 ************************************************************************************
                question.questionType === 'date' ?
                <div className=''>
                    <Calendar dateFormat='yy.mm.dd' value={question?.date} 
                                onChange={(e) => handleSurveyQuestionChange(q_id, 'date', e.value)} showIcon />
                </div>
                :
                <></>
            }
            </div>
            </div>
            <div className='d-flex'>
                <Button className='ml-auto outline text-bold mr5' onClick={() => arrayHelpers.push(formik.values.questions[q_id])}>복제</Button>
                <Button className='' onClick={() => arrayHelpers.remove(q_id)}>삭제</Button>
            </div>
        </div>
    </>
    )
}

export default Questionnaire;