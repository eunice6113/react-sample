import { Dropdown, Editor, FileUpload, InputText, RadioButton, Button, Checkbox, Calendar, InputSwitch } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import './CLPSURM93430.css';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import { SearchParams } from "../../../core/models/search-params";
import TextEditor from "../../../shared/components/ui/text-editor/TextEditor";
import { useState } from 'react';
import CldFileUpload from "../../../shared/components/CldFileUpload";


interface IProps {
    children: React.ReactNode;
}
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

    //복제 버튼
    const copy = () => {
        console.log('복제')
    }
    //radio 버튼 삭제
    const delt = () => {
        console.log('삭제')
    }

    //결과보기 버튼
    const result =() => {
        goPage('/qsm/register')
    }

    //라디오
    const typeCategories = [
        {name: '내부', key: 'inside'}, 
        {name: '외부', key: 'outside'},
    ];
    const [typeCategory, setTypeCategory] = React.useState(typeCategories[1]);

    //텍스트 에디터
    const [content, setContent] = React.useState('');

    //스위치 
    const [checked1, setChecked1] = useState(false);

    //파일업로드
    const [totalSize, setTotalSize] = React.useState(0);

    const onSelect = (e:any) => {
        let _totalSize = totalSize;
        e.files.forEach((file:any) => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);
    }

    const onUpload = (e:any) => {
        let _totalSize = 0;
        e.files.forEach((file:any) => {
            _totalSize += (file.size || 0);
        });

        setTotalSize(_totalSize);
        
    }

    const onFileRemove = (file:any, callback:any) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onClear = () => {
        setTotalSize(0);
    }
    //질문유형 선택
    const [select1, setSelect1] = React.useState<any>(null);
    const options1 = [
        { name: '단답형', code: 'shortForm' },
        { name: '장문형', code: 'longForm' },
        { name: '객관식 질문(단수)', code: 'singularQ' },
        { name: '객관식 질문(복수)', code: 'mulipleQ' },
        { name: '척도선택', code: 'RM' },
        { name: '날짜선택', code: 'RM' },
    ];
    const handleChange1 = (e: { value: any}) => {
        setSelect1(e.value);
    }

    //척도선택
    const [selectNum1, setSelectNum1] = React.useState<any>(null);
    const selectNumOpt = [
        { name: '1', code: 'num1' },
        { name: '2', code: 'num2' },
        { name: '3', code: 'num3' },
        { name: '4', code: 'num4' },
        { name: '5', code: 'num5' },
        { name: '6', code: 'num6' },
        { name: '7', code: 'num7' },
        { name: '8', code: 'num8' },
        { name: '9', code: 'num9' },
        { name: '10', code: 'num10' },
    ];
    const handleChange2 = (e: { value: any}) => {
        setSelectNum1(e.value);
    }
    const [selectNum2, setSelectNum2] = React.useState<any>(null);
    const selectNumOpt2 = [
        { name: '1', code: 'num1' },
        { name: '2', code: 'num2' },
        { name: '3', code: 'num3' },
        { name: '4', code: 'num4' },
        { name: '5', code: 'num5' },
        { name: '6', code: 'num6' },
        { name: '7', code: 'num7' },
        { name: '8', code: 'num8' },
        { name: '9', code: 'num9' },
        { name: '10', code: 'num10' },
    ];
    const handleChange3 = (e: { value: any}) => {
        setSelectNum2(e.value);
    }
    //제목 input
    const [title, setTitle] = React.useState('');

    //단답형 질문 input
    const [shortForm, setShortForm] = React.useState('');

    //장문형 질문 input
    const [longForm, setLongForm] = React.useState('');

    //복수형 객관식 checkBoxk input
    const [checkBoxInput, setCheckBoxInput] = React.useState('');

    //단수형 객관식 radioInput
    const [radioInput, setRadioInput] = React.useState('');


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

    //라디오
    const radioCategories = [
        {name: '옵션1', key: 'option1'}, 
        {name: '옵션2', key: 'option2'},
        {name: '옵션3', key: 'option3'},
        {name: '옵션4', key: 'option4'}];
    const [selectedCategory, setSelectedCategory] = React.useState(radioCategories[1]);

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
                            <div><InputText placeholder="설문 제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} /></div>
                            </td>
                           
                        </tr>
                        <tr>
                            <th>설문기간 <span className='required'>*</span></th>
                            <td>
                                <div className='d-flex'>
                                <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                                <span className='mt5 mr5 ml5'>~</span>
                                <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
                                </div>
                            </td>
                            <th>노출구분</th>
                            <td>
                                {
                                    typeCategories.map((category) => {
                                        return (
                                            <span key={category.key} className="field-radiobutton mr20">
                                                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setTypeCategory(e.value)} checked={typeCategory.key === category.key} disabled={category.key === 'R'} />
                                                <label htmlFor={category.key}>{category.name}</label>
                                            </span>
                                    )})
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
                                <div className='survey'>
                                    <div className='surveyBox'>{/* 단답형 */}
                                        <div className='mb10'>
                                            <div className='d-flex mb10'>
                                                <InputText className="mr10" placeholder="(단답형) 질문을 입력해주세요." value={shortForm} onChange={(e) => setShortForm(e.target.value)} />
                                                <div className='d-flex-default'>
                                                    <span className='swichText'>필수</span>
                                                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                                                </div>
                                            </div>
                                            
                                            <Dropdown className='mb10' value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                                           
                                            <CldFileUpload 
                                            name='demo[]'
                                            url='https://primefaces.org/primereact/showcase/upload.php'
                                            onSelect={onSelect}
                                            onUpload={onUpload} 
                                            onFileRemove={onFileRemove}
                                            onError={onClear} 
                                            onClear={onClear}
                                            multiple={true}
                                            accept='image/*'
                                            maxFileSize={1000000}
                                            totalSize={totalSize}
                                        />
                                        </div>
                                        
                                        <div className='d-flex'>
                                            <Button className='ml-auto outline text-bold mr5' onClick={copy}>복제</Button>
                                            <Button className='' onClick={copy}>삭제</Button>
                                        </div>
                                    </div>

                                    <div className='surveyBox'>{/* 장문형 */}
                                        <div className='mb10'>
                                            <div className='d-flex mb10'>
                                                <InputText className="mr10" placeholder="(장문형) 질문을 입력해주세요." value={longForm} onChange={(e) => setLongForm(e.target.value)} />
                                                <div className='d-flex-default'>
                                                    <span className='swichText'>필수</span>
                                                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                                                </div>
                                            </div>
                                            
                                            <Dropdown className='mb10' value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                                           
                                            <CldFileUpload 
                                            name='demo[]'
                                            url='https://primefaces.org/primereact/showcase/upload.php'
                                            onSelect={onSelect}
                                            onUpload={onUpload} 
                                            onFileRemove={onFileRemove}
                                            onError={onClear} 
                                            onClear={onClear}
                                            multiple={true}
                                            accept='image/*'
                                            maxFileSize={1000000}
                                            totalSize={totalSize}
                                            />
                                        </div>
                                        
                                        <div className='d-flex'>
                                            <Button className='ml-auto outline text-bold mr5' onClick={copy}>복제</Button>
                                            <Button className='' onClick={copy}>삭제</Button>
                                        </div>
                                    </div>
                                    <div className='surveyBox'>{/* 객관식 질문(단수) */}
                                        <div className='mb10'>
                                            <div className='d-flex mb10'>
                                                <InputText className="mr10" placeholder="질문을 입력해주세요." value={longForm} onChange={(e) => setLongForm(e.target.value)} />
                                                <div className='d-flex-default'>
                                                    <span className='swichText'>필수</span>
                                                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                                                </div>
                                            </div>
                                            
                                            <Dropdown className='mb10' value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                                           
                                            <CldFileUpload 
                                            name='demo[]'
                                            url='https://primefaces.org/primereact/showcase/upload.php'
                                            onSelect={onSelect}
                                            onUpload={onUpload} 
                                            onFileRemove={onFileRemove}
                                            onError={onClear} 
                                            onClear={onClear}
                                            multiple={true}
                                            accept='image/*'
                                            maxFileSize={1000000}
                                            totalSize={totalSize}
                                            />
                                        </div>
                                        <div>
                                        {
                                            radioCategories.map((category) => {
                                                return (
                                                    <div key={category.key} className="field-radiobutton mb10 d-flex-default">
                                                        <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                                        <InputText className="mr10 ml10" placeholder="옵션" value={radioInput} onChange={(e) => setRadioInput(e.target.value)} />
                                                         <Button className='iconBtn p-button-text mr10' icon='pi pi-times' onClick={delt} />
                                                    </div>
                                            )})
                                        }
                                        </div>
                                        <div className='d-flex mt10'>
                                            <Button className='ml-auto outline text-bold mr5' onClick={copy}>복제</Button>
                                            <Button className='' onClick={copy}>삭제</Button>
                                        </div>
                                    </div>
                                    <div className='surveyBox'>{/* 객관식 질문(복수) */}
                                        <div className='mb10'>
                                            <div className='d-flex mb10'>
                                                <InputText className="mr10" placeholder="질문을 입력해주세요." value={longForm} onChange={(e) => setLongForm(e.target.value)} />
                                                <div className='d-flex-default'>
                                                    <span className='swichText'>필수</span>
                                                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                                                </div>
                                            </div>
                                            
                                            <Dropdown className='mb10' value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                                           
                                            <CldFileUpload 
                                            name='demo[]'
                                            url='https://primefaces.org/primereact/showcase/upload.php'
                                            onSelect={onSelect}
                                            onUpload={onUpload} 
                                            onFileRemove={onFileRemove}
                                            onError={onClear} 
                                            onClear={onClear}
                                            multiple={true}
                                            accept='image/*'
                                            maxFileSize={1000000}
                                            totalSize={totalSize}
                                            />
                                        </div>
                                        <div>
                                            {
                                                checkBoxCategories.map((category) => {
                                                    return (
                                                        <div key={category.key} className="field-checkbox mb10 d-flex-default">
                                                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} 
                                                            checked={selectedCategories.some((item:any) => item.key === category.key)} disabled={category.key === 'R'} />
                                                            <InputText className="mr10 ml10" placeholder="옵션" value={checkBoxInput} onChange={(e) => setCheckBoxInput(e.target.value)} />
                                                            <Button className='iconBtn p-button-text mr10' icon='pi pi-times' onClick={delt} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='d-flex mt10'>
                                            <Button className='ml-auto outline text-bold mr5' onClick={copy}>복제</Button>
                                            <Button className='' onClick={copy}>삭제</Button>
                                        </div>
                                    </div>
                                    <div className='surveyBox'>{/* 척도선택 */}
                                        <div className='mb10'>
                                            <div className='d-flex mb10'>
                                                <InputText className="mr10" placeholder="질문을 입력해주세요." value={longForm} onChange={(e) => setLongForm(e.target.value)} />
                                                <div className='d-flex-default'>
                                                    <span className='swichText'>필수</span>
                                                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                                                </div>
                                            </div>
                                            
                                            <Dropdown className='mb10' value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                                           
                                            <CldFileUpload 
                                            name='demo[]'
                                            url='https://primefaces.org/primereact/showcase/upload.php'
                                            onSelect={onSelect}
                                            onUpload={onUpload} 
                                            onFileRemove={onFileRemove}
                                            onError={onClear} 
                                            onClear={onClear}
                                            multiple={true}
                                            accept='image/*'
                                            maxFileSize={1000000}
                                            totalSize={totalSize}
                                            />
                                        </div>
                                        <div>
                                            <Dropdown className='mb10' value={selectNum1} options={selectNumOpt} onChange={handleChange2} optionLabel="name" placeholder="전체" />
                                            <span className='ml10 mr10'>~</span>
                                            <Dropdown className='mb10' value={selectNum2} options={selectNumOpt2} onChange={handleChange3} optionLabel="name" placeholder="전체" />
                                            <div className='d-flex-default'>
                                                <span className='mr10 text-bold labelScale'>1</span>
                                                <InputText className="mr10" placeholder="라벨을 입력해주세요(예. 아주 안좋음)" value={longForm} onChange={(e) => setLongForm(e.target.value)} /> 
                                            </div>
                                            <div className='d-flex-default mt10'>
                                                <span className='mr10 text-bold labelScale' flex-col='1'>10</span>
                                                <InputText className="mr10" placeholder="라벨을 입력해주세요(예. 아주 좋음)" value={longForm} onChange={(e) => setLongForm(e.target.value)} /> 
                                            </div>

                                        </div>
                                        <div className='d-flex mt10'>
                                            <Button className='ml-auto outline text-bold mr5' onClick={copy}>복제</Button>
                                            <Button className='' onClick={copy}>삭제</Button>
                                        </div>
                                    </div>
                                    
                                    <div className='surveyBox'>{/* 날짜 선택 */}
                                    <div className='mb10'>
                                            <div className='d-flex mb10'>
                                                <InputText className="mr10" placeholder="질문을 입력해주세요." value={longForm} onChange={(e) => setLongForm(e.target.value)} />
                                                <div className='d-flex-default'>
                                                    <span className='swichText'>필수</span>
                                                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                                                </div>
                                            </div>
                                            
                                            <Dropdown className='mb10' value={select1} options={options1} onChange={handleChange1} optionLabel="name" placeholder="전체" />
                                           
                                            <CldFileUpload 
                                            name='demo[]'
                                            url='https://primefaces.org/primereact/showcase/upload.php'
                                            onSelect={onSelect}
                                            onUpload={onUpload} 
                                            onFileRemove={onFileRemove}
                                            onError={onClear} 
                                            onClear={onClear}
                                            multiple={true}
                                            accept='image/*'
                                            maxFileSize={1000000}
                                            totalSize={totalSize}
                                            />
                                        </div>
                                        <div className=''>
                                            <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                                        </div>
                                        <div className='d-flex mt10'>
                                            <Button className='ml-auto outline text-bold mr5' onClick={copy}>복제</Button>
                                            <Button className='' onClick={copy}>삭제</Button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-center'>
                                        <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' onClick={delt} />
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
export default CLPSURM93430;