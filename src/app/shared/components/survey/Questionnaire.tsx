import { Dropdown, InputText, RadioButton, Button, Checkbox, Calendar, InputSwitch } from 'primereact';
import * as React from 'react';
import CldFileUpload from '../CldFileUpload';
import './questionnaire.css';
import { Question } from '../../../core/models/survey';

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
    formik?:any;
    arrayHelpers?:any;
}

const Questionnaire: React.FC<IQuestion> = ({
    q_id,
    question,
    handleSurveyQuestionChange,
    questionTypeOptions,
    measureNumOpt,
    updateOption = ()=>{},
    deltOption = ()=>{},
    addOption = ()=>{},
    handleSurveyQuestionChkChange = ()=>{},
    handleSurveyMeasureChange = ()=>{},
    duplicate = ()=>{},
    delt = ()=>{},
    arrayHelpers,
    formik,
}) => {


    return (
    <>
        <div className='surveyBox'>
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
                    question?.options?.map((item, opt_id) => (
                        <div key={item.key} className='field-radiobutton mb10 d-flex-default'>
                            <RadioButton inputId={item.key} name='radios' value={item} 
                                        onChange={(e) => handleSurveyQuestionChange(q_id, 'selectedRadio', e.value)} 
                                        checked={question?.selectedRadio?.key === item.key} disabled={item.key === 'R'} />
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
                    question?.options?.map((item, opt_id) => (
                        <div key={item.key} className='field-checkbox mb10 d-flex-default'>
                            <Checkbox inputId={item.key} name='check' value={item} 
                                        onChange={(e) => handleSurveyQuestionChkChange(e, q_id, question.selectedCheck)} 
                                        checked={question?.selectedCheck?.some((c:any) => c.key === item.key)} disabled={item.key === 'R'} />
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
                    <Dropdown className='mb10' value={question?.measure?.from} options={measureNumOpt} 
                            onChange={(e) => handleSurveyMeasureChange(q_id, 'from', e.target.value)} optionLabel='name' placeholder='전체' />
                    <span className='ml10 mr10'>~</span>
                    <Dropdown className='mb10' value={question?.measure?.to} options={measureNumOpt} 
                            onChange={(e) => handleSurveyMeasureChange(q_id, 'to', e.target.value)} optionLabel='name' placeholder='전체' />
                    {
                        question?.measure?.from !== undefined && question?.measure?.from !== '' &&
                        <div className='d-flex-default'>
                            <span className='mr10 text-bold labelScale'>{question?.measure?.from}</span>
                            <InputText className='mr10' placeholder='라벨을 입력해주세요(예. 아주 안좋음)' 
                                    value={question?.measure?.fromLabel} 
                                    onChange={(e) => handleSurveyMeasureChange(q_id, 'fromLabel', e.target.value)} /> 
                        </div>
                    }
                    {
                        question?.measure?.to !== undefined && question?.measure?.to !== '' &&
                        <div className='d-flex-default mt10'>
                            <span className='mr10 text-bold labelScale' flex-col='1'>{question?.measure?.to}</span>
                            <InputText className='mr10' placeholder='라벨을 입력해주세요(예. 아주 좋음)' 
                                    value={question?.measure?.toLabel} 
                                    onChange={(e) => handleSurveyMeasureChange(q_id, 'toLabel', e.target.value)} /> 
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
                <Button className='ml-auto outline text-bold mr5' onClick={(e) => duplicate(e, question)}>복제</Button>
                <Button className='' onClick={(e) => delt(e, q_id)}>삭제</Button>
            </div>
        </div>
    </>
    )
}

export default Questionnaire;