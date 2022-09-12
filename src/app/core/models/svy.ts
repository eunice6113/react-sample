/********************************************
 공통
/********************************************/

import internal from "stream";

//설문지 상세항목
export type svyItm = {
    svyItmDtId:string,    //설문지 상세 항목 ID
    svyItmDtNm?:string,   //설문지 상세 내용
    weightValue?: number  //가중치값(응답내용)
}

//설문지 상세항목 목록
export type itmList = {
    svyItmId: string,    //설문지 항목명
    svyItmNm: string,    //설문지 항목명
    svyItmList: svyItm[] //설문상세항목목록
}


export let svyId: string;   //설문지 ID
export let userId: string;  //사용자 ID
export let bzn: string;     //사업자번호




/********************************************
 1. 설문지 항목 조회
    URI : /svy/SvyItemList.do
/********************************************/

//response

export type svyDataItems = {
    svyId: string,
    itmList: itmList[],
    success: boolean,
    cmmError: boolean,
    aeRoValue?: number,
    acCeValue?: number
}

export type svyData = {
    svyData: svyDataItems
}

export type data = {
    data: svyData
}

export type SvyInitialType = {
    loading: boolean,
    error: boolean,
    sitems: data,
}




/********************************************
 2. 설문지 응답 저장
    URI : /svy/SvyRepSave.do
/********************************************/

//request

export type svyItemListItm = {
    svyItmDtId: string, //설문지 상세 항목 ID
    weightValue: string //가중치값(응답내용)
}

export type svyItemList = {
    svyItmId: string,
    svyItemList: svyItemListItm[]
}

export type reqSaveModel = {
    svyId: string,  //설문지 ID
    userId: string, //사용자 ID
    bzn: string,    //사업자번호
    itemList: svyItemList[]
}

//response
export type resSaveModel = {
    loading: boolean,
    error: boolean,
    data: any,      //test
    svyId: string,  //설문지 ID
    userId: string, //사용자 ID
    bzn: string,    //사업자번호
    aeRoValue: number,
    acCeValue: number,
}





/********************************************
 3. 설문지 응답 이력 조회
    URI : /svy/SvyRepHisList.do
/********************************************/

//request
export type svyRepHis = {
    svyId: string,  //설문지 ID
    userId: string, //사용자 ID
    // bzn: string,    //사업자번호
    // svyRepFromYmd: string, //설문응답 시작년월일, 없는 경우 7일 기본
    // svyRepToYmd: string //설문응답 종료년월일, 없는 경우 7일 기본
}

//response
export type svyRepHisRes = {
    svyId: string,  //설문지 ID
    aeRoValue: number,
    acCeValue: number,
    itmList: itmList[], //설문항목목록
}

export type svyRepHisResp = {
    loading: boolean,
    error: boolean,
    data: any,
}


/********************************************
 4. 기업 정보 List (기 구축)
    URI : /fin/CoporationList.do
/********************************************/


export type coporation = {
    userId: string, //사용자 ID
    bzn: string,    //사업자번호
    name: string,   //사업자명
}

export type copInitialType = {
    loading: boolean,
    error: boolean,
    coporation: coporation
}

