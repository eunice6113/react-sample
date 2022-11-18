import * as React from 'react';
import { Link } from 'react-router-dom';
import { BasePage } from '../../../shared/components/base/BasePage';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import './CLPMANM00100.css';

//Main
const CLPMANM00100:React.FC = () => {
    const { goPage } = useBasePage()


    const list = [
        {
            title: '클라우드 포털 1',
            author: '김포털'
        },
        {
            title: '클라우드 포털 2',
            author: '김포털'
        },
        {
            title: '클라우드 포털 3',
            author: '김포털'
        },
        {
            title: '클라우드 포털 4',
            author: '김포털'
        },
    ]

    const list2 = [
        {
            title: '클라우드 포털 1',
            type: '소요예산 사전신청',
            author: '김포털'
        },
        {
            title: '클라우드 포털 2',
            type: '소요예산 사전신청',
            author: '김포털'
        },
        {
            title: '클라우드 포털 3',
            type: '소요예산 사전신청',
            author: '김포털'
        },
    ]

    return(
    <BasePage className='CLPMANM00100'>
        <div className='cld-row pt30'>
            <div className='cld-col-3'>
                <div className='card dataCard'>
                    <div className='titleArea'>전체 서비스그룹</div>
                    <div className='data'>
                        총<span className='ml5 num underline'>30</span>개
                    </div>
                </div>
            </div>
            <div className='cld-col-3'>
                <div className='card dataCard'>
                    <div className='titleArea'>서비스그룹 요청</div>
                    <div className='cld-row mb0'>
                        <div className='cld-col-4'>
                            <div className='blueBox'>
                                <p>반려</p>
                                <h2 className='color-red'>1</h2>
                            </div>
                        </div>
                        <div className='cld-col-4'>
                            <div className='blueBox'>
                                <p>승인대기</p>
                                <h2>1</h2>
                            </div>
                        </div>
                        <div className='cld-col-4'>
                            <div className='blueBox'>
                                <p>승인완료</p>
                                <h2>1</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cld-col-3'>
                <div className='card dataCard'>
                    <div className='titleArea'>클라우드 자원 요청</div>
                    <div className='cld-row mb0'>
                        <div className='cld-col-4'>
                            <div className='blueBox'>
                                <p>반려</p>
                                <h2 className='color-red'>1</h2>
                            </div>
                        </div>
                        <div className='cld-col-4'>
                            <div className='blueBox'>
                                <p>승인대기</p>
                                <h2>1</h2>
                            </div>
                        </div>
                        <div className='cld-col-4'>
                            <div className='blueBox'>
                                <p>승인완료</p>
                                <h2>1</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cld-col-3'>
                <div className='card dataCard'>
                    <div className='d-flex-end'>
                        <div className='titleArea'>비용 현황</div>
                        <div className='ml-auto f12'>2022.12.</div>
                    </div>
                    <div className='data'>
                        <div className='d-block'>
                            <div>
                                <span className='ml5 num'>181,548,565</span>원
                            </div>
                            {/* 비용 증가시 */}
                            <p className='color-red text-right mt3'>▲ 148,565원</p>

                            {/* 비용 감소시 */}
                            <p className='color-primary text-right mt3'>▼ 148,565원</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <h1 className='mt30 mb5'>결재 진행 업무 리스트</h1>

        <div className='cld-row'>
            <div className='cld-col-6 cld-col-lg-6 cld-col-xl-4'>
                <div className='card'>
                    <div className='titleArea'>
                        <Link to=''>서비스그룹 신청 건</Link>
                        <i className='pi pi-angle-right'></i>
                        <div className='tag tag-update ml-auto'>
                            <span>미처리 <strong>40</strong>건</span>
                        </div>
                    </div>
                    <div>
                        <table className='listTable mt10'>
                            <colgroup>
                                <col width='80%' />
                                <col width='20%' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>서비스 그룹명</th>
                                    <th>신청자</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item, index) => 
                                        <tr key={`$serv-${index}`}>
                                            <td>{item.title}</td>
                                            <td>{item.author}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='cld-col-6 cld-col-lg-6 cld-col-xl-4'>
                <div className='card'>
                    <div className='titleArea'>
                        <Link to=''>지원 요청 건</Link>
                        <i className='pi pi-angle-right'></i>
                        <div className='tag tag-update ml-auto'>
                            <span>미처리 <strong>40</strong>건</span>
                        </div>
                    </div>
                    <div>
                        <table className='listTable mt10'>
                            <colgroup>
                                <col width='80%' />
                                <col width='20%' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>요청명</th>
                                    <th>요청자</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item, index) => 
                                        <tr key={`$sppr-${index}`}>
                                            <td>{item.title}</td>
                                            <td>{item.author}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
            <div className='cld-col-6 cld-col-lg-6 cld-col-xl-4'>
                <div className='card'>
                    <div className='titleArea'>
                        <Link to=''>서비스 카탈로그 신청 건</Link>
                        <i className='pi pi-angle-right'></i>
                        <div className='tag tag-update ml-auto'>
                            <span>미처리 <strong>40</strong>건</span>
                        </div>
                    </div>
                    <div>
                        <table className='listTable mt10'>
                            <colgroup>
                                <col width='80%' />
                                <col width='20%' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>신청구분</th>
                                    <th>신청자</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item, index) => 
                                        <tr key={`$appl-${index}`}>
                                            <td>{item.title}</td>
                                            <td>{item.author}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='cld-col-6 cld-col-lg-6 cld-col-xl-4'>
                <div className='card'>
                    <div className='titleArea'>
                        <Link to=''>The-Fast Cloud 신청 건</Link>
                        <i className='pi pi-angle-right'></i>
                        <div className='tag tag-update ml-auto'>
                            <span>미처리 <strong>40</strong>건</span>
                        </div>
                    </div>
                    <div>
                        <table className='listTable mt10'>
                            <caption>The-Fast Cloud 신청 건</caption>
                            <colgroup>
                                <col width='50%' />
                                <col width='30%' />
                                <col width='20%' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>사업명</th>
                                    <th>신청유형</th>
                                    <th>신청자</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list2.map((item, index) => 
                                        <tr key={`$biz-${index}`}>
                                            <td>{item.title}</td>
                                            <td className='text-center'>{item.type}</td>
                                            <td>{item.author}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </BasePage>)
}
export default CLPMANM00100;