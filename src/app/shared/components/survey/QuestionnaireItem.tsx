import { Dropdown, InputText, RadioButton, Button, Checkbox, Calendar, InputSwitch } from 'primereact';
import * as React from 'react';
import { SearchParams } from '../../../core/models/search-params';
import { useState } from 'react';
import CldFileUpload from '../CldFileUpload';
import { updateItemInList } from '../../utils/com-utils';
import { IRadio } from '../../../core/models/i-radio';
import { ICheckbox } from '../../../core/models/i-checkbox';
import { IMeasure } from '../../../core/models/i-measure';
import './questionnaire-item.css';

interface IQuestion {
    question: any;
    copy: Function;
    delt: Function;
}

const QuestionnaireItem: React.FC<IQuestion> = ({
    question,
    copy,
    delt,
}) => {

    console.log(question)

    //스위치 
    const [requiredToggle, setRequiredToggle] = useState(false);


    //질문유형 선택
    const [answerType, setAnswerType] = React.useState<any>(null);
    const answerTypeOptions = [
        { name: '단답형', value: 'answer' },
        { name: '장문형', value: 'longForm' },
        { name: '객관식 질문(단수)', value: 'singularQ' },
        { name: '객관식 질문(복수)', value: 'mulipleQ' },
        { name: '척도선택', value: 'measure' },
        { name: '날짜선택', value: 'date' },
    ];

    const handleAnswerTypeChange = (e: { value: any}) => {
        setAnswerType(e.value);
    }


    //단답형 질문 ================================================================================================
    const [answer, setAnswer] = React.useState('');


    //복수형 객관식 ================================================================================================
    //체크박스
    const checkBoxOptions = [
        {name: '', key: 'chk0'}, 
    ];

    //체크박스 전체
    const [checkboxs, setCheckboxs] = React.useState<ICheckbox[]>(checkBoxOptions);

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
            checkboxs.filter((c:ICheckbox) =>
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
    const radioOptions:IRadio[] = [
        {name: '', key: 'radio0'}, 
    ];

    //라디오 전체
    const [radios, setRadios] = React.useState<IRadio[]>(radioOptions);

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
            radios.filter((c:IRadio) =>
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

    const [measure, setMeasure] = React.useState<IMeasure>({
        from: undefined,
        fromLabel: '',
        to: undefined,
        toLabel: '',
    });

    const handleMeasureChange = (prop: keyof IMeasure, value:any) => {
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


    return (
    <div className='surveyBox'>
        <div className='mb10'>
            <div className='d-flex mb10'>
                <InputText className='mr10' placeholder='질문을 입력해주세요.' 
                    value={question.answer} 
                    onChange={(e) => setAnswer(e.target.value)} />
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

        <>
        {/* <div className='mb10'>
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
        </div> */}
        </>
        
        
        <div className='d-flex'>
            <Button onClick={(e) => copy} label='복제' className='ml-auto outline text-bold mr5' />
            <Button onClick={(e) => delt} label='삭제' />
        </div>
    </div>
    )
}

export default QuestionnaireItem;