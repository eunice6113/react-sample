import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { Button, Chart } from 'primereact';
import './CLPSURM93600.css';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import { SurveyResult } from '../../../core/models/survey';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import NoData from '../../../shared/components/ui/NoData';

//설문 결과 
const CLPSURM93600: React.FC = () => {
    const { goPage } = useBasePage()

    const chartBackgroundColors = [
        '#42A5F5',
        '#66BB6A',
        '#FFA726',
        '#26C6DA',
        '#7E57C2'
    ]

    const [chartData] = React.useState({
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: chartBackgroundColors
            }
        ]
    });

    const [basicData] = React.useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    });


    // 척도형 바 차트 옵션
    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    // 객관식 질문(복수) 옵션
    let horizontalOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    // 파이 차트 옵션 (객관식 단수형)
    const [lightOptions] = React.useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    //목록 버튼
    const list = () => {
        goPage('/qsm/list')
    }
    
    //노출구분 라디오
    const expsOpt = [
        {name: '내부', key: 'inside'}, 
        {name: '외부', key: 'outside'},
    ];
    
    const typeOptions = [
        { name: '단답형', value: 'question' },
        { name: '장문형', value: 'longForm' },
        { name: '객관식 질문(단수)', value: 'singularQ' },
        { name: '객관식 질문(복수)', value: 'mulipleQ' },
        { name: '척도선택', value: 'measure' },
        { name: '날짜선택', value: 'date' },
    ];

    //설문 결과 데이터 예시
    let surveyResultInitialize:SurveyResult = {
        //설문 제목
        title: 'SaaS 서비스 이용행태 조사',       

        //노출구분 라디오
        type: {name: '내부', key: 'inside'},  

        //설문기간
        daterange: {                         
            fromDate: new Date(),
            toDate: new Date()
        },

        //설문 질문지들
        answersit: [                        
            {
                question: 'SaaS 서비스의 장점은 무엇인가요?',               
                type: 'question',  //질문유형 단답형
                answers: [
                    { content: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!' },
                    { content: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!' },
                    { content: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!' },
                    { content: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!' },
                ]
            },
            {
                question: 'SaaS 서비스의 장점은 무엇인가요?', //질문 입력 인풋
                type: 'longForm',           //장문형
                answers: [
                    { content: '장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. ' },
                    { content: '장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. ' },
                    { content: '장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. ' },
                    { content: '장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. ' },
                    { content: '장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. ' },
                    { content: '장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. 장문형 응답내용입니다. ' },
                ]
            },
            {
                question: 'SaaS 서비스의 장점은 무엇인가요?',  //질문 입력 인풋
                type: 'singularQ',              //객관식 질문(단수)
                answers: [
                    {
                        labels: ['A', 'B', 'C'],
                        datasets: [
                            {
                                data: [300, 50, 100],
                                backgroundColor: chartBackgroundColors
                            }
                        ]
                    }
                ]
            },
            {
                question: 'SaaS 서비스의 장점은 무엇인가요?',  //질문 입력 인풋
                type: 'mulipleQ',               //객관식 질문(복수)
                answers: [
                    {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'My First dataset',
                                backgroundColor: '#42A5F5',
                                data: [65, 59, 80, 81, 56, 55, 40]
                            },
                            {
                                label: 'My Second dataset',
                                backgroundColor: '#FFA726',
                                data: [28, 48, 40, 19, 86, 27, 90]
                            }
                        ]
                    }
                ]
            },
            {
                question: 'SaaS 서비스의 장점은 무엇인가요?',  //질문 입력 인풋
                type: 'measure',                //척도형
                answers: [
                    {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'My First dataset',
                                backgroundColor: '#42A5F5',
                                data: [65, 59, 80, 81, 56, 55, 40]
                            },
                            {
                                label: 'My Second dataset',
                                backgroundColor: '#FFA726',
                                data: [28, 48, 40, 19, 86, 27, 90]
                            }
                        ]
                    }
                ]
            },
            {
                question: 'SaaS 서비스의 장점은 무엇인가요?',  //질문
                type: 'date',                   //날짜형
                answers: [
                    {
                        date: '2022년 12월',
                        vote: [
                            { date: '23일', pick: 8 },
                            { date: '21일', pick: 2 },
                            { date: '20일', pick: 0 },
                        ]
                    },
                    {
                        date: '2022년 11월',
                        vote: [
                            { date: '23일', pick: 88 },
                            { date: '20일', pick: 0 },
                        ]
                    },
                ]
            },
        ]
    }

    //설문지 전체 데이터
    const [surveyResult, setSurveyResult] = React.useState<SurveyResult>(surveyResultInitialize)


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
    <BasePage className='CLPSURM93600'>

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
                            <td colSpan={3}>{surveyResult.title}</td>
                        </tr>
                        <tr>
                            <th>설문기간</th>
                            <td>
                                {/* <>{surveyResult?.daterange?.fromDate} ~ {surveyResult?.daterange?.toDate}</> */}
                            </td>
                            <th>노출구분</th>
                            <td>{surveyResult?.type?.name}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                <div className='survey'>
                                {
                                    surveyResult.answersit.map((answer:any, answer_id:number) => (

                                    <div className='surveyBox' key={`as-${answer_id}`}>
                                        <h3 className='mb10'>{answer_id + 1}. {answer.question}</h3>
                                        {
                                            answer.type === 'question' ?
                                            <>
                                                <div className='surveyInfo'>응답 <span className='color-blue'>{answer.answers.length}</span>개<span className='ml10 mr10'>|</span>단문형</div>
                                                <div className='mt10'>
                                                    {
                                                        answer.answers.map((item:any, i:number) => (
                                                            <div key={`aitem-${i}`} className='surveyAnswerBox'>{item.content}</div>    
                                                        ))
                                                    }
                                                </div>
                                            </>
                                            :
                                            answer.type === 'longForm' ?
                                            <>
                                                <div className='surveyInfo'>응답 <span className='color-blue'>{answer.answers.length}</span>개<span className='ml10 mr10'>|</span>장문형</div>
                                                <div className='mt10'>
                                                    {
                                                        answer.answers.map((item:any, i:number) => (
                                                            <div key={`aitem-${i}`} className='surveyAnswerBox'>{item.content}</div>    
                                                        ))
                                                    }
                                                </div>
                                            </>
                                            :
                                            answer.type === 'singularQ' ?
                                            <>
                                                <div className='surveyInfo'>응답 <span className='color-blue'>{answer.answers.length}</span>개<span className='ml10 mr10'>|</span>객관식 질문(단수)</div>
                                                <div className='mt10'>
                                                    <div className='d-flex-default w-100'>
                                                        <Chart type='pie' data={answer.answers[0]} options={lightOptions} className='pieChart' />
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            answer.type === 'mulipleQ' ?
                                            <>
                                                <div className='surveyInfo'>응답 <span className='color-blue'>{answer.answers.length}</span>개<span className='ml10 mr10'>|</span>객관식 질문(복수)</div>
                                                <div className='mt10'>
                                                    <div className='d-flex-default w-100'>
                                                        <Chart type='bar' data={answer.answers[0]} options={horizontalOptions} className='horBarChart' />
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            answer.type === 'measure' ?
                                            <>
                                                <div className='surveyInfo'>응답 <span className='color-blue'>{answer.answers.length}</span>개<span className='ml10 mr10'>|</span>척도선택</div>
                                                <div className='mt10'>
                                                    <div className='d-flex-default w-100'>
                                                        <Chart type='bar' data={answer.answers[0]} options={basicOptions} className='barChart' />
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            answer.type === 'date' ?
                                            <>
                                                <div className='surveyInfo'>응답 <span className='color-blue'>{answer.answers.length}</span>개<span className='ml10 mr10'>|</span>날짜선택</div>
                                                <div className='mt10'>
                                                    {
                                                        answer.answers.map((item:any, mid:number) => (
                                                            <div key={`ans-${mid}`} className='voteDate'>
                                                                <span>{item.date}</span><span className='ml20 mr20'>|</span>
                                                                {
                                                                    item.vote.map(( info:any, sid:number ) => (
                                                                        <Button key={`vote-${sid}`} type='button' className={`p-button-rounded dateLabel ${sid > 0 && 'subDate'}`} label={info.date} badge={info.pick} />
                                                                    ))
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </>
                                            :
                                            <>
                                            <NoData message='데이터가 없습니다' />
                                            </>
                                        }
                                    </div>
                                    ))
                                }
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    

                </table>
            </div>
        </div>
        

        {/* 버튼영역 */}
        <div className='btn-container justify-center'>
            <Button className='lg' onClick={list}>목록</Button>
        </div>
    </BasePage>)
}
export default CLPSURM93600;

