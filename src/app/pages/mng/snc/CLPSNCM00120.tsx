import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { Dropdown, Editor, FileUpload, InputText, RadioButton } from 'primereact';
import './CLPSNCM00120.css';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import { confirmDialog, InputNumber } from 'primereact';
import { SearchParams } from '../../../core/models/search-params';
import { DataTable } from 'primereact/datatable';
import { approvalDummyData } from '../../../shared/demo/data/approvalDummyData';
import { asignDummyData } from '../../../shared/demo/data/asignDummyData';
import { paginator } from '../../../shared/utils/table-paginator';
import { useBasePage } from '../../../shared/hooks/base-page.hook';
import { Column } from 'primereact/column';

const nodeDemo = [
    {
        key: '0',
        department: '기업고객그룹',
        // name: '신재문',
        children: [{
            key: '0-0',
            department: 'IT그룹',
            children: [
                { key: '0-0-0', department: 'IT그룹', name: '신재문'}, 
                { key: '0-0-1', department: 'IT그룹', name: '신재문'}]
        },
        {
            key: '0-1',
            department: '자산관리그룹',
            // name: '신재문',
            children: [{ key: '0-1-0', department: '자산관리그룹', name: '신재문'}]
        }]
    },
    {
        key: '1',
        department: '경영지원그룹',
        // name: '신재문',
        children: [
            { key: '1-0', department: '경영지원그룹', name: '신재문'},
            { key: '1-1', department: '경영지원그룹', name: '신재문'}],
    },
]
 
interface AutMenuNode {
    key: string;
    department: string;
    name?: string;
    children?: AutMenuNode[];
}

//결제업무 관리
const CLPSNCM00120: React.FC = () => {
    const { goPage, goBack } = useBasePage()
    const [title, setTitle] = React.useState('');
    const [code, setCode] = React.useState('');
    const [taskID, setTaskID] = React.useState('');
    const [program, setProgram] = React.useState('');
    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('edit');
    
    const newBtn =() => {}
    const saveBtn =() => {}
    const removeBtn =() => {}
    const registerBtn =() => {}
    
    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
    });
     //select option dummy data
     const options1 = [
        { name: '전체', code: 'NY' },
        { name: '결제구분코드', code: 'RM' },
        { name: '업무명', code: 'LDN' },
    ];
    
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    //table page length
    let pages = 5;

    //table
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(5);

    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
    }

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    const state = [
        {name: '사용', key: 'Y'}, 
        {name: '미사용', key: 'N'}];
    const [selectedState, setSelectedState] = React.useState(state[1]);
    
    //결재구분 리스트
    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'type',
            header: '결재구분',
            sortable: false,
        },
        {
            field: 'subject',
            header: '결재업무명',
            sortable: false,
        },
        {
            field: 'state',
            header: '상태',
            sortable: false,
        },
    ]
    //결재상세
    const tableContent= {
        mode: mode,
        hasRequired: true,
        colgroups: ['150px', '*'],
        rows: [
            {
                cols: [
                    {
                        required: true,
                        key: '결재업무', 
                        editingValue: 
                        <div className='taskInpWrap'>
                            <InputText className="taskCode" placeholder="00" value={code} onChange={(e) => setCode(e.target.value)} />
                            <InputText className="taskName" placeholder="결재업무명을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '상태', 
                        editingValue: (
                            state.map((state) => {
                            return (
                                <span key={state.key} className="field-radiobutton mr20">
                                    <RadioButton inputId={state.key} name="state" value={state} onChange={(e) => setSelectedState(e.value)} checked={selectedState.key === state.key} disabled={state.key === 'R'} />
                                    <label className='ml5' htmlFor={state.key}>{state.name}</label>
                                </span>
                        )}))
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '업무화면', 
                        editingValue: <InputText className="" placeholder="업무화면 ID를 입력해주세요." value={taskID} onChange={(e) => setTaskID(e.target.value)} />,

                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '승인/반려 프로그램', 
                        editingValue: <InputText className="" placeholder="프로그램명을 입력해주세요." value={program} onChange={(e) => setProgram(e.target.value)} />,

                    },
                ]
            },
        ]
    }
    
    //기본 트리 노드 데이터
    const [nodes, setNodes] = React.useState<any>([]);

    //전체열기, 전체닫기
    const [expandedKeys, setExpandedKeys] = React.useState({});
    const [open, setOpen] = React.useState(true);

    //선택한 노드의 키 값
    const [selectedKey, setSelectedKey] = React.useState(null);

    //선택한 노드
    const [selectedNode, setSelectedNode] = React.useState<AutMenuNode>({
        key: '0',
        department: '',
        name: '',
        children: [],
    });

    //검색
    const [search, setSearch] = React.useState<string>('');

    //초기화, 트리 노드 데이터 불러와서 읽힘
    React.useEffect(() => {
        setNodes(nodeDemo);
    }, []);

    //왼쪽 선택한 트리의 key 값을 오른쪽 메뉴정보 영역에 메뉴 ID 값에 넣어준다
    React.useEffect(() => {
        console.log('selectedKey =>', selectedKey)

    }, [selectedKey]);

    //노드 선택시
    const handleNodeSelect = (e:any) => {
        console.log('handleNodeSelect =>', e.node, e)
        console.log('handleNodeSelect children =>', e.children)

        setSelectedNode( e.node )
    }

    const handleNodeUnselect = (node:any) => {
        console.log('handleNodeUnselect =>', node)
    }

    //전체열기
    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
        setOpen(!open);
    }

    //전체닫기
    const collapseAll = () => {
        setExpandedKeys({});
        setOpen(!open);
    }

    //노드 단건 열기
    const expandNode = (node:any, _expandedKeys:any) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }

    //각 트리 노드 디자인
    const nodeTemplate = (node:any, options:any) => {

        {/* 트리 이름 - children 이 있으면 그룹 이름, 없으면 개인 이름을 뿌려준다 */}
        let label = <div className='treeNode'>
            <div className='nodeLabel' onClick={viewNode}>{
                node?.children?.length > 0 ? node.department : node.name
            }</div>
        </div>;

        return (
            <span className={options.className}>
                {label}
            </span>
        )
    }

    //선택한 메뉴 조회
    const viewNode = ( node:any ) => {
        console.log('viewNode', node.key as number, node)

    }

    //검색
    const handleSearch = () => {

        confirmDialog({
            message: '검색결과가 없습니다.',
            acceptLabel: '확인',
            className: 'noHeader oneButton',
            accept: () => {

            },
        })
    }

    //결재구분 리스트
    const headerTemplateAsign = [
        {
            field: 'no',
            header: '',
            sortable: false,
        },
        {
            field: 'department',
            header: '부서',
            sortable: false,
        },
        {
            field: 'name',
            header: '성명',
            sortable: false,
        },
        {
            field: 'position',
            header: '직급',
            sortable: false,
        },
        {
            field: 'delt',
            header: '직급',
            sortable: false,
        },
    ]
    

    
    return(
    <BasePage className='CLPSNCM00120'>
        {/* 검색영역 */}
        <div className='searchBar'>
            <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                optionLabel='name' placeholder='전체' />

            <InputText className='searchTxt' placeholder='업무구분코드, 업무명을 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

            <Button label='조회' />
        </div>
        <div className='toolbar mb10'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
        </div>
    <div className='approvalTable'>
        <DataTable value={approvalDummyData} paginator paginatorTemplate={paginator} 
            className="snc"
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} ></Column>
            ))}
        </DataTable>

        {/* 결재상세 */}
        <div className='viewTempWrap'>
            <ViewTemplate {...tableContent} />
            <div className='btn-container cld-row justify-center' >
                <Button className='lg ' onClick={newBtn}>신규</Button>
                <Button className='lg ml5' onClick={saveBtn}>저장</Button>
                <Button className='lg outline ml5' onClick={removeBtn}>삭제</Button>
            </div>
        </div>
        
    </div>
        
    <div>
    <div className='treeContainer mt30'>
            <div className='treeLeftContainer mr10'>
               
                <div className='box treeBox'>

                    <div className='d-flex'>
                        <InputText placeholder='조직명, 성명으로 검색하세요.' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <Button type='button' className='md ml10' label='조회' onClick={handleSearch}  />
                    </div>
                    <hr className='innerLine'/>

                    <div className='d-flex'>
                        <Button type='button' className='grayBtn mb10 ml-auto' label={open ? '전체열기':'전체닫기'} onClick={open ? expandAll : collapseAll}  />
                    </div>
                    <Tree 
                        value={nodes} 
                        expandedKeys={expandedKeys} 
                        onToggle={(e:any) => setExpandedKeys(e.value)} 
                        nodeTemplate={nodeTemplate}
                        selectionMode='single' 
                        selectionKeys={selectedKey} 
                        onSelectionChange={(e:any) => setSelectedKey(e.value)}
                        onSelect={handleNodeSelect} 
                        onUnselect={handleNodeUnselect}
                    />
                </div>
            </div>
            <div className='treeRightContainer ml10'>
                <h5 className='mb10'>기본 결재선 지정</h5>
                <DataTable value={asignDummyData} 
                    className="asign"
                    onRowClick={(e) => goDetail(e)}
                    first={first} rows={rows} 
                    onPage={onCustomPage} responsiveLayout='scroll'>
                    {headerTemplateAsign.map((col, index) => (
                        <Column key={col.header} field={col.field} header={col.header} ></Column>
                    ))}
                </DataTable>
                <div className='justify-center d-flex mt20'>
                    <Button className='lg ml5' onClick={registerBtn}>결재선등록</Button>
                </div>
            </div>
        </div>
    </div>

    </BasePage>)
}
export default CLPSNCM00120;
