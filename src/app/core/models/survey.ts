//설문 > 척도형
export interface QMeasure {
    from: any;
    to: any;
    fromLabel: string;
    toLabel: string;
}

//설문 > 설문기간
export interface Qdaterange {
    fromDate: Date;
    toDate: Date;
}

//설문 > 라디오, 체크박스 타입
export interface Qoption {
    name:string;
    key:any;
}

//설문 > 문항 타입
export interface Question {
    question: string; //질문 입력 인풋
    requiredToggle: boolean; //필수 여부 토글 
    questionType: string; //질문유형 선택

    //객관식 질문 - 단수형, 복수형 선택시
    selectedOption?: any[]; //선택한 것 - 등록시는 비어도 됨. 라디오는 1개만, 체크는 여러개 key 를 가질 수 있다
    options: Qoption[];

    //날짜형
    date?: Qdaterange;

    //척도형
    measure?: QMeasure;
}

//설문 전체
export interface Survey {
    title: string; //설문 제목
    type: Qoption; //노출구분 라디오
    daterange: Qdaterange; //설문기간
    content: string; //설문 내용
    questions: Question[]
}



