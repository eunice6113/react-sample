import * as React from 'react';
import { Button, InputText, InputTextarea, confirmDialog } from "primereact";
import { BasePage } from '../../../shared/components/base/BasePage';
import './CLPSNCM00130.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tree } from 'primereact/tree';
import { asignDummyData } from '../../../shared/demo/data/asignDummyData';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import CldFileUpload from "../../../shared/components/CldFileUpload";


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

//설문 관리 상세/수정
const CLPSNCM00130:React.FC = () => {


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

        
    }
    
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
        

    //dialog
    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('edit');
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [position, setPosition] = useState('center');
    const [taskID, setTaskID] = React.useState('');
    const [content, setContent] = React.useState('');

    const onClick = (name:any, position?:any) => {
        setDisplayBasic2(true)

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name:string) => {
        setDisplayBasic2(false)
    }

    const renderFooter = (name:any) => {
        return (
            <div className='buttonGrp'>
                <Button label="취소" onClick={() => onHide(name)} className="outline md " />
                <Button label="확인" onClick={() => onHide(name)} autoFocus className="md" />
            </div>
        );
    }

    
    const tableContent= {
        mode: mode,
        hasRequired: true,
        colgroups: ['150px', '*'],
        rows: [
            {
                cols: [
                    {
                        required: true,
                        key: '제목', 
                        editingValue: <InputText className="" placeholder="업무화면 ID를 입력해주세요." value={taskID} onChange={(e) => setTaskID(e.target.value)} />,

                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '결재요청 내용', 
                        editingValue: <InputTextarea value={content} onChange={(e) => setContent(e.target.value)} rows={5} cols={30} />


                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '결재요청 내용', 
                        editingValue:<CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />



                    },
                ]
            },
            
        ]
    }
    
   
    return(
        <BasePage className='CLPSNCM00130'>
            <Button label="결제요청 팝업" onClick={() => onClick('displayBasic2')} />
                <Dialog header="결제요청 팝업" visible={displayBasic2} style={{ width: '80vw' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>

                <>
                    <div className='popupContents'>
                        <div className='treeContainer '>
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
                                </div>
                            </div>
                        </div>
                        <div className='request'>
                        <table className='cld-table requestTb'>
                                        <tr>
                                            <th>팀원</th>
                                            <th>팀장</th>
                                            <th>부점장</th>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                요청<br />
                                                <span className='color-primary'>허승회</span><br />
                                                과장
                                            </td>
                                            <td>
                                                요청<br />
                                                <span className='color-primary'>허승회</span><br />
                                                과장
                                            </td>
                                            <td>
                                                요청<br />
                                                <span className='color-primary'>허승회</span><br />
                                                과장
                                            </td>
                                        </tr>
                                </table>
                            <ViewTemplate {...tableContent} />
                                


                        </div>
                    </div>
                </>

                </Dialog>

                
       
        </BasePage>)
}
export default CLPSNCM00130;